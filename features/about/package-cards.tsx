import { packagesList } from "@/config/data";
import { PackageCard } from "./package-card";

export default function PackageCards() {
  return (
    <section className="space-y-8" id="packages">
      <h3 className="font-medium text-xl md:text-2xl">Explore our packages</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packagesList.map((packg) => (
          <PackageCard key={packg.title} packag={packg} />
        ))}
      </div>
    </section>
  );
}
