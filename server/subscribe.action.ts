"use server";

import { Resend } from "resend";
import type { TSubFormSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const segmentId = process.env.RESEND_SEGMENT_ID;

export async function subscribe(formData: TSubFormSchema) {
  try {
    const { email } = formData;
    if (!segmentId) {
      return { success: false, error: "Missing configuration" };
    }

    const response = await resend.contacts.segments.add({
      email,
      segmentId,
    });

    if (response.error) {
      console.log(response.error);
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
