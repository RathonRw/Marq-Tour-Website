import type { Metadata } from "next";
import PageHeader from "@/components/custom/page-header";
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
      <PageHeader
        details="We're here to help. If you have any questions, please don't hesitate to reach out."
        title="Contact Us"
      />
      <ContactContent />
    </div>
  );
}
