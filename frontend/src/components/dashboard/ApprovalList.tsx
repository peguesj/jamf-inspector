/**
 * ApprovalList - Dashboard approval list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
import type { JamfApproval } from '../../../types/models.js';

interface Props {
  approvals: JamfApproval[];
};

const ApprovalList: React.FC<Props> = ({ approvals }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Approvals</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(approvals, null, 2)}
    </pre>
  </div>
);

export default ApprovalList;
