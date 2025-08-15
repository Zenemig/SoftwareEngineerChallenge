import { HeartIcon } from "@radix-ui/react-icons";

import type { Setup } from "~/hooks/use-setups";
import { ImageWithFallback } from "./image-with-fallback";

interface SetupCardProps {
  setup: Setup;
}

export function SetupCard({ setup }: SetupCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Image Section with Like Count Overlay */}
      <div className="relative aspect-video w-full bg-muted">
        <ImageWithFallback
          src={setup.imageUrl}
          alt={setup.title}
          className="object-cover"
        />

        {/* Like Count Overlay */}
        <div className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
          <span className="flex items-center gap-1 text-xs text-white">
            <HeartIcon className="size-3" />
            {setup.likes}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-semibold leading-none tracking-tight">
          {setup.title}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground">by {setup.author}</p>
        <p className="mb-6 flex-1 text-sm text-muted-foreground">
          {setup.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1">
          {setup.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
