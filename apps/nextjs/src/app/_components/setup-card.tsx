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
    <Card className="flex h-full flex-col overflow-hidden">
      {/* Image Section with Like Button Overlay */}
      <div className="relative aspect-video w-full bg-muted">
        <ImageWithFallback
          src={setup.imageUrl}
          alt={setup.title}
          className="object-cover"
          priority={priority}
        />

        {/* Like Button Overlay */}
        <div className="absolute right-2 top-2">
          <LikeButton initialLikes={setup.likes} />
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="flex-1 pb-3">
        <CardTitle className="mb-1 text-lg leading-none tracking-tight">
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
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
