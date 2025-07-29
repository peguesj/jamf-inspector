import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
/**
 * Entry point for Jamf Inspector Dashboard frontend.
 * - Strictly typed, functional, documented
 * - See /docs/AUTHORITATIVE.md and /.github/instructions/copilot-instructions.md
 */
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App />
  </React.StrictMode>);
