import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-first-virtual-physio-session",
    title: "What to Expect From Your First Virtual Physiotherapy Session",
    date: "2026-05-12",
    author: "Erin Whitfield",
    excerpt:
      "Virtual physiotherapy can feel unfamiliar the first time. Here's exactly how a session works, from booking to your first exercise plan.",
    image: "/images/blog-virtual-session.svg",
    content: [
      "Many people are surprised at how much a physiotherapist can assess through a video call. We start every first session with a conversation about your history, your goals, and what's been getting in the way.",
      "From there, we'll guide you through a series of movements on camera so we can observe your range of motion, strength, and any compensations you might be making without realizing it.",
      "By the end of the session, you'll leave with a clear plan: a short list of exercises, what to watch for, and when we'll check in again.",
    ],
  },
  {
    slug: "signs-you-shouldnt-ignore-persistent-pain",
    title: "5 Signs Your Persistent Pain Shouldn't Be Ignored",
    date: "2026-04-28",
    author: "Erin Whitfield",
    excerpt:
      "Pain that lingers past the expected healing window is telling you something. Here's how to know when it's time to get it assessed properly.",
    image: "/images/blog-persistent-pain.svg",
    content: [
      "It's normal for an injury to hurt for a few weeks. It's less normal for that pain to still be limiting your daily life three or six months later.",
      "Watch for pain that changes location, gets worse with rest rather than better, or comes with other symptoms like numbness or weakness.",
      "A proper assessment can usually tell the difference between pain that needs more time and pain that needs a different approach altogether.",
    ],
  },
  {
    slug: "recovering-from-concussion-what-helps",
    title: "Recovering From a Concussion: What Actually Helps",
    date: "2026-04-10",
    author: "Daniel Oduya",
    excerpt:
      "Rest used to be the only advice after a concussion. We now know a gradual, guided return to activity gets people back to normal life faster.",
    image: "/images/blog-concussion.svg",
    content: [
      "For years, complete rest was the standard advice after a concussion. Research has since shown that too much rest can actually slow recovery.",
      "A structured, gradual increase in physical and cognitive activity, guided by someone tracking your symptoms, tends to produce better outcomes.",
      "Vestibular therapy exercises can also directly target the dizziness and balance issues that linger after a head injury.",
    ],
  },
  {
    slug: "aquatic-therapy-who-its-for",
    title: "Aquatic Therapy: Who It's For and Why It Works",
    date: "2026-03-22",
    author: "Marcus Lindqvist",
    excerpt:
      "Water isn't just for swimmers. Find out why aquatic therapy is one of the most effective options for joint pain and post-surgical recovery.",
    image: "/images/blog-aquatic.svg",
    content: [
      "Buoyancy reduces the load on your joints by up to 90%, which means you can move and strengthen muscles with far less pain than on land.",
      "This makes aquatic therapy especially effective for people with arthritis, recent joint replacements, or injuries that make land-based exercise too painful.",
      "Sessions are still guided by a physiotherapist, so the water is a tool for treatment, not just a warm pool to relax in.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}
