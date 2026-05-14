import type { Metadata } from "next";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactInfo } from "@/features/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact",
  },
};
export default function ContactPage() {
  return (
    <div className="container @md:mt-30 mt-20 flex flex-col gap-20 md:gap-30">
      <div className="col-span-12 grid w-full @md:grid-cols-[1fr_2fr] grid-cols-1 items-stretch @md:gap-6 gap-4">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
