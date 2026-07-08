import { TeamMember } from "@/lib/types";

export const team: TeamMember[] = [
  {
    slug: "erin-whitfield",
    name: "Erin Whitfield",
    title: "Lead Physiotherapist, Founder",
    credentials: "PT, MScPT, Registered with the College of Physiotherapists",
    bio: "Erin founded PhysioEase after ten years of clinical practice, wanting to make quality physiotherapy accessible to people who can't easily get to a clinic. She specializes in complex pain and post-surgical rehabilitation, and leads our virtual assessment program.",
    photo: "/images/team-erin.svg",
    specialties: ["Complex and Persistent Pain", "Musculo-Skeletal Issues"],
  },
  {
    slug: "daniel-oduya",
    name: "Daniel Oduya",
    title: "Senior Physiotherapist",
    credentials: "PT, BScPT, Certified Vestibular Rehabilitation Therapist",
    bio: "Daniel focuses on vestibular disorders and concussion recovery. Before joining PhysioEase, he worked in a concussion clinic supporting athletes and workers returning to activity after head injuries.",
    photo: "/images/team-daniel.svg",
    specialties: ["Vestibular and Concussion Care", "Musculo-Skeletal Issues"],
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    title: "Physiotherapist",
    credentials: "PT, MScPT, Pelvic Health Certified",
    bio: "Priya leads our men's pelvic health program, helping patients navigate a part of recovery that's often overlooked. She's known for making a sensitive topic feel comfortable and approachable.",
    photo: "/images/team-priya.svg",
    specialties: ["Men's Pelvic Health"],
  },
  {
    slug: "marcus-lindqvist",
    name: "Marcus Lindqvist",
    title: "Physiotherapist, Aquatic Therapy Lead",
    credentials: "PT, BScPT, Aquatic Therapy Certified",
    bio: "Marcus runs our aquatic therapy program, working with patients who need a lower-impact path back to strength and mobility, including those managing arthritis or recovering from joint replacement.",
    photo: "/images/team-marcus.svg",
    specialties: ["Aquatic Therapy"],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return team.find((t) => t.slug === slug);
}
