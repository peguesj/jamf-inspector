import './style.css';
import '@heroui/react/dist/heroui.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * Entry point for Jamf Inspector Dashboard frontend.
 * - Strictly typed, functional, documented
 * - See /docs/AUTHORITATIVE.md and /.github/instructions/copilot-instructions.md
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
