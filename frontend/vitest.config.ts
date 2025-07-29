import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './frontend/vitest.setup.ts',
    include: [
    //   'frontend/components/__tests__/**/*.{test,spec}.{ts,tsx,js,jsx}',
      '**/__tests__/**/*.{test,spec}.{ts,tsx,js,jsx}'
    ],
    exclude: [
      'dist',
      'node_modules',
      '**/*.d.ts'
    ]
  }
});
