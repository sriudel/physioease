import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { iconMap } from "@/components/icon-map";
import BookServiceButton from "@/components/BookServiceButton";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return {
    title: service ? `${service.name} — PhysioEase` : "Service — PhysioEase",
    description: service?.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900">
        <ChevronLeft className="h-4 w-4" /> Back to services
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
          <Icon className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{service.name}</h1>
      </div>

      <p className="mt-6 text-lg text-slate-600">{service.description}</p>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          What this program covers
        </h2>
        <ul className="mt-4 space-y-3">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <BookServiceButton
        serviceSlug={service.slug}
        label="Book This Service"
        className="mt-8 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
      />
    </section>
  );
}
