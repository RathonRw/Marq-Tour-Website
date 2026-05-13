import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta({
  title,
  description,
  link,
}: {
  title: string;
  description?: string;
  link: { href: string; label: string };
}) {
  return (
    <section className="relative grid grid-cols-12 overflow-hidden rounded-md bg-secondary/50 py-15 md:py-30">
      <div className="relative @md:col-span-8 col-span-12 @md:col-start-3 flex flex-col gap-8 @md:px-0 px-4">
        <h2 className="text-center text-3xl md:text-5xl">{title}</h2>
        {description && (
          <p className="mx-auto w-full max-w-xl text-center text-muted-foreground text-sm sm:text-base md:text-lg">
            {description}
          </p>
        )}
        <div className="flex flex-col items-center justify-center">
          <Button
            asChild
            className="min-h-10 rounded-full bg-muted px-6"
            size="lg"
            variant={"secondary"}
          >
            <Link href={link.href as Route}>{link.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
