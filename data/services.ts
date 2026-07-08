import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "mens-pelvic-health",
    name: "Men's Pelvic Health",
    shortDescription:
      "Confidential assessment and treatment for pelvic pain, post-prostatectomy recovery, and bladder or bowel dysfunction.",
    description:
      "Our men's pelvic health program addresses conditions that are often under-treated because they're hard to talk about. We work with men recovering from prostate surgery, dealing with chronic pelvic pain, or managing bladder and bowel issues, using hands-on assessment, pelvic floor retraining, and a clear plan you can follow at home.",
    bullets: [
      "Post-prostatectomy incontinence recovery",
      "Chronic pelvic pain and tension",
      "Bladder and bowel dysfunction",
      "Private, one-on-one virtual or in-home sessions",
    ],
    icon: "activity",
  },
  {
    slug: "complex-persistent-pain",
    name: "Complex and Persistent Pain",
    shortDescription:
      "A whole-person approach to pain that hasn't responded to conventional treatment, blending movement therapy with pain science education.",
    description:
      "When pain sticks around long after tissue should have healed, standard treatment plans often fall short. We combine graded movement, pain neuroscience education, and lifestyle coaching to help you understand your pain and rebuild confidence in your body, rather than just chasing symptoms.",
    bullets: [
      "Pain neuroscience education",
      "Graded exposure and movement retraining",
      "Sleep, stress, and lifestyle coaching",
      "Coordination with your physician or specialist",
    ],
    icon: "brain",
  },
  {
    slug: "musculoskeletal-issues",
    name: "Musculo-Skeletal Issues",
    shortDescription:
      "Hands-on treatment and exercise rehab for joint, muscle, and tendon injuries — from sprains to post-surgical recovery.",
    description:
      "From a sprained ankle to a rotator cuff repair, our musculoskeletal program covers the full range of soft tissue and joint injuries. Every plan starts with a full movement assessment, followed by manual therapy and a progressive exercise program built around your goals, whether that's returning to sport or simply moving without pain.",
    bullets: [
      "Sports injuries and overuse conditions",
      "Post-surgical rehabilitation",
      "Manual therapy and joint mobilization",
      "Progressive, goal-based exercise programs",
    ],
    icon: "bone",
  },
  {
    slug: "vestibular-concussion-care",
    name: "Vestibular and Concussion Care",
    shortDescription:
      "Specialized rehab for dizziness, balance problems, and post-concussion symptoms using evidence-based vestibular therapy.",
    description:
      "Dizziness, imbalance, and lingering concussion symptoms can be disorienting and hard to explain to others. Our vestibular and concussion program uses targeted exercises to retrain your balance system and gradually reintroduce activity, with careful monitoring so you recover without setbacks.",
    bullets: [
      "Benign paroxysmal positional vertigo (BPPV) treatment",
      "Post-concussion symptom management",
      "Balance and gaze stability training",
      "Gradual return-to-activity and return-to-sport planning",
    ],
    icon: "compass",
  },
  {
    slug: "aquatic-therapy",
    name: "Aquatic Therapy",
    shortDescription:
      "Low-impact, water-based rehabilitation that reduces joint stress while you rebuild strength, balance, and range of motion.",
    description:
      "Water's buoyancy takes pressure off painful joints while its resistance builds strength, making it ideal for people who find land-based exercise too painful or difficult. Our aquatic therapy sessions are supervised by a physiotherapist and tailored to conditions like arthritis, post-surgical recovery, and chronic pain.",
    bullets: [
      "Arthritis and joint pain management",
      "Post-surgical and post-injury rehab",
      "Balance and fall-prevention training",
      "Gentle cardiovascular conditioning",
    ],
    icon: "waves",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
