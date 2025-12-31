import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { departments } from "@/config/data";

export default function Services() {
  return (
    <section className="container space-y-7 py-16" id="services">
      <h2 className="font-semibold font-syne-mono text-2xl lg:text-3xl">
        Explore our services
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {departments.map((department, i) => (
          <Link
            className="group cursor-pointer rounded-2xl bg-background p-10 shadow duration-300 ease-in-out hover:scale-105 hover:rounded-4xl"
            href="/contact"
            key={i}
          >
            <div className="flex h-full flex-col gap-6">
              <div className="size-9 place-content-center rounded-full bg-muted text-center text-foreground/70 text-xl transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-primary-foreground">
                {i + 1}
              </div>
              <div className="space-y-3">
                <p className="font-bold text-xl tracking-tight">
                  {department.title}
                </p>
                <p className="font-medium text-lg tracking-tight">
                  {department.subtitle}
                </p>
              </div>
              <ul className="list-disc space-y-2">
                {department.list.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2">
                <span className="font-semibold">Learn more</span>
                <ArrowRightIcon className="text-primary" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
