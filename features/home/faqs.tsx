import { PlusIcon } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HomeFaqs() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2" id="faqs">
      <div className="pt-12 pb-6 md:px-4">
        <div className="space-y-5">
          <h2 className="text-balance font-medium text-xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="font-medium text-muted-foreground text-sm">
            For other question,{" "}
            <Link className="underline underline-offset-4" href="/contact">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="relative place-content-center md:pr-4">
        {/* vertical guide line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-3 h-full w-px bg-border"
        />

        <Accordion collapsible type="single">
          {questions.map((item) => (
            <AccordionItem
              className="group relative border-b pl-5"
              key={item.id}
              value={item.id}
            >
              {/*  plus */}
              <PlusIcon
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-5.5px] left-[12.5px] size-2.5 -translate-x-1/2 text-muted-foreground group-last:hidden"
              />

              <AccordionTrigger className="px-4 py-4 font-normal text-base leading-6 hover:no-underline">
                {item.title}
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 text-base text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const questions = [
  {
    id: "item-1",
    title: "What is Free Sky Ventures?",
    content:
      "Free Sky Ventures is a travel and tour company dedicated to providing high-quality, reliable, and personalized travel experiences that create lasting memories for our clients.",
  },
  {
    id: "item-2",
    title: "What services does Free Sky Ventures offer?",
    content:
      "We offer a wide range of travel services including tour packages, vacation planning, destination guidance, travel bookings, and customized itineraries tailored to individual and group needs.",
  },
  {
    id: "item-3",
    title:
      "What makes Free Sky Ventures different from other travel companies?",
    content:
      "Our commitment to professionalism, attention to detail, and customer satisfaction sets us apart. We focus on delivering personalized experiences while building long-term relationships based on trust and excellence.",
  },
  {
    id: "item-4",
    title: "Can I customize my travel experience?",
    content:
      "Absolutely. We specialize in personalized travel planning, allowing you to customize your itinerary based on your preferences, budget, and travel goals.",
  },
  {
    id: "item-5",
    title: "Does Free Sky Ventures handle group and corporate travel?",
    content:
      "Yes. We organize both group and corporate travel, ensuring smooth coordination, reliable logistics, and enjoyable experiences for all participants.",
  },
  {
    id: "item-6",
    title: "How does Free Sky Ventures ensure customer satisfaction?",
    content:
      "We ensure satisfaction through professional service, clear communication, reliable planning, and close attention to every detail of your journey from start to finish.",
  },
  {
    id: "item-7",
    title: "How do I get started with Free Sky Ventures?",
    content:
      "Getting started is easy—simply contact us through our website or customer support channels, and our team will guide you through planning your perfect travel experience.",
  },
];
