import React from 'react';
import { Card } from '@heroui/react';

/**
 * SettingsPanel - Dashboard settings panel using HeroUI Card
 * @see https://www.heroui.com/docs/components/card
 */
const SettingsPanel: React.FC = () => (
  <Card title="Settings" className="mb-6">
    <form className="space-y-4">
      <div>
        <label htmlFor="api-url" className="block text-sm font-medium">API URL</label>
        <input id="api-url" name="api-url" className="mt-1 w-full border rounded p-2" />
      </div>
      <div>
        <label htmlFor="api-key" className="block text-sm font-medium">API Key</label>
        <input id="api-key" name="api-key" className="mt-1 w-full border rounded p-2" />
      </div>
      <button className="px-4 py-2 rounded bg-blue-600 text-white" type="submit">Save</button>
    </form>
  </Card>
);

export default SettingsPanel;
