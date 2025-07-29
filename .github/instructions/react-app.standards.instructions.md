---
description: Comprehensive, authoritative standards and best practices for React application development. Strictly agnostic, reusable for any project. Includes links, patterns, and guidance for modern, accessible, maintainable, and scalable React apps with Tailwind CSS and component libraries.
applyTo: '**/frontend/src/**'
---

# React Application Development Standards & Best Practices

## Purpose
This document provides comprehensive, authoritative standards and best practices for developing React applications. It is agnostic to any specific project and is intended for use as a reusable, living resource for all contributors.

## Core Principles
- **Strict Typing:** Use TypeScript for all code. Define all data models, API contracts, and component props in `/types` and reference them throughout the codebase.
- **Functional Programming:** Favor pure functions, immutability, and stateless components. Avoid side effects and state mutation. [Functional Programming Principles](https://en.wikipedia.org/wiki/Functional_programming)
- **Component Architecture:** Use stateless, functional UI components. Separate business logic from UI. Centralize configuration and constants in `/config`.
- **State Management:** Use predictable, immutable state management (e.g., Redux Toolkit, Zustand, React Context with useReducer). Document state shape in `/types`.
- **Accessibility:** Ensure WCAG 2.1 AA compliance. Use semantic HTML, ARIA attributes, and test with screen readers. [W3C Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- **Testing:** Implement unit, integration, and end-to-end tests (e.g., Jest, React Testing Library, Cypress). Achieve >90% coverage and document metrics.
- **Linting & Formatting:** Enforce strict linting (ESLint) and formatting (Prettier) rules. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- **Documentation:** Use [JSDoc](https://jsdoc.app/) for code comments. Maintain `/docs` for architecture, standards, and API references. Update `/changelog.md` in syslog format for all changes.
- **Version Control:** Use atomic commits with detailed messages. Follow [Semantic Versioning](https://semver.org/). Create branches for major features or iterations.
- **Performance:** Optimize for fast load times and responsiveness. Use code splitting, lazy loading, and efficient data fetching. Monitor with [Lighthouse](https://web.dev/measure/) and [Web Vitals](https://web.dev/vitals/).
- **Telemetry & Metrics:** Record and report coverage, performance, and usage metrics. Update documentation and changelog with each iteration.
- **Security:** Follow [OWASP Top 10](https://owasp.org/www-project-top-ten/) for web application security. Sanitize all user input, validate data, and use HTTPS/TLS for all endpoints.
- **Continuous Improvement:** Use iterative, test-driven development and update standards as the ecosystem evolves.

```mermaid 
flowchart LR
  A["/src/App.tsx (Root)"]
  B["/src/providers/ (Context, Theme, etc.)"]
  C["/src/routes/ (Routing)"]
  D["/src/layout/ (Layout)"]
  E["/src/components/Navigation/ (Navigation)"]
  F["/src/components/MainContent/ (Main Content)"]
  G["/src/pages/ (Pages)"]
  G1["/src/pages/Page1.tsx"]
  G2["/src/pages/Page2.tsx"]
  G3["/src/pages/PageN.tsx"]
  H["/src/components/Shared/ (Shared Components)"]
  H1["/src/components/Shared/Button.tsx"]
  H2["/src/components/Shared/Modal.tsx"]
  H3["/src/components/Shared/DataGrid.tsx"]
  H4["/src/components/Shared/Card.tsx"]
  I["/src/components/Footer.tsx (Footer)"]
  J["/src/state/ (State Management)"]
  J1["/src/state/store.ts (Redux Toolkit/Zustand/Context)"]
  K["/src/api/ (API Integration)"]
  K1["/src/api/client.ts (API Client)"]
  K2["/types/api.ts (Types & Validation)"]
  L["/config/ (Config & Constants)"]
  M["/src/styles/ (Styling)"]
  M1["tailwind.config.js (Tailwind CSS)"]
  M2["/src/styles/component-lib.css (Component Library)"]
  N["/tests/ (Testing)"]
  N1["/tests/unit/"]
  N2["/tests/integration/"]
  N3["/tests/e2e/"]
  O["/docs/ (Documentation)"]
  O1["/docs/README.md"]
  O2["/changelog.md"]
  P["/types/ (Types)"]
  P1["/types/index.ts"]

  %% Hierarchical connections
  A --> B
  A --> C
  C --> D
  D --> E
  D --> F
  F --> G
  G --> G1
  G --> G2
  G --> G3
  F --> H
  H --> H1
  H --> H2
  H --> H3
  H --> H4
  D --> I
  A --> J
  J --> J1
  A --> K
  K --> K1
  K --> K2
  A --> L
  A --> M
  M --> M1
  M --> M2
  A --> N
  N --> N1
  N --> N2
  N --> N3
  A --> O
  O --> O1
  O --> O2
  A --> P
  P --> P1

  %% Styling for clarity and accessibility
  classDef dir fill:#f1f5f9,stroke:#0ea5e9,stroke-width:2px,color:#0f172a;
  classDef file fill:#fff,stroke:#64748b,stroke-width:1px,color:#334155;
  class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P dir;
  class G1,G2,G3,H1,H2,H3,H4,J1,K1,K2,M1,M2,N1,N2,N3,O1,O2,P1 file;
```


## UI/UX & Styling
- Use [Tailwind CSS](https://tailwindcss.com/) for utility-first styling. Configure via `tailwind.config.js`.
- Use a modern, accessible component library (e.g., [HeroUI](https://www.heroui.com/), [Headless UI](https://headlessui.com/)).
- Import all component library CSS/JS programmatically in your React entry/layout files. **Do not use static `<link>` or `<script>` tags** for library assets in HTML.
- Ensure all UI is responsive, accessible, and visually consistent.

## API Integration
- All API calls must be strictly typed, validated, and documented.
- Use [OpenAPI](https://swagger.io/specification/) or [JSON Schema](https://json-schema.org/) for API contracts.
- Handle errors, loading, and empty states gracefully in the UI.

## References & Further Reading
- [React Official Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [HeroUI Docs](https://www.heroui.com/docs/guide/introduction)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Jest Testing Framework](https://jestjs.io/)
- [Cypress End-to-End Testing](https://www.cypress.io/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [OWASP Top 10 Security Risks](https://owasp.org/www-project-top-ten/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [JSDoc Documentation](https://jsdoc.app/)
- [Semantic Versioning](https://semver.org/)

## Process
1. **Understand Requirements:** Review `/docs/PLANNING.md` and related documentation.
2. **Design Data Models:** Define all types and interfaces in `/types`.
3. **Implement Logic:** Write pure, typed functions and stateless components.
4. **Integrate APIs:** Validate and document all endpoints.
5. **Test Thoroughly:** Achieve high coverage and deterministic outputs.
6. **Document & Review:** Update all docs, changelogs, and references.
7. **Iterate:** Use a multi-pass reasoning process for continuous improvement.

---
This file must be updated as standards and best practices evolve.
