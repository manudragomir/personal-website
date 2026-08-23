export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  papers?: {
    title: string;
    url: string;
  }[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  supervisorName?: string;
  supervisorUrl?: string;
  thesisTitle?: string;
  thesisUrl?: string;
};

export type TeachingItem = {
  institution: string;
  course: string;
  period: string;
  details?: string;
  youtubeUrl?: string;
};

export type BookInfo = {
  title: string;
  status: "published" | "in-progress";
  description: string;
  pdfUrl: string;
  buyMeACoffeeUrl: string;
};
