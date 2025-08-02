import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: [
      'frontend/components/__tests__/**/*.{test,spec}.{ts,tsx,js,jsx}',
      'types/__tests__/**/*.{test,spec}.{ts,tsx,js,jsx}',
      'backend/__tests__/**/*.{test,spec}.{ts,tsx,js,jsx}'
    ],
    exclude: [
      'dist',
      'node_modules',
      '**/*.d.ts'
    ]
  }
});
