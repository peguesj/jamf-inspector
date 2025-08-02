import React, { createContext, useContext, useState, useCallback } from 'react';

export interface GlobalStatus {
  loading: boolean;
  error: string;
  lastUpdated: string;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setLastUpdated: (lastUpdated: string) => void;
}

const GlobalStatusContext = createContext<GlobalStatus | undefined>(undefined);

export const GlobalStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  const setLoadingCb = useCallback((l: boolean) => setLoading(l), []);
  const setErrorCb = useCallback((e: string) => setError(e), []);
  const setLastUpdatedCb = useCallback((d: string) => setLastUpdated(d), []);

  return (
    <GlobalStatusContext.Provider value={{ loading, error, lastUpdated, setLoading: setLoadingCb, setError: setErrorCb, setLastUpdated: setLastUpdatedCb }}>
      {children}
    </GlobalStatusContext.Provider>
  );
};

export const useGlobalStatus = () => {
  const ctx = useContext(GlobalStatusContext);
  if (!ctx) throw new Error('useGlobalStatus must be used within GlobalStatusProvider');
  return ctx;
};
