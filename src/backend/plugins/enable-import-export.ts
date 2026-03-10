import { importExportPlugin } from '@payloadcms/plugin-import-export'

export const enableImportAndExport = () => {
  return importExportPlugin({
    collections: [],
  })
}
