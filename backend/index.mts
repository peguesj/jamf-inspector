// Migrated from index.ts to index.mts for ESM compatibility
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import API_ENDPOINTS from '../types/api.js';
import { loadConfig } from '../config/index.js';
import {
  createJamfClient,
  getBearerToken,
  checkTokenExpiration,
  invalidateToken,
  getValidBearerToken
} from './jamfClient.js';
import NodeCache from 'node-cache';

const app = express();
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// Jamf Auth API routes (must be after app declaration)
const { config, configFileLocation } = loadConfig();
app.use(express.json());
app.post('/api/auth/token', async (req, res) => {
  try {
    const baseURL = typeof req.body.baseURL === 'string' ? req.body.baseURL : undefined;
    const username = typeof req.body.username === 'string' ? req.body.username : undefined;
    const password = typeof req.body.password === 'string' ? req.body.password : undefined;
    if (!baseURL || !username || !password) return res.status(400).json({ error: 'Missing credentials' });
    await getBearerToken({ baseURL, auth: { username, password } });
    res.json({ success: true });
  } catch (err: any) {
    res.status(401).json({ error: 'Failed to get token', details: typeof err === 'object' && 'message' in err ? (err as any).message : String(err) });
  }
});

app.get('/api/auth/check', async (req, res) => {
  try {
    const baseURL = typeof req.query.baseURL === 'string' ? req.query.baseURL : undefined;
    const username = typeof req.query.username === 'string' ? req.query.username : undefined;
    const password = typeof req.query.password === 'string' ? req.query.password : undefined;
    if (!baseURL || !username || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }
    await checkTokenExpiration({ baseURL, auth: { username, password } });
    res.json({ success: true });
  } catch (err: any) {
    res.status(401).json({ error: 'Token check failed', details: typeof err === 'object' && 'message' in err ? (err as any).message : String(err) });
  }
});

app.post('/api/auth/invalidate', async (req, res) => {
  try {
    const baseURL = typeof req.body.baseURL === 'string' ? req.body.baseURL : undefined;
    const username = typeof req.body.username === 'string' ? req.body.username : undefined;
    const password = typeof req.body.password === 'string' ? req.body.password : undefined;
    if (!baseURL || !username || !password) return res.status(400).json({ error: 'Missing credentials' });
    const result = await invalidateToken({ baseURL, auth: { username, password } });
    res.json({ success: result });
  } catch (err: any) {
    res.status(401).json({ error: 'Failed to invalidate token', details: typeof err === 'object' && 'message' in err ? (err as any).message : String(err) });
  }
});
// Permissive CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
// Expose config via API
app.get('/api/config', (req, res) => {
  res.json({ config, configFileLocation });

/**
 * Proxy endpoint for Jamf API requests
 * @route POST /api/proxy
 * @desc Proxies requests to Jamf API with Bearer token, resolves CORS/auth issues
 * @access Private (requires valid Jamf credentials)
 * @see ../docs/AUTHORITATIVE.md, ../PLANNING.md
 */
app.post('/api/proxy', async (req, res) => {
  try {
    const { baseURL, path, method = 'GET', headers = {}, body = null, username, password } = req.body;
    if (!baseURL || !path || !method || !username || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Get valid Bearer token
    let token: string | null = null;
    try {
      token = await getValidBearerToken({ baseURL, auth: { username, password } });
    } catch (tokenErr: any) {
      // If token fetch fails, treat as invalid credentials
      return res.status(401).json({ error: 'Unable to retrieve valid token', details: tokenErr?.message });
    }
    if (!token) {
      return res.status(401).json({ error: 'Unable to retrieve valid token' });
    }
    // Prepare request options
    const url = `${baseURL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
    const axios = (await import('axios')).default;
    const requestOptions = {
      url,
      method,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        'Content-Type': headers['Content-Type'] || 'application/json',
      },
      data: body,
      validateStatus: () => true, // Forward all status codes
    };
    // Make request to Jamf API
    const response = await axios(requestOptions);
    res.status(response.status).json({
      status: response.status,
      data: response.data,
      headers: response.headers,
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Proxy request failed', details: err?.message });
  }
});

// Jamf Auth API routes (must be after app declaration)
app.use(express.json());
app.post('/api/auth/token', async (req, res) => {
  try {
    const { baseURL, username, password } = req.body;
    if (!baseURL || !username || !password) return res.status(400).json({ error: 'Missing credentials' });
    await getBearerToken({ baseURL, auth: { username, password } });
    res.json({ success: true });
  } catch (err) {
    res.status(401).json({ error: 'Failed to get token', details: (err instanceof Error ? err.message : String(err)) });
  }
});

app.get('/api/auth/check', async (req, res) => {
  try {
    const baseURL = typeof req.query.baseURL === 'string' ? req.query.baseURL : undefined;
    const username = typeof req.query.username === 'string' ? req.query.username : undefined;
    const password = typeof req.query.password === 'string' ? req.query.password : undefined;
    if (!baseURL || !username || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }
    await checkTokenExpiration({ baseURL, auth: { username, password } });
    res.json({ success: true });
  } catch (err) {
    res.status(401).json({ error: 'Token check failed', details: (err instanceof Error ? err.message : String(err)) });
  }
});

app.post('/api/auth/invalidate', async (req, res) => {
  try {
    const { baseURL, username, password } = req.body;
    if (!baseURL || !username || !password) return res.status(400).json({ error: 'Missing credentials' });
    const result = await invalidateToken({ baseURL, auth: { username, password } });
    res.json({ success: result });
  } catch (err) {
    res.status(401).json({ error: 'Failed to invalidate token', details: (err instanceof Error ? err.message : String(err)) });
  }
});


/**
 * Start Express server for Jamf Inspector backend
 * @version 0.1.1
 * @author Jeremiah Pegues
 * @see ../docs/AUTHORITATIVE.md, ../PLANNING.md
 * @description Listens on PORT (default 3000) for API and static frontend
 */
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[jamf-inspector] Backend server running at http://localhost:${PORT}`);
  });
}

export default app;
