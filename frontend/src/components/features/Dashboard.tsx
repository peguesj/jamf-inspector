// Error display component for dashboard
const DashboardError: React.FC<{ errorMsg: string; errorCode: string; errorMethod: string; errorObj: unknown }> = ({ errorMsg, errorCode, errorMethod, errorObj }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] w-full">
      {/* Animated error SVG with shake */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[shake_0.3s_ease-in-out_2]">
        <circle cx="60" cy="60" r="54" fill="#fee2e2" stroke="#dc2626" strokeWidth="4" />
        <rect x="52" y="30" width="16" height="48" rx="8" fill="#dc2626" />
        <rect x="52" y="82" width="16" height="12" rx="6" fill="#dc2626" />
      </svg>
      <div className="mt-8 text-xl font-semibold text-red-700 text-center">Dashboard Error</div>
      <div className="mt-2 text-base text-gray-700 text-center">{errorMsg}</div>
      <div className="mt-2 text-xs text-gray-500 text-center">
        <small>{errorCode} / {errorMethod}</small>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium"
        onClick={() => setShowDetails((v) => !v)}
      >
        {showDetails ? 'Hide Error Details' : 'Show Error Details'}
      </button>
      {showDetails && (
        <div className="mt-2 p-4 bg-red-50 border border-red-200 rounded w-full max-w-lg text-xs whitespace-pre-wrap">
          {JSON.stringify(errorObj, null, 2)}
        </div>
      )}
    </div>
  );
};
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SummaryStatsComponent from './dashboard/SummaryStatsComponent.tsx';
import PolicyList from './dashboard/PolicyList.tsx';
import type {
  JamfPolicy,
  JamfProfile,
  JamfPatch,
  JamfGroup,
  JamfUser,
  JamfComputer,
  JamfApproval,
  JamfFeedback
} from '../../../../types/models.ts';
import { fetchPolicies } from '../../api/policies';
import ProfileList from './dashboard/ProfileList.tsx';
import { fetchProfiles } from '../../api/profiles';
import PatchList from './dashboard/PatchList.tsx';
import { fetchPatches } from '../../api/patches';
import GroupList from './dashboard/GroupList.tsx';
import { fetchGroups } from '../../api/groups';
import UserList from './dashboard/UserList.tsx';
import { fetchUsers } from '../../api/users';
import DeviceList from './dashboard/DeviceList.tsx';
import { fetchDevices } from '../../api/devices';
import ApprovalList from './dashboard/ApprovalList.tsx';
import { fetchApprovals } from '../../api/approvals';
import FeedbackList from './dashboard/FeedbackList.tsx';
import { fetchFeedback } from '../../api/feedback';


/**
 * Dashboard - Strictly typed, stateless, functional component
 * @version 0.3
 * @author Jeremiah Pegues
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../.github/instructions/copilot-instructions.md
 */


