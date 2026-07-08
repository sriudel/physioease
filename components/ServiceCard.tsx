"use client";

import Link from "next/link";
import { Service } from "@/lib/types";
import { iconMap } from "@/components/icon-map";
import { useBooking } from "@/context/BookingContext";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-500">{service.shortDescription}</p>
      <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
        <Link href={`/services/${service.slug}`} className="border-b border-slate-900 text-slate-900">
          Learn more
        </Link>
        <button
          onClick={() => openBooking(service.slug)}
          className="border-b border-blue-700 text-blue-700"
        >
          Book this
        </button>
      </div>
    </div>
  );
}
