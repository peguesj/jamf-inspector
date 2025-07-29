import React from 'react';

import { Button } from '@heroui/react';

/**
 * Layout - Main dashboard layout using HeroUI and Tailwind
 * @see https://www.heroui.com/docs/components/layout
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header className="p-4 border-b border-gray-200 flex items-center justify-between bg-white shadow-sm">
      <h1 className="text-2xl font-bold">Jamf Inspector Dashboard</h1>
      <nav className="flex gap-2">
        <a href="/">
          <Button variant="ghost">Dashboard</Button>
        </a>
        <a href="/setup">
          <Button variant="ghost">Setup</Button>
        </a>
        <a href="/settings">
          <Button variant="ghost">Settings</Button>
        </a>
      </nav>
    </header>
    <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
      {children}
    </main>
    <footer className="p-4 border-t border-gray-200 text-xs text-center text-gray-500 bg-white">
      &copy; 2025 Jamf Inspector &mdash; <a href="/docs/AUTHORITATIVE.md" className="underline">Docs</a>
    </footer>
  </div>
);

export default Layout;
