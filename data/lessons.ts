import type { Lesson } from "@/lib/types";

export const lessons: Lesson[] = [
  {
    title: "Neural Networks from First Principles",
    youtubeUrl: "https://www.youtube.com/",
    description: "Understand the forward and backward pass with minimal math."
  },
  {
    title: "Fine-Tuning LLMs for Real Tasks",
    youtubeUrl: "https://www.youtube.com/",
    coursePdfUrl: "https://example.com/course.pdf"
  },
  {
    title: "Vector Databases in Practice",
    youtubeUrl: "https://www.youtube.com/",
    notebooks: [{ title: "Starter Notebook", url: "https://example.com/notebook-1" }]
  },
  {
    title: "RAG End-to-End Workshop",
    youtubeUrl: "https://www.youtube.com/",
    coursePdfUrl: "https://example.com/rag.pdf",
    notebooks: [
      { title: "Ingestion Notebook", url: "https://example.com/notebook-2" },
      { title: "Serving Notebook", url: "https://example.com/notebook-3" }
    ]
  }
];
