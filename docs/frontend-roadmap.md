# Jamf Inspector Frontend Roadmap

> Version: 0.2
> Last Updated: 2025-07-23
> Author: GitHub Copilot


## Roadmap Table (Expanded)
| Task/Feature                          | Description                                                                 | Status   | Git Commit |
|---------------------------------------|-----------------------------------------------------------------------------|----------|------------|
| 1. Componentization                   | Refactor Dashboard into reusable subcomponents                              | Complete | [f5f3f4e](https://github.com/peguesj/jamf-inspector/commit/f5f3f4e) |
| 1.1 AppFrame & Layout                 | Modularize AppFrame, Layout, and SettingsPanel                              | Complete | [b3cc3fc](https://github.com/peguesj/jamf-inspector/commit/b3cc3fc) |
| 1.2 Dashboard Widgets                 | Modularize dashboard widgets, onboarding modal, navigation                  | Complete | [df01dcf](https://github.com/peguesj/jamf-inspector/commit/df01dcf) |
| 2. Redux Store Usage                  | Use Redux for dashboard, chat, feedback state                               | In Progress |            |
| 3. ChatAssistant Integration          | Integrate ChatAssistant into main app UI                                    | In Progress |            |
| 4. Error/Loading/Empty States         | Add user-friendly empty/error/loading components                            | In Progress |            |
| 5. Advanced UI/UX                     | Add modals, notifications, drag-and-drop, charts                            | In Progress |            |
| 5.1 HeroUI/Tailwind Integration       | Restore full theme and style support                                        | Complete | [f5f3f4e](https://github.com/peguesj/jamf-inspector/commit/f5f3f4e) |
| 5.2 Onboarding Modal                  | Implement SetupWizard guided onboarding                                     | Complete | [df01dcf](https://github.com/peguesj/jamf-inspector/commit/df01dcf) |
| 6. Custom Styling/Theming             | Add custom CSS/theme support                                                | Complete | [f5f3f4e](https://github.com/peguesj/jamf-inspector/commit/f5f3f4e) |
| 7. Accessibility                      | Add ARIA attributes, accessibility checks                                   | In Progress |            |
| 8. Test Coverage                      | Expand tests for all components and features                                | In Progress | [18eae0a](https://github.com/peguesj/jamf-inspector/commit/18eae0a) |
| 9. Documentation                      | Add README, architecture, usage docs                                        | In Progress |            |
| 10. Config/Environment Support        | Add config/environment for API endpoints, feature flags                     | In Progress |            |
| 11. Demo Data/Static Page             | Maintain demo-dashboard.html for static illustration                        | Complete |            |
| 12. Jamf Pro API Types/Models         | Strictly type and export all Jamf Pro API resources                         | Complete | [f5f3f4e](https://github.com/peguesj/jamf-inspector/commit/f5f3f4e) |
| 13. Caching Layer                     | Integrate react-query for frontend caching                                  | In Progress |            |
| 14. Header & Status Bar               | Add header with user info, server, version, reload, sparkle icon            | In Progress |            |
| 15. Menu Expansion                    | Expand menu to cover all Jamf Pro API endpoints                             | Planned   |            |

---
- **Status**: Update to `Complete` when finished.
- **Git Commit**: Add commit hash after each successful implementation. Links go to GitHub commit.
- This file is updated as part of each successful roadmap task.

## Authoritative Project Tracking & Dev Loop Process

This file is the authoritative tracking document for all frontend work. All changes must follow the [Dev Loop](../.github/instructions/iterative-loop.logic.instructions.md) (formerly "iterative loop") as defined in the standards:

### Dev Loop Steps (with project-specific clarifications)
1. **Multi-Pass Reasoning**: Break down each feature into at least 4 passes, referencing planning docs, chat history, and standards. Example: For header, break into user info, status, reload, sparkle icon.
2. **Batching**: Group related changes (UI, config, logic) for efficiency. Document batch rationale in changelog and roadmap.
3. **Self-Learning**: After each batch, analyze what worked, what was missed (e.g., allowList updates), and update process/docs accordingly. Add explicit steps for recurring misses.
4. **Documentation**: Update roadmap, changelog, and standards after each batch. Add links/anchors to related instruction sets. Use #mcp_force-mcp-std_anchor_based_cross_referencing for cross-links.
5. **Process Recall**: Before each loop, review requirements, chat, and standards to ensure confidence in next steps.
6. **Loop Continuity**: Unless interrupted, always proceed in order. After error fix, resume batching or next pass.
7. **Error-Driven Fix Loop**: After each iteration, check for errors and enter fix loop if needed. Example: If theme is broken, fix before next batch.
8. **Atomic Commit Workflow (ACW)**: Stage, commit (multi-line message), create/switch to feature branch, push to origin. Log all actions in changelog and roadmap.

See [Iterative Loop Logic Instructions](../.github/instructions/iterative-loop.logic.instructions.md) for full process and flowchart.

---
_Last updated: 2025-07-29 by GitHub Copilot_

---
- **Status**: Update to `Complete` when finished.
- **Git Commit**: Add commit hash after each successful implementation.
- This file is updated as part of each successful roadmap task.
