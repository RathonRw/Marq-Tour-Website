import { FaqsSection } from "@/features/home/faqs";
import Hero from "@/features/home/hero";
import PlacesCarousel from "@/features/home/places";
import Services from "@/features/home/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PlacesCarousel />
      <FaqsSection />
    </>
  );
}
