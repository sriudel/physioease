export type ProcessStep = {
  title: string;
  duration?: string;
  description: string;
};

export type ProgramPhase = {
  name: string;
  title: string;
  duration: string;
  goals: string[];
  focusAreas: string[];
  outcomes: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  bulletsLabel?: string;
  icon: string;
  process?: ProcessStep[];
  processLabel?: string;
  phases?: ProgramPhase[];
  benefits?: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  photo: string;
  photoPosition?: string;
  specialties: string[];
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  source: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  author: string;
  image: string;
};

export type TimeSlot = {
  time: string;
  available: boolean;
};
