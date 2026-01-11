import {
  Body,
  Container,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { TContactSchema } from "@/server/schema";

export function ContactEmail({ email, content, service }: TContactSchema) {
  return (
    <Html>
      <Preview>New contact request from {email}</Preview>

      <Tailwind>
        <Body className="bg-gray-100 font-sans text-gray-800">
          <Container className="mx-auto my-8 max-w-[600px] rounded-lg bg-white shadow">
            {/* Header */}
            <Section className="rounded-t-lg bg-black px-6 py-4">
              <Heading className="m-0 text-center font-semibold text-white text-xl">
                New Contact Request
              </Heading>
            </Section>

            {/* Content */}
            <Section className="px-6 py-6">
              <Text className="mb-4 text-gray-500 text-sm">
                You’ve received a new contact request with the following
                details:
              </Text>

              <div className="space-y-4">
                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Email Address
                  </Text>
                  <Text className="m-0">{email}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Service
                  </Text>
                  <Text className="m-0">{service}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Message
                  </Text>
                  <Text className="m-0 leading-relaxed">
                    {content || "No additional message provided."}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="border-gray-200 border-t px-6 py-4">
              <Text className="m-0 text-center text-gray-700 text-xs">
                This contact request was submitted via your website contact
                form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
