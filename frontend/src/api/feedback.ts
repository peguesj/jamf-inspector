import type { JamfFeedback } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';
/**
 * Fetch all Jamf Pro feedback via backend proxy
 * @returns {Promise<JamfFeedback[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchFeedback(auth: JamfAuthOptions): Promise<JamfFeedback[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/api/v1/feedback',
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
  if (!res.ok) throw new Error('Failed to fetch feedback');
  const data: JamfProxyResponse = await res.json();
  return data.data?.feedback || [];
}
