export type CvLanguage = 'arabic' | 'english' | 'both';

export type ExperienceLevel = 'fresh_graduate' | 'mid_level' | 'senior_level' | 'executive';

export interface PricingPackage {
  id: string;
  name: string;
  nameEn: string;
  priceJod: number;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  bestFor: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  targetJobTitle: string;
  experienceLevel: ExperienceLevel;
  language: CvLanguage;
  packageId: string;
  additionalNotes: string;
  currentCvStatus: 'has_old_cv' | 'from_scratch' | 'need_major_update';
}

export interface AtsSample {
  id: string;
  title: string;
  titleEn: string;
  field: string;
  fieldEn: string;
  language: 'ar' | 'en';
  summary: string;
  atsScore: number;
  keyHighlights: string[];
  structure: {
    personalInfo: {
      name: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      linkedin?: string;
    };
    profileSummary: string;
    skills: string[];
    experience: Array<{
      role: string;
      company: string;
      period: string;
      achievements: string[];
    }>;
    education: Array<{
      degree: string;
      institution: string;
      year: string;
    }>;
    certifications?: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrSector: string;
  comment: string;
  rating: number;
  outcome: string;
  avatarInitials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'ats' | 'pricing' | 'process' | 'payment';
}
