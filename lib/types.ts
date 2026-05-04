// ═══════════════════════════════════════════════
// SRITEK — Type Definitions
// ═══════════════════════════════════════════════

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceItem {
  number: string;
  title: string;
  slug: string;
  description?: string;
}

export interface ProjectItem {
  slug: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  year: string;
  imageColor: string;
  featured: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  client: string;
}

export interface ClientItem {
  name: string;
  service: string;
}
