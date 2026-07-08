import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team — PhysioEase",
  description: "Meet the registered physiotherapists behind PhysioEase.",
};

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-slate-900">Our Team</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Every PhysioEase physiotherapist is registered with the College of Physiotherapists of
        Ontario and brings a specific area of focus to your care.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {team.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  );
}
