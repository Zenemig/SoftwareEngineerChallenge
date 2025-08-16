import Link from "next/link";

import { Button } from "@acme/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Stack vertically on very small screens, horizontal on larger screens */}
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-foreground transition-colors duration-200 hover:text-primary"
        >
          Rate My Setup
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Gallery</Button>
          </Link>
          <Link href="/submit">
            <Button>Submit Setup</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
