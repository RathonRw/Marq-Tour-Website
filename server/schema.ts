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
    .min(10, { message: "Describe it in at least 10 characters." })
    .max(500, { message: "Your message is too long. Book a call instead." }),
  service: z.string().min(1, "Please select your service."),
});

export type TContactSchema = z.infer<typeof ContactFormSchema>;
