import viteReact from '@vitejs/plugin-react';
/**
 * Vite config for Jamf Inspector Dashboard frontend
 * - Uses React and TypeScript
 * - JSX enabled
 * - See /docs/AUTHORITATIVE.md and /.github/instructions/copilot-instructions.md
 */
export default {
    plugins: [viteReact()],
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
    esbuild: {
        jsx: 'automatic',
    },
};
