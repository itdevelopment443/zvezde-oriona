import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Pages } from './backend/collections/posts/Pages'
import { Documents } from './backend/collections/uploads/Documents'
import { Gallery } from './backend/collections/uploads/Gallery'
import { enableI18n } from './backend/plugins/enable-I18n'
import { enableImportAndExport } from './backend/plugins/enable-import-export'
import { enableLocalization } from './backend/plugins/enable-localization'
import { enableRedirects } from './backend/plugins/enable-redirects'
import { Images } from './backend/collections/uploads/Images'
import { Users } from './backend/collections/authentication/Users'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { News } from './backend/collections/posts/News'
import { Events } from './backend/collections/posts/Events'
import { Awards } from './backend/collections/posts/Awards'
import { Winners } from './backend/collections/people/Winners'
import { People } from './backend/collections/people/People'
import { enableNodemailer } from './backend/plugins/enable-nodemailer'
import { NewsYears } from './backend/collections/categories/news/news-years'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeNavLinks: ['@/backend/components/admin/AdminNavHeader#AdminNavHeader'],
    },
  },
  globals: [],
  collections: [
    Pages,
    News,
    Events,
    Awards,
    Winners,
    People,
    Gallery,
    Images,
    Documents,
    NewsYears,
    Users,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: enableNodemailer(),
  localization: enableLocalization(),
  i18n: enableI18n(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  sharp,
  plugins: [enableRedirects(), enableImportAndExport()],
})
