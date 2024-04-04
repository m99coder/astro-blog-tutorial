import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://m99io-astro-blog-tutorial.netlify.app',
  integrations: [preact()],
})
