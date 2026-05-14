import { BowArrow, ClockIcon, EyeIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: BowArrow,
    title: "Our mission",
    content:
      "We deliver reliable and personalized travel services that create memorable experiences through professionalism and customer satisfaction.",
  },
  {
    icon: EyeIcon,
    title: "Vision",
    content:
      "To become a trusted travel company known for inspiring exploration and unforgettable experiences across Rwanda and beyond.",
  },
  {
    icon: ClockIcon,
    title: "24/7 Customer Support",
    content:
      "Our team provides round-the-clock support and carefully selected destinations for safe and memorable journeys in Rwanda.",
  },
  {
    icon: HandshakeIcon,
    title: "Our values",
    content:
      "We value integrity, professionalism, customer satisfaction, reliability, and sustainable tourism in everything we do.",
  },
];
export default function Values() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {values.map((item) => (
        <div
          className="flex flex-col gap-4 rounded-lg bg-secondary/50 p-6 lg:gap-5"
          key={item.title}
        >
          <item.icon className="size-6 lg:size-8" />
          <p className="font-medium text-lg">{item.title}</p>
          <p className="leading-7">{item.content}</p>
          <Link
            className="mt-auto inline-flex items-center gap-1 underline not-visited:not-target:decoration-foreground underline-offset-4"
            href={"/contact"}
          >
            Learn more
          </Link>
        </div>
      ))}
    </div>
  );
}
