import { siteConfig } from "@/config/site";

const content = `# freeskyventures.space

> Free Sky Ventures is a tour and travel company based in Kigali,
          Rwanda, offering curated tour packages, tour internships, and expert
          guidance through our Tour Advisory Circle, creating meaningful and
          memorable travel experiences.

- [About](${siteConfig.url}/about.md): A quick intro to Free Sky Ventures and what we do. 
- [Booking](${siteConfig.url}/booking): Booking form for your next tour.
- [Contact](${siteConfig.url}/contact): How to reach out to us.
- [Destinations](${siteConfig.url}/destinations): Our destinations
- [Gallery](${siteConfig.url}/gallery): Our prebuilt website templates.

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
