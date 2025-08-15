# Core Technical Requirements (MUST BE FOLLOWED)

## 1. Gallery Page (/) - Server Component Data Fetching
- **REQUIREMENT:** Data fetching MUST be done in a Server Component using tRPC's server-side calling pattern
- **Implementation:** Use `trpc.setup.all.query()` from `~/trpc/server`
- **Pattern:** Follow the existing pattern in `apps/nextjs/src/app/page.tsx` with `prefetch(trpc.post.all.queryOptions())`
- **Display:** Show setups in a grid or list format

### Example Implementation Pattern
```typescript
// In Server Component
import { HydrateClient, prefetch, trpc } from "~/trpc/server";

export default function GalleryPage() {
  prefetch(trpc.setup.all.queryOptions());
  
  return (
    <HydrateClient>
      {/* Gallery content */}
    </HydrateClient>
  );
}
```

## 2. Like Button - Client-Side Interaction
- **REQUIREMENT:** Like button interaction MUST be handled on the client side
- **State:** In-memory state is sufficient - NO persistence required
- **Implementation:** Each setup should have a Like button with a counter that increments when clicked
- **Component:** Must be a Client Component (use "use client" directive)

### Requirements
- Each setup must have individual like state
- Clicking increments count for that specific setup only
- No backend persistence required
- State resets on page refresh (acceptable)

## 3. Submission Page (/submit) - Server Actions with Zod Validation
- **REQUIREMENT 1:** Form submission MUST be handled by a Next.js Server Action
- **REQUIREMENT 2:** Server Action MUST use Zod to validate FormData with these exact rules:
  - `title`: Must be a non-empty string
  - `author`: Must be a non-empty string  
  - `imageUrl`: Must be a valid URL string
- **Success Behavior:** Console.log the validated data (NO file writing required)
- **Error Behavior:** Display specific validation errors to the user
- **Route:** Create at `/submit` path

### Validation Schema Requirements
```typescript
const submitSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  imageUrl: z.string().url("Must be a valid URL")
});
```

## Compliance Verification
Before considering any feature complete, verify:
1. ✅ Server Component data fetching uses tRPC server-side pattern
2. ✅ Like buttons work with client-side state management
3. ✅ Server Actions handle form submission with proper Zod validation
4. ✅ Validation errors are displayed to users
5. ✅ All TypeScript types are properly defined
6. ✅ Components follow established patterns in the codebase
7. ✅ No unnecessary features beyond requirements are implemented
