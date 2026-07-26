import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials — PhysioEase",
  description: "Read what PhysioEase patients have to say about their recovery.",
};

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-plum">What Our Patients Say</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Real feedback from people who started their recovery with PhysioEase.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
