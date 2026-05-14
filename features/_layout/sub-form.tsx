"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { SubFormSchema, type TSubFormSchema } from "@/server/schema";
import { subscribe } from "@/server/subscribe.action";

export default function SubscribeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<TSubFormSchema>({
    resolver: zodResolver(SubFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: TSubFormSchema) => {
    setSubmitting(true);
    const createPromise = subscribe(data);
    toast.promise(createPromise, {
      loading: "Subscribing...",
    });
    try {
      const result = await createPromise;
      if (result?.success) {
        setSubscribed(true); // trigger confirmation message
        form.reset();
        toast.success("Subscribed successfully", {
          description: "You have subscribed to Free Sky Ventures.",
        });
      } else {
        console.log(result?.error);
        toast.error("Failed to subscribe. Please try again.", {
          description: "There was an error subscribing to Free Sky Ventures.",
        });
      }
    } catch {
      toast.error("Failed to subscribe. Please try again.", {
        description: "There was an error subscribing to Free Sky Ventures.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (subscribed) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-muted-foreground text-sm">
          You have subscribed to {siteConfig.name}.
        </p>
        <div className="flex items-center gap-1">
          <CircleCheckIcon className="size-5 text-green-500" />
          <p className="text-muted-foreground text-sm">
            Thanks for subscribing!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="sr-only" htmlFor="form-email">
              Email
            </FieldLabel>
            <div className="flex items-center justify-between gap-2">
              <Input
                aria-invalid={fieldState.invalid}
                aria-label="Email address"
                autoComplete="email"
                className="border-0 bg-muted shadow-none"
                id="form-email"
                placeholder="you@domain.com"
                type="email"
                {...field}
              />
              <Button
                disabled={submitting || !field.value}
                size={"lg"}
                type="submit"
                variant={"secondary"}
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </form>
  );
}
