# Constraints & Limitations

## What NOT to Implement
- **Database Integration:** Use existing mock data only
- **File Writing:** Do not write to JSON files or modify mock data files
- **Authentication:** Not required for core features
- **Persistence:** In-memory state is sufficient for likes
- **Real-time Features:** No WebSocket or real-time updates needed
- **Complex State Management:** No Redux, Zustand, or complex state libraries needed

## Development Guidelines
- **Time Boxing:** Respect the 3-4 hour time limit strictly
- **Feature vs Quality:** Always prioritize code quality over feature completeness
- **Scope Creep:** Resist adding features beyond requirements
- **Documentation:** Allocate sufficient time to document your choices in DESIGN_CHOICES.md

## Technical Constraints
- **Mock Data Only:** Use the existing mock data in `packages/api/src/router/setup.ts`
- **No Backend Changes:** Do not modify the tRPC router beyond what's required
- **Component Library:** Stick to `@acme/ui` components only
- **Existing Dependencies:** Do not add new npm packages
- **Framework Versions:** Use the existing Next.js 15 and React 19 setup

## State Management Constraints
- **Like Functionality:** In-memory state that resets on page refresh is acceptable
- **Form State:** Use react-hook-form for client-side form state
- **Global State:** Not required - component-level state is sufficient
- **Persistence:** No localStorage, sessionStorage, or database persistence needed

## UI/UX Constraints
- **Responsive Design:** Basic responsive design is sufficient
- **Accessibility:** Follow basic accessibility practices but don't over-engineer
- **Animations:** Simple CSS transitions are adequate, no complex animations needed
- **Loading States:** Basic loading indicators are sufficient

## Performance Constraints
- **Optimization:** Don't over-optimize for performance at the expense of readability
- **Bundle Size:** No need for aggressive code splitting beyond what Next.js provides
- **Image Optimization:** Use Next.js Image component if convenient, but not required
- **Caching:** Leverage existing tRPC caching, no custom caching needed

## Assessment Focus Areas
The evaluators will focus on:
1. **Requirement Compliance:** Following the exact technical requirements
2. **Code Quality:** Clean, readable, maintainable code
3. **TypeScript Usage:** Proper type safety throughout
4. **Architecture:** Following established patterns in the template
5. **Documentation:** Clear explanation of design choices

## What Will NOT Be Evaluated
- Advanced performance optimizations
- Complex animation systems
- Extensive test coverage
- Production deployment considerations
- Advanced security implementations
- Comprehensive error handling for edge cases
