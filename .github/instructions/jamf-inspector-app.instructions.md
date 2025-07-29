---
description: Jamf Inspector Application Authoritative Instructions
applyTo: '**'
---

# Jamf Inspector Application: Authoritative Instructions & Requirements

## Purpose
Jamf Inspector is a strictly typed, functional, and accessible dashboard for IT Asset Management (ITAM), IT Service Management (ITSM), and Security Posture Management (SPM) for Jamf Pro environments. It provides real-time visibility, error/gap/redundancy detection, and actionable guidance, fully aligned with CIS, NIST, ISO, and other global standards.

## Core Principles
- **Strict Typing:** All code, data models, and API contracts must use TypeScript and be defined in `/types`.
- **Functional Programming:** All logic must be pure, stateless, and side-effect free. UI components are functional and stateless.
- **Accessibility:** All UI must meet WCAG 2.1 AA standards and use semantic HTML/ARIA.
- **Modern UI/UX:** Use HeroUI and Tailwind for a responsive, beautiful, and interactive dashboard. Integrate AI assistant via HeroUI Chat.
- **API Coverage:** All Jamf Pro Classic API endpoints (see `jamf-pro-api-collection.json`) must be represented in typed models and dashboard widgets.
- **Error, Gap, and Redundancy Detection:** The app must detect and report policy/profile errors, gaps, overlaps, and misalignments, referencing authoritative frameworks.
- **Policy/Config Naming:** Enforce clear, hierarchical naming conventions for all policies and profiles, referencing CIS/NIST/ISO.
- **Documentation & Traceability:** All logic, findings, and recommendations must be documented and traceable to authoritative sources.
- **Testing & Quality:** Achieve >90% test coverage, use Storybook for UI, and enforce linting/formatting.
- **Continuous Improvement:** Iteratively update logic, UI, and documentation as standards and requirements evolve.

## Functional Requirements

- **Getting Started Guide:** A guided onboarding experience must pop up automatically for new users or on first load, walking through setup and key features.
- **Caching Library:** Integrate a robust, standards-compliant caching library for frontend data (e.g., react-query, SWR, or similar) to optimize API usage and UX.
- **Dashboarding Library Research:** Research and recommend third-party libraries for dashboarding (charts, widgets, layout, drilldown, filtering, etc.) with full UX feature coverage. Document findings and rationale in `/docs`.
- **Onboarding Steps & Progress:** The onboarding modal must use slide tabs with centered progress dots (below content, above action buttons) to show user progress through steps.
- **Header Auth Info:** The dashboard header must display authenticated user info, server name, Jamf version, last updated timestamp, and a reload icon. The reload icon must trigger a reconnect and reload from the backend API.
- **Backend API Connection:** The frontend must be connected to the backend API for all data and actions, using typed models and error handling.
- **Chat Assistant Panel:** The AI chat assistant must be a full-height panel that slides in from the right, triggered by a sparkle icon in the header. The panel must be accessible and support all AI guidance and logic execution.

All requirements must reference and align with the standards in the Jamf ITAM/ITSM alignment instructions and authoritative frameworks (CIS, NIST, ISO, etc.).

## Authoritative References
- [Jamf Pro API Docs](https://developer.jamf.com/jamf-pro/reference/classic-api)
- [CIS Benchmarks](https://www.cisecurity.org/benchmark/apple_os)
- [NIST CSF](https://www.nist.gov/cyberframework)
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)
- [HeroUI Docs](https://www.heroui.com/docs/components/overview)
- [Copilot Instructions](../.github/instructions/copilot-instructions.md)

## Process
1. **Requirements Review:** Reference `/docs/PLANNING.md` and this file.
2. **Type & API Expansion:** Ensure `/types` and `/frontend` cover all Jamf Pro API resources.
3. **UI/UX Implementation:** Use HeroUI for all UI, following design and accessibility standards.
4. **Testing:** Achieve and document high coverage.
5. **Documentation:** Update `/docs`, `/changelog.md`, and Storybook.
6. **Continuous Iteration:** Repeat as standards and requirements evolve.

---
This file must be updated with every major iteration or requirements change.
