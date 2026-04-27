import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Check if _order column exists and what type it is
  const result = await db.execute(sql.raw(`
    SELECT data_type
    FROM information_schema.columns
    WHERE table_name = 'gallery' AND column_name = '_order'
  `))

  const rows = result.rows as { data_type: string }[]

  if (rows.length === 0) {
    // Column doesn't exist — add it as varchar
    await db.execute(sql.raw(`
      ALTER TABLE "gallery" ADD COLUMN "_order" varchar
    `))
  } else if (rows[0].data_type === 'integer') {
    // Column exists as integer — convert to varchar (fractional indexing)
    await db.execute(sql.raw(`
      ALTER TABLE "gallery"
      ALTER COLUMN "_order" TYPE varchar USING "_order"::varchar
    `))
  }

  await db.execute(sql.raw(`
    CREATE INDEX IF NOT EXISTS "gallery__order_idx" ON "gallery" USING btree ("_order")
  `))
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql.raw(`
    DROP INDEX IF EXISTS "gallery__order_idx"
  `))

  await db.execute(sql.raw(`
    ALTER TABLE "gallery"
    ALTER COLUMN "_order" TYPE integer USING "_order"::integer
  `))
}
