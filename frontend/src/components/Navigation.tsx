import React from 'react';
import { HomeIcon, Cog6ToothIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation - Main sidebar navigation for Jamf Inspector dashboard
 * @see https://www.heroui.com/docs/components/navigation
 */
export interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const navItems: NavigationItem[] = [
  { label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, to: '/' },
  { label: 'Devices', icon: <UsersIcon className="w-5 h-5" />, to: '/devices' },
  { label: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" />, to: '/settings' },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="bg-blue-950 text-white w-56 min-h-screen flex flex-col py-6 px-2 shadow-lg">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-800 transition-colors ${location.pathname === item.to ? 'bg-blue-800 font-semibold' : ''}`}
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
