import React from 'react';

/**
 * AppFrame - Dashboard application frame with header, main row, and footer
 * Uses Tailwind and HeroUI design standards
 */
export interface AppFrameProps {
  header?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  footer?: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ header, left, right, footer }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header className="p-4 border-b border-gray-200 flex items-center justify-between bg-white shadow-sm">
      {header}
    </header>
    <main className="flex-1 flex flex-col md:flex-row gap-6 p-4 max-w-7xl mx-auto w-full">
      <section className="flex-1">{left}</section>
      <aside className="w-full md:w-80">{right}</aside>
    </main>
    <footer className="p-4 border-t border-gray-200 text-xs text-center text-gray-500 bg-white">
      {footer}
    </footer>
  </div>
);

export default AppFrame;
