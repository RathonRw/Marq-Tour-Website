import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="container relative flex min-h-[400px] overflow-hidden bg-muted/80 pb-10 lg:min-h-[80vh] 2xl:min-h-[500px]">
        <video
          autoPlay
          className="absolute inset-0 z-0 h-full w-full object-cover"
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
        <div className="relative z-10 mt-auto flex flex-col gap-8 text-white">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Explore Rwanda's top tourist spots?
          </h1>
          <p className="line-clamp-3 max-w-lg">
            Uncover Rwanda&apos;s most beautiful destinations, from
            Kigali&apos;s charm to the breathtaking landscapes of the north.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button asChild className="dark w-fit rounded-full" size="xl">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              className="dark w-fit rounded-full"
              size="xl"
              variant={"ghost"}
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
