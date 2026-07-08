"use client";

import { useBooking } from "@/context/BookingContext";

export default function BookServiceButton({
  serviceSlug,
  label = "Book This Service",
  className,
}: {
  serviceSlug: string;
  label?: string;
  className?: string;
}) {
  const { openBooking } = useBooking();
  return (
    <button onClick={() => openBooking(serviceSlug)} className={className}>
      {label}
    </button>
  );
}
