/**
 * PolicyList - Dashboard policy list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
import type { JamfPolicy } from '../../../types/models.js';

interface Props {
  policies: JamfPolicy[];
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, policyId: string) => void;
};

const PolicyList: React.FC<Props> = ({ policies, onDragStart }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Policies (Filtered & Draggable)</h2>
    <div>
      {policies.map(policy => (
        <div
          key={policy.id}
          draggable
          onDragStart={e => onDragStart && onDragStart(e, String(policy.id))}
          className="bg-gray-100 p-2 rounded text-xs mb-2 cursor-move"
        >
          {policy.name}
        </div>
      ))}
    </div>
  </div>
);

export default PolicyList;
