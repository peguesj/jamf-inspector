import React from 'react';
import type { JamfUser } from '../../../../../types/models.ts';

/**
 * UserList - Lists Jamf users
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const UserList: React.FC<{ users: JamfUser[] }> = ({ users }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Users</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {users.length === 0 ? (
        <li className="p-2 text-gray-500">No users found.</li>
      ) : (
        users.map((u) => (
          <li key={u.id} className="p-2 flex justify-between">
            <span>{u.username}</span>
            <span className="text-xs text-gray-500">{u.email ? u.email : ''}</span>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default UserList;
