"use client";

import { useState } from "react";

import type { SetupSubmission } from "@acme/validators";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  toast,
  useForm,
} from "@acme/ui";
import { setupSubmissionSchema } from "@acme/validators";

import { submitSetup } from "./actions";

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SetupSubmission, SetupSubmission>({
    schema: setupSubmissionSchema,
    defaultValues: {
      title: "",
      author: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (data: SetupSubmission) => {
    setIsSubmitting(true);

    try {
      // Create FormData for the server action
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("author", data.author);
      formData.append("imageUrl", data.imageUrl);

      const result = await submitSetup(formData);

      if (result.success) {
        toast.success("Setup submitted successfully! Thank you for sharing.");
        // Reset form on success
        form.reset();
      } else {
        toast.error("Please fix the errors and try again.");

        // Set field-specific errors from server validation
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            if (field !== "_form" && messages.length > 0) {
              form.setError(field as keyof SetupSubmission, {
                type: "server",
                message: messages[0],
              });
            }
          });
        }
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-8">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Submit Your <span className="text-primary">Setup</span>
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Share your amazing desk setup with the community
      </p>

      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Setup Details</CardTitle>
            <CardDescription>
              Fill in the details below to submit your setup. All fields are
              required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Field */}
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter a descriptive title for your setup"
                  {...form.register("title")}
                  className={`transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary/20 ${
                    form.formState.errors.title ? "border-destructive" : ""
                  }`}
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-destructive duration-200 animate-in fade-in-0 slide-in-from-top-1">
                    {form.formState.errors.title.message ?? "Title is required"}
                  </p>
                )}
              </div>

              {/* Author Field */}
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  placeholder="Your name or username"
                  {...form.register("author")}
                  className={`transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary/20 ${
                    form.formState.errors.author ? "border-destructive" : ""
                  }`}
                />
                {form.formState.errors.author && (
                  <p className="text-sm text-destructive duration-200 animate-in fade-in-0 slide-in-from-top-1">
                    {form.formState.errors.author.message ??
                      "Author is required"}
                  </p>
                )}
              </div>

              {/* Image URL Field */}
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  {...form.register("imageUrl")}
                  className={`transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary/20 ${
                    form.formState.errors.imageUrl ? "border-destructive" : ""
                  }`}
                />
                {form.formState.errors.imageUrl && (
                  <p className="text-sm text-destructive duration-200 animate-in fade-in-0 slide-in-from-top-1">
                    {form.formState.errors.imageUrl.message ??
                      "Valid image URL is required"}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Provide a direct link to an image of your setup
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !form.formState.isValid}
                className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Setup"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
