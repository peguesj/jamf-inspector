import React from 'react';

// Generic Home SVG icon as fallback
const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || ''} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width={20} height={20}>
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z" />
  </svg>
);

/**
 * SidebarNavigation - Modern, accessible sidebar navigation for Jamf Inspector
 * Uses HeroUI and Tailwind for styling and accessibility
 * @see https://www.heroui.com/docs/components/navigation
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: <HomeIcon className="w-5 h-5" /> },
  { label: 'Policies', href: '/policies' },
  { label: 'Profiles', href: '/profiles' },
  { label: 'Devices', href: '/devices' },
  { label: 'Users', href: '/users' },
  { label: 'Settings', href: '/settings' },
  { label: 'Docs', href: '/docs/AUTHORITATIVE.md' },
];

const SidebarNavigation: React.FC = () => (
  <nav aria-label="Main navigation" className="h-full flex flex-col gap-2 p-2 bg-white border-r border-gray-200 shadow-sm min-w-[180px]">
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-50 focus:bg-blue-100 focus:outline-none text-gray-800 font-medium transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SidebarNavigation;
