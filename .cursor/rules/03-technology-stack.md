# Technology Stack & Architecture Rules

## tRPC Usage Rules
- **Server Components:** Use `~/trpc/server` import for server-side calls
- **Client Components:** Use `~/trpc/react` import for client-side calls
- **Existing Router:** Use the `setup` router that's already implemented in `packages/api/src/router/setup.ts`

### Available Queries
- `setup.all` - Returns all mock setups
- `setup.byId` - Returns setup by ID

### Import Patterns
```typescript
// Server Components
import { trpc } from "~/trpc/server";

// Client Components  
import { useTRPC } from "~/trpc/react";
```

## UI Component Rules
- **Component Library:** Use `@acme/ui` package components exclusively
- **Available Components:** Button, Input, Label, Form, FormField, FormItem, FormLabel, FormMessage, DropdownMenu, Toast
- **Adding Components:** If you need additional shadcn/ui components, run: `cd packages/ui && pnpm ui-add [component-name]`
- **Styling:** Use Tailwind CSS classes, follow existing patterns in codebase

### Example Component Usage
```typescript
import { Button, Input, Label, Form, FormField, FormItem, FormLabel, FormMessage } from "@acme/ui";
```

## Data Structure Rules
Follow the exact structure from `packages/api/src/router/setup.ts`:

```typescript
interface Setup {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  likes: number;
  tags: string[];
}
```

## File Organization Rules
- **App Router:** Use Next.js 15 App Router pattern (`apps/nextjs/src/app/`)
- **Components:** Place reusable components in `apps/nextjs/src/app/_components/`
- **Server Actions:** Define in the page file or separate server files
- **Imports:** Use the established import aliases (`~/` for src root)

## Package Usage Rules
- **Dependencies:** Only use packages already included in the template
- **UI Framework:** Use shadcn/ui components from `@acme/ui` package
- **Styling:** Use Tailwind CSS with existing configuration
- **Forms:** Use react-hook-form with existing setup
- **Validation:** Use Zod for all validation needs

## Performance Considerations
- **Server Components:** Leverage Server Components for data fetching
- **Image Optimization:** Consider using Next.js Image component
- **Code Splitting:** Use dynamic imports if needed for client components
- **Caching:** Leverage tRPC's built-in caching
