import { TeamMember } from "@/lib/types";

export const team: TeamMember[] = [
  {
    slug: "erin-whitfield",
    name: "Erin Whitfield",
    title: "Lead Physiotherapist, Founder",
    credentials: "PT, MScPT, Registered with the College of Physiotherapists",
    bio: "Erin founded PhysioEase after ten years of clinical practice, wanting to make quality physiotherapy accessible to people who can't easily get to a clinic. She designed our virtual musculoskeletal program and leads our comprehensive assessments.",
    photo: "/images/team-erin.svg",
    specialties: ["Virtual Musculoskeletal Physiotherapy Program", "Musculoskeletal Rehabilitation"],
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
