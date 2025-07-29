{
  "FORCE_learnings": {
    "linear_issue_pm_id_guidance": {
      "rule": "Always retrieve the actual Linear issue PM ID from Linear using the API/tools, not from static references or assumptions.",
      "action": "Add this guidance to FORCE learnings and ensure all commit messages and documentation reference the correct Linear issue ID (e.g., PEG-347).",
      "example": "For CRM lead management screens, use the PM ID PEG-347 as retrieved from Linear."
    },
    "commit_message_guidance": {
      "rule": "All commit messages must include the Linear issue ID (e.g., PEG-347).",
      "format": "Messages should be granular, atomic, and multiline."
    },
    "iterative_loop_pattern": {
      "steps": [
        "Retrieve the authoritative Linear issue ID.",
        "Implement the code or migration.",
        "Commit with the Linear issue ID in the message.",
        "Update Linear with commit hash and summary.",
        "Document learnings in FORCE."
      ]
    },
    "example": {
      "task": "TASK-2032 (lead/opportunity/contact management screens)",
      "linear_pm_id": "PEG-347",
      "commit_message": "feat(crm): Implement lead management screens\n\n- Implements UI for leads\n- Integrates with backend\n- Linear: PEG-347",
      "actions": [
        "Update Linear with commit hash and summary.",
        "Add learning to FORCE."
      ]
    }
  }
}
