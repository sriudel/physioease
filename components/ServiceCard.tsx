"use client";

import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/types";
import { iconMap } from "@/components/icon-map";
import { useBooking } from "@/context/BookingContext";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: service.imagePosition ?? "center" }}
        />
        <div className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-brand-teal/10 text-brand-teal shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="text-lg font-bold text-brand-plum">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-500">{service.shortDescription}</p>
        <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
          <Link href={`/services/${service.slug}`} className="border-b border-brand-plum text-brand-plum">
            Learn more
          </Link>
          <button
            onClick={() => openBooking(service.slug)}
            className="border-b border-brand-blue text-brand-blue"
          >
            Book this
          </button>
        </div>
      </div>
    </div>
  );
}
