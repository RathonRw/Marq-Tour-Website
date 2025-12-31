import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <div className="min-h-[50vh] place-content-center p-4">
      <div className="relative mx-auto w-full max-w-2xl space-y-5 p-4 text-center md:py-8 lg:py-12">
        <h2 className="font-syne-mono text-2xl tracking-tighter sm:text-4xl md:text-5xl">
          Ready to{" "}
          <span className="font-medium font-serif italic tracking-tight">
            explore
          </span>{" "}
          the world with confidence?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          At Free Sky Ventures, we craft personalized travel experiences across
          Rwanda and beyond, designed with care, professionalism, and attention
          to every detail.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 pt-5 md:flex-row">
          <Button asChild className="rounded-full" size="lg" variant="outline">
            <Link href="/about#packages">Explore Tour Packages</Link>
          </Button>

          <Button asChild className="rounded-full" size="lg">
            <Link href="/booking">
              Plan Your Journey <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
