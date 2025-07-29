import React from 'react';
import type { JamfGroup } from '../../../../../types/models.ts';

/**
 * GroupList - Lists Jamf groups
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const GroupList: React.FC<{ groups: JamfGroup[] }> = ({ groups }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Groups</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {groups.map((g) => (
        <li key={g.id} className="p-2 flex justify-between">
          <span>{g.name}</span>
          <span className="text-xs text-gray-500">{g.is_smart ? 'Smart' : 'Static'}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default GroupList;
