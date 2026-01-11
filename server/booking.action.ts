"use server";

import { Resend } from "resend";
import { BookingEmail } from "@/features/booking/booking-email";
import { BookingFormSchema, type TBookingSchema } from "./schema";

// Initialize Resend with API key from environment variables
const resendClient = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(data: TBookingSchema) {
  try {
    // parse using safeParse it first
    const result = BookingFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false, error: result.error };
    }

    const { name, email, phone, message, date } = result.data;

    const response = await resendClient.emails.send({
      from: "Website Booking<web@booking.freeskyventures.space>",
      to: ["freeskyventure@gmail.com", "rathonrw@gmail.com"],
      subject: `${name} has booked a tour`,
      react: BookingEmail({
        name,
        email,
        phone,
        message,
        date,
      }) as React.ReactElement,
      replyTo: email,
      tags: [{ name: "source", value: "website_booking" }],
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}
