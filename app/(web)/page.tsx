import { Cta } from "@/features/_layout/cta";
import { HomeFaqs } from "@/features/home/faqs";
import Hero from "@/features/home/hero";
import PlacesCarousel from "@/features/home/places";
import Services from "@/features/home/services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container @md:mt-30 mt-20 flex flex-col @md:gap-30 gap-20">
        <Services />
        <PlacesCarousel />
        <HomeFaqs />
        <Cta
          link={{ href: "/booking", label: "Plan Your Journey" }}
          title="Ready to explore world together"
        />
      </div>
    </>
  );
}
