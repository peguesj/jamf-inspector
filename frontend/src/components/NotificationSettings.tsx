import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

/**
 * NotificationSettings - Settings for notifications
 */
const NotificationSettings: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [webhook, setWebhook] = useState('');

  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold"><FaBell /> Notifications</div>
      <label className="block text-sm font-medium">Enabled</label>
      <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
      <label className="block text-sm font-medium">Webhook URL</label>
      <input type="text" value={webhook} onChange={e => setWebhook(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="https://hooks.example.com/notify" />
    </div>
  );
};

export default NotificationSettings;
