import type { Metadata } from "next";
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
      <ImageGallery />
    </div>
  );
}
