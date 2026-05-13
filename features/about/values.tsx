import { BowArrow, ClockIcon, EyeIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: BowArrow,
    title: "Our mission",
    content: ` Our mission is to deliver high-quality, reliable, and personalized
          travel services that create unforgettable and enjoyable experiences
          for our clients. We are committed to exceeding expectations through
          professional service, attention to detail, and guaranteed customer
          satisfaction, while building long-term relationships based on trust
          and excellence.`,
  },
  {
    icon: EyeIcon,
    title: "Vision",
    content: ` To become a trusted and preferred tour and travel company, recognized
          for delivering exceptional experiences that inspire exploration,
          connection, and lasting memories across Rwanda and beyond.`,
  },
  {
    icon: ClockIcon,
    title: "24/7 Customer Support",
    content: ` We provide dedicated 24/7 customer support to ensure our clients feel
          confident and supported at every stage of their journey. As
          specialists in Rwandan tourism, our experienced team has in-depth
          knowledge of the country and carefully selects and approves
          destinations to guarantee safe, authentic, and memorable travel
          experiences in the Land of a Thousand Hills.`,
  },
  {
    icon: HandshakeIcon,
    title: "Our values",
    content: ` We provide dedicated 24/7 customer support to ensure our clients feel
          confident and supported at every stage of their journey. As
          specialists in Rwandan tourism, our experienced team has in-depth
          knowledge of the country and carefully selects and approves
          destinations to guarantee safe, authentic, and memorable travel
          experiences in the Land of a Thousand Hills.`,
  },
];
export default function Values() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
