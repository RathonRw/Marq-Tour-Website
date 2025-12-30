import { packagesList } from "@/config/data";
import { PackageCard } from "./package-card";

export default function PackageCards() {
  return (
    <section className="container space-y-7 py-16" id="packages">
      <h2 className="font-semibold font-syne-mono text-2xl lg:text-3xl">
        Explore our packages
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-5 lg:grid-cols-3 lg:px-8">
        {packagesList.map((packg) => (
          <PackageCard key={packg.title} packag={packg} />
        ))}
      </div>
    </section>
  );
}
