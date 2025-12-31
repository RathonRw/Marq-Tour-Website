import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <div className="container bg-background">
      <div className="mx-auto min-h-screen w-full max-w-6xl lg:border-x">
        <div className="mx-4 grid h-[calc(100vh-3.5rem)] grid-cols-1 border-x md:mx-0 md:grid-cols-2 md:border-x-0">
          <div className="space-y-4 px-4 pt-12 pb-4 md:border-r">
            <h2 className="font-semibold text-3xl md:text-4xl">FAQs</h2>
            <p className="text-muted-foreground">
              Here are some common questions and answers that you might ask
              about Free Sky Ventures.
            </p>
          </div>
          <div className="place-content-center">
            <Accordion collapsible defaultValue="item-1" type="single">
              {questions.map((item) => (
                <AccordionItem
                  className="first:border-t last:border-b data-[state=open]:bg-card"
                  key={item.id}
                  value={item.id}
                >
                  <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex h-14 items-center justify-center border-t">
          <p className="text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a className="text-primary hover:underline" href="/contact">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
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
