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
import { enableSearch } from './backend/plugins/enable-search'
import { Images } from './backend/collections/uploads/Images'
import { Users } from './backend/collections/authentication/Users'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { News } from './backend/collections/posts/News'
import { Events } from './backend/collections/posts/Events'
import { Awards } from './backend/collections/posts/Awards'
import { enableNodemailer } from './backend/plugins/enable-nodemailer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [],
  collections: [Pages, News, Events, Awards, Gallery, Images, Documents, Users],
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
  }),
  sharp,
  plugins: [enableRedirects(), enableImportAndExport()],
})
