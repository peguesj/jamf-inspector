// Version: 0.1
// Dashboard Component for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../../docs/AUTHORITATIVE.md, ../../PLANNING.md
import React from 'react';
/**
 * @file Dashboard Component
 * @version 0.1
 * @author Jeremiah Pegues
 * @description Jamf Pro ITIL/ITAM Dashboard UI entry point. Strictly typed, functional, and documented.
 * @see ../../docs/AUTHORITATIVE.md
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Policy, Profile, Patch, Group, User, Device, Approval, Feedback } from '../../types/models';

interface DashboardData {
  policies: Policy[];
  profiles: Profile[];
  patches: Patch[];
  groups: Group[];
  users: User[];
  devices: Device[];
  approvals: Approval[];
  feedback: Feedback[];
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [policies, profiles, patches, groups, users, devices, approvals, feedback] = await Promise.all([
          axios.get('/JSSResource/policies'),
          axios.get('/JSSResource/osxconfigurationprofiles'),
          axios.get('/JSSResource/patches'),
          axios.get('/JSSResource/computergroups'),
          axios.get('/JSSResource/users'),
          axios.get('/JSSResource/computers'),
          axios.get('/api/v1/approval'),
          axios.get('/api/v1/feedback'),
        ]);
        setData({
          policies: policies.data,
          profiles: profiles.data,
          patches: patches.data,
          groups: groups.data,
          users: users.data,
          devices: devices.data,
          approvals: approvals.data,
          feedback: feedback.data,
        });
      } catch (err: any) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  // Interactive filtering and drag-and-drop scaffolding
  const [filter, setFilter] = useState<string>('');
  const filteredPolicies = data?.policies?.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) ?? [];

  // Drag-and-drop placeholder logic (to be expanded)
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData('policyId', id.toString());
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const policyId = e.dataTransfer.getData('policyId');
    // ...handle drop logic (e.g., assign to group)...
  };

  // Conflict detection logic (example: policies with same scope/category)
  /**
   * Detects conflicts between items with same scope/category
   * @param items Array of items to check
   * @returns Array of conflict objects
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
   */
  const getConflicts = (items: { id: number; name: string; scope?: string; category?: string }[]) => {
    const conflicts: { id1: number; id2: number; reason: string }[] = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        if (items[i].scope && items[j].scope && items[i].scope === items[j].scope && items[i].category === items[j].category) {
          conflicts.push({ id1: items[i].id, id2: items[j].id, reason: `Same scope/category: ${items[i].scope}/${items[i].category}` });
        }
      }
    }
    return conflicts;
  };

  // Advanced analytics: summary statistics, pilot group assignment, approval workflow, feedback integration
  /**
   * Summary statistics for dashboard resources
   * @type {{ totalPolicies: number; totalProfiles: number; totalConflicts: number }}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
   */
  const summaryStats = {
    totalPolicies: data?.policies?.length ?? 0,
    totalProfiles: data?.profiles?.length ?? 0,
    totalConflicts: (getConflicts(data?.policies ?? []).length + getConflicts(data?.profiles ?? []).length),
  };

  // Pilot group assignment UI
  const [selectedPilotGroup, setSelectedPilotGroup] = useState<string>('');
  const handleAssignPilotGroup = (groupId: string) => {
    setSelectedPilotGroup(groupId);
    alert(`Assigned to pilot group: ${groupId}`);
  };

  // Approval workflow UI
  const [approvalStatus, setApprovalStatus] = useState<'pending'|'approved'|'rejected'>('pending');
  const handleApproval = (status: 'approved'|'rejected') => {
    setApprovalStatus(status);
    alert(`Approval status: ${status}`);
  };

  // Feedback integration UI
  const [feedback, setFeedback] = useState<string>('');
  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  // Analytics logic for duplication/conflict detection and summary statistics
  const getDuplicates = (items: { name: string }[]) => {
    const nameCount: Record<string, number> = {};
    items.forEach(item => {
      nameCount[item.name] = (nameCount[item.name] || 0) + 1;
    });
    return Object.entries(nameCount).filter(([_, count]) => count > 1).map(([name]) => name);
  };
  const duplicatePolicies = getDuplicates(data?.policies ?? []);
  const duplicateProfiles = getDuplicates(data?.profiles ?? []);

  // Conflict detection logic (example: policies with same scope/category)
  // (see above for function definition; duplicate removed per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#cannot_redeclare)
  const policyConflicts = getConflicts(data?.policies ?? []);
  const profileConflicts = getConflicts(data?.profiles ?? []);
  const policyCount = data?.policies?.length ?? 0;
  const profileCount = data?.profiles?.length ?? 0;
  const patchCount = data?.patches?.length ?? 0;
  const groupCount = data?.groups?.length ?? 0;
  const userCount = data?.users?.length ?? 0;
  const deviceCount = data?.devices?.length ?? 0;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Jamf Pro ITIL/ITAM Dashboard</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter policies by name..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Summary Statistics</h2>
          <ul className="text-sm">
            <li>Total Policies: {summaryStats.totalPolicies}</li>
            <li>Total Profiles: {summaryStats.totalProfiles}</li>
            <li>Total Conflicts: {summaryStats.totalConflicts}</li>
            <li>Patches: {patchCount}</li>
            <li>Groups: {groupCount}</li>
            <li>Users: {userCount}</li>
            <li>Devices: {deviceCount}</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Duplicate Policies/Profiles</h2>
          <div className="text-sm">
            <div>Policies: {duplicatePolicies.length > 0 ? duplicatePolicies.join(', ') : 'None'}</div>
            <div>Profiles: {duplicateProfiles.length > 0 ? duplicateProfiles.join(', ') : 'None'}</div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Conflicts & Remediation</h2>
          <div className="text-sm">
            <div>Policy Conflicts: {policyConflicts.length > 0 ? policyConflicts.map(c => (
              <div key={`${c.id1}-${c.id2}`} className="mb-1">
                #{c.id1} & #{c.id2} ({c.reason})
                <button className="ml-2 px-2 py-1 bg-green-200 rounded text-xs" onClick={() => alert(`Remediate conflict between #${c.id1} and #${c.id2}`)}>Remediate</button>
              </div>
            )) : 'None'}</div>
            <div>Profile Conflicts: {profileConflicts.length > 0 ? profileConflicts.map(c => (
              <div key={`${c.id1}-${c.id2}`} className="mb-1">
                #{c.id1} & #{c.id2} ({c.reason})
                <button className="ml-2 px-2 py-1 bg-green-200 rounded text-xs" onClick={() => alert(`Remediate conflict between #${c.id1} and #${c.id2}`)}>Remediate</button>
              </div>
            )) : 'None'}</div>
            <div className="mt-4">
              <label>Pilot Group Assignment:</label>
              <select value={selectedPilotGroup} onChange={e => handleAssignPilotGroup(e.target.value)} className="ml-2 px-2 py-1">
                <option value="">Select group</option>
                {data?.groups?.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <label>Approval Workflow:</label>
              <button className="ml-2 px-2 py-1 bg-blue-200 rounded text-xs" onClick={() => handleApproval('approved')}>Approve</button>
              <button className="ml-2 px-2 py-1 bg-red-200 rounded text-xs" onClick={() => handleApproval('rejected')}>Reject</button>
              <span className="ml-2">Status: {approvalStatus}</span>
            </div>
            <div className="mt-4">
              <label>Feedback:</label>
              <input type="text" value={feedback} onChange={e => setFeedback(e.target.value)} className="ml-2 px-2 py-1 border rounded" />
              <button className="ml-2 px-2 py-1 bg-yellow-200 rounded text-xs" onClick={handleFeedbackSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Policies (Filtered & Draggable)</h2>
          <div>
            {filteredPolicies.map(policy => (
              <div
                key={policy.id}
                draggable
                onDragStart={e => handleDragStart(e, policy.id)}
                className="bg-gray-100 p-2 rounded text-xs mb-2 cursor-move"
              >
                {policy.name}
              </div>
            ))}
          </div>
        </div>
        <div onDrop={handleDrop} onDragOver={e => e.preventDefault()} className="bg-gray-50 p-2 rounded min-h-[100px]">
          <h2 className="text-xl font-semibold mb-2">Drop Zone (Assign to Group)</h2>
          {/* Drop logic to be expanded */}
        </div>
        {/* ...existing code for other resources... */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Profiles</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.profiles, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Patches</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.patches, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Groups</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.groups, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.users, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Devices</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.devices, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Approvals</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.approvals, null, 2)}</pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Feedback</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(data?.feedback, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
