import Image from "next/image";
import { TeamMember } from "@/lib/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="relative h-56 w-full">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: member.photoPosition ?? "center" }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
        <p className="text-sm font-medium text-teal-700">{member.title}</p>
        <p className="mt-1 text-xs text-slate-400">{member.credentials}</p>
        <p className="mt-3 text-sm text-slate-500">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
