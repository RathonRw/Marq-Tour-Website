import type { Metadata } from "next";
import AllImages from "@/features/gallery/all-images";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: {
    canonical: "/gallery",
  },
};
export default function AboutPage() {
  return <AllImages />;
}
