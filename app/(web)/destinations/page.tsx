import type { Metadata } from "next";
import { destinationsList } from "@/config/data";
import { PackageCard } from "@/features/about/package-card";

export const metadata: Metadata = {
  title: "Destinations",
  alternates: {
    canonical: "/destinations",
  },
};
export default function DestinationsPage() {
  return (
    <section className="container space-y-7 py-16" id="packages">
      <h2 className="font-semibold font-syne-mono text-2xl md:px-5 lg:text-3xl">
        Explore our Destinations
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-5 lg:grid-cols-3 lg:px-8">
        {destinationsList.map((packg) => (
          <PackageCard isDestination key={packg.title} packag={packg} />
        ))}
      </div>
    </section>
  );
}
