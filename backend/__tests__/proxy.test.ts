import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { JamfProxyRequest } from '../../types/api.js';
import app from '../index.mts';

describe('/api/proxy', () => {
  it('should return 400 for missing fields', async () => {
    const res = await request(app).post('/api/proxy').send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/Missing required fields/);
  });

  it('should return 401 for invalid credentials', async () => {
    const payload: JamfProxyRequest = {
      baseURL: 'https://invalid.jamfcloud.com',
      path: '/JSSResource/computers',
      method: 'GET',
      username: 'baduser',
      password: 'badpass',
    };
    const res = await request(app).post('/api/proxy').send(payload);
    expect(res.status).toBe(401);
    expect(res.body.error).toMatch(/Unable to retrieve valid token/);
  });

  // Add more tests for valid requests, error handling, etc.
});
