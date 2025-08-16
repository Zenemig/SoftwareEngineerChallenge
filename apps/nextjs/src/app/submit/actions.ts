"use server";

import type { SetupSubmission } from "@acme/validators";
import { setupSubmissionSchema } from "@acme/validators";

/**
 * Server Action for handling setup submissions
 *
 * Requirements:
 * - Must use Next.js Server Actions
 * - Must use Zod for FormData validation
 * - Must validate: title (non-empty string), author (non-empty string), imageUrl (valid URL)
 * - Must console.log validated data on success
 * - Must return proper error responses for validation failures
 */

// Note: async keyword is required by Next.js Server Actions even though this function doesn't perform any asynchronous operations. This is a framework requirement.
// eslint-disable-next-line @typescript-eslint/require-await
export async function submitSetup(formData: FormData): Promise<{
  success: boolean;
  data?: SetupSubmission;
  errors?: Record<string, string[]>;
}> {
  try {
    // Extract form data
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const imageUrl = formData.get("imageUrl") as string;

    // Validate the data using our Zod schema
    const validationResult = setupSubmissionSchema.safeParse({
      title,
      author,
      imageUrl,
    });

    if (!validationResult.success) {
      // Convert Zod validation errors to a user-friendly format
      const errors: Record<string, string[]> = {};

      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] ??= [];
        errors[field].push(issue.message);
      });

      return {
        success: false,
        errors,
      };
    }

    // Validation successful - log the data as required
    console.log("Setup submission received:", validationResult.data);

    return {
      success: true,
      data: validationResult.data,
    };
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error in submitSetup:", error);

    return {
      success: false,
      errors: {
        _form: ["An unexpected error occurred. Please try again."],
      },
    };
  }
}
