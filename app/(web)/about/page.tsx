import type { Metadata } from "next";
import PackageCards from "@/features/about/package-cards";

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about",
  },
};
export default function AboutPage() {
  return (
    <div className="">
      <PackageCards />
    </div>
  );
}
