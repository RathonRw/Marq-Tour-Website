"use server";

import { Resend } from "resend";
import type { TSubFormSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: TSubFormSchema) {
  try {
    const { email } = formData;

    const response = await resend.contacts.create({
      email,
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
