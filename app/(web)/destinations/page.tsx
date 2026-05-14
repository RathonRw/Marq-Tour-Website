import type { Metadata } from "next";
import { destinationsList } from "@/config/data";
import { Cta } from "@/features/_layout/cta";
import { PackageCard } from "@/features/about/package-card";

export const metadata: Metadata = {
  title: "Destinations",
  alternates: {
    canonical: "/destinations",
  },
};
export default function DestinationsPage() {
  return (
    <div className="container @md:mt-30 mt-20 flex flex-col @md:gap-30 gap-20">
      <section className="space-y-7" id="packages">
        <h3 className="font-medium text-xl md:text-2xl">
          Explore our Destinations
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinationsList.map((packg) => (
            <PackageCard key={packg.title} packag={packg} />
          ))}
        </div>
      </section>
      <Cta
        link={{ href: "/booking", label: "Plan Your Journey" }}
        title="Ready to explore world together"
      />
    </div>
  );
}
