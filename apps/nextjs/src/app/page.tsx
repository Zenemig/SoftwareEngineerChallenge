import { HydrateClient, prefetch, trpc } from "~/trpc/server";

export default function GalleryPage() {
  // Server-side tRPC data fetching
  prefetch(trpc.setup.all.queryOptions());

  return (
    <HydrateClient>
      <main className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Rate My <span className="text-primary">Setup</span> Gallery
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Discover and rate amazing desk setups from the community
        </p>

        {/* Gallery implementation will be added in subsequent steps */}
        <div className="w-full">
          <p className="text-center text-muted-foreground">
            Gallery implementation coming in step 2.2
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
