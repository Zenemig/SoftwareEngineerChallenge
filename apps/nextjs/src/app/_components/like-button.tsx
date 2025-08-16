"use client";

import { useState } from "react";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "@acme/ui";

interface LikeButtonProps {
  initialLikes: number;
}

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-black/70 hover:backdrop-blur-md"
          aria-label={isLiked ? "Unlike setup" : "Like setup"}
        >
          <div className="relative h-3 w-3">
            {/* Empty Heart */}
            <HeartIcon
              className={`absolute inset-0 size-3 text-white transition-opacity duration-300 ${
                isLiked ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Filled Heart */}
            <HeartFilledIcon
              className={`absolute inset-0 size-3 text-red-500 transition-opacity duration-300 ${
                isLiked ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <span
            key={likes}
            className="transition-all duration-300 ease-out animate-in slide-in-from-bottom-1"
          >
            {likes}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isLiked ? "Unlike setup" : "Like setup"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
