import type { Metadata } from "next";
import { Suspense } from "react";
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
    <div className="md:px-5">
      <section className="container w-full py-6">
        <div className="relative flex w-full flex-col justify-between overflow-hidden md:flex-row">
          <div className="w-full max-w-lg p-4 md:border-b-0">
            <ContactInfo />
          </div>
          <div className="flex w-full flex-1 bg-background">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
