# Cursor Rules for "Rate My Setup" Take-Home Assessment

This directory contains organized Cursor rules to ensure compliance with the take-home assessment requirements.

## Rule Files Overview

1. **[01-project-overview.md](./01-project-overview.md)** - Project context, mission, and success criteria
2. **[02-core-technical-requirements.md](./02-core-technical-requirements.md)** - Non-negotiable technical requirements
3. **[03-technology-stack.md](./03-technology-stack.md)** - Technology stack and architecture rules
4. **[04-code-quality-standards.md](./04-code-quality-standards.md)** - TypeScript, React, and code quality standards
5. **[05-advanced-challenges.md](./05-advanced-challenges.md)** - Optional advanced features to showcase skills
6. **[06-constraints-limitations.md](./06-constraints-limitations.md)** - What NOT to implement and development constraints
7. **[07-documentation-requirements.md](./07-documentation-requirements.md)** - Requirements for completing DESIGN_CHOICES.md
8. **[08-git-workflow.md](./08-git-workflow.md)** - Conventional commits and AI agent commit workflow
9. **[09-rule-management.md](./09-rule-management.md)** - Dynamic rule creation and evolution as the project develops
10. **[10-design-choices-documentation.md](./10-design-choices-documentation.md)** - Guidelines for maintaining DESIGN_CHOICES.md as a living document

## Quick Reference

### Core Requirements (Must Implement)
- **Gallery Page (/)**: Server Component with tRPC server-side data fetching
- **Like Button**: Client-side interaction with in-memory state
- **Submission Page (/submit)**: Server Actions with Zod validation

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI**: `@acme/ui` components (shadcn/ui)
- **API**: tRPC with existing `setup` router
- **Validation**: Zod schemas
- **Forms**: react-hook-form
- **Styling**: Tailwind CSS

### Key Constraints
- **Time Limit**: 3-4 hours maximum
- **No Database**: Use mock data only
- **No Persistence**: In-memory state for likes
- **No New Dependencies**: Use existing packages only

### Success Metrics
1. All core requirements implemented correctly
2. Full TypeScript type safety
3. Clean, maintainable code
4. Thorough documentation in DESIGN_CHOICES.md
5. Follows established codebase patterns

## Usage
Each rule file contains specific guidance for its domain. Read all files before starting development to understand the complete requirements and constraints.
