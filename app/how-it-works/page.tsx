import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "How It Works — PhysioEase",
  description: "How a PhysioEase recovery plan works, from first consultation to therapy sessions.",
};

const faqs = [
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required to book a free consultation, though some insurance plans may ask for one for reimbursement.",
  },
  {
    q: "Is virtual physiotherapy covered by insurance?",
    a: "Most extended health plans cover virtual physiotherapy the same as in-person visits. We also accept WSIB claims.",
  },
  {
    q: "What do I need for a virtual session?",
    a: "Just a phone, tablet, or computer with a camera, and enough space to move around comfortably.",
  },
  {
    q: "Can I switch between virtual, home, and aquatic sessions?",
    a: "Yes — your plan can combine any of the three formats depending on what's most effective at each stage of recovery.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6">
        <h1 className="text-4xl font-extrabold text-brand-plum">How It Works</h1>
        <p className="mt-3 text-slate-500">
          A simple, three-step path from your first consultation to a full recovery plan.
        </p>
      </section>

      <HowItWorks />

      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold text-brand-plum">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-plum">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-3xl font-extrabold text-brand-plum">Specialized In</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {services.map((s) => (
            <li
              key={s.slug}
              className="rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
