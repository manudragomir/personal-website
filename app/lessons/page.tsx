import LessonCard from "@/components/lesson-card";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-muted">Lessons</p>
        <h1 className="text-3xl font-semibold tracking-tight">AI Lessons</h1>
        <p className="max-w-2xl text-muted">
          Practical AI teaching videos with optional course PDFs and companion notebooks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
