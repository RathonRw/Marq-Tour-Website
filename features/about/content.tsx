import { siteConfig } from "@/config/site";
import Values from "./values";
export default function AboutContent() {
  return (
    <section className="flex flex-col gap-6 md:px-5 lg:gap-10">
      <p className="text-center text-foreground/80 text-xl tracking-tight md:text-2xl lg:text-3xl">
        {siteConfig.name} is a tour and travel company based in Kigali, Rwanda,
        offering curated tour packages, tour internships, and expert guidance
        through our Tour Advisory Circle, creating meaningful and memorable
        travel experiences.
      </p>
      <Values />
    </section>
  );
}
