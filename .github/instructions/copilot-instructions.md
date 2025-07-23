---
name: Copilot Instructions for Rigid, Typed, Functional Projects
description: |
  This instruction set is designed to guide Copilot and similar AI chat assistants in supporting projects that require strict adherence to functional programming, typing, documentation, security, and process rigor. It is agnostic and dynamic, suitable for any project with similar standards.
applyTo: '**'
---
# Copilot Instructions for Rigid, Typed, Functional Projects

## Purpose
This instruction set is designed to guide Copilot and similar AI chat assistants in supporting projects that require strict adherence to functional programming, typing, documentation, security, and process rigor. It is agnostic and dynamic, suitable for any project with similar standards, not just Jamf Pro ITIL/ITAM Dashboard.

---
## General Principles
- Always favor strict typing (TypeScript, interfaces, enums, etc.)
- Use functional programming principles: pure functions, immutability, statelessness
- Avoid side effects and state mutation
- All business logic should be implemented in pure functions, not in UI components
- UI components must be stateless and functional
- All configuration and immutable information should be centralized in authoritative resources (e.g., `/config`, `/docs`)
- All API calls must be typed, validated, and documented
- All data models must be defined in `/types` and referenced everywhere
- All dependencies and standards must be referenced in code comments
- All code and documentation must be versioned and referenced to planning documents
- When implementing new features or changes, always start by understanding the current state and identifying the next steps before proceeding with implementation. You must define this as an iterative process that includes testing and documentation, and autonomously implenenting changes based on the identified next steps, looping through the process until the task is complete.
- After user approves a command run, you must update the settings file property for github agent to whitelist the command, so it can be run again without user approval. (`github.copilot.chat.agent.terminal.allowList` -> [`"<command|command-based regex>": <True|False`])
- _i.e.:_ 
    ```json
    "github.copilot.chat.agent.terminal.allowList": {
            "npm i": true,
            "git commit": true,
            "git push": true
    }
    ```

---
## Package Management & Security
- Research all new packages for compatibility, maintenance, and vulnerabilities using npmjs.org or equivalent
- Only add packages that are well maintained and secure
- Update or create `package.json` as needed
- Run cumulative install commands (`npm i`) after modifications
- Document all package decisions and update changelogs

---

## Documentation & Comments
- Use JSDoc standard for all JS/TS code comments with granular detail
- Update all relevant documentation after implementing and testing logic
- Maintain a changelog in syslog format, scoped by namespace, action, and status
- Reference authoritative resources in all documentation


---
## Reasoning & Recursive Process
- Always use a minimum 4-pass reasoning process to determine and define specific steps and their child tasks/subtasks (recursively up to 5 levels).
- At each pass, update all relevant documentation with this acknowledgement and integrate it within the authoritative resource for the project.
- Store in memory either a reference to the anchor containing this within the authoritative resource, or ingest and integrate it within your internal memory vector store, retaining referential integrity.
- Enforce the inherited authority of these data points going forward, contextually retrieving them at the beginning of each recursive loop until complete, and then again with a lesser requirement to exactness as the codebase, documentation, and repository evolve.
- Parse all updates to the instruction set, update the instructions md file, and proceed to execute.
- Before resuming execution, recall the process and all additional context, ensuring confidence in requirements, current task, iterative loop, dependencies, outputs, and conditions.
- Use reasoning to chain commands or group subtasks in responses, provided the work product is complete and nothing is omitted, shortened, or placeholder/todo.
---
## Version Control & Process
- Stage and commit all files atomically with detailed, multi-line commit messages
- Use semantic versioning for tags if the update warrants it
- Create new branches for major iterations if prudent
- Document all process steps and decisions

---
## Testing & Quality
- Implement unit and integration tests for all logic
- Ensure deterministic, predictable outputs
- Use strict linting and formatting rules (ESLint, Prettier)
- Perform user acceptance testing (UAT) when applicable

---
## Dynamic Adaptation
- When encountering new requirements, update authoritative resources and documentation before implementation
- Favor dynamic, reusable instructions and templates over static, project-specific ones
- Always reference planning and standards documents for context

---
## Example Authoritative Resources
- `/docs/PLANNING.md` (project requirements, architecture, standards)
- `/config/stack.ts` (technology stack, coding standards)
- `/types/` (data models, API types)
- `/docs/` (additional standards, references)
- `/changelog.md` (syslog format changelog)

---
## Chat Assistant Behavior
- Always confirm understanding of new instructions before proceeding
- Wait for explicit user approval before major actions
- Document all actions, decisions, and changes in chat and changelog
- Provide recommendations for best practices and improvements
- Be transparent about limitations and assumptions

---
## References
- [JSDoc](https://jsdoc.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Functional Programming Principles](https://en.wikipedia.org/wiki/Functional_programming)
- [Semantic Versioning](https://semver.org/)
- [Syslog Format](https://tools.ietf.org/html/rfc5424)

---
This instruction set is intended to be reused and adapted for any project requiring this level of rigor and structure. Always update and reference it as the project evolves.
