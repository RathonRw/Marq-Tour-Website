import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { services } from "@/config/data";

export default function Services() {
  return (
    <section className="container space-y-7 py-16" id="services">
      <h2 className="font-semibold font-syne-mono text-2xl lg:text-3xl">
        Explore our services
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {services.map((service, i) => (
          <Link
            className="group cursor-pointer rounded-2xl bg-background p-10 shadow duration-300 ease-in-out hover:scale-105 hover:rounded-4xl"
            href="/contact"
            key={i}
          >
            <div className="flex h-full flex-col gap-6">
              <service.icon className="size-9 text-foreground/70 transition-colors duration-300 ease-in-out group-hover:text-primary/70" />
              <p className="font-semibold text-xl tracking-tight">
                {service.title}
              </p>
              <p className="text-lg text-muted-foreground leading-6">
                {service.description}
              </p>
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
