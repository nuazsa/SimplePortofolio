import { defineConfig } from 'astro/config';
import 'dotenv/config';

const isDev = process.env.NODE_ENV === 'development';
const base = isDev ? '/' : (process.env.BASE);

export default defineConfig({
  base: base,
});
