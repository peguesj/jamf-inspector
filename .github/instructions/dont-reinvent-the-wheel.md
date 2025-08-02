---
description: |
    Don't Reinvent The Wheel (DRTW) Principle – authoritative, stack-aligned governance for all development, architecture, and dependency decisions. Enforces rigorous adherence to best practices, authoritative sources, and maximizes reliability, efficiency, and maintainability by leveraging proven, well-maintained solutions.
---

# DRTW: Don't Reinvent The Wheel – Authoritative Principle & Governance

## Principle

The DRTW principle is a mandatory, inherited constraint for all contributors and agents. It requires that every architectural, implementation, or dependency decision be governed by authoritative sources, best practices, and the reliability of the current tech stack and its components. All work must maximize efficiency, maintainability, and alignment with industry standards by leveraging proven, well-maintained solutions—never duplicating or reimplementing functionality that is already robustly provided by the stack or ecosystem.

## Process

Whenever `$DRTW` or `don't reinvent the wheel` is invoked in a request, you must:

1. **Log Context:** Display the current tech stack, environment, architecture, and dependencies in chat, referencing authoritative documentation and standards.
2. **Request Distillation:** Analyze and classify the request into a specific action type (e.g., add, update, replace, upgrade, refactor, decouple, modularize, etc. also include auto where you determine the best actions to perform based on the context and your findings of how to better align your solution with industry best practices), expanding as needed for clarity and precision.
3. **Authoritative Solution Search:** For each action, query authoritative package managers (npm, pip, gem, etc.) and official sources to identify the most reliable, popular, and standards-adherent solutions that fit the current stack and constraints.
    - Ensure all proposed solutions are well-maintained, widely adopted, and actively updated.
    - Validate compatibility with the integrated architecture and all dependencies.
    - Reference authoritative sources and documentation for each recommendation.
4. **Efficiency Fallback:** If no specific request type is identified, process the request in the most efficient, standards-aligned manner for the current stack and context, always applying the DRTW principle.
5. **Documentation & Traceability:** For all code and logic, generate and update version-controlled documentation, including JSDoc comments and references to authoritative standards and sources. All changes must be traceable and adhere to industry best practices.

## Governance

- The DRTW principle inherits authority from the reliability and alignment of contributing sources, the tech stack, and its components.
- All contributors must reference and comply with this principle in every decision, update, or refactor.
- Any deviation must be documented, justified, and reviewed against authoritative standards.

## References

- [Stack Documentation](/docs/PLANNING.md)
- [Authoritative Standards](/config/stack.ts)
- [Best Practices](https://jsdoc.app/, https://semver.org/, https://www.npmjs.com/)
- [Industry Frameworks](https://owasp.org/, https://www.cisecurity.org/)

---

> This principle must be reviewed and updated as the stack, standards, and authoritative sources evolve.
