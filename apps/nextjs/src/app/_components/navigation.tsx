import Link from "next/link";

import { Button } from "@acme/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-foreground">
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
