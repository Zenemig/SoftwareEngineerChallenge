# Advanced Challenges (Optional)

If time permits, these advanced features can be implemented to showcase additional skills:

## Challenge A: Optimistic UI
- **Pattern:** Use React's `useOptimistic` hook for instant like button updates
- **Implementation:** Provide immediate UI feedback before server confirmation
- **Benefits:** Improved user experience with instant visual feedback

### Implementation Example
```typescript
"use client";
import { useOptimistic } from "react";

function LikeButton({ setup }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    setup.likes,
    (currentLikes, increment) => currentLikes + increment
  );
  
  const handleLike = () => {
    setOptimisticLikes(1); // Optimistic update
    // Actual like logic here
  };
  
  return (
    <button onClick={handleLike}>
      👍 {optimisticLikes}
    </button>
  );
}
```

## Challenge B: Shared Validation Schema
- **Pattern:** Use the same Zod schema for both server-side validation in Server Actions and client-side validation
- **Implementation:** Create shared schema in `packages/validators` or reuse between client and server
- **Benefits:** DRY principle, consistent validation rules

### Implementation Example
```typescript
// packages/validators/src/setup.ts
export const submitSetupSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  imageUrl: z.string().url("Must be a valid URL")
});

// Client-side usage
const form = useForm({ schema: submitSetupSchema });

// Server-side usage
async function submitAction(formData: FormData) {
  const result = submitSetupSchema.safeParse(/* ... */);
}
```

## Challenge C: Component Architecture
- **Pattern:** Showcase advanced component patterns like Compound Components
- **Focus:** Build flexible, reusable components
- **Examples:** Card components with flexible layouts, form components with composition

### Compound Component Example
```typescript
// Flexible Setup Card component
export function SetupCard({ children }) {
  return <div className="setup-card">{children}</div>;
}

SetupCard.Image = function SetupCardImage({ src, alt }) {
  return <img src={src} alt={alt} className="setup-card-image" />;
};

SetupCard.Content = function SetupCardContent({ children }) {
  return <div className="setup-card-content">{children}</div>;
};

SetupCard.Actions = function SetupCardActions({ children }) {
  return <div className="setup-card-actions">{children}</div>;
};
```

## Implementation Priority
1. **First:** Complete all core requirements
2. **Then:** Choose one advanced challenge based on remaining time
3. **Focus:** Quality implementation over multiple partial features

## Documentation Requirements
If implementing advanced challenges, document:
- **Why** you chose this specific challenge
- **How** the implementation improves the user experience
- **What** trade-offs were considered
- **Future** improvements you would make
