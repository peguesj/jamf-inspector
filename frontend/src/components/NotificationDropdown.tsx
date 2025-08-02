import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import type { Notification } from './NotificationToaster';

export const NotificationDropdown: React.FC<{ notifications: Notification[]; onRemove: (id: string) => void }> = ({ notifications, onRemove }) => {
  const [open, setOpen] = React.useState(false);
  const unreadCount = notifications.length;
  return (
    <div className="relative">
      <button
        className="relative p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
        aria-label="Show notifications"
        onClick={() => setOpen((o) => !o)}
      >
        <BellIcon className="w-6 h-6 text-blue-900" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute right-0 mt-2 w-80 bg-white/90 backdrop-blur rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <div className="p-4 border-b text-lg font-semibold text-blue-900">Notifications</div>
            <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
              {notifications.length === 0 ? (
                <li className="p-4 text-gray-500">No notifications</li>
              ) : (
                notifications.map((n) => (
                  <li key={n.id} className="flex items-center gap-3 px-4 py-3">
                    <span className={`w-2 h-2 rounded-full ${n.type === 'success' ? 'bg-green-500' : n.type === 'error' ? 'bg-red-500' : n.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-500'}`} />
                    <span className="text-sm text-gray-900 flex-1">{n.message}</span>
                    <button className="ml-2 text-xs text-gray-500 hover:text-gray-900" onClick={() => onRemove(n.id)} aria-label="Dismiss notification">✕</button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;
