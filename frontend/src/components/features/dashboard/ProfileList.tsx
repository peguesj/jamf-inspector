import React from 'react';
import type { JamfProfile } from '../../../../../types/models.ts';

/**
 * ProfileList - Lists Jamf configuration profiles
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const ProfileList: React.FC<{ profiles: JamfProfile[] }> = ({ profiles }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Profiles</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {profiles.map((p) => (
        <li key={p.id} className="p-2 flex justify-between">
          <span>{p.name}</span>
          <span className="text-xs text-gray-500">{p.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProfileList;
