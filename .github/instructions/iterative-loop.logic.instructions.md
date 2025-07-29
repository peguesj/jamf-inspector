---
description: Authoritative, reusable instructions for iterative loop logic in software development. Includes a high-contrast, color-coded flowchart for process visualization. Tracks and constrains agent and developer work to a standards-driven, recursive, test-driven loop.
applyTo: '**'
---

# Iterative Loop Logic: Authoritative Process & Flow

## Purpose
This document defines the iterative loop logic for software development, ensuring all work is performed in a standards-driven, recursive, and test-driven manner. It is agnostic and reusable for any project or agent.

## Core Loop Principles
- **Multi-Pass Reasoning:** Always use a minimum 4-pass reasoning process to determine, define, and refine steps and subtasks (recursively up to 5 levels).
- **Batching:** Intelligently batch as many changes as feasible within each iteration, provided code quality and standards are upheld.
- **Self-Learning:** With each iteration, analyze previous steps and context to become more efficient, adapting batching and process improvements as the codebase evolves.
- **Documentation:** At each pass, update all relevant documentation and integrate it within the authoritative resource for the project.
- **Process Recall:** Before resuming execution, recall the process and all additional context, ensuring confidence in requirements, current task, iterative loop, dependencies, outputs, and conditions.
- **Loop Continuity:** Unless interrupted, always resolve to continue in the predetermined order, as it is tracked and already represents an ideally planned development process flow.
- **Error-Driven Development:** Always check for errors after each iteration and enter a fix loop if any are found, before proceeding.
- **User Approval:** Wait for explicit user approval before major actions.



- **ALWAYS start each new task or batch of work by creating or checking out a feature branch with an atomic, descriptive name (e.g., `feat/scaffold`, `fix/issue-123`, `chore/docs-update`).**
- **AFTER staging and committing, you MUST push the branch and all changes to origin before considering the ACW loop complete.**
- This ensures all changes are isolated, traceable, reviewable, and available for CI/CD, PR, or further automation. This step is mandatory and must be prioritized in every ACW iteration.
+- **Update the terminal allowList in settings.json with all approved and used commands for the current and future workflows.**
+- This ensures all required commands are whitelisted for agent-driven automation and compliance.

- **Always start each new task or batch of work by creating or checking out a feature branch with an atomic, descriptive name (e.g., `feat/scaffold`, `fix/issue-123`, `chore/docs-update`).**
- This ensures all changes are isolated, traceable, and can be reviewed or reverted independently.

## Iterative Loop Flowchart & Atomic Commit Workflow

> **ACW Completion Rule:**
> - The ACW loop is NOT complete until all changes are pushed to origin on a dedicated branch. This is a required, non-optional step for traceability and automation.

```mermaid
flowchart TB
    subgraph INIT Initialization
        A1((Start)):::start --> A2["Understand Requirements"]:::init
        A2 --> A3["Design Data Models"]:::init
        A3 --> A4["Implement Logic"]:::init
        A4 --> A5["Integrate APIs"]:::init
        A5 --> A6["Test Thoroughly"]:::init
        A6 --> A7["Document & Review"]:::init
        A7 --> A8((End Init)):::END
    end
    subgraph DEV_LOOP["Dev Loop (Iterative Loop)"]
        %%{init: {'direction': 'TB'}}%%
        B1((Start Loop)):::start --> B2["Multi-Pass Reasoning\n- Minimum 4 passes\n- Recursively break down tasks\n- Reference authoritative docs\n- Example: For UI, break into header, menu, widgets, etc.\n- Use chat history and planning docs for context"]:::loop
        B2 --> B3["Batching\n- Intelligently group changes\n- Maximize efficiency, minimize context switching\n- Batch UI, config, and logic updates together when possible\n- Document batch rationale in changelog\n- Example: Batch all style/config fixes for theme"]:::loop
        B3 --> B4["Self-Learning\n- Analyze previous steps and errors\n- Adapt process for efficiency\n- Update allowList, docs, and process as needed\n- Example: After missing allowList update, add explicit step\n- Reference: [Self-Learning Principle](#core-loop-principles)"]:::loop
        B4 --> B5["Documentation\n- Update all relevant docs, changelogs, and standards\n- Add links/anchors to related instruction sets\n- Example: Update roadmap, planning, and standards after each batch\n- Use #mcp_force-mcp-std_anchor_based_cross_referencing for cross-links"]:::loop
        B5 --> B6["Process Recall\n- Before each loop, recall requirements, context, and previous steps\n- Ensure confidence in task, dependencies, and outputs\n- Example: Review chat, planning, and standards before next batch"]:::loop
        B6 --> B7["Loop Continuity\n- Unless interrupted, always continue in order\n- Track progress and return to next step\n- Example: After error fix, resume batching or next pass"]:::loop
        B7 --> B8["Error-Driven Fix Loop\n- Check for errors after each iteration\n- Enter fix loop if any errors found\n- Example: If theme is broken, enter fix loop before next batch"]:::error
        B8 -->|"if errors remain"| B2
        B8 -->|"if no errors and work remains"| B1
        B8 -->|"if no errors and no work"| C1((Enter ACW)):::commit
    end
    subgraph ACW["Atomic Commit Workflow" direction_lr style fill:#f59e42,stroke:#fff,color:#fff]
        C1((Start ACW)):::start --> D1["Atomic Commit Workflow\n- Stage all changes\n- Commit with multi-line, detailed message\n- Create/switch to feature branch\n- Push branch and changes to origin (mandatory)\n- Example: See recent 'feat: atomic commit...'\n- Log all actions in changelog and docs"]:::commit
        D1 -->|"if more staged work"| D1
        D1 -->|"if all committed"| E1((Resume Main Loop)):::END
        F1((Start ACW Loop)):::start --> F2["Batch & Apply Changes"]:::commit
        F2 --> F3["Re-run Tests"]:::commit
        F3 -->|"if tests pass" | F4["Commit Changes"]:::commit
        F4 --> F5((End ACW Loop)):::nd
        classDef commit fill:#f59e42,stroke:#fff,color:#fff;
        classDef start fill:#f59e42,stroke:#fff,color:#fff;
        classDef error fill:#dc2626,stroke:#fff,color:#fff;
        classDef nd fill:#64748b,stroke:#fff,color:#fff;
        end
        %%{init: {'direction': 'LR'}}
    end
    INIT --> DEV_LOOP
    C1 --> D1["Atomic Commit Workflow"]:::commit
    D1 -->|"if more staged work"| D1
    D1 -->|"if all committed"| E1((Resume Main Loop)):::END
    classDef start fill:#f59e42,stroke:#fff,color:#fff;
    classDef END fill:#64748b,stroke:#fff,color:#fff;
    classDef init fill:#1e293b,stroke:#fff,color:#fff;
    classDef loop fill:#0f766e,stroke:#fff,color:#fff;
    classDef error fill:#dc2626,stroke:#fff,color:#fff;
    classDef commit fill:#f59e42,stroke:#fff,color:#fff;
```

