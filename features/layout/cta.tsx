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
            boost
          </span>{" "}
          your business growth with us?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          We create high-impact content, manage your social presence, and
          optimize your SEO to attract, engage, and convert the right audience.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 pt-5 md:flex-row">
          <Button asChild className="rounded-full" size="lg" variant="outline">
            <Link href="/#services">View Our Services</Link>
          </Button>

          <Button asChild className="rounded-full" size="lg">
            <Link href="/contact">
              Get Started Today <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
