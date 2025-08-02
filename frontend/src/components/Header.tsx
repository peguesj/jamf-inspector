import React from 'react';
import { FiTerminal, FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { SparklesIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

/**
 * Header - Dashboard header with user info, server, version, status, reload, and AI assistant trigger
 * @see https://www.heroui.com/docs/components/navigation
 */

import { BoltIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export type LLMProvider = 'Gemini' | 'Ollama' | 'OpenAI' | 'AzureOpenAI' | 'DeepSeek' | 'Qwen' | 'None';
export type LLMStatus = 'online' | 'offline' | 'warning' | 'loading';

export interface HeaderProps {
  user?: { name: string; email: string };
  server?: string;
  version?: string;
  lastUpdated?: string;
  loading?: boolean;
  error?: string;
  llmProvider?: LLMProvider;
  llmStatus?: LLMStatus;
  llmState?: string;
  onReload: () => void;
  onOpenAssistant: () => void;
}



const getStatusColor = (status: LLMStatus) => {
  switch (status) {
    case 'online': return 'bg-green-500';
    case 'offline': return 'bg-red-500';
    case 'warning': return 'bg-yellow-400';
    case 'loading': return 'bg-blue-400 animate-pulse';
    default: return 'bg-gray-400';
  }
};

const Header: React.FC<HeaderProps> = ({
  user = { name: 'Unknown', email: '' },
  server = 'Jamf Pro',
  version = 'v?.?',
  lastUpdated = '',
  loading = false,
  error = '',
  llmProvider = 'None',
  llmStatus = 'offline',
  llmState = '',
  onReload,
  onOpenAssistant,
}) => {
  const [showFullError, setShowFullError] = useState(false);
  return (
    <header
      className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow"
      role="banner"
      aria-label="Dashboard Header"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight" aria-label="Jamf Inspector Dashboard Title">Jamf Inspector</h1>
        <span className="text-xs opacity-80" aria-label="Server Name">{server} <span className="ml-2">{version}</span></span>
        <span className="text-xs opacity-60 ml-4" aria-label="Last Updated">Last updated: {lastUpdated || 'N/A'}</span>
        <button
          aria-label={loading ? 'Reloading data' : 'Reload data'}
          className="ml-2 p-1 rounded hover:bg-blue-800 focus:outline-none focus:ring"
          onClick={onReload}
          type="button"
          disabled={loading}
        >
          <ArrowPathIcon className={`w-5 h-5${loading ? ' animate-spin' : ''}`} />
        </button>
        {/* Show Logs button */}
        <button type="button" className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs opacity-70" onClick={() => {/* open logs modal/panel */}} aria-label="Show Logs">
          <FiTerminal className="text-base opacity-80" /> Show Logs
        </button>
        {/* Error display/truncation */}
        {error && (
          <div className="relative">
            <button type="button" className="flex items-center gap-1 text-red-600 px-2 py-1 rounded bg-red-50 text-xs opacity-70" onClick={() => setShowFullError(e => !e)} aria-label="Show Error Details">
              <FiAlertCircle className="text-base opacity-80" />
              {error.length > 40 ? `${error.slice(0, 40)}...` : error}
            </button>
            {showFullError && (
              <div className="absolute right-0 mt-2 w-96 bg-white border rounded shadow-lg p-4 z-10">
                <div className="font-bold text-red-600 mb-2">Error Details</div>
                <div className="text-xs whitespace-pre-wrap">{error}</div>
                <button type="button" className="mt-2 px-3 py-1 bg-gray-200 rounded" onClick={() => setShowFullError(false)}>Close</button>
              </div>
            )}
          </div>
        )}
        {/* LLM Provider Status */}
      <div className="flex items-center gap-2 ml-6">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-4 h-4 rounded-full border-2 border-white ${getStatusColor(llmStatus)}`}
          aria-label={`LLM Status: ${llmStatus}`}
        />
        <BoltIcon className="w-5 h-5 text-white" />
        <span className="text-xs font-semibold opacity-70" aria-label="LLM Provider">{llmProvider}</span>
        {llmState && <span className="text-xs opacity-60 ml-1">{llmState}</span>}
      </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium" aria-label="User Name">{user.name}</span>
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
};

export default Header;
