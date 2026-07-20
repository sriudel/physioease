import { TeamMember } from "@/lib/types";

export const team: TeamMember[] = [
  {
    slug: "ravneet-singh",
    name: "Ravneet Singh",
    title: "Co-Founder, Registered Physiotherapist",
    credentials: "PT, MKin (Neuromuscular Physiology), Registered with the College of Physiotherapists of Ontario",
    bio: "Ravneet co-founded PhysioEase, bringing a background in neuromuscular physiology and a clinical focus on musculoskeletal, vestibular, and neurological rehabilitation. His work is grounded in pain science, supporting patients recovering from concussion, whiplash, and complex musculoskeletal and neurological conditions.",
    photo: "/images/team-ravneet.svg",
    specialties: ["Musculoskeletal Rehabilitation", "Neurological Rehabilitation"],
  },
  {
    slug: "daniel-oduya",
    name: "Daniel Oduya",
    title: "Senior Physiotherapist",
    credentials: "PT, BScPT, Certified Neurological Rehabilitation Therapist",
    bio: "Daniel focuses on brain injury and complex rehabilitation. Before joining PhysioEase, he worked in a concussion clinic supporting patients returning to daily life after traumatic brain injury and complex trauma.",
    photo: "/images/team-daniel.svg",
    specialties: ["Brain Injury & Complex Rehabilitation", "Neurological Rehabilitation"],
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    title: "Physiotherapist",
    credentials: "PT, MScPT, Neurological Rehabilitation Certified",
    bio: "Priya works with patients living with stroke, MS, Parkinson's, and other neurological conditions, bringing home-based physiotherapy to people who need support with mobility, balance, and independence.",
    photo: "/images/team-priya.svg",
    specialties: ["Neurological Rehabilitation"],
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
