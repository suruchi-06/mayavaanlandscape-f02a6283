import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { cloudflare } from '@cloudflare/vite-plugin'; // Since you are hosting on Cloudflare Pages

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    cloudflare()
  ],
});
