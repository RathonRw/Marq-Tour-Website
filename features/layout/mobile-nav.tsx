import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { createPortal } from "react-dom";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { Button, buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/config/data";
import { siteConfig } from "@/config/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useMediaQuery();

  // 🚫 Disable body scroll when open
  React.useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount too
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isMobile]);

  return (
    <>
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon-lg"
        variant="ghost"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open &&
        createPortal(
          <div
            className={cn(
              "bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
              "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
            )}
            id="mobile-menu"
          >
            <div
              className={cn(
                "data-[slot=open]:zoom-in-97 flex h-full flex-col ease-out data-[slot=open]:animate-in",
                "size-full p-4"
              )}
              data-slot={open ? "open" : "closed"}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        className: "justify-start",
                      }),
                      pathname === link.href && "text-primary"
                    )}
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <div className="mb-3 flex justify-around gap-2">
                  <a
                    className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                    href={siteConfig.links.youtube}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FiYoutube className="size-6" />
                  </a>
                  <a
                    className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                    href={siteConfig.links.instagram}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LuFacebook className="size-6" />
                  </a>

                  <a
                    className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                    href={siteConfig.links.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="size-6" />
                  </a>
                  <a
                    className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                    href={siteConfig.links.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaXTwitter className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
