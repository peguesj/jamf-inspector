
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite config for Jamf Inspector Dashboard frontend
 * - Uses React and TypeScript
 * - JSX enabled
 * - See /docs/AUTHORITATIVE.md and /.github/instructions/copilot-instructions.md
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/',
    },
  },
});
