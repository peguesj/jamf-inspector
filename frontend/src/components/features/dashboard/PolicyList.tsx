import React from 'react';
import type { JamfPolicy } from '../../../../../types/models.ts';

/**
 * PolicyList - Lists Jamf policies
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const PolicyList: React.FC<{ policies: JamfPolicy[] }> = ({ policies }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Policies</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {policies.map((p) => (
        <li key={p.id} className="p-2 flex justify-between">
          <span>{p.name}</span>
          <span className="text-xs text-gray-500">{p.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PolicyList;
