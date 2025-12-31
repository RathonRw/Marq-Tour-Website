import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "./contact-form";

export function ContactContent() {
  return (
    <section className="container w-full py-6">
      <div className="relative flex w-full flex-col justify-between overflow-hidden md:flex-row">
        <div className="p-4 md:border-b-0">
          <ContactInfo />
        </div>
        <div className="flex w-full flex-1 bg-background">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="flex max-w-108 flex-col gap-5 p-2 md:p-5">
      <h3 className="mb-2 font-bold text-foreground text-xl leading-[1.2] tracking-tighter">
        Reach Us Anytime
      </h3>
      <div className="flex flex-col gap-5">
        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <ClockIcon className="mr-2 inline-block size-4" />
            Opening Hours:
          </span>{" "}
          8:00 AM - 10:00 PM
        </p>

        <p className="text-muted-foreground tracking-tight">
          <span className="font-bold text-foreground">
            <MailIcon className="mr-2 inline-block size-4" />
            Email us:
          </span>{" "}
          <a className="ml-1 hover:underline" href="mailto:rathonrw@gmail.com">
            freeskyventure@gmail.com
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
            href="https://wa.me/250793164575"
            rel="noopener noreferrer"
            target="_blank"
          >
            +250 793164575
          </a>
        </p>
      </div>
    </div>
  );
}
