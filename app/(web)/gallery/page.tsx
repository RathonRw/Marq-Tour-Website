import type { Metadata } from "next";
import { Cta } from "@/features/_layout/cta";
import AllImages from "@/features/gallery/all-images";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: {
    canonical: "/gallery",
  },
};
export default function AboutPage() {
  return (
    <div className="container @md:mt-30 mt-20 flex flex-col @md:gap-30 gap-20">
      <section className="space-y-7" id="packages">
        <h3 className="font-medium text-xl md:text-2xl">Explore our gallery</h3>
        <AllImages />
      </section>
      <Cta
        link={{ href: "/booking", label: "Plan Your Journey" }}
        title="Ready to explore world together"
      />
    </div>
  );
}