### Error-Driven Fix Loop (Subprocess)

```mermaid
flowchart TD
    F1((Start Fix Loop)):::start --> F2["Detect Errors"]:::error
    F2 --> F3["Batch & Apply Fixes"]:::error
    F3 --> F4["Re-run Tests"]:::error
    F4 -->|"if errors remain"| F2
    F4 -->|"if no errors"| F5((Exit Fix Loop)):::END
    classDef start fill:#f59e42,stroke:#fff,color:#fff;
    classDef END fill:#64748b,stroke:#fff,color:#fff;
    classDef error fill:#dc2626,stroke:#fff,color:#fff;
```

### Atomic Commit Workflow (ACW Loop)
```mermaid
flowchart TB

    subgraph Iterative Loop Logic
        A[Iterative Loop Logic: Authoritative Process & Flow]
        A1[Purpose]
        A2[Core Loop Principles]
        A3[Branching & Atomic Workflow]
        A4[Iterative Loop: Dev]
        A5[Error-Driven Fix Loop]
        A6[Atomic Commit Workflow]
    end
    subgraph ACW Atomic Commit Workflow 
        
        F1((Start ACW Loop)):::start --> F2["Batch & Apply Changes"]:::commit
        F2 --> F3["Re-run Tests"]:::commit
        F3 -->|"if tests pass" | F4["Commit Changes"]:::commit
        F4 --> F5((End ACW Loop)):::nd
        classDef commit fill:#f59e42,stroke:#fff,color:#fff;
        classDef start fill:#f59e42,stroke:#fff,color:#fff;
        classDef error fill:#dc2626,stroke:#fff,color:#fff;
        classDef nd fill:#64748b,stroke:#fff,color:#fff;
        LR
    end
    A --> A1
    A1 --> A2
    A2 --> A3
    A3 --> A4
    A4 --> A5 --> A6
    A4--> A6 --> F1
    A6  --> A2
```


#### Node Types
- **(Start)/(End):** Process entry/exit
- **[Action]:** Step or subprocess
- **Conditional connectors:** Labeled arrows for process logic

#### ACW/Loop Conditions
- If error loop is successful and there is no remaining implementation work, proceed to ACW.
- If there is more to be done, proceed to start of loop.

### Atomic Commit Workflow (Branch/Task End)

- Create or switch to a feature branch (e.g., `feat/scaffold`)
- Intelligently group and stage changes for each logical refactor or feature
- Use a multi-line, bullet-pointed commit message for clarity and traceability
- Commit atomically after each major batch
- Repeat until all work is complete, then proceed to PR or merge as per standards

This process enforces traceable, standards-driven, and efficient development cycles.

## References
- [Copilot Instructions for Rigid, Typed, Functional Projects](./copilot-instructions.md)
- [React App Standards](./react-app.standards.instructions.md)
- [Functional Programming Principles](https://en.wikipedia.org/wiki/Functional_programming)
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
- [Syslog Format](https://tools.ietf.org/html/rfc5424)

---
This file must be updated as process and loop logic evolve.
