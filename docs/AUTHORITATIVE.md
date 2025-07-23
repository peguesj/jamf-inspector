/*
Project: Jamf Pro ITIL/ITAM Dashboard
Author: Jeremiah Pegues
Company: Pegues OPSCORP
License: Exclusive non-perpetual license to VERSUS VERSUS VERSUS LLC dba 3VS Vantage, transferrable to authorized clients
Email: jeremiah@pegues.io
Version: 0.1 (Stack & Coding Standards)
References:
- PLANNING.md (authoritative)
- Jamf Pro Documentation: https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
- ITIL: https://www.axelos.com/best-practice-solutions/itil
- ITAM: https://www.itassetmanagement.net/itam-standards/
- Mac OS Configuration Profiles: https://developer.apple.com/documentation/devicemanagement/configuration_profiles

---
# Authoritative Stack & Coding Standards

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
- `/types/` (data models, API types)
- `/docs/` (additional standards, references)

---
## Next Steps
1. Create `/config/stack.ts` with stack and coding standards
3. Scaffold backend and frontend with strict TypeScript and functional programming
4. Reference PLANNING.md and this file in all code and documentation
