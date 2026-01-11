"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon, CircleCheckIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { sendBookingEmail } from "@/server/booking.action";
import { BookingFormSchema, type TBookingSchema } from "@/server/schema";

export function BookingForm() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(true);
  const form = useForm<TBookingSchema>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      date: new Date(),
    },
  });

  async function onSubmit(data: TBookingSchema) {
    setSubmitting(true);

    const createPromise = sendBookingEmail(data);

    // Show a loading toast and auto-handle errors
    toast.promise(createPromise, {
      loading: "Booking...",
    });

    try {
      const result = await createPromise;

      if (result?.success) {
        form.reset();
        setSent(true);

        toast.success("Booking sent successfully", {
          description: "Your booking has been sent to Us.",
        });

        // Close the modal slightly after success
      }
    } catch {
      toast.error("Failed to book. Please try again.", {
        description: "There was an error booking.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-5">
          <CircleCheckIcon className="size-5 text-green-500" />
          <p className="font-semibold text-lg">
            You have booked a tour successfully.
          </p>
          <p className="text-muted-foreground text-sm">Thanks for booking!</p>
          <Button onClick={() => setSent(false)}>Book Again</Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Tour</CardTitle>
        <CardDescription>
          Fill in the details below and our team will contact you shortly.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="booking-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Name */}
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    {...field}
                    disabled={submitting}
                    placeholder="Your full name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    {...field}
                    disabled={submitting}
                    placeholder="you@example.com"
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone</FieldLabel>
                  <Input
                    {...field}
                    disabled={submitting}
                    placeholder="+250 7xx xxx xxx"
                    type="tel"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="date"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Date of tour</FieldLabel>
                  <Popover onOpenChange={setOpen} open={open}>
                    <PopoverTrigger asChild>
                      <Button
                        className="w-48 justify-between font-normal"
                        disabled={submitting}
                        id="date"
                        variant="outline"
                      >
                        {field.value
                          ? field.value.toLocaleDateString()
                          : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-auto overflow-hidden p-0"
                    >
                      <Calendar
                        captionLayout="dropdown"
                        mode="single"
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpen(false);
                        }}
                        selected={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Message</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      className="min-h-24 resize-none"
                      disabled={submitting}
                      placeholder="Tell us about your travel plans..."
                      rows={5}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/500
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include destination, dates, and number of travelers.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button
            disabled={submitting}
            onClick={() => form.reset()}
            type="button"
            variant="outline"
          >
            Reset
          </Button>
          <Button disabled={submitting} form="booking-form" type="submit">
            {submitting ? "Submitting..." : "  Submit Booking"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
