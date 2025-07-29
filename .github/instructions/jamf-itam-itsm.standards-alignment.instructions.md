---
description:   This instruction set is designed to guide the development of applications focused on Security Posture Management (SPM), IT Asset Management (ITAM), and IT Service Management (ITSM), with strict alignment to established security, compliance, and industry standards. It ensures the application can intelligently identify errors, redundancies, gaps, misalignments, and overlapping policies, and provides authoritative guidance for policy naming, configuration, and categorization. The baseline is the CIS Level 2 framework, but this set expands to include NIST, ISO, and other global standards for comprehensive posture consistency and optimization.

applyTo: '**'
---


# Security Posture Management Standards Alignment Instruction Set



## Purpose



This document provides authoritative, actionable standards and best practices for developing applications that manage, assess, and optimize security posture, ITAM, and ITSM environments. It ensures continuous alignment with industry frameworks and regulatory requirements, and supports intelligent detection and remediation of configuration and policy issues.





## General Principles



- **Framework Alignment:** All logic, configuration, and policy recommendations must reference at least one authoritative framework (CIS, NIST, ISO, etc.).

- **Error & Gap Detection:** The application must detect and report errors, redundancies, misalignments, and gaps in security posture, configuration, and policy.

- **Policy & Profile Naming:** Enforce clear, consistent naming conventions for all policies, configuration profiles, and categories, referencing authoritative sources.

- **Redundancy & Overlap Analysis:** Identify and report overlapping or conflicting policies, definitions, and deployment strategies.

- **Continuous Optimization:** Provide actionable recommendations for posture improvement, refactoring, and remediation.

- **Documentation & Traceability:** All findings, recommendations, and actions must be documented and traceable to their authoritative source.

- **Dynamic Adaptation:** The application must adapt to new standards, frameworks, and best practices as they evolve.





## Authoritative Frameworks & References



- **CIS Benchmarks (Level 1 & 2):** [CIS Apple macOS Benchmark](https://www.cisecurity.org/benchmark/apple_os)

- **NIST Cybersecurity Framework (CSF):** [NIST CSF](https://www.nist.gov/cyberframework)

- **NIST SP 800-53 (Security & Privacy Controls):** [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)

- **ISO/IEC 27001 & 27002 (Information Security Management):** [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)

- **ITIL 4 (IT Service Management):** [ITIL 4](https://www.axelos.com/certifications/itil-service-management)

- **OWASP Top 10:** [OWASP Top 10](https://owasp.org/www-project-top-ten/)

- **MITRE ATT&CK:** [MITRE ATT&CK](https://attack.mitre.org/)

- **PCI DSS:** [PCI DSS](https://www.pcisecuritystandards.org/)

- **HIPAA Security Rule:** [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/index.html)

- **GDPR:** [GDPR](https://gdpr.eu/)

- **SANS Critical Security Controls:** [SANS Top 20](https://www.sans.org/critical-security-controls/)





## Policy & Configuration Standards



- **Naming Conventions:**

  - Use a hierarchical, descriptive format: `[Framework]-[Category]-[Purpose]-[Scope]-[Version]` (e.g., `CIS-L2-PasswordPolicy-Global-v1.0`)

  - Avoid ambiguous or duplicate names; ensure uniqueness and traceability.

  - Reference: [NIST SP 800-128 - Guide for Security-Focused Configuration Management](https://csrc.nist.gov/publications/detail/sp/800-128/final)

- **Categorization:**

  - Group policies and profiles by framework, function, and risk domain.

  - Maintain a mapping table between internal categories and external standards.

- **Versioning:**

  - All policies and profiles must be versioned and include change history.

- **Documentation:**

  - Each policy/profile must include a description, rationale, authoritative reference, and expected impact.





## Error, Gap, and Redundancy Detection



- **Automated Analysis:**

  - Implement logic to scan for:

    - Duplicate or conflicting policies/profiles

    - Gaps in coverage relative to selected frameworks

    - Misaligned configurations (e.g., non-compliant settings)

    - Overlapping deployment scopes or policy assignments

  - Reference: [NIST SP 800-128](https://csrc.nist.gov/publications/detail/sp/800-128/final), [CIS Controls](https://www.cisecurity.org/controls/)

- **Reporting:**

  - All findings must be reported with severity, impact, and remediation guidance.

  - Link each finding to its authoritative source.





## Optimization & Remediation Guidance



- **Best Practice Recommendations:**

  - For each detected issue, provide actionable remediation steps, referencing the relevant framework.

  - Prioritize recommendations by risk and compliance impact.

- **Continuous Improvement:**

  - Track remediation status and posture improvement over time.

  - Reference: [ISO/IEC 27001 Continual Improvement](https://www.iso.org/isoiec-27001-information-security.html)





## Process & Workflow



1. **Framework Selection:** Allow users to select applicable frameworks (CIS, NIST, ISO, etc.).

2. **Baseline Assessment:** Perform a baseline scan against selected frameworks.

3. **Gap & Redundancy Analysis:** Identify and report all gaps, overlaps, and misalignments.

4. **Remediation Planning:** Generate prioritized, actionable remediation plans.

5. **Implementation Tracking:** Monitor and document remediation progress.

6. **Continuous Monitoring:** Reassess posture regularly and update recommendations as standards evolve.





## Security & Compliance



- **Data Handling:** Ensure all data is handled in accordance with GDPR, HIPAA, and other relevant regulations.

- **Auditability:** Maintain detailed logs of all actions, findings, and changes.

- **Access Control:** Enforce least privilege and role-based access for all sensitive operations.





## References



- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/)

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)

- [ITIL 4](https://www.axelos.com/certifications/itil-service-management)

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

- [MITRE ATT&CK](https://attack.mitre.org/)

- [PCI DSS](https://www.pcisecuritystandards.org/)

- [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/index.html)

- [GDPR](https://gdpr.eu/)

- [SANS Critical Security Controls](https://www.sans.org/critical-security-controls/)





> This instruction set must be reviewed and updated regularly to