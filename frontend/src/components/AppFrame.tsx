
import React, { useState } from 'react';
import Header from './Header.tsx';
import Navigation from './Navigation.tsx';

/**
 * AppFrame - Main layout shell for Jamf Inspector dashboard
 * Provides header, sidebar, and main content area.
 * @see https://www.heroui.com/docs/components/layout
 */

const AppFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showAssistant, setShowAssistant] = useState(false);
  // TODO: Wire up real user/server/version/lastUpdated from state or API
  const user = { name: 'Admin', email: 'admin@example.com' };
  const server = 'Jamf Pro';
  const version = 'v10.44.1';
  const lastUpdated = new Date().toLocaleString();
  const handleReload = () => window.location.reload();
  const handleOpenAssistant = () => setShowAssistant(true);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        user={user}
        server={server}
        version={version}
        lastUpdated={lastUpdated}
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

export default AppFrame;
