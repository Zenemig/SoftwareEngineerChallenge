# Git Workflow & Conventional Commits

## Conventional Commits Standard
This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit messages.

### Commit Message Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope Examples for This Project
- **ui**: UI component changes
- **api**: tRPC API changes
- **setup**: Setup router or setup-related functionality
- **forms**: Form handling and validation
- **gallery**: Gallery page functionality
- **likes**: Like button functionality
- **validation**: Zod schema or validation logic
- **types**: TypeScript type definitions
- **config**: Configuration files

### Example Commit Messages
```bash
feat(gallery): implement server-side data fetching with tRPC
fix(likes): resolve state management issue in like button
docs: update DESIGN_CHOICES.md with architecture decisions
style(ui): improve setup card layout and spacing
refactor(forms): extract shared validation schema
perf(gallery): optimize image loading with Next.js Image
test(setup): add unit tests for setup router
chore: update Cursor rules structure
```

## AI Agent Commit Workflow

When a user requests "commit work" or similar, follow this **MANDATORY** process:

### Step 1: Analyze Changes
1. Check git status to see all modified, added, and deleted files
2. Use git diff to understand what changes were made
3. Categorize changes by type and scope
4. Identify the primary purpose of the changes

### Step 2: Generate Commit Message
1. Determine the appropriate conventional commit type
2. Identify the most relevant scope (if applicable)
3. Write a clear, concise description (50 characters or less)
4. Add body if changes are complex or need explanation
5. Include breaking change footer if applicable

### Step 3: Present for Review
**CRITICAL**: Present the suggested commit message to the user for review:
```
Suggested commit message:
feat(gallery): implement server-side data fetching with tRPC

Changes include:
- Add Gallery component with tRPC server-side calling
- Implement setup grid layout with responsive design
- Add proper TypeScript types for setup data

Do you approve this commit message? (yes/no)
```

### Step 4: Wait for Approval
- **DO NOT** stage files or create commit until user explicitly approves
- Allow user to modify the message if needed
- Only proceed after receiving clear approval

### Step 5: Execute Commit
1. Stage all relevant files: `git add .`
2. Create commit with approved message: `git commit -m "approved message"`
3. Confirm commit was created successfully

## Commit Message Guidelines

### Description Guidelines
- Use imperative mood ("add" not "added" or "adds")
- Start with lowercase letter
- No period at the end
- Be specific but concise
- Focus on what the change does, not why

### When to Include Body
- Complex changes that need explanation
- Multiple related changes in one commit
- Breaking changes that need context
- Implementation details that aren't obvious

### When to Include Footer
- Breaking changes: `BREAKING CHANGE: <description>`
- Issue references: `Fixes #123` or `Closes #456`
- Co-authors: `Co-authored-by: Name <email>`

## Example Workflow

```bash
User: "commit work"

AI Agent:
1. Runs: git status
2. Runs: git diff
3. Analyzes: Added Gallery component, modified tRPC setup
4. Suggests: "feat(gallery): implement server-side data fetching with tRPC"
5. Presents message for approval
6. Waits for user confirmation
7. Only after approval: git add . && git commit -m "approved message"
```

## Quality Standards
- Each commit should represent a logical unit of work
- Avoid mixing different types of changes in one commit
- Keep commits focused and atomic
- Write commit messages that will be useful 6 months from now

## Security Requirement
**NEVER** create a commit without explicit user approval of the commit message. This ensures users maintain full control over their git history and commit messages.
