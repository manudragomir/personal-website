import type { Lesson } from "@/lib/types";

type LessonCardProps = {
  lesson: Lesson;
};

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-white/10 bg-card p-5">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-foreground">{lesson.title}</h3>
        {lesson.description ? <p className="text-sm text-muted">{lesson.description}</p> : null}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        <a
          href={lesson.youtubeUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black"
        >
          Watch on YouTube
        </a>
        {lesson.coursePdfUrl ? (
          <a
            href={lesson.coursePdfUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-foreground"
          >
            Course PDF
          </a>
        ) : null}
      </div>

      {lesson.notebooks && lesson.notebooks.length > 0 ? (
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-muted">Notebooks</p>
          <ul className="space-y-1 text-sm">
            {lesson.notebooks.map((notebook) => (
              <li key={notebook.url}>
                <a
                  href={notebook.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {notebook.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
