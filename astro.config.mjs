import { defineConfig } from 'astro/config';
import 'dotenv/config';

const base = process.env.BASE ?? 'https://nuazsa.github.io/SimplePortofolio/';

export default defineConfig({
  site: 'https://nuazsa.github.io/SimplePortofolio/',
  base: base,
});
