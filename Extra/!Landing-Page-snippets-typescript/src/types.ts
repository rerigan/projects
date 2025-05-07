// Common types for the application

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface StatItem {
  number: string;
  description: string;
}