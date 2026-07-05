/**
 * Types and interfaces for Monarchix Marketing Agency
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // Lucide icon identifier
  deliverables: string[];
  // Honest, qualitative outcomes (no fabricated percentages).
  // TODO: if you gather real, verifiable averages, we can show numbers again.
  outcomes: string[];
  accentColor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: {
    name: string;
    included: boolean;
    val?: string;
  }[];
  isPopular?: boolean;
  ctaText: string;
  colorClass: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  avatarFallback: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
    isPositive?: boolean;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  result: string;
  description: string;
  details: string[];
  stats: { label: string; value: string }[];
  logoText: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  plan?: string;
}

export interface CustomPlanState {
  platforms: string[]; // e.g., 'instagram', 'facebook', 'youtube'
  postsPerWeek: number; // 1 to 7
  adBudget: number; // $0 to $500
  seoKeywords: number; // 0 to 50
  reportFrequency: 'monthly' | 'bi-weekly' | 'weekly';
}