const Dashboard: React.FC = () => {
  // react-query expects queryFn to accept a context object
  const { data: policies, isLoading: loadingPolicies, error: errorPolicies } = useQuery<JamfPolicy[]>({
    queryKey: ['policies'],
    queryFn: () => fetchPolicies(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: profiles, isLoading: loadingProfiles, error: errorProfiles } = useQuery<JamfProfile[]>({
    queryKey: ['profiles'],
    queryFn: () => fetchProfiles(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: patches, isLoading: loadingPatches, error: errorPatches } = useQuery<JamfPatch[]>({
    queryKey: ['patches'],
    queryFn: () => fetchPatches(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: groups, isLoading: loadingGroups, error: errorGroups } = useQuery<JamfGroup[]>({
    queryKey: ['groups'],
    queryFn: () => fetchGroups(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: users, isLoading: loadingUsers, error: errorUsers } = useQuery<JamfUser[]>({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: devices, isLoading: loadingDevices, error: errorDevices } = useQuery<JamfComputer[]>({
    queryKey: ['devices'],
    queryFn: () => fetchDevices(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: approvals, isLoading: loadingApprovals, error: errorApprovals } = useQuery<JamfApproval[]>({
    queryKey: ['approvals'],
    queryFn: () => fetchApprovals(),
    staleTime: 5 * 60 * 1000,
  });
  const { data: feedback, isLoading: loadingFeedback, error: errorFeedback } = useQuery<JamfFeedback[]>({
    queryKey: ['feedback'],
    queryFn: () => fetchFeedback(),
    staleTime: 5 * 60 * 1000,
  });

  // Animated loading state
  if (
    loadingPolicies || loadingProfiles || loadingPatches ||
    loadingGroups || loadingUsers || loadingDevices ||
    loadingApprovals || loadingFeedback
  ) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] w-full">
        {/* Animated SVG dashboard skeleton */}
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
          <rect x="10" y="10" width="200" height="20" rx="8" fill="#e0e7ff" />
          <rect x="10" y="40" width="120" height="16" rx="6" fill="#c7d2fe" />
          <rect x="140" y="40" width="70" height="16" rx="6" fill="#c7d2fe" />
          <rect x="10" y="65" width="200" height="12" rx="5" fill="#e0e7ff" />
          <rect x="10" y="85" width="200" height="12" rx="5" fill="#e0e7ff" />
        </svg>
        <div className="mt-8 text-xl font-semibold text-blue-900">Loading dashboard data...</div>
      </div>
    );
  }

  // Error state detection
  const errorObj =
    errorPolicies || errorProfiles || errorPatches ||
    errorGroups || errorUsers || errorDevices ||
    errorApprovals || errorFeedback;
  let errorMsg = 'Unknown error';
  let errorCode = '';
  let errorMethod = '';
  if (errorObj) {
    if (errorPolicies) {
      errorMsg = errorPolicies.message || String(errorPolicies);
      errorCode = 'POLICIES';
      errorMethod = 'fetchPolicies';
    } else if (errorProfiles) {
      errorMsg = errorProfiles.message || String(errorProfiles);
      errorCode = 'PROFILES';
      errorMethod = 'fetchProfiles';
    } else if (errorPatches) {
      errorMsg = errorPatches.message || String(errorPatches);
      errorCode = 'PATCHES';
      errorMethod = 'fetchPatches';
    } else if (errorGroups) {
      errorMsg = errorGroups.message || String(errorGroups);
      errorCode = 'GROUPS';
      errorMethod = 'fetchGroups';
    } else if (errorUsers) {
      errorMsg = errorUsers.message || String(errorUsers);
      errorCode = 'USERS';
      errorMethod = 'fetchUsers';
    } else if (errorDevices) {
      errorMsg = errorDevices.message || String(errorDevices);
      errorCode = 'DEVICES';
      errorMethod = 'fetchDevices';
    } else if (errorApprovals) {
      errorMsg = errorApprovals.message || String(errorApprovals);
      errorCode = 'APPROVALS';
      errorMethod = 'fetchApprovals';
    } else if (errorFeedback) {
      errorMsg = errorFeedback.message || String(errorFeedback);
      errorCode = 'FEEDBACK';
      errorMethod = 'fetchFeedback';
    }
    return <DashboardError errorMsg={errorMsg} errorCode={errorCode} errorMethod={errorMethod} errorObj={errorObj} />;
  }

  // ...existing code...
  return (
    <div
      className="dashboard p-8 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-lg border border-gray-200"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 60%, rgba(200,220,255,0.7) 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        border: '1px solid rgba(180,200,255,0.18)',
      }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Policies</h2>
      <PolicyList policies={policies ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Profiles</h2>
      <ProfileList profiles={profiles ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Patches</h2>
      <PatchList patches={patches ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Groups</h2>
      <GroupList groups={groups ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Users</h2>
      <UserList users={users ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Devices</h2>
      <DeviceList devices={devices ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Approvals</h2>
      <ApprovalList approvals={approvals ?? []} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Feedback</h2>
      <FeedbackList feedback={feedback ?? []} />
      {/* NotificationToaster and templating engine integration points go here */}
    </div>
  );
};

export default Dashboard;
