import { z } from "zod/v4";

/**
 * Zod validation schema for setup submissions
 *
 * Requirements:
 * - title: Must be a non-empty string
 * - author: Must be a non-empty string
 * - imageUrl: Must be a valid URL string
 */
export const setupSubmissionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  imageUrl: z.string().url("Must be a valid URL"),
});

/**
 * TypeScript type derived from the validation schema
 * Use this for type safety in both client and server code
 */
export type SetupSubmission = z.infer<typeof setupSubmissionSchema>;

/**
 * Validation function for setup submissions
 * Returns a result object with success/error information
 */
export const validateSetupSubmission = (data: unknown) => {
  return setupSubmissionSchema.safeParse(data);
};
