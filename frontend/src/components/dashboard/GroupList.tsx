/**
 * GroupList - Dashboard group list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
import type { JamfGroup } from '../../../types/models.js';

interface Props {
  groups: JamfGroup[];
};

const GroupList: React.FC<Props> = ({ groups }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Groups</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(groups, null, 2)}
    </pre>
  </div>
);

export default GroupList;
