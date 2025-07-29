/**
 * ProfileList - Dashboard profile list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
const ProfileList = ({ profiles }) => (<div>
    <h2 className="text-xl font-semibold mb-2">Profiles</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(profiles, null, 2)}
    </pre>
  </div>);
export default ProfileList;
