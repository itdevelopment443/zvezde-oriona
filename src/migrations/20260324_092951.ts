import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'sl');
  CREATE TYPE "public"."enum_pages_blocks_about_us_block_contacts_icon" AS ENUM('Mail', 'Phone', 'MapPin', 'Globe');
  CREATE TYPE "public"."enum_pages_blocks_about_us_block_contacts_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_about_us_block_contacts_icon" AS ENUM('Mail', 'Phone', 'MapPin', 'Globe');
  CREATE TYPE "public"."enum__pages_v_blocks_about_us_block_contacts_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'sl');
  CREATE TYPE "public"."enum_news_blocks_images_block_number_of_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_news_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__news_v_blocks_images_block_number_of_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__news_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__news_v_published_locale" AS ENUM('en', 'sl');
  CREATE TYPE "public"."enum_events_year" AS ENUM('2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010');
  CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_version_year" AS ENUM('2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010');
  CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_published_locale" AS ENUM('en', 'sl');
  CREATE TYPE "public"."enum_awards_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__awards_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__awards_v_published_locale" AS ENUM('en', 'sl');
  CREATE TYPE "public"."enum_winners_year" AS ENUM('2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'user');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TYPE "public"."enum_exports_format" AS ENUM('csv', 'json');
  CREATE TYPE "public"."enum_exports_sort_order" AS ENUM('asc', 'desc');
  CREATE TYPE "public"."enum_exports_locale" AS ENUM('all', 'en', 'sl');
  CREATE TYPE "public"."enum_exports_drafts" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_imports_import_mode" AS ENUM('create', 'update', 'upsert');
  CREATE TYPE "public"."enum_imports_status" AS ENUM('pending', 'completed', 'partial', 'failed');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'createCollectionExport', 'createCollectionImport');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'createCollectionExport', 'createCollectionImport');
  CREATE TYPE "public"."enum_payload_query_presets_access_read_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_update_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_delete_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_related_collection" AS ENUM('news', 'events', 'awards');
  CREATE TABLE "pages_blocks_home_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_exposed_news_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_events_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_awards_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_about_us_block_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_about_us_block_contacts_icon",
  	"target" "enum_pages_blocks_about_us_block_contacts_target" DEFAULT '_self',
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_about_us_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_law_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_news_archive_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"published_at" timestamp(3) with time zone,
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"slug" varchar,
  	"title" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_home_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_exposed_news_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_events_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_awards_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_us_block_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_about_us_block_contacts_icon",
  	"target" "enum__pages_v_blocks_about_us_block_contacts_target" DEFAULT '_self',
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_us_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_law_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_news_archive_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "news_blocks_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "news_blocks_images_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "news_blocks_images_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number_of_columns" "enum_news_blocks_images_block_number_of_columns" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"exposed_news" boolean,
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_news_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "news_locales" (
  	"slug" varchar,
  	"title" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_news_v_blocks_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_news_v_blocks_images_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_news_v_blocks_images_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number_of_columns" "enum__news_v_blocks_images_block_number_of_columns" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_news_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_exposed_news" boolean,
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__news_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__news_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_news_v_locales" (
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "events_blocks_about_event_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"lexical_more_content" jsonb,
  	"more_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_winners_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"year" "enum_events_year",
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_events_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "events_locales" (
  	"slug" varchar,
  	"title" varchar,
  	"excerpt" varchar,
  	"location" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_about_event_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lexical_content" jsonb,
  	"content" varchar,
  	"lexical_more_content" jsonb,
  	"more_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_winners_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_year" "enum__events_v_version_year",
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__events_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_events_v_locales" (
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_location" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "awards_blocks_awards_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "awards_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "awards_blocks_award_winner_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "awards" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"published_at" timestamp(3) with time zone,
  	"featured_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_awards_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "awards_locales" (
  	"slug" varchar,
  	"title" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_awards_v_blocks_awards_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_awards_v_blocks_seperator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_awards_v_blocks_award_winner_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_awards_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_featured_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__awards_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__awards_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_awards_v_locales" (
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "winners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"person_id" integer,
  	"award_id" integer,
  	"year" "enum_winners_year",
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "winners_locales" (
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "people" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "gallery" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "news_years" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" "enum_users_role",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE "exports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"format" "enum_exports_format" DEFAULT 'csv' NOT NULL,
  	"limit" numeric,
  	"page" numeric DEFAULT 1,
  	"sort" varchar,
  	"sort_order" "enum_exports_sort_order",
  	"locale" "enum_exports_locale" DEFAULT 'all',
  	"drafts" "enum_exports_drafts" DEFAULT 'yes',
  	"collection_slug" varchar DEFAULT 'pages' NOT NULL,
  	"where" jsonb DEFAULT '{}'::jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "exports_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "imports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_slug" varchar DEFAULT 'pages' NOT NULL,
  	"import_mode" "enum_imports_import_mode",
  	"match_field" varchar DEFAULT 'id',
  	"status" "enum_imports_status" DEFAULT 'pending',
  	"summary_imported" numeric,
  	"summary_updated" numeric,
  	"summary_total" numeric,
  	"summary_issues" numeric,
  	"summary_issue_details" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"awards_id" integer,
  	"winners_id" integer,
  	"people_id" integer,
  	"gallery_id" integer,
  	"images_id" integer,
  	"documents_id" integer,
  	"news_years_id" integer,
  	"users_id" integer,
  	"redirects_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"is_shared" boolean DEFAULT false,
  	"access_read_constraint" "enum_payload_query_presets_access_read_constraint" DEFAULT 'onlyMe',
  	"access_update_constraint" "enum_payload_query_presets_access_update_constraint" DEFAULT 'onlyMe',
  	"access_delete_constraint" "enum_payload_query_presets_access_delete_constraint" DEFAULT 'onlyMe',
  	"where" jsonb,
  	"columns" jsonb,
  	"group_by" varchar,
  	"related_collection" "enum_payload_query_presets_related_collection" NOT NULL,
  	"is_temp" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  ALTER TABLE "pages_blocks_home_hero_block" ADD CONSTRAINT "pages_blocks_home_hero_block_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_home_hero_block" ADD CONSTRAINT "pages_blocks_home_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_exposed_news_block" ADD CONSTRAINT "pages_blocks_exposed_news_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_events_block" ADD CONSTRAINT "pages_blocks_events_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_seperator_block" ADD CONSTRAINT "pages_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_awards_block" ADD CONSTRAINT "pages_blocks_awards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_us_block_contacts" ADD CONSTRAINT "pages_blocks_about_us_block_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_us_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_us_block" ADD CONSTRAINT "pages_blocks_about_us_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_law_block" ADD CONSTRAINT "pages_blocks_law_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_news_archive_block" ADD CONSTRAINT "pages_blocks_news_archive_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_featured_image_id_images_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_home_hero_block" ADD CONSTRAINT "_pages_v_blocks_home_hero_block_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_home_hero_block" ADD CONSTRAINT "_pages_v_blocks_home_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_exposed_news_block" ADD CONSTRAINT "_pages_v_blocks_exposed_news_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_events_block" ADD CONSTRAINT "_pages_v_blocks_events_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_seperator_block" ADD CONSTRAINT "_pages_v_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_awards_block" ADD CONSTRAINT "_pages_v_blocks_awards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_us_block_contacts" ADD CONSTRAINT "_pages_v_blocks_about_us_block_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_us_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_us_block" ADD CONSTRAINT "_pages_v_blocks_about_us_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_law_block" ADD CONSTRAINT "_pages_v_blocks_law_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_news_archive_block" ADD CONSTRAINT "_pages_v_blocks_news_archive_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_featured_image_id_images_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_content_block" ADD CONSTRAINT "news_blocks_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_images_block_images" ADD CONSTRAINT "news_blocks_images_block_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_blocks_images_block_images" ADD CONSTRAINT "news_blocks_images_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_blocks_images_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_blocks_images_block" ADD CONSTRAINT "news_blocks_images_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_featured_image_id_images_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_locales" ADD CONSTRAINT "news_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_news_v_blocks_content_block" ADD CONSTRAINT "_news_v_blocks_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_news_v_blocks_images_block_images" ADD CONSTRAINT "_news_v_blocks_images_block_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_news_v_blocks_images_block_images" ADD CONSTRAINT "_news_v_blocks_images_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v_blocks_images_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_news_v_blocks_images_block" ADD CONSTRAINT "_news_v_blocks_images_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_parent_id_news_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_version_featured_image_id_images_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_news_v_locales" ADD CONSTRAINT "_news_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_about_event_block" ADD CONSTRAINT "events_blocks_about_event_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_seperator_block" ADD CONSTRAINT "events_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_winners_block" ADD CONSTRAINT "events_blocks_winners_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_gallery_block" ADD CONSTRAINT "events_blocks_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_video_block" ADD CONSTRAINT "events_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_featured_image_id_images_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_locales" ADD CONSTRAINT "events_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_about_event_block" ADD CONSTRAINT "_events_v_blocks_about_event_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_seperator_block" ADD CONSTRAINT "_events_v_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_winners_block" ADD CONSTRAINT "_events_v_blocks_winners_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_gallery_block" ADD CONSTRAINT "_events_v_blocks_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_video_block" ADD CONSTRAINT "_events_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_featured_image_id_images_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_locales" ADD CONSTRAINT "_events_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "awards_blocks_awards_hero_block" ADD CONSTRAINT "awards_blocks_awards_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "awards_blocks_seperator_block" ADD CONSTRAINT "awards_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "awards_blocks_award_winner_block" ADD CONSTRAINT "awards_blocks_award_winner_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "awards" ADD CONSTRAINT "awards_featured_image_id_images_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "awards_locales" ADD CONSTRAINT "awards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_awards_v_blocks_awards_hero_block" ADD CONSTRAINT "_awards_v_blocks_awards_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_awards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_awards_v_blocks_seperator_block" ADD CONSTRAINT "_awards_v_blocks_seperator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_awards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_awards_v_blocks_award_winner_block" ADD CONSTRAINT "_awards_v_blocks_award_winner_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_awards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_awards_v" ADD CONSTRAINT "_awards_v_parent_id_awards_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."awards"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_awards_v" ADD CONSTRAINT "_awards_v_version_featured_image_id_images_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_awards_v_locales" ADD CONSTRAINT "_awards_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_awards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "winners" ADD CONSTRAINT "winners_person_id_people_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."people"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "winners" ADD CONSTRAINT "winners_award_id_awards_id_fk" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "winners" ADD CONSTRAINT "winners_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "winners_locales" ADD CONSTRAINT "winners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."winners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exports_texts" ADD CONSTRAINT "exports_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_awards_fk" FOREIGN KEY ("awards_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_winners_fk" FOREIGN KEY ("winners_id") REFERENCES "public"."winners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_years_fk" FOREIGN KEY ("news_years_id") REFERENCES "public"."news_years"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_query_presets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_home_hero_block_order_idx" ON "pages_blocks_home_hero_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_home_hero_block_parent_id_idx" ON "pages_blocks_home_hero_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_home_hero_block_path_idx" ON "pages_blocks_home_hero_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_home_hero_block_locale_idx" ON "pages_blocks_home_hero_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_home_hero_block_background_image_idx" ON "pages_blocks_home_hero_block" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_exposed_news_block_order_idx" ON "pages_blocks_exposed_news_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_exposed_news_block_parent_id_idx" ON "pages_blocks_exposed_news_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_exposed_news_block_path_idx" ON "pages_blocks_exposed_news_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_exposed_news_block_locale_idx" ON "pages_blocks_exposed_news_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_events_block_order_idx" ON "pages_blocks_events_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_events_block_parent_id_idx" ON "pages_blocks_events_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_events_block_path_idx" ON "pages_blocks_events_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_events_block_locale_idx" ON "pages_blocks_events_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_seperator_block_order_idx" ON "pages_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_seperator_block_parent_id_idx" ON "pages_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_seperator_block_path_idx" ON "pages_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_seperator_block_locale_idx" ON "pages_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_awards_block_order_idx" ON "pages_blocks_awards_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_awards_block_parent_id_idx" ON "pages_blocks_awards_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_awards_block_path_idx" ON "pages_blocks_awards_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_awards_block_locale_idx" ON "pages_blocks_awards_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_about_us_block_contacts_order_idx" ON "pages_blocks_about_us_block_contacts" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_us_block_contacts_parent_id_idx" ON "pages_blocks_about_us_block_contacts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_us_block_contacts_locale_idx" ON "pages_blocks_about_us_block_contacts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_about_us_block_order_idx" ON "pages_blocks_about_us_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_us_block_parent_id_idx" ON "pages_blocks_about_us_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_us_block_path_idx" ON "pages_blocks_about_us_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_about_us_block_locale_idx" ON "pages_blocks_about_us_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_law_block_order_idx" ON "pages_blocks_law_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_law_block_parent_id_idx" ON "pages_blocks_law_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_law_block_path_idx" ON "pages_blocks_law_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_law_block_locale_idx" ON "pages_blocks_law_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_news_archive_block_order_idx" ON "pages_blocks_news_archive_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_news_archive_block_parent_id_idx" ON "pages_blocks_news_archive_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_news_archive_block_path_idx" ON "pages_blocks_news_archive_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_news_archive_block_locale_idx" ON "pages_blocks_news_archive_block" USING btree ("_locale");
  CREATE INDEX "pages__order_idx" ON "pages" USING btree ("_order");
  CREATE INDEX "pages_featured_image_idx" ON "pages" USING btree ("featured_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_deleted_at_idx" ON "pages" USING btree ("deleted_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "pages_title_idx" ON "pages_locales" USING btree ("title","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_home_hero_block_order_idx" ON "_pages_v_blocks_home_hero_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_home_hero_block_parent_id_idx" ON "_pages_v_blocks_home_hero_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_home_hero_block_path_idx" ON "_pages_v_blocks_home_hero_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_home_hero_block_locale_idx" ON "_pages_v_blocks_home_hero_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_home_hero_block_background_image_idx" ON "_pages_v_blocks_home_hero_block" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_exposed_news_block_order_idx" ON "_pages_v_blocks_exposed_news_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_exposed_news_block_parent_id_idx" ON "_pages_v_blocks_exposed_news_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_exposed_news_block_path_idx" ON "_pages_v_blocks_exposed_news_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_exposed_news_block_locale_idx" ON "_pages_v_blocks_exposed_news_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_events_block_order_idx" ON "_pages_v_blocks_events_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_events_block_parent_id_idx" ON "_pages_v_blocks_events_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_events_block_path_idx" ON "_pages_v_blocks_events_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_events_block_locale_idx" ON "_pages_v_blocks_events_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_seperator_block_order_idx" ON "_pages_v_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_seperator_block_parent_id_idx" ON "_pages_v_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_seperator_block_path_idx" ON "_pages_v_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_seperator_block_locale_idx" ON "_pages_v_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_awards_block_order_idx" ON "_pages_v_blocks_awards_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_awards_block_parent_id_idx" ON "_pages_v_blocks_awards_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_awards_block_path_idx" ON "_pages_v_blocks_awards_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_awards_block_locale_idx" ON "_pages_v_blocks_awards_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_about_us_block_contacts_order_idx" ON "_pages_v_blocks_about_us_block_contacts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_us_block_contacts_parent_id_idx" ON "_pages_v_blocks_about_us_block_contacts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_us_block_contacts_locale_idx" ON "_pages_v_blocks_about_us_block_contacts" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_about_us_block_order_idx" ON "_pages_v_blocks_about_us_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_us_block_parent_id_idx" ON "_pages_v_blocks_about_us_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_us_block_path_idx" ON "_pages_v_blocks_about_us_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_about_us_block_locale_idx" ON "_pages_v_blocks_about_us_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_law_block_order_idx" ON "_pages_v_blocks_law_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_law_block_parent_id_idx" ON "_pages_v_blocks_law_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_law_block_path_idx" ON "_pages_v_blocks_law_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_law_block_locale_idx" ON "_pages_v_blocks_law_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_news_archive_block_order_idx" ON "_pages_v_blocks_news_archive_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_news_archive_block_parent_id_idx" ON "_pages_v_blocks_news_archive_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_news_archive_block_path_idx" ON "_pages_v_blocks_news_archive_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_news_archive_block_locale_idx" ON "_pages_v_blocks_news_archive_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version__order_idx" ON "_pages_v" USING btree ("version__order");
  CREATE INDEX "_pages_v_version_version_featured_image_idx" ON "_pages_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version_deleted_at_idx" ON "_pages_v" USING btree ("version_deleted_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_pages_v_version_version_title_idx" ON "_pages_v_locales" USING btree ("version_title","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "news_blocks_content_block_order_idx" ON "news_blocks_content_block" USING btree ("_order");
  CREATE INDEX "news_blocks_content_block_parent_id_idx" ON "news_blocks_content_block" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_content_block_path_idx" ON "news_blocks_content_block" USING btree ("_path");
  CREATE INDEX "news_blocks_content_block_locale_idx" ON "news_blocks_content_block" USING btree ("_locale");
  CREATE INDEX "news_blocks_images_block_images_order_idx" ON "news_blocks_images_block_images" USING btree ("_order");
  CREATE INDEX "news_blocks_images_block_images_parent_id_idx" ON "news_blocks_images_block_images" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_images_block_images_locale_idx" ON "news_blocks_images_block_images" USING btree ("_locale");
  CREATE INDEX "news_blocks_images_block_images_image_idx" ON "news_blocks_images_block_images" USING btree ("image_id");
  CREATE INDEX "news_blocks_images_block_order_idx" ON "news_blocks_images_block" USING btree ("_order");
  CREATE INDEX "news_blocks_images_block_parent_id_idx" ON "news_blocks_images_block" USING btree ("_parent_id");
  CREATE INDEX "news_blocks_images_block_path_idx" ON "news_blocks_images_block" USING btree ("_path");
  CREATE INDEX "news_blocks_images_block_locale_idx" ON "news_blocks_images_block" USING btree ("_locale");
  CREATE INDEX "news_featured_image_idx" ON "news" USING btree ("featured_image_id");
  CREATE INDEX "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX "news_deleted_at_idx" ON "news" USING btree ("deleted_at");
  CREATE INDEX "news__status_idx" ON "news" USING btree ("_status");
  CREATE UNIQUE INDEX "news_slug_idx" ON "news_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "news_title_idx" ON "news_locales" USING btree ("title","_locale");
  CREATE UNIQUE INDEX "news_locales_locale_parent_id_unique" ON "news_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_news_v_blocks_content_block_order_idx" ON "_news_v_blocks_content_block" USING btree ("_order");
  CREATE INDEX "_news_v_blocks_content_block_parent_id_idx" ON "_news_v_blocks_content_block" USING btree ("_parent_id");
  CREATE INDEX "_news_v_blocks_content_block_path_idx" ON "_news_v_blocks_content_block" USING btree ("_path");
  CREATE INDEX "_news_v_blocks_content_block_locale_idx" ON "_news_v_blocks_content_block" USING btree ("_locale");
  CREATE INDEX "_news_v_blocks_images_block_images_order_idx" ON "_news_v_blocks_images_block_images" USING btree ("_order");
  CREATE INDEX "_news_v_blocks_images_block_images_parent_id_idx" ON "_news_v_blocks_images_block_images" USING btree ("_parent_id");
  CREATE INDEX "_news_v_blocks_images_block_images_locale_idx" ON "_news_v_blocks_images_block_images" USING btree ("_locale");
  CREATE INDEX "_news_v_blocks_images_block_images_image_idx" ON "_news_v_blocks_images_block_images" USING btree ("image_id");
  CREATE INDEX "_news_v_blocks_images_block_order_idx" ON "_news_v_blocks_images_block" USING btree ("_order");
  CREATE INDEX "_news_v_blocks_images_block_parent_id_idx" ON "_news_v_blocks_images_block" USING btree ("_parent_id");
  CREATE INDEX "_news_v_blocks_images_block_path_idx" ON "_news_v_blocks_images_block" USING btree ("_path");
  CREATE INDEX "_news_v_blocks_images_block_locale_idx" ON "_news_v_blocks_images_block" USING btree ("_locale");
  CREATE INDEX "_news_v_parent_idx" ON "_news_v" USING btree ("parent_id");
  CREATE INDEX "_news_v_version_version_featured_image_idx" ON "_news_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_news_v_version_version_updated_at_idx" ON "_news_v" USING btree ("version_updated_at");
  CREATE INDEX "_news_v_version_version_created_at_idx" ON "_news_v" USING btree ("version_created_at");
  CREATE INDEX "_news_v_version_version_deleted_at_idx" ON "_news_v" USING btree ("version_deleted_at");
  CREATE INDEX "_news_v_version_version__status_idx" ON "_news_v" USING btree ("version__status");
  CREATE INDEX "_news_v_created_at_idx" ON "_news_v" USING btree ("created_at");
  CREATE INDEX "_news_v_updated_at_idx" ON "_news_v" USING btree ("updated_at");
  CREATE INDEX "_news_v_snapshot_idx" ON "_news_v" USING btree ("snapshot");
  CREATE INDEX "_news_v_published_locale_idx" ON "_news_v" USING btree ("published_locale");
  CREATE INDEX "_news_v_latest_idx" ON "_news_v" USING btree ("latest");
  CREATE INDEX "_news_v_version_version_slug_idx" ON "_news_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_news_v_version_version_title_idx" ON "_news_v_locales" USING btree ("version_title","_locale");
  CREATE UNIQUE INDEX "_news_v_locales_locale_parent_id_unique" ON "_news_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "events_blocks_about_event_block_order_idx" ON "events_blocks_about_event_block" USING btree ("_order");
  CREATE INDEX "events_blocks_about_event_block_parent_id_idx" ON "events_blocks_about_event_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_about_event_block_path_idx" ON "events_blocks_about_event_block" USING btree ("_path");
  CREATE INDEX "events_blocks_about_event_block_locale_idx" ON "events_blocks_about_event_block" USING btree ("_locale");
  CREATE INDEX "events_blocks_seperator_block_order_idx" ON "events_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "events_blocks_seperator_block_parent_id_idx" ON "events_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_seperator_block_path_idx" ON "events_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "events_blocks_seperator_block_locale_idx" ON "events_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "events_blocks_winners_block_order_idx" ON "events_blocks_winners_block" USING btree ("_order");
  CREATE INDEX "events_blocks_winners_block_parent_id_idx" ON "events_blocks_winners_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_winners_block_path_idx" ON "events_blocks_winners_block" USING btree ("_path");
  CREATE INDEX "events_blocks_winners_block_locale_idx" ON "events_blocks_winners_block" USING btree ("_locale");
  CREATE INDEX "events_blocks_gallery_block_order_idx" ON "events_blocks_gallery_block" USING btree ("_order");
  CREATE INDEX "events_blocks_gallery_block_parent_id_idx" ON "events_blocks_gallery_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_gallery_block_path_idx" ON "events_blocks_gallery_block" USING btree ("_path");
  CREATE INDEX "events_blocks_gallery_block_locale_idx" ON "events_blocks_gallery_block" USING btree ("_locale");
  CREATE INDEX "events_blocks_video_block_order_idx" ON "events_blocks_video_block" USING btree ("_order");
  CREATE INDEX "events_blocks_video_block_parent_id_idx" ON "events_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_video_block_path_idx" ON "events_blocks_video_block" USING btree ("_path");
  CREATE INDEX "events_blocks_video_block_locale_idx" ON "events_blocks_video_block" USING btree ("_locale");
  CREATE UNIQUE INDEX "events_year_idx" ON "events" USING btree ("year");
  CREATE INDEX "events_featured_image_idx" ON "events" USING btree ("featured_image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events_deleted_at_idx" ON "events" USING btree ("deleted_at");
  CREATE INDEX "events__status_idx" ON "events" USING btree ("_status");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "events_title_idx" ON "events_locales" USING btree ("title","_locale");
  CREATE UNIQUE INDEX "events_locales_locale_parent_id_unique" ON "events_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_events_v_blocks_about_event_block_order_idx" ON "_events_v_blocks_about_event_block" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_about_event_block_parent_id_idx" ON "_events_v_blocks_about_event_block" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_about_event_block_path_idx" ON "_events_v_blocks_about_event_block" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_about_event_block_locale_idx" ON "_events_v_blocks_about_event_block" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_seperator_block_order_idx" ON "_events_v_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_seperator_block_parent_id_idx" ON "_events_v_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_seperator_block_path_idx" ON "_events_v_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_seperator_block_locale_idx" ON "_events_v_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_winners_block_order_idx" ON "_events_v_blocks_winners_block" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_winners_block_parent_id_idx" ON "_events_v_blocks_winners_block" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_winners_block_path_idx" ON "_events_v_blocks_winners_block" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_winners_block_locale_idx" ON "_events_v_blocks_winners_block" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_gallery_block_order_idx" ON "_events_v_blocks_gallery_block" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_gallery_block_parent_id_idx" ON "_events_v_blocks_gallery_block" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_gallery_block_path_idx" ON "_events_v_blocks_gallery_block" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_gallery_block_locale_idx" ON "_events_v_blocks_gallery_block" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_video_block_order_idx" ON "_events_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_video_block_parent_id_idx" ON "_events_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_video_block_path_idx" ON "_events_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_video_block_locale_idx" ON "_events_v_blocks_video_block" USING btree ("_locale");
  CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX "_events_v_version_version_year_idx" ON "_events_v" USING btree ("version_year");
  CREATE INDEX "_events_v_version_version_featured_image_idx" ON "_events_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX "_events_v_version_version_deleted_at_idx" ON "_events_v" USING btree ("version_deleted_at");
  CREATE INDEX "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");
  CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX "_events_v_snapshot_idx" ON "_events_v" USING btree ("snapshot");
  CREATE INDEX "_events_v_published_locale_idx" ON "_events_v" USING btree ("published_locale");
  CREATE INDEX "_events_v_latest_idx" ON "_events_v" USING btree ("latest");
  CREATE INDEX "_events_v_version_version_slug_idx" ON "_events_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_events_v_version_version_title_idx" ON "_events_v_locales" USING btree ("version_title","_locale");
  CREATE UNIQUE INDEX "_events_v_locales_locale_parent_id_unique" ON "_events_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "awards_blocks_awards_hero_block_order_idx" ON "awards_blocks_awards_hero_block" USING btree ("_order");
  CREATE INDEX "awards_blocks_awards_hero_block_parent_id_idx" ON "awards_blocks_awards_hero_block" USING btree ("_parent_id");
  CREATE INDEX "awards_blocks_awards_hero_block_path_idx" ON "awards_blocks_awards_hero_block" USING btree ("_path");
  CREATE INDEX "awards_blocks_awards_hero_block_locale_idx" ON "awards_blocks_awards_hero_block" USING btree ("_locale");
  CREATE INDEX "awards_blocks_seperator_block_order_idx" ON "awards_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "awards_blocks_seperator_block_parent_id_idx" ON "awards_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "awards_blocks_seperator_block_path_idx" ON "awards_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "awards_blocks_seperator_block_locale_idx" ON "awards_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "awards_blocks_award_winner_block_order_idx" ON "awards_blocks_award_winner_block" USING btree ("_order");
  CREATE INDEX "awards_blocks_award_winner_block_parent_id_idx" ON "awards_blocks_award_winner_block" USING btree ("_parent_id");
  CREATE INDEX "awards_blocks_award_winner_block_path_idx" ON "awards_blocks_award_winner_block" USING btree ("_path");
  CREATE INDEX "awards_blocks_award_winner_block_locale_idx" ON "awards_blocks_award_winner_block" USING btree ("_locale");
  CREATE INDEX "awards__order_idx" ON "awards" USING btree ("_order");
  CREATE INDEX "awards_featured_image_idx" ON "awards" USING btree ("featured_image_id");
  CREATE INDEX "awards_updated_at_idx" ON "awards" USING btree ("updated_at");
  CREATE INDEX "awards_created_at_idx" ON "awards" USING btree ("created_at");
  CREATE INDEX "awards_deleted_at_idx" ON "awards" USING btree ("deleted_at");
  CREATE INDEX "awards__status_idx" ON "awards" USING btree ("_status");
  CREATE UNIQUE INDEX "awards_slug_idx" ON "awards_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "awards_title_idx" ON "awards_locales" USING btree ("title","_locale");
  CREATE UNIQUE INDEX "awards_locales_locale_parent_id_unique" ON "awards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_awards_v_blocks_awards_hero_block_order_idx" ON "_awards_v_blocks_awards_hero_block" USING btree ("_order");
  CREATE INDEX "_awards_v_blocks_awards_hero_block_parent_id_idx" ON "_awards_v_blocks_awards_hero_block" USING btree ("_parent_id");
  CREATE INDEX "_awards_v_blocks_awards_hero_block_path_idx" ON "_awards_v_blocks_awards_hero_block" USING btree ("_path");
  CREATE INDEX "_awards_v_blocks_awards_hero_block_locale_idx" ON "_awards_v_blocks_awards_hero_block" USING btree ("_locale");
  CREATE INDEX "_awards_v_blocks_seperator_block_order_idx" ON "_awards_v_blocks_seperator_block" USING btree ("_order");
  CREATE INDEX "_awards_v_blocks_seperator_block_parent_id_idx" ON "_awards_v_blocks_seperator_block" USING btree ("_parent_id");
  CREATE INDEX "_awards_v_blocks_seperator_block_path_idx" ON "_awards_v_blocks_seperator_block" USING btree ("_path");
  CREATE INDEX "_awards_v_blocks_seperator_block_locale_idx" ON "_awards_v_blocks_seperator_block" USING btree ("_locale");
  CREATE INDEX "_awards_v_blocks_award_winner_block_order_idx" ON "_awards_v_blocks_award_winner_block" USING btree ("_order");
  CREATE INDEX "_awards_v_blocks_award_winner_block_parent_id_idx" ON "_awards_v_blocks_award_winner_block" USING btree ("_parent_id");
  CREATE INDEX "_awards_v_blocks_award_winner_block_path_idx" ON "_awards_v_blocks_award_winner_block" USING btree ("_path");
  CREATE INDEX "_awards_v_blocks_award_winner_block_locale_idx" ON "_awards_v_blocks_award_winner_block" USING btree ("_locale");
  CREATE INDEX "_awards_v_parent_idx" ON "_awards_v" USING btree ("parent_id");
  CREATE INDEX "_awards_v_version_version__order_idx" ON "_awards_v" USING btree ("version__order");
  CREATE INDEX "_awards_v_version_version_featured_image_idx" ON "_awards_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_awards_v_version_version_updated_at_idx" ON "_awards_v" USING btree ("version_updated_at");
  CREATE INDEX "_awards_v_version_version_created_at_idx" ON "_awards_v" USING btree ("version_created_at");
  CREATE INDEX "_awards_v_version_version_deleted_at_idx" ON "_awards_v" USING btree ("version_deleted_at");
  CREATE INDEX "_awards_v_version_version__status_idx" ON "_awards_v" USING btree ("version__status");
  CREATE INDEX "_awards_v_created_at_idx" ON "_awards_v" USING btree ("created_at");
  CREATE INDEX "_awards_v_updated_at_idx" ON "_awards_v" USING btree ("updated_at");
  CREATE INDEX "_awards_v_snapshot_idx" ON "_awards_v" USING btree ("snapshot");
  CREATE INDEX "_awards_v_published_locale_idx" ON "_awards_v" USING btree ("published_locale");
  CREATE INDEX "_awards_v_latest_idx" ON "_awards_v" USING btree ("latest");
  CREATE INDEX "_awards_v_version_version_slug_idx" ON "_awards_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_awards_v_version_version_title_idx" ON "_awards_v_locales" USING btree ("version_title","_locale");
  CREATE UNIQUE INDEX "_awards_v_locales_locale_parent_id_unique" ON "_awards_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "winners_person_idx" ON "winners" USING btree ("person_id");
  CREATE INDEX "winners_award_idx" ON "winners" USING btree ("award_id");
  CREATE INDEX "winners_image_idx" ON "winners" USING btree ("image_id");
  CREATE INDEX "winners_updated_at_idx" ON "winners" USING btree ("updated_at");
  CREATE INDEX "winners_created_at_idx" ON "winners" USING btree ("created_at");
  CREATE UNIQUE INDEX "winners_locales_locale_parent_id_unique" ON "winners_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "people_name_idx" ON "people" USING btree ("name");
  CREATE INDEX "people_updated_at_idx" ON "people" USING btree ("updated_at");
  CREATE INDEX "people_created_at_idx" ON "people" USING btree ("created_at");
  CREATE INDEX "gallery_updated_at_idx" ON "gallery" USING btree ("updated_at");
  CREATE INDEX "gallery_created_at_idx" ON "gallery" USING btree ("created_at");
  CREATE UNIQUE INDEX "gallery_filename_idx" ON "gallery" USING btree ("filename");
  CREATE INDEX "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX "documents_updated_at_idx" ON "documents" USING btree ("updated_at");
  CREATE INDEX "documents_created_at_idx" ON "documents" USING btree ("created_at");
  CREATE UNIQUE INDEX "documents_filename_idx" ON "documents" USING btree ("filename");
  CREATE UNIQUE INDEX "news_years_year_idx" ON "news_years" USING btree ("year");
  CREATE INDEX "news_years_updated_at_idx" ON "news_years" USING btree ("updated_at");
  CREATE INDEX "news_years_created_at_idx" ON "news_years" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_news_id_idx" ON "redirects_rels" USING btree ("news_id");
  CREATE INDEX "exports_updated_at_idx" ON "exports" USING btree ("updated_at");
  CREATE INDEX "exports_created_at_idx" ON "exports" USING btree ("created_at");
  CREATE UNIQUE INDEX "exports_filename_idx" ON "exports" USING btree ("filename");
  CREATE INDEX "exports_texts_order_parent" ON "exports_texts" USING btree ("order","parent_id");
  CREATE INDEX "imports_updated_at_idx" ON "imports" USING btree ("updated_at");
  CREATE INDEX "imports_created_at_idx" ON "imports" USING btree ("created_at");
  CREATE UNIQUE INDEX "imports_filename_idx" ON "imports" USING btree ("filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_awards_id_idx" ON "payload_locked_documents_rels" USING btree ("awards_id");
  CREATE INDEX "payload_locked_documents_rels_winners_id_idx" ON "payload_locked_documents_rels" USING btree ("winners_id");
  CREATE INDEX "payload_locked_documents_rels_people_id_idx" ON "payload_locked_documents_rels" USING btree ("people_id");
  CREATE INDEX "payload_locked_documents_rels_gallery_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery_id");
  CREATE INDEX "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX "payload_locked_documents_rels_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("documents_id");
  CREATE INDEX "payload_locked_documents_rels_news_years_id_idx" ON "payload_locked_documents_rels" USING btree ("news_years_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_updated_at_idx" ON "payload_query_presets" USING btree ("updated_at");
  CREATE INDEX "payload_query_presets_created_at_idx" ON "payload_query_presets" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_rels_order_idx" ON "payload_query_presets_rels" USING btree ("order");
  CREATE INDEX "payload_query_presets_rels_parent_idx" ON "payload_query_presets_rels" USING btree ("parent_id");
  CREATE INDEX "payload_query_presets_rels_path_idx" ON "payload_query_presets_rels" USING btree ("path");
  CREATE INDEX "payload_query_presets_rels_users_id_idx" ON "payload_query_presets_rels" USING btree ("users_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_home_hero_block" CASCADE;
  DROP TABLE "pages_blocks_exposed_news_block" CASCADE;
  DROP TABLE "pages_blocks_events_block" CASCADE;
  DROP TABLE "pages_blocks_seperator_block" CASCADE;
  DROP TABLE "pages_blocks_awards_block" CASCADE;
  DROP TABLE "pages_blocks_about_us_block_contacts" CASCADE;
  DROP TABLE "pages_blocks_about_us_block" CASCADE;
  DROP TABLE "pages_blocks_law_block" CASCADE;
  DROP TABLE "pages_blocks_news_archive_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_home_hero_block" CASCADE;
  DROP TABLE "_pages_v_blocks_exposed_news_block" CASCADE;
  DROP TABLE "_pages_v_blocks_events_block" CASCADE;
  DROP TABLE "_pages_v_blocks_seperator_block" CASCADE;
  DROP TABLE "_pages_v_blocks_awards_block" CASCADE;
  DROP TABLE "_pages_v_blocks_about_us_block_contacts" CASCADE;
  DROP TABLE "_pages_v_blocks_about_us_block" CASCADE;
  DROP TABLE "_pages_v_blocks_law_block" CASCADE;
  DROP TABLE "_pages_v_blocks_news_archive_block" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "news_blocks_content_block" CASCADE;
  DROP TABLE "news_blocks_images_block_images" CASCADE;
  DROP TABLE "news_blocks_images_block" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "news_locales" CASCADE;
  DROP TABLE "_news_v_blocks_content_block" CASCADE;
  DROP TABLE "_news_v_blocks_images_block_images" CASCADE;
  DROP TABLE "_news_v_blocks_images_block" CASCADE;
  DROP TABLE "_news_v" CASCADE;
  DROP TABLE "_news_v_locales" CASCADE;
  DROP TABLE "events_blocks_about_event_block" CASCADE;
  DROP TABLE "events_blocks_seperator_block" CASCADE;
  DROP TABLE "events_blocks_winners_block" CASCADE;
  DROP TABLE "events_blocks_gallery_block" CASCADE;
  DROP TABLE "events_blocks_video_block" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_locales" CASCADE;
  DROP TABLE "_events_v_blocks_about_event_block" CASCADE;
  DROP TABLE "_events_v_blocks_seperator_block" CASCADE;
  DROP TABLE "_events_v_blocks_winners_block" CASCADE;
  DROP TABLE "_events_v_blocks_gallery_block" CASCADE;
  DROP TABLE "_events_v_blocks_video_block" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "_events_v_locales" CASCADE;
  DROP TABLE "awards_blocks_awards_hero_block" CASCADE;
  DROP TABLE "awards_blocks_seperator_block" CASCADE;
  DROP TABLE "awards_blocks_award_winner_block" CASCADE;
  DROP TABLE "awards" CASCADE;
  DROP TABLE "awards_locales" CASCADE;
  DROP TABLE "_awards_v_blocks_awards_hero_block" CASCADE;
  DROP TABLE "_awards_v_blocks_seperator_block" CASCADE;
  DROP TABLE "_awards_v_blocks_award_winner_block" CASCADE;
  DROP TABLE "_awards_v" CASCADE;
  DROP TABLE "_awards_v_locales" CASCADE;
  DROP TABLE "winners" CASCADE;
  DROP TABLE "winners_locales" CASCADE;
  DROP TABLE "people" CASCADE;
  DROP TABLE "gallery" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "documents" CASCADE;
  DROP TABLE "news_years" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "exports" CASCADE;
  DROP TABLE "exports_texts" CASCADE;
  DROP TABLE "imports" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "payload_query_presets" CASCADE;
  DROP TABLE "payload_query_presets_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_about_us_block_contacts_icon";
  DROP TYPE "public"."enum_pages_blocks_about_us_block_contacts_target";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_about_us_block_contacts_icon";
  DROP TYPE "public"."enum__pages_v_blocks_about_us_block_contacts_target";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_news_blocks_images_block_number_of_columns";
  DROP TYPE "public"."enum_news_status";
  DROP TYPE "public"."enum__news_v_blocks_images_block_number_of_columns";
  DROP TYPE "public"."enum__news_v_version_status";
  DROP TYPE "public"."enum__news_v_published_locale";
  DROP TYPE "public"."enum_events_year";
  DROP TYPE "public"."enum_events_status";
  DROP TYPE "public"."enum__events_v_version_year";
  DROP TYPE "public"."enum__events_v_version_status";
  DROP TYPE "public"."enum__events_v_published_locale";
  DROP TYPE "public"."enum_awards_status";
  DROP TYPE "public"."enum__awards_v_version_status";
  DROP TYPE "public"."enum__awards_v_published_locale";
  DROP TYPE "public"."enum_winners_year";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_exports_format";
  DROP TYPE "public"."enum_exports_sort_order";
  DROP TYPE "public"."enum_exports_locale";
  DROP TYPE "public"."enum_exports_drafts";
  DROP TYPE "public"."enum_imports_import_mode";
  DROP TYPE "public"."enum_imports_status";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_query_presets_access_read_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_update_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_delete_constraint";
  DROP TYPE "public"."enum_payload_query_presets_related_collection";`)
}
