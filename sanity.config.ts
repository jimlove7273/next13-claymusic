import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import schemas from './sanity/schemas'

export default defineConfig({
  title: 'Clay Music Admin',
  basePath: '/admin',
  projectId: '4xb90zh6',
  apiVersion: '2023-05-12',
  dataset: 'production',
  plugins: [deskTool()],
  schema: { types: schemas}
});
