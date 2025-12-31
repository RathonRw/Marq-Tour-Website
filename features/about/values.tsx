import { BowArrow, ClockIcon, EyeIcon, HandshakeIcon } from "lucide-react";

export default function Values() {
  return (
    <div className="relative grid divide-x divide-y border *:p-6 md:grid-cols-2 lg:*:p-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          <h3 className="font-semibold text-lg">Vision</h3>
        </div>
        <p className="tracking-tight">
          To become a trusted and preferred tour and travel company, recognized
          for delivering exceptional experiences that inspire exploration,
          connection, and lasting memories across Rwanda and beyond.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BowArrow className="size-4" />
          <h3 className="font-semibold text-lg">Our Mission</h3>
        </div>
        <p className="tracking-tight">
          Our mission is to deliver high-quality, reliable, and personalized
          travel services that create unforgettable and enjoyable experiences
          for our clients. We are committed to exceeding expectations through
          professional service, attention to detail, and guaranteed customer
          satisfaction, while building long-term relationships based on trust
          and excellence.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <ClockIcon className="size-4" />

          <h3 className="font-semibold text-lg"> 24/7 Customer Support</h3>
        </div>
        <p className="tracking-tight">
          We provide dedicated 24/7 customer support to ensure our clients feel
          confident and supported at every stage of their journey. As
          specialists in Rwandan tourism, our experienced team has in-depth
          knowledge of the country and carefully selects and approves
          destinations to guarantee safe, authentic, and memorable travel
          experiences in the Land of a Thousand Hills.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <HandshakeIcon className="size-4" />

          <h3 className="font-semibold text-lg">Our Values</h3>
        </div>
        <p className="tracking-tight">
          It supports helping developers and businesses innovate.
        </p>
        <p> At FREESKY Ventures, our values guide everything we do:</p>
        <ul className="space-y-2">
          <li>
            <span className="font-medium"> Integrity</span> : We operate with
            honesty, transparency, and accountability in all our engagements.
          </li>
          <li>
            <span className="font-medium">Professionalism </span> : We take our
            work seriously and deliver services that are efficient, balanced,
            and dependable.
          </li>
          <li>
            <span className="font-medium">Customer Focus</span> : Our
            clients&apos; comfort, safety, and satisfaction come first.
          </li>
          <li>
            <span className="font-medium">Reliability </span> : We keep our
            promises and ensure consistent quality in every service we offer.
          </li>
          <li>
            <span className="font-medium"> Sustainability</span> : We respect
            nature, culture, and communities, promoting responsible tourism.
          </li>
        </ul>
      </div>
    </div>
  );
}
