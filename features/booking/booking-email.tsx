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
import type { TBookingSchema } from "@/server/schema";

export function BookingEmail({
  name,
  email,
  phone,
  message,
  date,
}: TBookingSchema) {
  return (
    <Html>
      <Preview>New tour booking from {name}</Preview>

      <Tailwind>
        <Body className="bg-gray-100 font-sans text-gray-800">
          <Container className="mx-auto my-8 max-w-[600px] rounded-lg bg-white shadow">
            {/* Header */}
            <Section className="rounded-t-lg bg-black px-6 py-4">
              <Heading className="m-0 text-center font-semibold text-white text-xl">
                New Tour Booking
              </Heading>
            </Section>

            {/* Content */}
            <Section className="px-6 py-6">
              <Text className="mb-4 text-gray-500 text-sm">
                You’ve received a new booking request with the following
                details:
              </Text>

              <div className="space-y-4">
                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Full Name
                  </Text>
                  <Text className="m-0">{name}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Email Address
                  </Text>
                  <Text className="m-0">{email}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Phone Number
                  </Text>
                  <Text className="m-0">{phone}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Preferred Date
                  </Text>
                  <Text className="m-0">{date.toDateString()}</Text>
                </div>

                <div>
                  <Text className="mb-1 font-semibold text-xs uppercase">
                    Message
                  </Text>
                  <Text className="m-0 leading-relaxed">
                    {message || "No additional message provided."}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="border-gray-200 border-t px-6 py-4">
              <Text className="m-0 text-center text-gray-700 text-xs">
                This booking was submitted via your website contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
