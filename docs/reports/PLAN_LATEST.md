# PLAN_LATEST: Jamf Inspector React App Refactor & Dev Loop Execution

## 1. Requirements & Standards Review
- Reference `/docs/PLANNING.md`, `react-app.standards.instructions.md`, and all authoritative instructions.
- Confirm all business logic, UI, and routing requirements for Jamf Inspector (ITAM/ITSM/SPM, onboarding, API coverage, accessibility, atomic commit workflow).

## 2. Updated src Directory Structure
Organize `src/` around controller-style routing and modularization:
- `App.tsx`: Main entry, wraps `BrowserRouter`, defines top-level routes.
- `main.tsx`: Providers (Theme, QueryClient, etc.).
- `components/Controllers/`: Controller components for each resource (Devices, Policies, Profiles, Users, Groups, Approvals, Feedback).
- `components/Dashboard/Widgets/`: Modular dashboard widgets.
- `api/`, `hooks/`, `types/`, `config/`, `state/`, `styles/`, `routes/`, `tests/`, `docs/`: As detailed in the plan.

## 3. Routing Architecture
- Use unified, nested routing in `App.tsx` with `react-router-dom`.
- Each controller manages its own nested CRUD routes.
- Navigation sidebar generates links dynamically from route config.

## 4. Modularization & Separation of Concerns
- Move all business logic to pure functions/hooks in `api/` and `hooks/`.
- UI components are stateless and functional.
- Centralize types and models.

## 5. Accessibility, Theming, and Error Handling
- Ensure WCAG 2.1 AA compliance.
- Use HeroUI and Tailwind for styling, with programmatic imports.
- Manage global error/loading state via context or react-query.

## 6. Documentation, Testing, and Atomic Commit Workflow
- Update documentation and changelog for all changes.
- Expand unit, integration, and e2e tests for all controllers and routes.
- Batch changes by logical feature, commit and push each batch to a feature branch.
- Update allowList and cross-references.

---

### Next Steps
1. Scaffold controller components for each resource in `src/components/Controllers/`.
2. Refactor `App.tsx` for unified routing and modular layout.
3. Update navigation and route config.
4. Modularize business logic and types.
5. Document all changes and update tests.

---

This plan ensures the refactor and feature work are performed in standards-driven, modular, and test-driven loops, with atomic commits, documentation, and continuous improvement, fully aligned with your authoritative instructions.
