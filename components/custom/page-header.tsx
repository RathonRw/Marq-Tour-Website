import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function PageHeader({
  title,
  details,
  className,
  isForBlog,
  min,
  category,
}: {
  title: string;
  details: string;
  className?: string;
  isForBlog?: boolean;
  min?: number;
  category?: string;
}) {
  return (
    <section className="overflow-hidden border-b">
      <div
        className={cn(
          "relative mx-auto mt-1 flex max-w-3xl flex-col justify-between border-x",
          className
        )}
      >
        <div className="flex flex-col gap-6 px-2 py-8">
          <h2 className="text-center font-semibold font-syne-mono text-lg tracking-tight md:text-2xl lg:text-4xl xl:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-balance text-center text-muted-foreground text-sm md:text-base">
            {details}
          </p>
        </div>
        {isForBlog && (
          <div className="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
            {min && (
              <Button className="rounded-full" size="sm" variant="ghost">
                {min} min read
              </Button>
            )}
            {category && (
              <Button className="rounded-full" size="sm">
                {category}
              </Button>
            )}
          </div>
        )}
        {/* <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" /> */}
      </div>
    </section>
  );
}
