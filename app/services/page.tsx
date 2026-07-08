import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — PhysioEase",
  description: "Explore PhysioEase's specialized physiotherapy programs.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-slate-900">Our Services</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Every program is built around virtual care, home care, or aquatic therapy — pick a
        specialty below to learn more or book directly.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
