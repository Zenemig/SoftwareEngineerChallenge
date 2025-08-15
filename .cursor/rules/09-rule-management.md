# Dynamic Rule Management & Evolution

## Overview
This project's rules should evolve dynamically as development progresses. AI agents should actively identify opportunities to create new rules or update existing ones based on the work being done.

## Rule Creation & Structure Process

### 1. Rule File Structure
All rules follow this mandatory structure:

```markdown
# Rule Title

## Overview
Brief description of what this rule covers

## Specific Requirements
- Detailed requirements and constraints
- Implementation patterns
- Code examples where helpful

## Examples
Concrete examples of correct implementation

## Compliance
How to verify the rule is being followed
```

### 2. File Management Process
When creating or updating rules:

1. **Create/Update Rule File**
   - File: `.cursor/rules/##-rule-name.md`
   - Use sequential numbering (01, 02, 03, etc.)
   - Use kebab-case for filenames

2. **Update rules.json**
   - Add new entry with appropriate glob pattern
   - Ensure glob targets relevant files only
   - Write clear name and description

3. **Update README.md**
   - Add to the numbered list
   - Include brief description
   - Maintain logical organization

## Automatic Rule Opportunity Detection

### When to Suggest New Rules
AI agents should suggest new rules when they observe:

#### **Pattern Repetition**
- Same coding pattern used 3+ times
- Similar architectural decisions across files
- Repeated problem-solving approaches

#### **New Standards Emerging**
- New naming conventions being established
- Consistent styling or formatting choices
- Specific error handling patterns

#### **Project-Specific Conventions**
- Custom component patterns
- Specific tRPC usage patterns
- Unique validation approaches
- File organization decisions

#### **Decision Documentation Needs**
- Complex architectural choices
- Trade-off decisions that others should understand
- Best practices emerging from trial and error

### When to Suggest Rule Updates
Update existing rules when:

#### **Requirements Evolve**
- Original requirements become clearer
- New constraints discovered
- Better implementation patterns found

#### **Clarification Needed**
- Existing rule causes confusion
- Examples need improvement
- Missing edge cases discovered

#### **Scope Expansion**
- Rule applies to more file types
- Additional use cases identified
- Related patterns should be included

## AI Agent Rule Suggestion Process

### Step 1: Pattern Detection
While working, continuously analyze:
```
- Are we establishing new patterns?
- Are we making consistent architectural decisions?
- Are we solving problems in a replicable way?
- Are we creating conventions that should be documented?
```

### Step 2: Rule Opportunity Assessment
Evaluate if a new rule would be valuable:
```
- Would this help future developers?
- Is this pattern likely to be repeated?
- Does this establish important project conventions?
- Would this prevent common mistakes?
```

### Step 3: Suggestion Format
Present suggestions clearly:
```
RULE SUGGESTION DETECTED

Type: [New Rule | Update Existing Rule]
Triggered by: [What work prompted this suggestion]

Proposed Rule: "Component State Management Patterns"
Scope: React components with client-side state
Reason: Consistent pattern emerging for like button state management

Would you like me to:
1. Create this new rule? (yes/no)
2. Show you the proposed rule content first? (yes/no)

If approved, I will:
- Create .cursor/rules/##-component-state-patterns.md
- Update .cursor/rules.json with appropriate glob
- Update .cursor/rules/README.md
```

### Step 4: Wait for Approval
**CRITICAL**: Never create or modify rules without explicit approval:
- Present the suggestion clearly
- Explain the reasoning
- Show proposed rule content if requested
- Only proceed after user confirmation

### Step 5: Implement Rule Changes
After approval:
1. Create/update the rule file
2. Update rules.json with proper entry
3. Update README.md with new rule
4. Confirm all files are updated correctly

## Example Rule Suggestions

### Pattern-Based Suggestions
```
// After implementing multiple like buttons
DETECTED PATTERN: Client-side state management for likes
SUGGESTED RULE: "Like Button Implementation Standard"
SCOPE: Components with user interaction state
```

### Architecture-Based Suggestions
```
// After creating multiple Server Components
DETECTED PATTERN: Consistent tRPC server-side calling
SUGGESTED RULE: "Server Component Data Fetching Patterns"
SCOPE: Server Components that fetch data
```

### Convention-Based Suggestions
```
// After establishing naming conventions
DETECTED PATTERN: Consistent component naming
SUGGESTED RULE: "Component Naming Conventions"
SCOPE: All React components
```

## Rule Quality Standards

### New Rules Must Include
- **Clear Purpose**: Why this rule exists
- **Specific Guidelines**: Exact requirements
- **Code Examples**: Showing correct implementation
- **Anti-Patterns**: What to avoid
- **Verification**: How to check compliance

### Rule Updates Must Include
- **Change Rationale**: Why the update is needed
- **Backward Compatibility**: Impact on existing code
- **Migration Guide**: If breaking changes occur

## Glob Pattern Guidelines

### File Targeting Strategy
- **Specific as Possible**: Target only relevant files
- **Logical Grouping**: Related file types together
- **Avoid Over-broad**: Don't use `**/*` unless truly universal

### Common Patterns
```json
// React components
"glob": "apps/nextjs/src/**/*.{ts,tsx}"

// Server-side code
"glob": "apps/nextjs/src/app/**/page.tsx"

// API routes
"glob": "packages/api/src/**/*"

// Configuration
"glob": "*.{json,js,ts}"

// Documentation
"glob": "*.md"
```

## Maintenance Philosophy
- **Living Documentation**: Rules should evolve with the project
- **Just-in-Time**: Create rules when patterns emerge, not prematurely
- **Developer-Centric**: Rules should help developers, not burden them
- **Quality Over Quantity**: Better to have fewer, high-quality rules

## Success Metrics
A good rule management system should:
- Reduce decision fatigue for developers
- Ensure consistency across the codebase
- Capture institutional knowledge
- Accelerate onboarding of new team members
- Prevent regression of established patterns
