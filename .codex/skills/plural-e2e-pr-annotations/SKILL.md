---
name: plural-e2e-pr-annotations
description: Add the required Plural Flow and Plural Preview annotations to pull-request bodies when a marketing repository change requires E2E testing, Flow validation, or a deploy-preview test.
---

# Plural E2E PR Annotations

Add the marketing Flow and preview annotations to every PR body that requires E2E testing.

## Prepare the PR body

1. Determine whether the requested change requires E2E testing, Flow validation, or deploy-preview testing.
2. If it does, include these exact standalone lines in the PR body:

```text
Plural Flow: marketing
Plural Preview: marketing
```

3. Preserve the exact capitalization and values. Do not substitute a URL, service name, or environment-specific preview identifier.
4. Verify both lines are present before opening or updating the PR.

Do not add these annotations to PRs that do not require E2E testing.
