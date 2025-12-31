import type { StaticImageData } from "next/image";

export interface TPackage {
  title: string;
  media: StaticImageData;
  mediaType: "image" | "video";
}
