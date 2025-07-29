// Migrated from index.ts to index.mts for ESM compatibility
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import API_ENDPOINTS from '../types/api.js';
import { Policy, Profile, Patch, Group, User, Device, Approval, Feedback } from '../types/models.js';
import createJamfClient, { JamfClientConfig } from './jamfClient.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

const app = express();

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(distPath));

app.get(/^\/(?!api|JSSResource|health).*/, (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});


/**
 * Start Express server for Jamf Inspector backend
 * @version 0.1.1
 * @author Jeremiah Pegues
 * @see ../docs/AUTHORITATIVE.md, ../PLANNING.md
 * @description Listens on PORT (default 3000) for API and static frontend
 */
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[jamf-inspector] Backend server running at http://localhost:${PORT}`);
});
