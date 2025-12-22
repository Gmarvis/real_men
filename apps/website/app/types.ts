export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
  isMegaMenu?: boolean;
  megaMenuColumns?: NavLink[][];
}

export interface Service {
  title: string;
  icon?: string;
  description?: string;
  imageUrl?: string;
  href?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  profileUrl: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

export interface Testimonial {
  title: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  unavailableFeatures: string[];
  featured: boolean;
}

export interface BlogPost {
  imageUrl: string;
  date: string;
  month: string;
  category: string;
  author: string;
  title: string;
  href: string;
}

export interface TabItem {
  id: string;
  label: string;
  imageUrl?: string;
  active: boolean;
  content: {
    title: string;
    description: string;
  };
}
