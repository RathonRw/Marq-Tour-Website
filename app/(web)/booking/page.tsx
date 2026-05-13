import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/features/booking/booking-form";
import { BookingInfo } from "@/features/booking/info";

export const metadata: Metadata = {
  title: "Booking",
  alternates: {
    canonical: "/booking",
  },
};
export default function BookingPage() {
  return (
    <div className="container @md:mt-30 mt-20 flex flex-col gap-20 md:gap-30">
      <div className="col-span-12 grid w-full @md:grid-cols-[1fr_2fr] grid-cols-1 items-stretch @md:gap-6 gap-4">
        <BookingInfo />
        <Suspense>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
