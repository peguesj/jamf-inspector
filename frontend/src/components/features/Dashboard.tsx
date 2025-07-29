import React from 'react';
import SummaryStatsComponent from './dashboard/SummaryStats.js';
import PolicyList from './dashboard/PolicyList.js';
import ProfileList from './dashboard/ProfileList.js';
import PatchList from './dashboard/PatchList.js';
import GroupList from './dashboard/GroupList.js';
import UserList from './dashboard/UserList.js';
import DeviceList from './dashboard/DeviceList.js';
import ApprovalList from './dashboard/ApprovalList.js';
import FeedbackList from './dashboard/FeedbackList.js';
import type {
  SummaryStats,
  JamfPolicy,
  JamfProfile,
  JamfPatch,
  JamfGroup,
  JamfUser,
  JamfComputer,
  JamfApproval,
  JamfFeedback
} from '../../types/models.js';

/**
 * Dashboard - Strictly typed, stateless, functional component
 * @version 0.2
 * @author Jeremiah Pegues
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../.github/instructions/copilot-instructions.md
 */
const demoData: {
  summaryStats: SummaryStats;
  policies: JamfPolicy[];
  profiles: JamfProfile[];
  patches: JamfPatch[];
  groups: JamfGroup[];
  users: JamfUser[];
  devices: JamfComputer[];
  approvals: JamfApproval[];
  feedback: JamfFeedback[];
} = {
  summaryStats: { totalPolicies: 45, totalProfiles: 30, totalConflicts: 5 },
  policies: [
    { id: 1, name: 'Password Policy', enabled: true, category: 'Security', scope: 'All', triggers: ['login'], payloads: [] },
    { id: 2, name: 'Encryption Policy', enabled: true, category: 'Security', scope: 'All', triggers: ['startup'], payloads: [] }
  ],
  profiles: [
    { id: 1, name: 'WiFi Profile', scope: 'All', category: 'Network', payloads: [], conflicts: [] },
    { id: 2, name: 'VPN Profile', scope: 'All', category: 'Network', payloads: [], conflicts: [] }
  ],
  patches: [
    { id: 1, name: 'macOS 14.5', version: '14.5', status: 'pending', device_ids: [1, 2] },
    { id: 2, name: 'Jamf Agent 10.40', version: '10.40', status: 'installed', device_ids: [1] }
  ],
  groups: [
    { id: 1, name: 'Admins', is_smart: false, members: [1] },
    { id: 2, name: 'All Devices', is_smart: true, members: [1, 2] }
  ],
  users: [
    { id: 1, username: 'jane', group_ids: [1], device_ids: [1] },
    { id: 2, username: 'john', group_ids: [2], device_ids: [2] }
  ],
  devices: [
    { id: 1, name: 'MacBook Pro', serial_number: 'ABC123', group_ids: [1], policy_ids: [1], profile_ids: [1] },
    { id: 2, name: 'iMac', serial_number: 'XYZ789', group_ids: [2], policy_ids: [2], profile_ids: [2] }
  ],
  approvals: [
    { id: 1, item: 'New Device', status: 'pending', approvers: ['admin'], schedule: '2025-07-25' }
  ],
  feedback: [
    { id: 1, user_id: 2, item: 'Dashboard', comments: 'Great dashboard!', rating: 5 }
  ]
};

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard" style={{ padding: '2rem' }}>
      <SummaryStatsComponent stats={demoData.summaryStats} />
      <PolicyList policies={demoData.policies} />
      <ProfileList profiles={demoData.profiles} />
      <PatchList patches={demoData.patches} />
      <GroupList groups={demoData.groups} />
      <UserList users={demoData.users} />
      <DeviceList devices={demoData.devices} />
      <ApprovalList approvals={demoData.approvals} />
      <FeedbackList feedback={demoData.feedback} />
    </div>
  );
};

export default Dashboard;
