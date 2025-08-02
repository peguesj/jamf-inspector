import type { JamfUser } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';
/**
 * Fetch all Jamf Pro users via backend proxy
 * @returns {Promise<JamfUser[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchUsers(auth: JamfAuthOptions): Promise<JamfUser[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/users',
    method: 'GET',
    headers: {},
    username: auth.username!,
    password: auth.password!,
  };
  const res = await fetch('/api/proxy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to fetch users');
  const data: JamfProxyResponse = await res.json();
  return data.data?.users || [];
}
