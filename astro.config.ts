import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://rodeo.dev',
  vite: { plugins: [tailwindcss()] },
  integrations: [alpinejs(), icon({ iconDir: 'src/assets/icons' })],
  experimental: {
    svgo: true,
    fonts: [
      { name: 'Source Sans 3', type: 'sans', weights: '200 900' },
      { name: 'Source Serif 4', type: 'serif', weights: '200 900' },
      { name: 'Source Code Pro', type: 'mono', weights: '200 900' },
    ].map((font) => ({
      provider: fontProviders.fontsource(),
      name: font.name,
      cssVariable: `--font-${font.type}`,
      weights: [font.weights],
      subsets: ['latin'],
      styles: ['normal'],
    })),
  },
});
