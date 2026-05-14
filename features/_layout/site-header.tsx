"use client";
import { ChevronRightIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/data";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "container fixed top-0 z-50 w-full",
        scrolled && "border-b bg-background",
        pathname === "/" ? "text-white" : "hover:bg-background",
        pathname && scrolled && "text-foreground",
      )}
    >
      <nav className={cn("flex h-14 w-full items-center gap-10")}>
        <Link className="font-medium text-lg" href="/">
          {siteConfig.name}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <Link
              className={cn(
                "text-sm hover:text-muted-foreground",
                pathname === link.href && "font-medium text-foreground",
              )}
              href={link.href as Route}
              key={i}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-5">
          <div className="hidden gap-2 md:flex">
            <Button asChild className="hidden rounded-full lg:flex">
              <Link href="/booking">
                Book now <ChevronRightIcon />
              </Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
