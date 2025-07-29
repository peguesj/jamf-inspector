// import React from 'react';
// import { HeroUIProvider } from '@heroui/react';

/**
 * AppFrame - Main layout shell for Jamf Inspector dashboard
 * Provides header, sidebar, and main content area.
 * @see https://www.heroui.com/docs/components/layout
 */
const AppFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <HeroUIProvider>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow">
        <h1 className="text-2xl font-bold tracking-tight">Jamf Inspector</h1>
        <span className="text-sm opacity-80">AI-Assisted ITAM & SPM Dashboard</span>
      </header>
      <div className="flex flex-1">
        <aside className="w-56 bg-blue-800 text-white flex flex-col p-4 gap-2">
          <nav className="flex flex-col gap-2">
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Dashboard</a>
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Policies</a>
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Profiles</a>
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Devices</a>
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Users</a>
            <a href="#" className="hover:bg-blue-700 rounded px-3 py-2">Settings</a>
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
//   </HeroUIProvider>
);

export default AppFrame;
