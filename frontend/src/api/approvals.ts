import type { JamfApproval } from '../../../types/models';
/**
 * Fetch all Jamf Pro approvals
 * @returns {Promise<JamfApproval[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchApprovals(): Promise<JamfApproval[]> {
  const res = await fetch('/api/approvals');
  if (!res.ok) throw new Error('Failed to fetch approvals');
  return res.json();
}
