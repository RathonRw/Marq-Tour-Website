import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homeplacesList } from "@/config/data";

export default function PlacesCarousel() {
  return (
    <section className="relative space-y-8">
      <h3 className="font-medium text-xl md:text-2xl">
        Explore Places To Visit
      </h3>

      <Carousel
        className="w-full"
        opts={{
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing">
          {homeplacesList.map((p) => (
            <CarouselItem
              className="pl-4 md:basis-1/2 lg:basis-1/3"
              key={p.title}
            >
              <div className="flex flex-col gap-4" key={p.title}>
                <div className="relative overflow-hidden rounded-lg">
                  <AspectRatio className="bg-muted" ratio={16 / 9}>
                    <Image
                      alt={p.title}
                      className="h-full w-full rounded-lg object-cover duration-300 ease-in hover:scale-105"
                      fill
                      placeholder="blur"
                      src={p.media}
                    />
                  </AspectRatio>
                </div>

                <p className="line-clamp-1 font-medium text-lg tracking-tight lg:text-xl">
                  {p.title}
                </p>
                <Link
                  className="mt-auto text-muted-foreground underline decoration-muted-foreground underline-offset-4 transition-all duration-300 hover:text-foreground hover:decoration-foreground"
                  href={"/booking"}
                >
                  Visit
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-end">
          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 size-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300" />
            <CarouselNext className="relative inset-0 size-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
