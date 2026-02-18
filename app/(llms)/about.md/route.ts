import { siteConfig } from "@/config/site";

const content = `# About

>Free Sky Ventures is a Kigali-based tour and travel company in Rwanda providing curated tour packages, tour internships, and expert guidance through the Tour Advisory Circle to create meaningful and memorable travel experiences.


## Vision & Mission

To be a trusted tour and travel company delivering exceptional, personalized experiences that inspire exploration across Rwanda and beyond through reliable, professional, high-quality service.

## Customer Support

We provide 24/7 assistance and expert local guidance, ensuring safe, authentic, and memorable journeys with carefully selected destinations and dedicated care at every stage.

## Values

Integrity, professionalism, customer focus, reliability, and sustainability guide everything we do, emphasizing honesty, quality, satisfaction, and responsible tourism.

## Purpose

We support innovation and long-term relationships by delivering dependable travel services that create lasting memories and trust.




## Social Links

 - [Tiktok](${siteConfig.links.tiktok})
 - [LinkedIn](${siteConfig.links.linkedin})
 - [Instagram](${siteConfig.links.instagram})
 - [Whatsapp](${siteConfig.links.whatsapp})

## Our Website was built by

 - [Rathon](https://rathon-rw.com/)


`;

export async function GET() {
  return await new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
