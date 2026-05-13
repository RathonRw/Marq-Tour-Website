import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { departments } from "@/config/data";

export default function Services() {
  return (
    <section className="space-y-8" id="services">
      <h2 className="font-medium text-xl md:text-2xl">Our services</h2>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div
            className="flex flex-col gap-6 rounded-md p-4 ring ring-foreground/10 md:p-6 dark:ring-foreground/15"
            key={department.title}
          >
            <h4 className="font-medium text-xl">{department.title}</h4>
            <ul className="flex flex-col gap-3">
              {department.list.map((item) => (
                <li className="flex gap-2 text-sm leading-5.75" key={item}>
                  <CheckIcon className="size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              className="mt-auto underline decoration-muted-foreground underline-offset-4 transition-all duration-300 hover:text-muted-foreground hover:decoration-foreground"
              href={"/contact"}
            >
              Get started
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}
