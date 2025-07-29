/**
 * PatchList - Dashboard patch list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
const PatchList = ({ patches }) => (<div>
    <h2 className="text-xl font-semibold mb-2">Patches</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(patches, null, 2)}
    </pre>
  </div>);
export default PatchList;
