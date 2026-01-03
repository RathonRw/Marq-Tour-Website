import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container overflow-hidden py-6">
      <div className="overflow-x-hidden rounded-2xl">
        <div className="relative flex h-[400px] overflow-hidden rounded-2xl bg-muted/80 p-6 2xl:h-[500px]">
          <video
            autoPlay
            className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover"
            loop
            muted
            preload="auto"
          >
            <source
              src="https://videos.pexels.com/video-files/2882117/2882117-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 z-0 bg-black/40" />
          <div className="relative z-10 mt-auto flex flex-col gap-4 text-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
              Ready to explore Rwanda's top tourist spots?
            </h1>
            <p className="line-clamp-3 max-w-lg">
              Uncover Rwanda&apos;s most beautiful destinations, from
              Kigali&apos;s charm to the breathtaking landscapes of the north.
            </p>
            <Button asChild className="w-fit rounded-full">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
