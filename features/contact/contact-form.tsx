"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ContactFormSchema, type TContactSchema } from "@/server/schema";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<TContactSchema>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      content: "",
      service: "",
    },
  });

  async function onSubmit(data: TContactSchema) {
    // setSubmitting(true);
    // const createPromise = sendContactEmail(data);
    // // Show a loading toast and auto-handle errors
    // toast.promise(createPromise, {
    //   loading: "Sending email...",
    // });
    // try {
    //   const result = await createPromise;
    //   if (result?.success) {
    //     form.reset();
    //     toast.success("Email sent successfully", {
    //       description: "The email has been sent to Kigali Digital Brand.",
    //     });
    //   }
    // } catch {
    //   toast.error("Failed to send email. Please try again.", {
    //     description: "There was an error sending the email.",
    //   });
    // } finally {
    //   setSubmitting(false);
    // }
  }

  return (
    <div className="row-span-2 h-full min-h-[500px] w-full p-2 md:p-6 lg:p-10">
      <form
        className="w-full space-y-6 lg:space-y-12"
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="email"
                  disabled={submitting}
                  id="form-rhf-demo-title"
                  placeholder="Email address"
                  type="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="service"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-select-service">
                  Service
                </FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  disabled={submitting}
                  id="form-rhf-demo-title"
                  placeholder="Service"
                  type="text"
                />
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="content"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-description">
                  How can we help?
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    className="min-h-[200px]"
                    id="form-rhf-demo-description"
                    placeholder="Describe it in at least 10 characters."
                    rows={6}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value.length}/500 characters
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end">
          <Button
            className="min-w-40 rounded-full bg-primary text-primary-foreground"
            disabled={submitting}
            size="lg"
            type="submit"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Talk to Us"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
