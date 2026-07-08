"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Check, ChevronLeft } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { services } from "@/data/services";
import { availableDates, timeSlotsByDate } from "@/data/booking";

type Step = "service" | "datetime" | "details" | "confirmed";

function generateReference() {
  return "PE-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function BookingModal() {
  const { isOpen, preselectedServiceSlug, closeBooking } = useBooking();

  const [step, setStep] = useState<Step>("service");
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [reference, setReference] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    if (isOpen) {
      setServiceSlug(preselectedServiceSlug);
      setStep(preselectedServiceSlug ? "datetime" : "service");
      setDate(null);
      setTime(null);
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setErrors({});
    }
  }, [isOpen, preselectedServiceSlug]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeBooking();
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeBooking]);

  const selectedService = useMemo(
    () => services.find((s) => s.slug === serviceSlug) ?? null,
    [serviceSlug]
  );

  if (!isOpen) return null;

  function handleConfirmDetails() {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Please enter a valid email.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setReference(generateReference());
    setStep("confirmed");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 p-0 sm:items-center sm:p-4"
      onClick={closeBooking}
    >
      <div
        className="max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          {step !== "service" && step !== "confirmed" ? (
            <button
              onClick={() =>
                setStep(step === "details" ? "datetime" : "service")
              }
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <span />
          )}
          <button onClick={closeBooking} aria-label="Close" className="text-slate-400 hover:text-slate-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === "service" && (
          <div className="mt-2">
            <h2 className="text-xl font-bold text-slate-900">Book Your Appointment</h2>
            <p className="mt-1 text-sm text-slate-500">Choose the service you need help with.</p>
            <div className="mt-5 space-y-2">
              {services.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    setServiceSlug(s.slug);
                    setStep("datetime");
                  }}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "datetime" && (
          <div className="mt-2">
            <h2 className="text-xl font-bold text-slate-900">Pick a Date &amp; Time</h2>
            {selectedService && (
              <p className="mt-1 text-sm text-slate-500">
                For <span className="font-medium text-slate-700">{selectedService.name}</span>
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {availableDates.map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setDate(d);
                    setTime(null);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    date === d
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-200 text-slate-600 hover:border-blue-400"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {date && (
              <div className="mt-5">
                <p className="text-sm font-medium text-slate-700">Available times</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {timeSlotsByDate[date].map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => setTime(slot.time)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                        !slot.available
                          ? "cursor-not-allowed border-slate-100 text-slate-300 line-through"
                          : time === slot.time
                          ? "border-blue-700 bg-blue-700 text-white"
                          : "border-slate-200 text-slate-600 hover:border-blue-400"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              disabled={!date || !time}
              onClick={() => setStep("details")}
              className="mt-6 w-full rounded-full bg-blue-700 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              Continue
            </button>
          </div>
        )}

        {step === "details" && (
          <div className="mt-2">
            <h2 className="text-xl font-bold text-slate-900">Your Details</h2>
            <p className="mt-1 text-sm text-slate-500">
              {selectedService?.name} · {date} at {time}
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="booking-name" className="text-sm font-medium text-slate-700">Full name</label>
                <input
                  id="booking-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="booking-email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  id="booking-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="booking-phone" className="text-sm font-medium text-slate-700">Phone (optional)</label>
                <input
                  id="booking-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="booking-notes" className="text-sm font-medium text-slate-700">Notes (optional)</label>
                <textarea
                  id="booking-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  placeholder="Anything we should know before your appointment?"
                />
              </div>
            </div>

            <button
              onClick={handleConfirmDetails}
              className="mt-6 w-full rounded-full bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Confirm Booking
            </button>
          </div>
        )}

        {step === "confirmed" && (
          <div className="mt-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">You&apos;re booked!</h2>
            <p className="mt-2 text-sm text-slate-500">
              {selectedService?.name} · {date} at {time}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              A confirmation has been sent to <span className="font-medium">{email}</span>
            </p>
            <p className="mt-4 rounded-lg bg-slate-50 py-2 text-xs font-medium text-slate-500">
              Confirmation reference: {reference}
            </p>
            <button
              onClick={closeBooking}
              className="mt-6 w-full rounded-full bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
