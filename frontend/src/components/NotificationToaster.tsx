import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

const iconMap = {
  success: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
  error: <ExclamationCircleIcon className="w-6 h-6 text-red-500" />,
  info: <CheckCircleIcon className="w-6 h-6 text-blue-500" />,
  warning: <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />,
};

export const NotificationToaster: React.FC<{ notifications: Notification[]; onRemove: (id: string) => void }> = ({ notifications, onRemove }) => (
  <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
    <AnimatePresence>
      {notifications.map((n) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg bg-white/80 backdrop-blur border border-gray-200"
        >
          {iconMap[n.type]}
          <span className="text-sm font-medium text-gray-900">{n.message}</span>
          <button className="ml-2 text-xs text-gray-500 hover:text-gray-900" onClick={() => onRemove(n.id)} aria-label="Dismiss notification">✕</button>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

export default NotificationToaster;
