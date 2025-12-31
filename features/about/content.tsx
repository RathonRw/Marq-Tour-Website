import { siteConfig } from "@/config/site";
import Values from "./values";
export default function AboutContent() {
  return (
    <div className="container bg-background py-16">
      <div className="flex flex-col gap-6 md:px-5 lg:gap-10">
        <p className="text-foreground/80 text-xl tracking-tight md:text-2xl lg:text-3xl">
          {siteConfig.name} is a premium creative studio and digital marketing
          agency proudly headquartered in Kigali City, Rwanda. Established as a
          content driven agency, our core mission is to fuse strategic thinking
          with boundless creativity to produce authentic and impactful visual
          experiences that drive growth and bridge the gap between our clients
          and their audience.
        </p>
        <Values />
      </div>
    </div>
  );
}
