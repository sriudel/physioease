"use client";

import { useBooking } from "@/context/BookingContext";
import Link from "next/link";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Virtual Care · Home Care · Aquatic Therapy
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Physiotherapy that comes to you, wherever recovery starts.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Specializing in virtual care, home care, and aquatic therapy designed to support you
            through every stage of healing. Book a free 15-minute consultation and get a
            personalized recovery plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openBooking()}
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Book Free Consultation
            </button>
            <Link
              href="/services"
              className="border-b border-slate-900 pb-0.5 text-sm font-semibold text-slate-900"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 p-1 shadow-xl">
            <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-4px)] bg-white/10 backdrop-blur">
              <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 text-white" fill="none">
                <circle cx="100" cy="55" r="22" fill="currentColor" opacity="0.9" />
                <path
                  d="M40 175c5-55 30-80 60-80s55 25 60 80"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M65 120l-25 35M135 120l25 35"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
