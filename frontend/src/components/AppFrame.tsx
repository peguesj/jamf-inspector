

import React from 'react';
import Header from './Header.tsx';
import Navigation from './Navigation.tsx';
import { useQuery } from '@tanstack/react-query';
import { fetchServerInfo } from '../api/server';
import { GlobalStatusProvider, useGlobalStatus } from '../context/GlobalStatusContext';
import type { JamfServerInfo } from '../../../types/models';

/**
 * AppFrame - Main layout shell for Jamf Inspector dashboard
 * Provides header, sidebar, and main content area.
 * @see https://www.heroui.com/docs/components/layout
 */


const AppFrameInner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showAssistant, setShowAssistant] = React.useState(false);
  const { loading, error, setLoading, setError, lastUpdated, setLastUpdated } = useGlobalStatus();
  // Fetch server info (name, version, lastUpdated)
  const { data: serverInfo, isLoading, error: serverError, refetch } = useQuery<JamfServerInfo>({
    queryKey: ['serverInfo'],
    queryFn: fetchServerInfo,
  });

  React.useEffect(() => {
    setLoading(isLoading);
    if (serverInfo) {
      setLastUpdated(serverInfo.lastUpdated);
      setError('');
    }
    if (serverError) {
      setError((serverError as any)?.message || 'Failed to load server info');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, serverInfo, serverError]);
  React.useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
  const handleReload = () => {
    setLoading(true);
    refetch();
  };
  const handleOpenAssistant = () => setShowAssistant(true);
  // Placeholder user info (replace with real user context if available)
  const user = { name: 'Admin', email: 'admin@example.com' };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        user={user}
        server={serverInfo && 'server' in serverInfo ? serverInfo.server : 'Jamf Pro'}
        version={serverInfo && 'version' in serverInfo ? serverInfo.version : 'v?.?'}
        lastUpdated={serverInfo && 'lastUpdated' in serverInfo ? serverInfo.lastUpdated : lastUpdated}
        loading={loading}
        error={error || (serverError as any)?.message}
        onReload={handleReload}
        onOpenAssistant={handleOpenAssistant}
      />
      <div className="flex flex-1">
        <Navigation />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
      {/* TODO: Render ChatAssistant as a sliding panel when showAssistant is true */}
    </div>
  );
};

const AppFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalStatusProvider>
    <AppFrameInner>{children}</AppFrameInner>
  </GlobalStatusProvider>
);

export default AppFrame;
