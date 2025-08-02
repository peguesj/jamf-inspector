<!--
Project: Jamf Pro ITIL/ITAM Dashboard
Author: Jeremiah Pegues
Company: Pegues OPSCORP
License: Exclusive non-perpetual license to VERSUS VERSUS VERSUS LLC dba 3VS Vantage, transferrable to authorized clients
Email: jeremiah@pegues.io
Version: 0.1 (Stack & Coding Standards)
-->
---
    description: "Jamf Pro ITIL/ITAM Dashboard"
---
References:
- PLANNING.md (authoritative)
- Jamf Pro Documentation: https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
- ITIL: https://www.axelos.com/best-practice-solutions/itil
- ITAM: https://www.itassetmanagement.net/itam-standards/
- Mac OS Configuration Profiles: https://developer.apple.com/documentation/devicemanagement/configuration_profiles

# Authoritative Stack, Coding Standards, and API Coverage

## Technology Stack
- **Frontend:** React (TypeScript, functional components, strict typing)
- **State Management:** Redux Toolkit (immutable state, functional reducers)
- **UI Framework:** Tailwind CSS (responsive, accessible)
- **Interactivity:** jQuery (drag-and-drop, filters, animations)
- **Backend:** Node.js (TypeScript, functional programming)
- **API Layer:** Express (RESTful, typed endpoints)
- **Testing:** Jest (unit/integration, deterministic)
- **Linting/Formatting:** ESLint, Prettier (strict rules)
- **Documentation:** JSDoc, Markdown (inline, versioned)

## Coding Tenets
- Strict TypeScript typing everywhere (interfaces, types, enums)
- Functional programming principles (pure functions, immutability, statelessness)
- Deterministic logic (no side effects, predictable outputs)
- No mutation of state; always return new objects
- All business logic in pure functions, not components
- UI components are stateless and functional
- All configuration and immutable info in `/config` and `/docs` as authoritative resources
- All API calls typed and validated
- All data models defined in `/types` and referenced everywhere
- All dependencies and standards referenced in code comments


## Authoritative Resources
- `/types/models.ts` (all Jamf Pro resource types, strictly typed)
- `/types/api.ts` (all Jamf Pro API endpoints, strictly typed)
- `/docs/` (standards, references, planning)

## API Coverage (v0.3)
All Jamf Pro Classic API resources and endpoints are now strictly typed and exported:
- Directory Bindings, Disk Encryption Configurations, Distribution Points, Dock Items, Ebooks, File Uploads, GSX Connections, Healthcare Listeners, LDAP Servers, Licensed Software, Log Flush, Mac Applications, Managed Preference Profiles, Mobile Device resources, Netboot Servers, Network Segments, Packages, Patch Management, Peripherals, Printers, Removable MAC Addresses, Restricted Software, Scripts, Sites, SMTP Servers, Software Update Servers, User Extension Attributes, User Groups, VPP Accounts/Assignments/Invitations, Webhooks, and more.

See `/types/models.ts` and `/types/api.ts` for full details. All business logic, Redux, and UI components must reference these authoritative types and endpoints.

_Last updated: 2025-07-29 by GitHub Copilot_

---
## Next Steps
1. Create `/config/stack.ts` with stack and coding standards
3. Scaffold backend and frontend with strict TypeScript and functional programming
4. Reference PLANNING.md and this file in all code and documentation

# Jamf Inspector Authoritative Configuration

## Unified Configuration System

Jamf Inspector now uses a single configuration file (`/config/jamf-inspector.config.json`) for orchestrating backend/frontend communication and loading default properties. This config validates against the strict TypeScript schema `JamfInspectorConfig` defined in `/types/models.ts`.

### Schema
See `/types/models.ts`:
```typescript
export interface JamfInspectorConfig {
  backendApiUrl: string;
  frontendBaseUrl: string;
  jamfApiUrl: string;
  jamfApiKey?: string;
  defaultTheme?: 'system' | 'light' | 'dark';
  enableNotifications?: boolean;
  configFileLocation?: string;
}
```

### Usage
- **Backend** loads config at startup and exposes it via `/api/config`.
- **Frontend** loads config via `/api/config` and provides it to components (e.g., SettingsPanel).
- All config consumers should use the unified loader for consistency and standards compliance.

### Example Config
See `/config/jamf-inspector.config.json`:
```json
{
  "backendApiUrl": "http://localhost:3001/api",
  "frontendBaseUrl": "http://localhost:5173",
  "jamfApiUrl": "https://jamf.example.com/JSSResource",
  "jamfApiKey": "<your-jamf-api-key>",
  "defaultTheme": "system",
  "enableNotifications": true,
  "configFileLocation": "./config/jamf-inspector.config.json"
}
```

### References
- `/types/models.ts` for schema
- `/config/jamf-inspector.config.json` for config file
- `/config/index.ts` for loader
- `/backend/index.mts` for backend integration
- `/frontend/src/config.ts` for frontend loader
- `/frontend/src/components/features/SettingsPanel.tsx` for consumer example
