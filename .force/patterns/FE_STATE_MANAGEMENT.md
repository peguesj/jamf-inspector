# FORCE Pattern: FE_STATE_MANAGEMENT

## Purpose
Standardize frontend state management using well-maintained, popular libraries to avoid custom solutions and tech debt.

## Libraries Used
- **Redux Toolkit**: For global state management and normalized state patterns.
- **React Query**: For server state synchronization, caching, and optimistic UI updates.
- **React Hook Form**: For form state management and validation.

## Implementation Guidelines
- All global state should be managed via Redux Toolkit slices and selectors.
- Server state should use React Query hooks for fetching, caching, and updating data.
- Form state should use React Hook Form for validation and multi-step workflows.
- Avoid custom state management libraries unless justified by a unique requirement.
- Document state shape, update flows, and error handling strategies in `/docs/architecture/state-management.md`.

## References
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)

## Rationale
These libraries are widely adopted, well maintained, and reduce the risk of tech debt and reinvention.

## Status
✅ Adopted and in use throughout the codebase.

---
*This pattern should be referenced for all future frontend state management work.*
