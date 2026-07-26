import { Star } from "lucide-react";
import { Testimonial } from "@/lib/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-brand-plum">{testimonial.name}</p>
        <p className="text-xs text-slate-400">
          {testimonial.location} · via {testimonial.source}
        </p>
      </div>
    </div>
  );
}
