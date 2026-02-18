"use server";

import { Resend } from "resend";
import type { TSubFormSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: TSubFormSchema) {
  try {
    const { email } = formData;

    const response = await resend.contacts.segments.add({
      email,
      segmentId: "a5fd1b64-312f-4ed0-a2f3-140a30d3bffe",
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
