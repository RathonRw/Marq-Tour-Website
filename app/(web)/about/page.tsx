import type { Metadata } from "next";
import { Cta } from "@/features/_layout/cta";
import AboutContent from "@/features/about/content";
import AboutLocation from "@/features/about/location";
import PackageCards from "@/features/about/package-cards";
import Values from "@/features/about/values";

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about",
  },
};
export default function AboutPage() {
  return (
    <div className="container @md:mt-30 mt-20 flex flex-col @md:gap-30 gap-20">
      <AboutContent />
      <Values />
      <PackageCards />
      <AboutLocation />
      <Cta
        link={{ href: "/booking", label: "Plan Your Journey" }}
        title="Ready to explore world together"
      />
    </div>
  );
}
