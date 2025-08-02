import type { JamfPolicy } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';

/**
 * Fetch all Jamf Pro policies via backend proxy
 * @returns {Promise<JamfPolicy[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchPolicies(auth: JamfAuthOptions): Promise<JamfPolicy[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/policies',
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
  if (!res.ok) throw new Error('Failed to fetch policies');
  const data: JamfProxyResponse = await res.json();
  return data.data?.policies || [];
}
