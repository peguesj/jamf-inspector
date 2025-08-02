/**
 * @file Jamf Pro API Client
 * @version 0.1
 * @author Jeremiah Pegues
 * @description Typed, functional Jamf API client for backend integration.
 * @see ../docs/AUTHORITATIVE.md
 */


import axios from 'axios';
import API_ENDPOINTS from '../types/api.js';

export interface JamfAuth {
  username: string;
  password: string;
}

export interface JamfClientConfig {
  baseURL: string;
  auth: JamfAuth;
}

let bearerToken: string = '';
let tokenExpirationEpoch: number = 0;

/**
 * Get a new Bearer token from Jamf Pro API
 */
export async function getBearerToken(config: JamfClientConfig): Promise<void> {
  const url = `${config.baseURL}${API_ENDPOINTS.authentication}`;
  const response = await axios.post(url, {}, {
    auth: {
      username: config.auth.username,
      password: config.auth.password,
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  bearerToken = response.data.token;
  // Parse expiration to epoch
  const expiration = response.data.expires.split('.')[0];
  tokenExpirationEpoch = Math.floor(new Date(expiration).getTime() / 1000);
}

/**
 * Check if Bearer token is expired, refresh if needed
 */
export async function checkTokenExpiration(config: JamfClientConfig): Promise<void> {
  const nowEpochUTC = Math.floor(Date.now() / 1000);
  if (!bearerToken || tokenExpirationEpoch <= nowEpochUTC) {
    await getBearerToken(config);
  }
}

/**
 * Invalidate the current Bearer token
 */
export async function invalidateToken(config: JamfClientConfig): Promise<boolean> {
  const url = `${config.baseURL}${API_ENDPOINTS.invalidateToken}`;
  const response = await axios.post(url, {}, {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 204) {
    bearerToken = '';
    tokenExpirationEpoch = 0;
    return true;
  }
  return false;
}

/**
 * Get the current Bearer token (refresh if needed)
 */
export async function getValidBearerToken(config: JamfClientConfig): Promise<string> {
  await checkTokenExpiration(config);
  return bearerToken;
}

/**
 * Create a Jamf API client with Bearer token
 */
export async function createJamfClient(config: JamfClientConfig) {
  const token = await getValidBearerToken(config);
  return axios.create({
    baseURL: config.baseURL,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
