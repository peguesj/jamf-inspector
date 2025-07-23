// Version: 0.1
// Data Models for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md

export interface Policy {
  id: number;
  name: string;
  scope: string;
  category: string;
  enabled: boolean;
  triggers: string[];
  payloads: any[];
}

export interface Profile {
  id: number;
  name: string;
  scope: string;
  category: string;
  payloads: any[];
  conflicts: string[];
}

export interface Patch {
  id: number;
  name: string;
  version: string;
  status: string;
  devices: number[];
}

export interface Group {
  id: number;
  name: string;
  type: 'static' | 'smart';
  members: number[];
}

export interface User {
  id: number;
  username: string;
  groups: number[];
  devices: number[];
}

export interface Device {
  id: number;
  name: string;
  serial: string;
  group: number;
  policies: number[];
  profiles: number[];
}

export interface Approval {
  id: number;
  item: string;
  status: 'pending' | 'approved' | 'rejected';
  approvers: string[];
  schedule: string;
}

export interface Feedback {
  id: number;
  user: number;
  item: string;
  comments: string;
  rating: number;
}
