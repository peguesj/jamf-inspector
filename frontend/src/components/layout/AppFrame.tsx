import React from 'react';

/**
 * AppFrame - Dashboard application frame with header, main row, and footer
 * Uses Tailwind and HeroUI design standards
 */

export interface AppFrameProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  footer?: React.ReactNode;
}


const AppFrame: React.FC<AppFrameProps> = ({ header, sidebar, left, right, footer }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header className="p-4 border-b border-gray-200 flex items-center justify-between bg-white shadow-sm">
      {header}
    </header>
    <div className="flex flex-1 w-full max-w-7xl mx-auto">
      {sidebar && (
        <aside className="hidden md:block w-48 lg:w-56 xl:w-64 bg-white border-r border-gray-200">
          {sidebar}
        </aside>
      )}
      <main className="flex-1 flex flex-col md:flex-row gap-6 p-4">
        <section className="flex-1">{left}</section>
        <aside className="w-full md:w-80">{right}</aside>
      </main>
    </div>
    <footer className="p-4 border-t border-gray-200 text-xs text-center text-gray-500 bg-white">
      {footer}
    </footer>
  </div>
);

export default AppFrame;
