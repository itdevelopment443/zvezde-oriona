import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

/**
 * Applies the full schema localization transition on an existing database:
 *
 * 1. Create `_locales` enum type
 * 2. Create `*_locales` tables (slug/title/excerpt/location)
 * 3. Copy existing data → locales tables with locale = 'sl'
 * 4. Add `_locale` column to all existing block tables
 * 5. Drop old non-localized columns from main tables
 * 6. Create required unique indexes on locales tables
 *
 * All statements use IF NOT EXISTS / IF EXISTS so the migration is idempotent.
 */

// All block tables that need a `_locale` column added
const BLOCK_TABLES = [
  // pages
  'pages_blocks_home_hero_block',
  'pages_blocks_exposed_news_block',
  'pages_blocks_events_block',
  'pages_blocks_seperator_block',
  'pages_blocks_awards_block',
  'pages_blocks_about_us_block_contacts',
  'pages_blocks_about_us_block',
  'pages_blocks_law_block',
  'pages_blocks_news_archive_block',
  // _pages_v
  '_pages_v_blocks_home_hero_block',
  '_pages_v_blocks_exposed_news_block',
  '_pages_v_blocks_events_block',
  '_pages_v_blocks_seperator_block',
  '_pages_v_blocks_awards_block',
  '_pages_v_blocks_about_us_block_contacts',
  '_pages_v_blocks_about_us_block',
  '_pages_v_blocks_law_block',
  '_pages_v_blocks_news_archive_block',
  // news
  'news_blocks_content_block',
  'news_blocks_images_block_images',
  'news_blocks_images_block',
  // _news_v
  '_news_v_blocks_content_block',
  '_news_v_blocks_images_block_images',
  '_news_v_blocks_images_block',
  // events
  'events_blocks_about_event_block',
  'events_blocks_seperator_block',
  'events_blocks_winners_block',
  'events_blocks_gallery_block',
  'events_blocks_video_block',
  // _events_v
  '_events_v_blocks_about_event_block',
  '_events_v_blocks_seperator_block',
  '_events_v_blocks_winners_block',
  '_events_v_blocks_gallery_block',
  '_events_v_blocks_video_block',
  // awards
  'awards_blocks_awards_hero_block',
  // _awards_v
  '_awards_v_blocks_awards_hero_block',
]

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // ── 1. Create _locales enum ─────────────────────────────────────────────────
  await db.execute(
    sql.raw(`DO $$ BEGIN
      CREATE TYPE "public"."_locales" AS ENUM('en', 'sl');
    EXCEPTION WHEN duplicate_object THEN NULL;
    END $$`),
  )

  // ── 2. Create locales tables ────────────────────────────────────────────────
  await db.execute(sql.raw(`
    CREATE TABLE IF NOT EXISTS "news_locales" (
      "slug" varchar,
      "title" varchar(60),
      "excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "pages_locales" (
      "slug" varchar,
      "title" varchar(60),
      "excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "awards_locales" (
      "slug" varchar,
      "title" varchar(60),
      "excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "events_locales" (
      "slug" varchar,
      "title" varchar(60),
      "excerpt" varchar,
      "location" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "_news_v_locales" (
      "version_slug" varchar,
      "version_title" varchar(60),
      "version_excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
      "version_slug" varchar,
      "version_title" varchar(60),
      "version_excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "_awards_v_locales" (
      "version_slug" varchar,
      "version_title" varchar(60),
      "version_excerpt" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "_events_v_locales" (
      "version_slug" varchar,
      "version_title" varchar(60),
      "version_excerpt" varchar,
      "version_location" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );
  `))

  // Add FK constraints for locales tables
  await db.execute(sql.raw(`
    DO $$ BEGIN
      ALTER TABLE "news_locales" ADD CONSTRAINT "news_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "awards_locales" ADD CONSTRAINT "awards_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."awards"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "events_locales" ADD CONSTRAINT "events_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_news_v_locales" ADD CONSTRAINT "_news_v_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_awards_v_locales" ADD CONSTRAINT "_awards_v_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_awards_v"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
    DO $$ BEGIN
      ALTER TABLE "_events_v_locales" ADD CONSTRAINT "_events_v_locales_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  `))

  // ── 3. Copy existing data → locales tables with locale = 'sl' ──────────────
  await db.execute(sql.raw(`
    INSERT INTO "news_locales" ("_parent_id", "_locale", "slug", "title", "excerpt")
    SELECT id, 'sl', "slug", "title", "excerpt" FROM "news"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = 'news' AND column_name = 'title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "pages_locales" ("_parent_id", "_locale", "slug", "title", "excerpt")
    SELECT id, 'sl', "slug", "title", "excerpt" FROM "pages"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = 'pages' AND column_name = 'title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "awards_locales" ("_parent_id", "_locale", "slug", "title", "excerpt")
    SELECT id, 'sl', "slug", "title", "excerpt" FROM "awards"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = 'awards' AND column_name = 'title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "events_locales" ("_parent_id", "_locale", "slug", "title", "excerpt", "location")
    SELECT id, 'sl', "slug", "title", "excerpt", "location" FROM "events"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = 'events' AND column_name = 'title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "_news_v_locales" ("_parent_id", "_locale", "version_slug", "version_title", "version_excerpt")
    SELECT id, 'sl', "version_slug", "version_title", "version_excerpt" FROM "_news_v"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = '_news_v' AND column_name = 'version_title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "_pages_v_locales" ("_parent_id", "_locale", "version_slug", "version_title", "version_excerpt")
    SELECT id, 'sl', "version_slug", "version_title", "version_excerpt" FROM "_pages_v"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = '_pages_v' AND column_name = 'version_title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "_awards_v_locales" ("_parent_id", "_locale", "version_slug", "version_title", "version_excerpt")
    SELECT id, 'sl', "version_slug", "version_title", "version_excerpt" FROM "_awards_v"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = '_awards_v' AND column_name = 'version_title')
    ON CONFLICT DO NOTHING;

    INSERT INTO "_events_v_locales" ("_parent_id", "_locale", "version_slug", "version_title", "version_excerpt", "version_location")
    SELECT id, 'sl', "version_slug", "version_title", "version_excerpt", "version_location" FROM "_events_v"
    WHERE EXISTS (SELECT 1 FROM information_schema.columns
      WHERE table_name = '_events_v' AND column_name = 'version_title')
    ON CONFLICT DO NOTHING;
  `))

  // ── 4. Add _locale to existing block tables ─────────────────────────────────
  for (const table of BLOCK_TABLES) {
    // Add column with a default so existing rows get 'sl'
    await db.execute(
      sql.raw(
        `ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "_locale" "public"."_locales" DEFAULT 'sl'`,
      ),
    )
    // Make NOT NULL (existing rows already have 'en' from the default)
    await db.execute(
      sql.raw(`ALTER TABLE "${table}" ALTER COLUMN "_locale" SET NOT NULL`),
    )
    // Remove the default (Payload manages this, not the DB)
    await db.execute(
      sql.raw(`ALTER TABLE "${table}" ALTER COLUMN "_locale" DROP DEFAULT`),
    )
  }

  // ── 5. Drop old non-localized columns ───────────────────────────────────────
  await db.execute(sql.raw(`
    ALTER TABLE "news"    DROP COLUMN IF EXISTS "slug";
    ALTER TABLE "news"    DROP COLUMN IF EXISTS "title";
    ALTER TABLE "news"    DROP COLUMN IF EXISTS "excerpt";

    ALTER TABLE "pages"   DROP COLUMN IF EXISTS "slug";
    ALTER TABLE "pages"   DROP COLUMN IF EXISTS "title";
    ALTER TABLE "pages"   DROP COLUMN IF EXISTS "excerpt";

    ALTER TABLE "awards"  DROP COLUMN IF EXISTS "slug";
    ALTER TABLE "awards"  DROP COLUMN IF EXISTS "title";
    ALTER TABLE "awards"  DROP COLUMN IF EXISTS "excerpt";

    ALTER TABLE "events"  DROP COLUMN IF EXISTS "slug";
    ALTER TABLE "events"  DROP COLUMN IF EXISTS "title";
    ALTER TABLE "events"  DROP COLUMN IF EXISTS "excerpt";
    ALTER TABLE "events"  DROP COLUMN IF EXISTS "location";

    ALTER TABLE "_news_v"   DROP COLUMN IF EXISTS "version_slug";
    ALTER TABLE "_news_v"   DROP COLUMN IF EXISTS "version_title";
    ALTER TABLE "_news_v"   DROP COLUMN IF EXISTS "version_excerpt";

    ALTER TABLE "_pages_v"  DROP COLUMN IF EXISTS "version_slug";
    ALTER TABLE "_pages_v"  DROP COLUMN IF EXISTS "version_title";
    ALTER TABLE "_pages_v"  DROP COLUMN IF EXISTS "version_excerpt";

    ALTER TABLE "_awards_v" DROP COLUMN IF EXISTS "version_slug";
    ALTER TABLE "_awards_v" DROP COLUMN IF EXISTS "version_title";
    ALTER TABLE "_awards_v" DROP COLUMN IF EXISTS "version_excerpt";

    ALTER TABLE "_events_v" DROP COLUMN IF EXISTS "version_slug";
    ALTER TABLE "_events_v" DROP COLUMN IF EXISTS "version_title";
    ALTER TABLE "_events_v" DROP COLUMN IF EXISTS "version_excerpt";
    ALTER TABLE "_events_v" DROP COLUMN IF EXISTS "version_location";
  `))

  // ── 6. Create unique indexes on locales tables ──────────────────────────────
  await db.execute(sql.raw(`
    CREATE UNIQUE INDEX IF NOT EXISTS "news_slug_idx"   ON "news_locales"   ("slug", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "news_title_idx"  ON "news_locales"   ("title", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "news_locales_locale_parent_id_unique" ON "news_locales" ("_locale", "_parent_id");

    CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx"  ON "pages_locales"  ("slug", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages_locales"  ("title", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" ("_locale", "_parent_id");

    CREATE UNIQUE INDEX IF NOT EXISTS "awards_slug_idx"  ON "awards_locales"  ("slug", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "awards_title_idx" ON "awards_locales"  ("title", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "awards_locales_locale_parent_id_unique" ON "awards_locales" ("_locale", "_parent_id");

    CREATE UNIQUE INDEX IF NOT EXISTS "events_slug_idx"  ON "events_locales"  ("slug", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "events_title_idx" ON "events_locales"  ("title", "_locale");
    CREATE UNIQUE INDEX IF NOT EXISTS "events_locales_locale_parent_id_unique" ON "events_locales" ("_locale", "_parent_id");

    CREATE UNIQUE INDEX IF NOT EXISTS "_news_v_locales_locale_parent_id_unique"   ON "_news_v_locales"   ("_locale", "_parent_id");
    CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique"  ON "_pages_v_locales"  ("_locale", "_parent_id");
    CREATE UNIQUE INDEX IF NOT EXISTS "_awards_v_locales_locale_parent_id_unique" ON "_awards_v_locales" ("_locale", "_parent_id");
    CREATE UNIQUE INDEX IF NOT EXISTS "_events_v_locales_locale_parent_id_unique" ON "_events_v_locales" ("_locale", "_parent_id");
  `))
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Reverse: restore old columns and drop locales tables
  await db.execute(sql.raw(`
    ALTER TABLE "news"    ADD COLUMN IF NOT EXISTS "slug" varchar;
    ALTER TABLE "news"    ADD COLUMN IF NOT EXISTS "title" varchar(60);
    ALTER TABLE "news"    ADD COLUMN IF NOT EXISTS "excerpt" varchar;

    ALTER TABLE "pages"   ADD COLUMN IF NOT EXISTS "slug" varchar;
    ALTER TABLE "pages"   ADD COLUMN IF NOT EXISTS "title" varchar(60);
    ALTER TABLE "pages"   ADD COLUMN IF NOT EXISTS "excerpt" varchar;

    ALTER TABLE "awards"  ADD COLUMN IF NOT EXISTS "slug" varchar;
    ALTER TABLE "awards"  ADD COLUMN IF NOT EXISTS "title" varchar(60);
    ALTER TABLE "awards"  ADD COLUMN IF NOT EXISTS "excerpt" varchar;

    ALTER TABLE "events"  ADD COLUMN IF NOT EXISTS "slug" varchar;
    ALTER TABLE "events"  ADD COLUMN IF NOT EXISTS "title" varchar(60);
    ALTER TABLE "events"  ADD COLUMN IF NOT EXISTS "excerpt" varchar;
    ALTER TABLE "events"  ADD COLUMN IF NOT EXISTS "location" varchar;

    DROP TABLE IF EXISTS "news_locales";
    DROP TABLE IF EXISTS "pages_locales";
    DROP TABLE IF EXISTS "awards_locales";
    DROP TABLE IF EXISTS "events_locales";
    DROP TABLE IF EXISTS "_news_v_locales";
    DROP TABLE IF EXISTS "_pages_v_locales";
    DROP TABLE IF EXISTS "_awards_v_locales";
    DROP TABLE IF EXISTS "_events_v_locales";
  `))

  for (const table of BLOCK_TABLES) {
    await db.execute(sql.raw(`ALTER TABLE "${table}" DROP COLUMN IF EXISTS "_locale"`))
  }
}
