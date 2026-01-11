import z from "zod";

export const SubFormSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Email must be at least 5 characters." }),
});

export type TSubFormSchema = z.infer<typeof SubFormSchema>;

export const ContactFormSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address." })
    .trim()
    .min(5, { message: "Email must be at least 5 characters." }),
  content: z
    .string()
    .trim()
    .min(5, { message: "Describe it in at least 5 characters." }),
  service: z.string().min(1, "Please select your service."),
});

export type TContactSchema = z.infer<typeof ContactFormSchema>;

export const BookingFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z.email("Invalid email address."),
  phone: z
    .string()
    .min(3, "Phone must be at least 3 characters.")
    .max(16, "Phone must be at most 16 characters."),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(500, "Message must be at most 500 characters."),
  date: z.date(),
});

export type TBookingSchema = z.infer<typeof BookingFormSchema>;
