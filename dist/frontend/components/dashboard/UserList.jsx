/**
 * UserList - Dashboard user list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
const UserList = ({ users }) => (<div>
    <h2 className="text-xl font-semibold mb-2">Users</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(users, null, 2)}
    </pre>
  </div>);
export default UserList;
