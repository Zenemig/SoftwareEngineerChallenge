import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui";

import type { Setup } from "~/hooks/use-setups";
import { ImageWithFallback } from "./image-with-fallback";
import { LikeButton } from "./like-button";

interface SetupCardProps {
  setup: Setup;
  priority?: boolean;
}

export function SetupCard({ setup, priority = false }: SetupCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      {/* Image Section with Like Button Overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <ImageWithFallback
          src={setup.imageUrl}
          alt={setup.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />

        {/* Like Button Overlay */}
        <div className="absolute right-2 top-2">
          <LikeButton initialLikes={setup.likes} />
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="flex-1 pb-3">
        <CardTitle className="mb-1 text-lg leading-none tracking-tight transition-colors duration-200 group-hover:text-primary">
          {setup.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">by {setup.author}</p>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground">{setup.description}</p>
      </CardContent>

      {/* Tags */}
      <CardFooter className="pt-0">
        <div className="flex flex-wrap gap-1">
          {setup.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-primary/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
