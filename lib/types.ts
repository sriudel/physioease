export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  icon: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  photo: string;
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
