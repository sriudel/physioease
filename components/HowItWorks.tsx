import { CalendarCheck, ClipboardList, Users } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Free 15-Min Virtual Appointment",
    description: "Tell us what's going on and we'll match you with the right physiotherapist.",
  },
  {
    icon: ClipboardList,
    title: "Full Assessment",
    description: "A thorough virtual or in-home assessment builds your personalized recovery plan.",
  },
  {
    icon: Users,
    title: "Therapy Sessions",
    description: "Ongoing sessions — virtual, home, or aquatic — track your progress every step.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-teal-100/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-left">
          How It Works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm sm:mx-0">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
