import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for Jamf Inspector frontend.
 * - Uses React and TypeScript
 * - Strict typing and functional standards enforced
 * - See /docs/AUTHORITATIVE.md and /.github/instructions/copilot-instructions.md for standards
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
      '@': '/frontend',
    },
  },
});
