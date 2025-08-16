import type { Setup } from "~/hooks/use-setups";
import { SetupCard } from "~/app/_components/setup-card";
import { getSetups } from "~/hooks/use-setups";
import { HydrateClient, prefetch, trpc } from "~/trpc/server";

function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <HydrateClient>
      <main className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Rate My <span className="text-primary">Setup</span> Gallery
        </h1>
        {children}
      </main>
    </HydrateClient>
  );
}

export default async function GalleryPage() {
  // Server-side tRPC data fetching using custom function
  const { data: setups, error } = await getSetups();
  prefetch(trpc.setup.all.queryOptions());

  if (error) {
    return (
      <GalleryLayout>
        <div className="text-center text-red-500">
          <p className="text-lg">Error loading setups: {error}</p>
        </div>
      </GalleryLayout>
    );
  }

  if (!setups) {
    return (
      <GalleryLayout>
        <div className="text-center">
          <p className="text-lg text-muted-foreground">No setups found</p>
        </div>
      </GalleryLayout>
    );
  }

  return (
    <GalleryLayout>
      <p className="mt-4 text-lg text-muted-foreground">
        Discover and rate amazing desk setups from the community
      </p>

      {/* Gallery Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {setups.map((setup: Setup, index: number) => (
            <SetupCard
              key={setup.id}
              setup={setup}
              priority={index < 4} // Prioritize first 4 images (above the fold)
            />
          ))}
        </div>
      </div>
    </GalleryLayout>
  );
}
