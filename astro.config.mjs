import { defineConfig } from 'astro/config';
import 'dotenv/config';

const isDev = process.env.NODE_ENV === 'development';
const base = isDev ? '/' : '/nuazsa.github.io';

export default defineConfig({
  site: 'https://nuazsa.github.io/SimplePortofolio/',
  base: base,
});
