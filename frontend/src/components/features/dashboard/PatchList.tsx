import React from 'react';
import type { JamfPatch } from '../../../../../types/models.ts';

/**
 * PatchList - Lists Jamf patches
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const PatchList: React.FC<{ patches: JamfPatch[] }> = ({ patches }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Patches</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {patches.map((p) => (
        <li key={p.id} className="p-2 flex justify-between">
          <span>{p.name}</span>
          <span className="text-xs text-gray-500">{p.status}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PatchList;
