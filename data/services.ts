import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "neurological-rehabilitation",
    name: "Neurological Rehabilitation",
    shortDescription:
      "Home-based physiotherapy for people living with stroke, spinal cord injury, MS, Parkinson's, and other conditions affecting movement and independence.",
    description:
      "We provide physiotherapy in the comfort of your home for individuals experiencing mobility, strength, balance, pain, and functional challenges caused by a neurological condition. Sessions are personalized, one-on-one, and focused on helping you move, walk, and live more independently.",
    bulletsLabel: "Conditions we help with",
    bullets: [
      "Stroke",
      "Spinal Cord Injury (SCI)",
      "Multiple Sclerosis (MS)",
      "Parkinson's Disease (PD)",
      "Functional Neurological Disorder (FND)",
      "Peripheral neuropathies",
      "Guillain-Barré Syndrome (GBS)",
      "Balance and walking difficulties",
    ],
    benefits: [
      "Improve mobility and walking",
      "Increase strength and balance",
      "Prevent falls",
      "Improve confidence and independence",
      "Return to daily activities safely",
    ],
    icon: "activity",
    image: "/images/service-neurological-rehabilitation.jpg",
    imagePosition: "center 65%",
  },
  {
    slug: "brain-injury-complex-rehabilitation",
    name: "Brain Injury & Complex Rehabilitation",
    shortDescription:
      "In-home rehabilitation for traumatic brain injury, concussion, complex trauma, and persistent pain conditions like CRPS.",
    description:
      "We provide rehabilitation for individuals recovering from brain injury or managing complex, hard-to-treat pain conditions. Care is delivered at home and tailored to the specific way your injury or condition affects daily function.",
    bulletsLabel: "Conditions we help with",
    bullets: [
      "Traumatic Brain Injury (TBI)",
      "Acquired Brain Injury (ABI)",
      "Concussion and post-concussion symptoms",
      "Multiple fractures and trauma-related injuries",
      "Complex pain conditions",
      "Central pain syndromes",
      "Complex Regional Pain Syndrome (CRPS)",
    ],
    benefits: [
      "Improve mobility and walking",
      "Reduce pain and stiffness",
      "Improve confidence and independence",
      "Return to daily activities safely",
    ],
    icon: "brain",
    image: "/images/service-brain-injury.jpg",
  },
  {
    slug: "musculoskeletal-rehabilitation",
    name: "Musculoskeletal Rehabilitation",
    shortDescription:
      "In-home treatment for common muscle, joint, and soft tissue conditions, from whiplash to post-surgical recovery.",
    description:
      "We treat the full range of muscle, joint, and soft tissue conditions in the comfort of your home, combining hands-on treatment with a progressive exercise program built around your goals.",
    bulletsLabel: "Conditions we help with",
    bullets: [
      "Neck pain and whiplash injuries",
      "Back pain",
      "Shoulder, hip, knee, ankle, and foot pain",
      "Arthritis and joint stiffness",
      "Muscle strains and sprains",
      "Tendon injuries and tendinopathy",
      "Post-surgical rehabilitation",
    ],
    benefits: [
      "Improve mobility and walking",
      "Increase strength and balance",
      "Reduce pain and stiffness",
      "Return to daily activities safely",
    ],
    icon: "bone",
    image: "/images/service-musculoskeletal.jpg",
  },
  {
    slug: "virtual-musculoskeletal-program",
    name: "Virtual Musculoskeletal Physiotherapy Program",
    shortDescription:
      "A structured, phased virtual program — from your first consultation through long-term prevention — for musculoskeletal pain and injury.",
    description:
      "This is a structured, step-by-step plan designed specifically for virtual physiotherapy care. It starts with a short introductory consultation and a comprehensive assessment, then moves through four phases over up to 20 weeks, each with its own goals and focus areas. Every rehabilitation program is individualized — progression through each phase depends on your symptoms, goals, recovery rate, and functional improvement.",
    bulletsLabel: "What we understand in your assessment",
    bullets: [
      "Pain location, intensity, and symptom behavior",
      "Aggravating and easing factors",
      "Activity limitations and functional challenges",
      "Sleep, work, exercise, and lifestyle factors",
      "Movement patterns, strength, balance, and coordination",
      "Your personal recovery goals",
    ],
    processLabel: "Getting started",
    process: [
      {
        title: "Initial Virtual Consultation",
        duration: "15 Minutes",
        description:
          "This introductory session helps us understand your primary concerns, review your history, and determine whether virtual physiotherapy is the right fit for your needs.",
      },
      {
        title: "Comprehensive Virtual Assessment",
        duration: "45–60 Minutes",
        description:
          "A detailed, whole-person assessment of your symptoms, function, and goals, followed by collaborative goal-setting before your rehabilitation plan begins.",
      },
    ],
    phases: [
      {
        name: "Phase 1",
        title: "Pain Reduction, Mobility & Confidence Building",
        duration: "Weeks 1–4",
        goals: [
          "Reduce pain and symptom irritability",
          "Improve joint mobility and movement quality",
          "Restore confidence in movement",
          "Improve flexibility and body awareness",
          "Begin gentle strengthening and conditioning",
        ],
        focusAreas: [
          "Education and self-management strategies",
          "Mobility and flexibility exercises",
          "Movement retraining",
          "Activity modification when needed",
          "Gentle strengthening exercises",
        ],
        outcomes: [
          "Improved movement comfort",
          "Reduced symptom intensity",
          "Better mobility and flexibility",
          "Increased confidence with daily activities",
        ],
      },
      {
        name: "Phase 2",
        title: "Reconditioning & Functional Recovery",
        duration: "Weeks 4–8",
        goals: [
          "Improve strength and muscular endurance",
          "Increase activity tolerance",
          "Restore functional movement patterns",
          "Reduce movement avoidance and fear",
        ],
        focusAreas: [
          "Progressive strengthening",
          "Functional movement training",
          "Balance and coordination exercises",
          "Work and activity-specific rehabilitation",
          "Gradual return to previously limited activities",
        ],
        outcomes: [
          "Improved strength and stability",
          "Better tolerance to daily activities",
          "Increased physical confidence",
          "Reduced symptom flare-ups with activity",
        ],
      },
      {
        name: "Phase 3",
        title: "Strength, Capacity & Performance",
        duration: "Weeks 8–14",
        goals: [
          "Build whole-body strength and resilience",
          "Improve physical capacity",
          "Enhance endurance and movement efficiency",
          "Prepare for higher-level functional demands",
        ],
        focusAreas: [
          "Progressive resistance training",
          "Endurance and conditioning exercises",
          "Functional strengthening",
          "Lifting, carrying, and task-specific training",
          "Return-to-work or return-to-sport preparation",
        ],
        outcomes: [
          "Improved physical performance",
          "Greater load tolerance",
          "Enhanced functional independence",
          "Increased participation in desired activities",
        ],
      },
      {
        name: "Phase 4",
        title: "Long-Term Health, Independence & Prevention",
        duration: "Weeks 14–20",
        goals: [
          "Achieve long-term symptom management",
          "Maintain strength and mobility gains",
          "Prevent future flare-ups or recurrences",
          "Promote independence and self-management",
        ],
        focusAreas: [
          "Independent exercise programming",
          "Lifestyle and activity planning",
          "Long-term conditioning strategies",
          "Relapse prevention and flare-up management",
          "Ongoing fitness and wellness planning",
        ],
        outcomes: [
          "Confidence in self-managing symptoms",
          "Sustainable exercise habits",
          "Long-term physical resilience",
          "Return to meaningful activities with minimal limitations",
        ],
      },
    ],
    icon: "route",
    image: "/images/service-virtual-msk.jpg",
    imagePosition: "center 70%",
  },
  {
    slug: "aquatic-therapy",
    name: "Aquatic Therapy",
    shortDescription:
      "Personalized rehabilitation in a warm water environment — reducing joint stress while you rebuild strength, balance, and function.",
    description:
      "Our aquatic therapy program combines the benefits of physiotherapy with the supportive properties of water to help you move more comfortably, build strength, and improve function. Sessions are one-on-one with a physiotherapist and progressed over time to support your return to daily activities, work, recreation, or sport.",
    bulletsLabel: "Conditions we help with",
    bullets: [
      "Osteoarthritis (OA)",
      "Chronic pain and persistent pain syndromes",
      "Fibromyalgia",
      "Back and neck pain",
      "Joint pain and stiffness",
      "Post-surgical rehabilitation",
      "Stroke, SCI, MS, and Parkinson's Disease",
      "Balance and mobility impairments",
    ],
    processLabel: "How it works",
    process: [
      {
        title: "Initial Assessment",
        description:
          "A comprehensive physiotherapy assessment to understand your condition, goals, and suitability for aquatic therapy.",
      },
      {
        title: "Finding the Right Pool",
        description:
          "We help identify a suitable community or therapy pool near you whenever possible.",
      },
      {
        title: "Individualized Treatment Plan",
        description:
          "A personalized aquatic rehabilitation program is developed based on your symptoms, functional limitations, and goals.",
      },
      {
        title: "Guided Aquatic Therapy Sessions",
        description:
          "One-on-one sessions in the pool focusing on movement, strength, balance, mobility, endurance, and pain management.",
      },
      {
        title: "Progressive Rehabilitation",
        description:
          "Exercises are progressed over time to support your return to daily activities, work, recreation, or sport.",
      },
    ],
    benefits: [
      "Reduced stress on joints",
      "Improved mobility and flexibility",
      "Easier movement with less pain",
      "Improved balance and confidence",
      "Increased strength and endurance",
      "Safe environment for rehabilitation and exercise",
    ],
    icon: "waves",
    image: "/images/service-aquatic-therapy.jpg",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
