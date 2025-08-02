import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider as ThemeProvider } from '@heroui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadConfig } from './config';

const JamfInspectorRoot: React.FC = () => {
  const [config, setConfig] = useState<any>(null);
  const [configFileLocation, setConfigFileLocation] = useState<string>('');
  const [error, setError] = useState<string>('');
  useEffect(() => {
    let timeout: any;
    loadConfig()
      .then(({ config, configFileLocation }) => {
        setConfig(config);
        setConfigFileLocation(configFileLocation || '');
      })
      .catch(() => {
        setError('Configuration not found. Redirecting to settings...');
        timeout = setTimeout(() => {
          window.location.href = '/settings';
        }, 3000);
      });
    return () => clearTimeout(timeout);
  }, []);
  if (error) {
    return <div className="flex flex-col items-center justify-center h-screen text-center"><div className="text-lg text-red-600 mb-2">{error}</div><div className="text-sm text-gray-500">Please define your Jamf Pro server and API credentials.</div></div>;
  }
  if (!config) {
    return <div className="flex items-center justify-center h-screen"><span>Loading configuration...</span></div>;
  }
  // Provide config via context if needed
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <JamfInspectorRoot />
    </React.StrictMode>
  );
}
