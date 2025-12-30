"use client";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/config/data";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "container sticky top-0 z-50 w-full border-transparent border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50"
      )}
    >
      <nav className={cn("flex h-14 w-full items-center justify-between")}>
        <a className="font-semibold font-syne-mono lg:text-xl" href="/">
          Free{" "}
          <span className="font-serif text-primary italic tracking-tight">
            Sky
          </span>{" "}
          Ventures
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <Link
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-full font-normal text-foreground/80",
                pathname === link.href &&
                  "bg-secondary/80 font-semibold text-secondary-foreground"
              )}
              href={link.href as Route}
              key={i}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
