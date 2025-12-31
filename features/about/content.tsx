import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
export default function AboutContent() {
  return (
    <div className="container bg-background py-16">
      <div className="flex flex-col gap-6 md:px-5">
        <p className="text-foreground/80 text-xl tracking-tight md:text-2xl lg:text-3xl">
          {siteConfig.name} is a premium creative studio and digital marketing
          agency proudly headquartered in Kigali City, Rwanda. Established as a
          content driven agency, our core mission is to fuse strategic thinking
          with boundless creativity to produce authentic and impactful visual
          experiences that drive growth and bridge the gap between our clients
          and their audience.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Vision </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To become a trusted and preferred tour and travel company,
                recognized for delivering exceptional experiences that inspire
                exploration, connection, and lasting memories across Rwanda and
                beyond.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle> Our Mission </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our mission is to deliver high-quality, reliable, and
                personalized travel services that create unforgettable and
                enjoyable experiences for our clients. We are committed to
                exceeding expectations through professional service, attention
                to detail, and guaranteed customer satisfaction, while building
                long-term relationships based on trust and excellence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle> 24/7 Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We provide dedicated 24/7 customer support to ensure our clients
                feel confident and supported at every stage of their journey. As
                specialists in Rwandan tourism, our experienced team has
                in-depth knowledge of the country and carefully selects and
                approves destinations to guarantee safe, authentic, and
                memorable travel experiences in the Land of a Thousand Hills.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle> Our Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p> At FREESKY Ventures, our values guide everything we do:</p>
              <ul>
                <li>
                  <b> Integrity</b> : We operate with honesty, transparency, and
                  accountability in all our engagements.
                </li>
                <li>
                  <b>Professionalism </b> : We take our work seriously and
                  deliver services that are efficient, balanced, and dependable.
                </li>
                <li>
                  <b>Customer Focus</b> : Our clients’ comfort, safety, and
                  satisfaction come first.
                </li>
                <li>
                  <b>Reliability </b> : We keep our promises and ensure
                  consistent quality in every service we offer.
                </li>
                <li>
                  <b> Sustainability</b> : We respect nature, culture, and
                  communities, promoting responsible tourism.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
