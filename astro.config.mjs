import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'one-dark-pro',
      // Manually specify langs
      // Note: Shiki has countless langs built-in, including .astro!
      langs: ['astro'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
