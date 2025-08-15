# Code Quality Standards

## TypeScript Rules
- **Full Type Safety:** Ensure complete type safety from API to UI components
- **tRPC Types:** Leverage tRPC's automatic type inference
- **Zod Validation:** Use Zod schemas for runtime validation
- **No Any Types:** Avoid `any` types, use proper TypeScript patterns

### Type Safety Requirements
- All component props must have proper TypeScript interfaces
- API responses must be fully typed through tRPC
- Form data must be validated with Zod schemas
- Error states must be properly typed

## React Patterns
- **Server vs Client Components:** 
  - Default to Server Components unless client-side interaction is needed
  - Use "use client" directive only when necessary
  - Data fetching should be done in Server Components
- **Component Structure:** Create reusable, well-structured components
- **Props:** Use proper TypeScript interfaces for component props

### Component Guidelines
```typescript
// Server Component (default)
export default function ServerComponent() {
  // Server-side logic
}

// Client Component (when needed)
"use client";
export function ClientComponent() {
  // Client-side interactions
}
```

## Form Handling Rules
- **Client-Side Forms:** Use react-hook-form with the existing `useForm` hook from `@acme/ui`
- **Server Actions:** Use Next.js Server Actions for form submission
- **Validation:** Implement both client-side and server-side validation using the same Zod schema
- **Error Display:** Show field-specific validation errors to users

### Form Pattern
```typescript
// Client-side form with validation
const form = useForm({
  schema: submitSchema,
  defaultValues: { title: "", author: "", imageUrl: "" }
});

// Server Action with validation
async function submitAction(formData: FormData) {
  const result = submitSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    imageUrl: formData.get("imageUrl")
  });
  
  if (!result.success) {
    return { errors: result.error.flatten() };
  }
  
  console.log("Validated data:", result.data);
}
```

## Error Handling Requirements
- **Graceful Degradation:** Handle failed API calls gracefully
- **User Feedback:** Provide clear error messages to users
- **Type Safety:** Ensure error states are properly typed
- **Validation Errors:** Display specific field-level validation errors

## Best Practices
- Write self-documenting code with clear variable names
- Use consistent formatting and follow existing code style
- Implement proper error boundaries where needed
- Follow established patterns in the existing codebase
- Prioritize readability over performance optimizations
