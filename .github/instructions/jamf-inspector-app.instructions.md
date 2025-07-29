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
- **Dashboard:** Modular, extensible dashboard with widgets for all major Jamf Pro resources (policies, profiles, devices, users, groups, patches, feedback, approvals, etc.).
- **AI Assistant:** Integrated AI chat for guidance, troubleshooting, and logic execution.
- **Settings & Onboarding:** Modal/drawer for guided setup and configuration.
- **Data Grid & Cards:** Use HeroUI DataGrid and Card for all tabular and widget displays.
- **Navigation:** Use HeroUI Navigation for accessible routing.
- **Theming:** Support dark/light/system themes via HeroUI ThemeProvider.
- **API Integration:** All API calls must be strictly typed, validated, and documented.
- **Security & Compliance:** Enforce OWASP, GDPR, HIPAA, and least privilege access.
- **Metrics & Telemetry:** Record and report coverage, performance, and usage metrics.

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
