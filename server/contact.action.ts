"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/features/contact/contact-email";
import { ContactFormSchema, type TContactSchema } from "./schema";

// Initialize Resend with API key from environment variables
const resendClient = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: TContactSchema) {
  try {
    // parse using safeParse it first
    const result = ContactFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false, error: result.error };
    }

    const { email, content, service } = result.data;

    const response = await resendClient.emails.send({
      from: "Website Contact<web@booking.freeskyventures.space>",
      to: ["rathonrw@gmail.com", "freeskyventure@gmail.com"],
      subject: `New Contact Request from ${email}`,
      react: ContactEmail({
        email,
        content,
        service,
      }) as React.ReactElement,
      replyTo: email,
      tags: [{ name: "source", value: "website_contact" }],
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}
