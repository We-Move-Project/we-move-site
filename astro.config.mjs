// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://we-move-project.github.io',
  // Only needed for the GitHub Pages project-site deploy (see .github/workflows/deploy.yml) —
  // locally we want the site reachable at the plain root, not /we-move-site/.
  base: process.env.GITHUB_ACTIONS ? '/we-move-site/' : '/',
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.astro/**'],
      },
    },
  },
});
