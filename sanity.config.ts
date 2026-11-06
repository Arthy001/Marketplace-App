'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'PRIME NEXT TECH Studio',
  projectId,
  dataset,
  schema,
  plugins: [structureTool()],
});
