/**
 * @file Jamf Pro API Client
 * @version 0.1
 * @author Jeremiah Pegues
 * @description Typed, functional Jamf API client for backend integration.
 * @see ../docs/AUTHORITATIVE.md
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface JamfAuth {
  username: string;
  password: string;
}

export interface JamfClientConfig {
  baseURL: string;
  auth: JamfAuth;
}

/**
 * Creates a typed, functional Jamf API client.
 * @param {JamfClientConfig} config - Jamf API client configuration
 * @returns {AxiosInstance} Configured Axios instance
 */
export const createJamfClient = (config: JamfClientConfig): AxiosInstance => {
  return axios.create({
    baseURL: config.baseURL,
    auth: {
      username: config.auth.username,
      password: config.auth.password,
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  } as AxiosRequestConfig);
};

export default createJamfClient;
