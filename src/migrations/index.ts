import * as migration_000001_localize_fields from './000001_localize_fields';
import * as migration_20260320_000002_schema_localize from './20260320_000002_schema_localize';
import * as migration_20260320_000003_backfill_published_at from './20260320_000003_backfill_published_at';
import * as migration_20260324_092951 from './20260324_092951';
import * as migration_20260427_fix_gallery_order from './20260427_fix_gallery_order';

export const migrations = [
  {
    up: migration_000001_localize_fields.up,
    down: migration_000001_localize_fields.down,
    name: '000001_localize_fields',
  },
  {
    up: migration_20260320_000002_schema_localize.up,
    down: migration_20260320_000002_schema_localize.down,
    name: '20260320_000002_schema_localize',
  },
  {
    up: migration_20260320_000003_backfill_published_at.up,
    down: migration_20260320_000003_backfill_published_at.down,
    name: '20260320_000003_backfill_published_at',
  },
  {
    up: migration_20260324_092951.up,
    down: migration_20260324_092951.down,
    name: '20260324_092951'
  },
  {
    up: migration_20260427_fix_gallery_order.up,
    down: migration_20260427_fix_gallery_order.down,
    name: '20260427_fix_gallery_order',
  },
];
