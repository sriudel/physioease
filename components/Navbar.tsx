"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/team", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand-blue">
          <Activity className="h-6 w-6 text-brand-teal" />
          PhysioEase
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => openBooking()}
            className="rounded-full bg-brand-mint px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-mint-dark"
          >
            Book Appointment
          </button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openBooking();
              }}
              className="mt-2 rounded-full bg-brand-mint px-5 py-2.5 text-center text-sm font-semibold text-brand-navy"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
