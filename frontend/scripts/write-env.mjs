import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const outputPath = resolve(rootDir, 'src/environments/environment.ts');
const apiBaseUrl = (process.env.FRONTEND_API_URL || 'http://localhost:3000').replace(/\/+$/, '');

mkdirSync(dirname(outputPath), { recursive: true });

writeFileSync(
  outputPath,
  `export const environment = {
  apiBaseUrl: '${apiBaseUrl}'
};
`,
  'utf8'
);
