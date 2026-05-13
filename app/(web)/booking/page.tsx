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
    <div className="container @md:mt-30 mt-20 flex flex-col @md:gap-30 gap-20">
      <section className="mx-auto max-w-5xl py-12 md:px-5">
        <BookingForm />
      </section>
    </div>
  );
}
