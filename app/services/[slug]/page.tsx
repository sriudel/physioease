import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
      <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-plum">
        <ChevronLeft className="h-4 w-4" /> Back to services
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal">
          <Icon className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-extrabold text-brand-plum sm:text-4xl">{service.name}</h1>
      </div>

      <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl sm:h-72">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 640px) 768px, 100vw"
          className="object-cover"
          style={{ objectPosition: service.imagePosition ?? "center" }}
        />
      </div>

      <p className="mt-6 text-lg text-slate-600">{service.description}</p>

      {service.process && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {service.processLabel ?? "How it works"}
          </h2>
          <div className="mt-4 space-y-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-mint text-sm font-bold text-brand-navy">
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-semibold text-brand-plum">{step.title}</h3>
                    {step.duration && (
                      <span className="text-xs font-medium text-brand-teal">{step.duration}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 rounded-2xl border border-slate-100 bg-brand-bg p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {service.bulletsLabel ?? "What this program covers"}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {service.phases && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Your recovery journey
          </h2>
          <div className="mt-4 space-y-6">
            {service.phases.map((phase) => (
              <div key={phase.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {phase.name}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{phase.duration}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-brand-plum">{phase.title}</h3>

                <div className="mt-4 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Goals</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                      {phase.goals.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Focus areas</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                      {phase.focusAreas.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Expected outcomes</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                      {phase.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {service.benefits && (
        <div className="mt-8 rounded-2xl bg-brand-teal/10 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            Benefits
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <BookServiceButton
        serviceSlug={service.slug}
        label="Book This Service"
        className="mt-8 rounded-full bg-brand-mint px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-mint-dark"
      />
    </section>
  );
}
