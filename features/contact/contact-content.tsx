import {
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "./contact-form";

export function ContactContent() {
  return (
    <section className="container w-full">
      <div className="relative flex w-full flex-col justify-between overflow-hidden border-x md:flex-row">
        <div className="pointer-events-none absolute -top-px left-1/2 w-screen -translate-x-1/2 border-t" />
        <div className="border-b p-4 md:border-b-0">
          <ContactInfo />
        </div>
        <div className="flex w-full flex-1 bg-background md:border-l">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
        <div className="pointer-events-none absolute -bottom-px left-1/2 w-screen -translate-x-1/2 border-b" />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="flex max-w-108 flex-col gap-5 p-2 md:p-5">
      <h3 className="mb-2 font-bold text-foreground text-xl leading-[1.2] tracking-tighter">
        Talk to our Sales team.
      </h3>
      <div className="flex flex-col gap-5">
        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <PhoneIcon className="mr-2 inline-block size-4" />
            Get a custom demo.
          </span>
          Discover the value of {siteConfig.name} for the growth of your
          business.
        </p>

        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <MailIcon className="mr-2 inline-block size-4" />
            Email us:
          </span>{" "}
          <a className="ml-1 hover:underline" href="mailto:rathonrw@gmail.com">
            kigalidigitalbrand@gmail.com
          </a>
        </p>
        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <MapPinIcon className="mr-2 inline-block size-4" />
            Our Location:
          </span>{" "}
          Kigali, Rwanda
        </p>
        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <MessageCircleIcon className="mr-2 inline-block size-4" />
            Whatsapp:
          </span>{" "}
          <a
            className="hover:underline"
            href="https://wa.me/250792636403"
            rel="noopener noreferrer"
            target="_blank"
          >
            +250 792 636 403
          </a>
        </p>
      </div>
    </div>
  );
}
