export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'C Programming' | 'Web Web' | 'Full Stack';
  tech: string[];
  tags: string[];
  features: string[];
  icon: string; // Lucide icon name
  codeSnippet?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web Development' | 'Tools & Other';
  level: number; // 0-100
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string; // Hotlink URL
  link?: string;
  verificationId?: string;
  highlights: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
