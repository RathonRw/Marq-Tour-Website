import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read FreeSkyVenture’s Privacy Policy to learn how we collect, use, and protect your personal information when you use our website and services.",
  keywords: [
    "FreeSkyVentures Privacy Policy",
    "Data Protection Rwanda",
    "Website Privacy",
    "User Information Security",
  ],
  alternates: {
    canonical: "/privacy",
  },
};
export default function PrivacyPage() {
  return (
    <div>
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 py-16 md:px-4">
          <p className="text-muted-foreground text-sm">
            Last updated: Feb 17, 2026
          </p>

          <h3 className="mt-8 font-semibold text-xl">What We Collect</h3>
          <p className="leading-relaxed tracking-tight">
            We keep things simple and only collect what we actually need:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Your email address</strong>: when you subscribe to our
              newsletter to stay updated on web design tips, agency news, and
              inspiration.
            </li>
            <li>
              <strong>Your name, email, and message</strong>: when you reach out
              through our contact form to ask a question, request a service, or
              just say hello.
            </li>
          </ul>

          <h3 className="mt-8 font-semibold text-xl">How We Use Your Info</h3>
          <p className="leading-relaxed tracking-tight">
            We only use the info you give us to:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Send you useful updates, announcements, or inspiration if
              you&apos;ve subscribed to our newsletter.
            </li>
            <li>Respond to your messages or questions when you contact us.</li>
            <li>
              Occasionally analyze what content people interact with the most,
              to make our site and services better.
            </li>
          </ul>
          <p className="leading-relaxed tracking-tight">
            We&apos;ll never sell, rent, or trade your personal information,
            that&apos;s a promise. Your data stays between us and the trusted
            tools we use to run our business smoothly.
          </p>

          <h3 className="mt-8 font-semibold text-xl">Cookies & Analytics</h3>
          <p className="leading-relaxed tracking-tight">
            Like most websites, we use tools like Google Analytics to understand
            how people use our site things like which pages are visited and for
            how long. This helps us improve the experience for everyone. These
            tools may set <strong>cookies</strong> (tiny data files) in your
            browser, but they don&apos;t give us access to anything personal
            like your name or email.
          </p>
          <p className="leading-relaxed tracking-tight">
            You can disable cookies in your browser settings if you prefer no
            hard feelings.
          </p>

          <h3 className="mt-8 font-semibold text-xl">Your Rights</h3>
          <p className="leading-relaxed tracking-tight">
            You&apos;re in control of your info. You can unsubscribe from our
            newsletter at any time by clicking the link at the bottom of any
            email. You can also contact us if you want to:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>See what data we have about you</li>
            <li>Ask us to delete it</li>
            <li>Or just want to double-check something</li>
          </ul>

          <h3 className="mt-8 font-semibold text-xl">Contact Us</h3>
          <p className="leading-relaxed tracking-tight">
            If you have any questions about this privacy policy or how we handle
            data, shoot us a message at{" "}
            <a
              className="text-primary underline"
              href="mailto:freeskyventure@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              freeskyventure@gmail.com
            </a>
            .
          </p>

          <p className="leading-relaxed tracking-tight">
            Thanks for trusting us with your information. We take that seriously
            and we&apos;re here to build not just websites, but relationships
            built on trust.
          </p>
        </div>
      </div>
    </div>
  );
}
