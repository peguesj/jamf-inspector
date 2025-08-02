## Dev Loop Iteration Report: Global Status Context, Live Header Data, and AppFrame Refactor

### Summary
- Implemented a new `GlobalStatusContext` for global loading, error, and last updated state, accessible throughout the app.
- Created a strictly typed API client for Jamf Pro server info (`fetchServerInfo`) and added the `JamfServerInfo` type to the authoritative models.
- Refactored `AppFrame` to:
  - Use the new context provider.
  - Fetch live server info using `react-query`.
  - Pass live data, loading, and error state to the `Header`.
  - Remove all hardcoded server/version/lastUpdated values.
  - Ensure reload button triggers a full data refresh.
- All code is strictly typed, error-free, and standards-compliant.
- All changes are atomic, documented, and follow the dev loop and ACW rigor.

### Files Changed
- `frontend/src/context/GlobalStatusContext.tsx` (new)
- `frontend/src/api/server.ts` (new)
- `types/models.ts` (add `JamfServerInfo`)
- `frontend/src/components/AppFrame.tsx` (major refactor)

### Next Steps
- Wire up global status context to Dashboard and other components for unified feedback.
- Continue chaining further UI/UX and data enhancements for maximum efficiency.

---

_This report documents the completion of the chained batch: global status context, live header data, and AppFrame refactor._
