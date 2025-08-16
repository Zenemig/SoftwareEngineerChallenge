"use client";

import { useState } from "react";
import Image from "next/image";
import { DesktopIcon } from "@radix-ui/react-icons";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  priority = false,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="mb-2 flex justify-center">
            <DesktopIcon className="size-12" />
          </div>
          <p className="text-sm font-medium">Setup Image</p>
          <p className="text-xs">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={handleImageError}
    />
  );
}
