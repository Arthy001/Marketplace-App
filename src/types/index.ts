export type TemplateCategory = 'all' | 'automotive' | 'real-estate' | 'ecommerce' | 'saas-booking';

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Styling' | 'Auth' | 'Deployment';
  icon?: string;
  badgeColor?: string;
}

export interface LicenseTier {
  id: 'standard' | 'extended';
  name: string;
  priceTHB: number;
  priceUSD: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  category: 'automotive' | 'real-estate' | 'ecommerce' | 'saas-booking';
  categoryLabel: string;
  priceStandardTHB: number;
  priceStandardUSD: number;
  priceExtendedTHB: number;
  priceExtendedUSD: number;
  status: 'available' | 'coming_soon' | 'pre_order';
  isFeatured?: boolean;
  isNew?: boolean;
  version: string;
  framework: string;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  
  // Visuals
  thumbnail: string;
  gallery: string[];
  
  // Links
  demoUrl?: string;
  githubUrl?: string;
  
  // Features & Specs
  keyFeatures: string[];
  techStack: TechStackItem[];
  includedItems: string[];
  databaseSchemaInfo?: string[];
  
  // System requirements
  requirements?: string[];
  lastUpdated: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  lineId?: string;
  templateId: string;
  licenseType: 'standard' | 'extended';
  notes?: string;
}
