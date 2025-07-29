import React from 'react';
import { SparklesIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

/**
 * Header - Dashboard header with user info, server, version, status, reload, and AI assistant trigger
 * @see https://www.heroui.com/docs/components/navigation
 */
export interface HeaderProps {
  user?: { name: string; email: string };
  server?: string;
  version?: string;
  lastUpdated?: string;
  onReload: () => void;
  onOpenAssistant: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user = { name: 'Unknown', email: '' },
  server = 'Jamf Pro',
  version = 'v?.?',
  lastUpdated = '',
  onReload,
  onOpenAssistant,
}) => (
  <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold tracking-tight">Jamf Inspector</h1>
      <span className="text-xs opacity-80">{server} <span className="ml-2">{version}</span></span>
      <span className="text-xs opacity-60 ml-4">Last updated: {lastUpdated || 'N/A'}</span>
      <button
        aria-label="Reload data"
        className="ml-2 p-1 rounded hover:bg-blue-800 focus:outline-none focus:ring"
        onClick={onReload}
        type="button"
      >
        <ArrowPathIcon className="w-5 h-5" />
      </button>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">{user.name}</span>
      <button
        aria-label="Open AI Assistant"
        className="ml-2 p-1 rounded hover:bg-blue-800 focus:outline-none focus:ring"
        onClick={onOpenAssistant}
        type="button"
      >
        <SparklesIcon className="w-6 h-6 text-yellow-300" />
      </button>
    </div>
  </header>
);

export default Header;
