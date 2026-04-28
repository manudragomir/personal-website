import type { EducationItem, ExperienceItem, SocialLink, TeachingItem } from "@/lib/types";

export const profile = {
  name: "Manu Dragomir",
  intro:
    "I build practical AI products and teach machine learning through clear, hands-on lessons.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/manudragomir" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manuel-dragomir0305/" }
];

export const experience: ExperienceItem[] = [
  {
    company: "Bitdefender",
    role: "Machine Learning Engineer",
    period: "2021 - Present",
    summary: "Detecting malware with AI."
  },
  {
    company: "Babes-Bolyai University",
    role: "Research Assistant",
    period: "2021 - 2022",
    summary: "Researching towards semi-supervised learning.",
    papers: [
      {
        title: "A Semi-Supervised Approach to Cell Nuclei Segmentation",
        url: "https://ieeexplore.ieee.org/abstract/document/10053987"
      }
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: "Babes-Bolyai University",
    degree: "PhD, Researching VLMs for Medical Image Analysis",
    period: "2026 - Present",
    supervisorName: "Prof. Czibula Gabriela"
  },
  {
    institution: "Babes-Bolyai University",
    degree: "MSc, Applied Computational Intelligence",
    period: "2021 - 2023",
    thesisTitle: "Befriending Semi-Supervised Learning with Polyp Segmentation",
    thesisUrl: "https://drive.google.com/file/d/10ew0ao3BUYMV_cFKWXc3wgFrqr_Y1LQF/view?usp=sharing"
  },
  {
    institution: "Babes-Bolyai University",
    degree: "BSc, Computer Science",
    period: "2018 - 2021",
    thesisTitle: "Deep X-Ray: Chest X-rays Diagnosis using Deep Learning",
    thesisUrl: "https://drive.google.com/file/d/1t4rPV5yr4OHCGd2NhREc3TZfL_YT400_/view?usp=sharing"
  }
];

export const teaching: TeachingItem[] = [
  {
    institution: "Babes-Bolyai University",
    course: "Artificial Intelligence",
    period: "2026 - Present",
    details: "Led lab sessions."
  },
  {
    institution: "Babes-Bolyai University",
    course: "Data Structures and Algorithms",
    period: "2026 - Present",
    details: "Led lab sessions."
  },
  {
    institution: "Cluj Center of Excellence",
    course: "Artificial Intelligence",
    period: "2024-2025",
    details: "Taught AI to high school students for National Olympiad of Artificial Intelligence.",
    youtubeUrl: "https://www.youtube.com/watch?v=8mYHeb9IHrg&list=PLdUHP8h8YfHmI1leIBxd5fScd6Na8F_Jt"
  },
  {
    institution: "Cluj Center of Excellence",
    course: "Computer Science",
    period: "2023-2024",
    details: "Taught algorithms to high school students for National Olympiad of Computer Science."
  },
  {
    institution: "Avram Iancu High School",
    course: "Computer Science",
    period: "2023-2025",
    details: "Taught algorithmic thinking to high school students."
  }
];
