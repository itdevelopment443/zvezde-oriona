import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

// Collections that have a published_at column
const COLLECTIONS = ['news', 'events', 'awards', 'pages']

export async function up({ db }: MigrateUpArgs): Promise<void> {
  for (const table of COLLECTIONS) {
    // 1. Backfill NULLs with created_at (preserves the original intent)
    await db.execute(sql.raw(`
      UPDATE "${table}"
      SET "published_at" = "created_at"
      WHERE "published_at" IS NULL
    `))

    // 2. Make the column NOT NULL now that all rows have a value
    await db.execute(sql.raw(`
      ALTER TABLE "${table}"
      ALTER COLUMN "published_at" SET NOT NULL
    `))
  }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  for (const table of COLLECTIONS) {
    await db.execute(sql.raw(`
      ALTER TABLE "${table}"
      ALTER COLUMN "published_at" DROP NOT NULL
    `))
  }
}
