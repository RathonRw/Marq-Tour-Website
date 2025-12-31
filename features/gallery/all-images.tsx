import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { gallery } from "@/config/data";
export default function AllImages() {
  return (
    <div className="container bg-background py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-5 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <AspectRatio
            className="h-full rounded-lg bg-muted"
            key={i}
            ratio={16 / 9}
          >
            <Image
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-lg object-cover"
              fill
              placeholder="blur"
              src={item.url}
            />
          </AspectRatio>
        ))}
      </div>
    </div>
  );
}
