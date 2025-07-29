import { QueryClient } from '@tanstack/react-query';

/**
 * queryClient - Centralized React Query client for Jamf Inspector
 * Configured for robust, local, client-side caching and background sync.
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/clients
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: true,
      retry: 2,
    },
  },
});
