import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function BookingInfo() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-h3">Book your tour</h3>
      <p className="text-balance">
        Thinking of going on a tour? Get started with{" "}
        <Link className="underline underline-offset-4" href="/#services">
          our services
        </Link>
        .
      </p>
      <div className="flex flex-col gap-4 font-medium text-sm">
        <p className="text-muted-foreground">More on: </p>
        <div className="flex flex-col gap-3">
          <div className="relative flex items-center gap-2">
            <MessageCircleIcon className="size-4" />
            <span className="text-muted-foreground">Whatsapp: </span> +250 796
            891 727
          </div>
          <div className="relative flex items-center gap-2">
            <MapPinIcon className="size-4" />
            <span className="text-muted-foreground">Location: </span> Kigali,
            Rwanda
          </div>
          <div className="relative flex items-center gap-2">
            <MailIcon className="size-4" />
            <span className="text-muted-foreground">Email: </span>{" "}
            {siteConfig.links.email}
          </div>
          <div className="relative flex items-center gap-2">
            <ClockIcon className="size-4" />
            <span className="text-muted-foreground">Opening hours: </span> 8:00
            AM - 10:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
