import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'
import type { Field } from 'payload'

/**
 * Generic migration: moves any top-level localized field from the main
 * collection table into the corresponding _locales table with locale = 'en'.
 *
 * Works for ALL collections in payload.config — no hardcoding needed.
 * Safe to re-run (idempotent via ADD COLUMN IF NOT EXISTS + NULL checks).
 *
 * Run this BEFORE `pnpm payload db:push` so data is preserved when
 * the old non-localized columns are dropped.
 */

// Field types that map to a single DB column (skip blocks, arrays, relationships)
const SIMPLE_FIELD_TYPES = new Set([
  'text',
  'textarea',
  'number',
  'date',
  'email',
  'code',
  'json',
  'select',
  'radio',
  'checkbox',
  'richText',
])

function collectLocalizedFields(fields: Field[]): string[] {
  const names: string[] = []
  for (const field of fields) {
    if (!('name' in field)) continue
    if ('localized' in field && field.localized && SIMPLE_FIELD_TYPES.has(field.type)) {
      names.push(field.name)
    }
  }
  return names
}

function toTableName(slug: string) {
  return slug.replace(/-/g, '_')
}

async function rowExists(db: MigrateUpArgs['db'], table: string): Promise<boolean> {
  const res = await db.execute(
    sql.raw(`SELECT 1 FROM information_schema.tables
     WHERE table_schema = 'public' AND table_name = '${table}' LIMIT 1`),
  )
  return (res as unknown as { rows: unknown[] }).rows.length > 0
}

async function colExists(
  db: MigrateUpArgs['db'],
  table: string,
  col: string,
): Promise<boolean> {
  const res = await db.execute(
    sql.raw(`SELECT 1 FROM information_schema.columns
     WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${col}' LIMIT 1`),
  )
  return (res as unknown as { rows: unknown[] }).rows.length > 0
}

async function getColType(
  db: MigrateUpArgs['db'],
  table: string,
  col: string,
): Promise<string> {
  const res = await db.execute(
    sql.raw(`SELECT data_type, character_maximum_length, udt_name
     FROM information_schema.columns
     WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${col}' LIMIT 1`),
  )
  const rows = (res as unknown as { rows: Record<string, unknown>[] }).rows
  if (rows.length === 0) return 'text'
  const { data_type, character_maximum_length, udt_name } = rows[0]
  if (data_type === 'character varying' && character_maximum_length) {
    return `varchar(${character_maximum_length})`
  }
  if (data_type === 'USER-DEFINED') {
    return `"${udt_name}"`
  }
  return data_type as string
}

async function migrateTable(
  db: MigrateUpArgs['db'],
  sourceTable: string,
  localesTable: string,
  fieldNames: string[], // column names as they appear in sourceTable
  targetPrefix = '', // prefix for target column name, e.g. 'version_' for _v tables
) {
  if (!(await rowExists(db, sourceTable))) return
  if (!(await rowExists(db, localesTable))) return

  for (const fieldName of fieldNames) {
    const sourceCol = fieldName.replace(/-/g, '_')
    const targetCol = targetPrefix + sourceCol

    // Skip if source column is already gone (schema push already ran)
    if (!(await colExists(db, sourceTable, sourceCol))) continue
    // Skip if already migrated
    if (await colExists(db, localesTable, targetCol)) continue

    const colType = await getColType(db, sourceTable, sourceCol)

    await db.execute(
      sql.raw(
        `ALTER TABLE "${localesTable}" ADD COLUMN IF NOT EXISTS "${targetCol}" ${colType}`,
      ),
    )

    // Insert 'en' rows for docs that have no locale entry yet
    await db.execute(
      sql.raw(`
        INSERT INTO "${localesTable}" ("_parent_id", "_locale", "${targetCol}")
        SELECT t.id, 'sl', t."${sourceCol}"
        FROM "${sourceTable}" t
        WHERE NOT EXISTS (
          SELECT 1 FROM "${localesTable}" l
          WHERE l."_parent_id" = t.id AND l."_locale" = 'sl'
        )
        ON CONFLICT ("_locale", "_parent_id") DO NOTHING
      `),
    )

    // Update existing 'en' rows that don't have the value yet
    await db.execute(
      sql.raw(`
        UPDATE "${localesTable}" l
        SET "${targetCol}" = t."${sourceCol}"
        FROM "${sourceTable}" t
        WHERE l."_parent_id" = t.id AND l."_locale" = 'sl'
          AND l."${targetCol}" IS NULL
      `),
    )
  }
}

export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  for (const collection of payload.config.collections) {
    const table = toTableName(collection.slug)
    const fields = collectLocalizedFields(collection.fields)
    if (fields.length === 0) continue

    // Main table → _locales table
    await migrateTable(db, table, `${table}_locales`, fields)

    // Version table → version _locales table (columns are prefixed with "version_")
    await migrateTable(db, `_${table}_v`, `_${table}_v_locales`, fields, 'version_')
  }
}

export async function down({ db, payload }: MigrateDownArgs): Promise<void> {
  for (const collection of payload.config.collections) {
    const table = toTableName(collection.slug)
    const fields = collectLocalizedFields(collection.fields)
    if (fields.length === 0) continue

    for (const fieldName of fields) {
      const col = fieldName.replace(/-/g, '_')
      await db.execute(
        sql.raw(`ALTER TABLE "${table}_locales" DROP COLUMN IF EXISTS "${col}"`),
      )
      await db.execute(
        sql.raw(`ALTER TABLE "_${table}_v_locales" DROP COLUMN IF EXISTS "version_${col}"`),
      )
    }
  }
}
