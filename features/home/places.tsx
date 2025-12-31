import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
    <section className="container py-16 lg:py-20">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <h2 className="font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
          Explore Places To Visit
        </h2>

        <Carousel
          className="w-full"
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <div className="flex items-center justify-end">
            <div className="flex space-x-2">
              <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent className="mt-5 cursor-grab active:cursor-grabbing">
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
                        src={p.media}
                      />
                    </AspectRatio>
                  </div>

                  <p className="line-clamp-1 font-semibold text-lg tracking-tight lg:text-xl">
                    {p.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
