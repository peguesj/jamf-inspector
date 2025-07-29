import React from 'react';
import type { JamfApproval } from '../../../../../types/models.ts';

/**
 * ApprovalList - Lists approval workflow items
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const ApprovalList: React.FC<{ approvals: JamfApproval[] }> = ({ approvals }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Approvals</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {approvals.map((a) => (
        <li key={a.id} className="p-2 flex justify-between">
          <span>{a.item}</span>
          <span className="text-xs text-gray-500">{a.status}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ApprovalList;
