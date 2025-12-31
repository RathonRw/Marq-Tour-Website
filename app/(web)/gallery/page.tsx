import type { Metadata } from "next";
import AllImages from "@/features/gallery/all-images";
import { ImageGallery } from "@/features/gallery/image-gallery";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: {
    canonical: "/gallery",
  },
};
export default function AboutPage() {
  return (
    <div className="">
      <AllImages />
      <ImageGallery />
    </div>
  );
}
