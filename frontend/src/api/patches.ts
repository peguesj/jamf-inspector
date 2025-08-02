import type { JamfPatch } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';

/**
 * Fetch all Jamf Pro patches via backend proxy
 * @returns {Promise<JamfPatch[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchPatches(auth: JamfAuthOptions): Promise<JamfPatch[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/patches',
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
  if (!res.ok) throw new Error('Failed to fetch patches');
  const data: JamfProxyResponse = await res.json();
  return data.data?.patches || [];
}
