import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://quique-such.github.io',
  base: '/portafolio',
  integrations: [tailwind()],
  devToolbar: { enabled: false },
});
