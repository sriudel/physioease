"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  preselectedServiceSlug: string | null;
  openBooking: (serviceSlug?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedServiceSlug, setPreselectedServiceSlug] = useState<string | null>(null);

  const value = useMemo<BookingContextValue>(
    () => ({
      isOpen,
      preselectedServiceSlug,
      openBooking: (serviceSlug?: string) => {
        setPreselectedServiceSlug(serviceSlug ?? null);
        setIsOpen(true);
      },
      closeBooking: () => setIsOpen(false),
    }),
    [isOpen, preselectedServiceSlug]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
