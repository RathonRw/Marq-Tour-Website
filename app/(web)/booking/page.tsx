import type { Metadata } from "next";
import { BookingForm } from "@/features/booking/booking-form";

export const metadata: Metadata = {
  title: "Booking",
  alternates: {
    canonical: "/booking",
  },
};
export default function BookingPage() {
  return (
    <div className="container bg-background">
      <section className="mx-auto max-w-5xl py-12 md:px-5">
        <BookingForm />
      </section>
    </div>
  );
}
