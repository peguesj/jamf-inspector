---
description: Authoritative standards and best practices for diagramming in documentation, including Mermaid, PlantUML, and plaintext tree diagrams. Covers style, accessibility, and update process.
applyTo: '**/docs|.github/instructions/*.md|README.md|.github/**/instructions/**/*.md'  
---

# Diagramming Standards & Best Practices

## Purpose
This document defines standards for creating, styling, and maintaining diagrams in documentation. It ensures diagrams are accessible, high-contrast, and kept up to date with the codebase and documentation.

## Diagram Types
- **Mermaid:** Use for flowcharts, mindmaps, class diagrams, ER diagrams, and coverage charts. Prefer Mermaid for in-repo diagrams due to its markdown compatibility and version control friendliness.
- **PlantUML:** Use for complex workflows or when integration with external tools is required.
- **Plaintext Tree (`tree` style):** Use for quick, readable overviews of directory or object hierarchies.

## Style & Accessibility
- Use high-contrast color schemes for all diagrams.
- Label all nodes and edges clearly.
- For Mermaid, use `classDef` to style nodes and subgraphs for clarity and accessibility.
- Provide alt text or captions for all diagrams in documentation.
- Keep diagrams up to date with code and documentation changes.

## Update Process
- Update diagrams whenever the project structure or logic changes.
- Reference diagrams in relevant documentation sections.
- Use version control to track diagram changes.

## References
- [Mermaid Docs](https://mermaid-js.github.io/mermaid/#/)
- [PlantUML Docs](https://plantuml.com/)
- [Markdown Diagrams](https://www.markdownguide.org/extended-syntax/#diagrams)

---
This file must be updated as diagramming standards evolve.
