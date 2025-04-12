import { defineConfig } from 'astro/config';
import 'dotenv/config';

const isDev = process.env.NODE_ENV === 'development';
const base = isDev ? '/' : '/SimplePortofolio/';

export default defineConfig({
  site: 'https://nuazsa.github.io/SimplePortofolio/',
  base: base,
});
