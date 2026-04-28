import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Books and Writing</h1>
        <p className="max-w-2xl text-muted">
          Read for free - support if it helped you.
        </p>
      </div>

      <div className="space-y-4">
        {books.map((book) => (
          <article key={book.title} className="rounded-xl border border-white/10 bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-medium text-foreground">{book.title}</h2>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                {book.status === "in-progress" ? "In Progress" : "Published"}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">{book.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 hidden">
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black"
              >
                Read for Free
              </a>
              <a
                href={book.buyMeACoffeeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-foreground"
              >
                Support on Buy Me a Coffee
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
