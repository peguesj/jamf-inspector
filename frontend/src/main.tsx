import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider as ThemeProvider } from '@heroui/react';
import App from './App.tsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
