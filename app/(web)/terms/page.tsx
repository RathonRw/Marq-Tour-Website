import type { Metadata } from "next";
import { terms } from "@/config/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review FreeSkyVentures’s Terms of Service to understand the rules, responsibilities, and conditions for using our website and digital services.",
  keywords: [
    "FreeSkyVentures Terms of Service",
    "Website Usage Rules",
    "Digital Service Conditions",
    "Web Development Rwanda",
  ],
  alternates: {
    canonical: "/terms",
  },
};
export default function TermPage() {
  return (
    <div>
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 py-16 md:px-4">
          <div className="flex flex-col gap-3 py-6">
            <p className="text-muted-foreground text-sm">
              Last updated: Feb 17, 2026
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {terms.map((term, index) => (
              <div className="flex flex-col gap-3" key={term.title}>
                <h3 className="text-lg xl:text-xl xl:tracking-tight">
                  {index + 1}. {term.title}
                </h3>
                <p className="max-w-5xl sm:text-base">{term.content}</p>
              </div>
            ))}
          </div>

          <p className="leading-relaxed tracking-tight">
            Thanks for being here. We&apos;re glad you&apos;re part of the
            FreeSkyVentures journey.
          </p>
        </div>
      </div>
    </div>
  );
}
