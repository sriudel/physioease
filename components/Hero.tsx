"use client";

import { useBooking } from "@/context/BookingContext";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-gradient-to-br from-brand-bg via-white to-brand-mint/10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            Virtual Care · Home Care · Aquatic Therapy
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-plum sm:text-5xl">
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
              className="rounded-full bg-brand-mint px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-mint-dark"
            >
              Book Free Consultation
            </button>
            <Link
              href="/services"
              className="border-b border-brand-plum pb-0.5 text-sm font-semibold text-brand-plum"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero-photo.jpg"
              alt="A physiotherapist assisting a patient with a guided leg stretch"
              fill
              preload
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
