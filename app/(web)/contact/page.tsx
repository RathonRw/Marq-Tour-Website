import type { Metadata } from "next";
import { ContactContent } from "@/features/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact",
  },
};
export default function ContactPage() {
  return (
    <div className="md:px-5">
      <ContactContent />
    </div>
  );
}
