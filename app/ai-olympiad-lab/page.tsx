import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/section";
import HeroFacts from "@/components/hero-facts";
import {
  applicationFormUrl,
  curriculum,
  faq,
  hero,
  howToApply,
  overviewSections,
  outcomes,
  scholarships,
  topics,
  type OverviewPoint
} from "@/data/ai-olympiad-lab";

const experienceTitle = "Experiență și rezultate";

type StudentLink = { href?: string; label: string; results?: string[] };

function isGroupedPoint(point: OverviewPoint): point is { text?: string; items: StudentLink[] } {
  return typeof point === "object";
}

function ExperienceDetailCard({
  text,
  points
}: {
  text?: string;
  points: { text?: string; items: StudentLink[] }[];
}) {
  const students = points[0]?.items ?? [];

  return (
    <div className="space-y-4">
      {text ? <p className="text-sm text-muted">{text}</p> : null}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {students.map((student) => (
          <article key={student.label} className="rounded-xl border border-white/10 bg-card p-3">
            {student.href ? (
              <a
                href={student.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-accent underline-offset-2 hover:underline"
              >
                {student.label}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground">{student.label}</p>
            )}
            {student.results && student.results.length > 0 ? (
              <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-muted">
                {student.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperienceResults({
  text,
  points
}: {
  text?: string;
  points: OverviewPoint[] | undefined;
}) {
  return <ExperienceDetailCard text={text} points={(points ?? []).filter(isGroupedPoint)} />;
}

export const metadata: Metadata = {
  title: "AI Olympiad Lab",
  description:
    "Introducere în AI pentru liceeni și pregătire practică pentru Olimpiada Națională de Inteligență Artificială. Cluj-Napoca, septembrie 2026 – mai 2027.",
  openGraph: {
    title: "AI Olympiad Lab",
    description:
      "Introducere în AI pentru liceeni și pregătire practică pentru Olimpiada Națională de Inteligență Artificială. Cluj-Napoca, septembrie 2026 – mai 2027.",
    url: "https://manudragomir.ai/ai-olympiad-lab",
    locale: "ro_RO",
    type: "website"
  }
};

function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <div className="flex justify-center">
      <a
        href={applicationFormUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-block rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black transition hover:opacity-90 ${className}`}
      >
        Aplică
      </a>
    </div>
  );
}

export default function AiOlympiadPage() {
  return (
    <>
      <section className="space-y-4 text-center">
        <div className="mx-auto max-w-2xl space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">{hero.title}</h1>
          <p className="text-lg text-foreground">{hero.subtitle}</p>
        </div>
        <ApplyButton />
        <HeroFacts />
      </section>

      {overviewSections.map((item) => (
        <Section key={item.title} title={item.title}>
          {item.title === experienceTitle ? (
            <ExperienceResults text={item.text} points={item.points} />
          ) : (
          <article className="rounded-xl border border-white/10 bg-card p-5">
            {item.text || item.link ? (
              item.linkBelow ? (
                <>
                  {item.text ? <p className="text-sm text-muted">{item.text}</p> : null}
                  {item.link ? (
                    <p className="mt-3 text-sm">
                      <Link
                        href={item.link.href}
                        className="text-accent underline-offset-2 hover:underline"
                      >
                        {item.link.label}
                      </Link>
                    </p>
                  ) : null}
                </>
              ) : (
                <p className="text-sm text-muted">
                  {item.text ? `${item.text} ` : null}
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      {item.link.label}
                    </Link>
                  ) : null}
                  {item.link ? "." : null}
                </p>
              )
            ) : null}
            {item.points ? (
              <ul
                className={`list-outside list-disc space-y-2 pl-5 text-sm text-muted ${item.text ? "mt-4" : ""}`}
              >
                {item.points.filter((point): point is string => typeof point === "string").map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {item.note ? <p className="mt-4 text-sm italic text-muted">{item.note}</p> : null}
          </article>
          )}
        </Section>
      ))}

      <Section id="burse" title="Burse">
        <div className="space-y-3">
          <details className="group rounded-xl border border-white/10 bg-card p-5">
            <summary className="cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block text-lg font-medium text-foreground">
                    {scholarships.social.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{scholarships.social.coverage}</span>
                </span>
                <span className="shrink-0 text-muted transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm text-muted">{scholarships.social.purpose}</p>
              <p className="mt-4 text-sm font-medium text-foreground">Principiul de acordare</p>
              <p className="mt-2 text-sm text-muted">{scholarships.social.principle}</p>
              <p className="mt-4 text-sm font-medium text-foreground">Criterii luate în considerare</p>
              <p className="mt-2 text-sm text-muted">
                Situația socio-economică (75%) poate avea în vedere:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
                {scholarships.social.criteria.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Performanța școlară (25%) poate avea în vedere:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
                {scholarships.social.academicCriteria.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">{scholarships.social.award}</p>
              <p className="mt-4 text-sm text-muted">{scholarships.social.confidentiality}</p>
            </div>
          </details>
          <details className="group rounded-xl border border-white/10 bg-card p-5">
            <summary className="cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block text-lg font-medium text-foreground">
                    {scholarships.involvement.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{scholarships.involvement.coverage}</span>
                </span>
                <span className="shrink-0 text-muted transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-foreground">Principiul de acordare</p>
              <p className="mt-2 text-sm text-muted">{scholarships.involvement.principle}</p>
              <p className="mt-4 text-sm font-medium text-foreground">Criterii luate în considerare</p>
              <p className="mt-2 text-sm text-muted">La acordarea bursei vor fi luate în considerare:</p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
                {scholarships.involvement.criteria.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">{scholarships.involvement.note}</p>
              <p className="mt-4 text-sm text-muted">{scholarships.involvement.award}</p>
            </div>
          </details>
        </div>
      </Section>

      <Section title="Ce studiem?">
        <article className="rounded-xl border border-white/10 bg-card p-5">
          <ul className="list-inside list-disc space-y-2 text-sm text-muted">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section title="Ce vei ști să faci la final?">
        <article className="rounded-xl border border-white/10 bg-card p-5">
          <p className="text-sm text-muted">{outcomes.intro}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
            {outcomes.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section title="Plan de lecții">
        <details className="group rounded-xl border border-white/10 bg-card p-5">
          <summary className="cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              <span className="text-sm text-muted">~25 de săptămâni, o lecție pe săptămână</span>
              <span className="shrink-0 text-muted transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <ol className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-muted">
            {curriculum.map((lesson) => (
              <li key={lesson.week} className="flex gap-3">
                <span className="shrink-0 tabular-nums text-foreground/70">Săpt. {lesson.week}</span>
                <span>{lesson.title}</span>
              </li>
            ))}
          </ol>
        </details>
      </Section>

      <Section id="aplicare" title="Cum aplici?">
        <article className="rounded-xl border border-white/10 bg-card p-5">
          <ol className="list-inside list-decimal space-y-2 text-sm text-muted">
            {howToApply.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">{howToApply.scholarshipNote}</p>
          <div className="mt-4">
            <ApplyButton />
          </div>
        </article>
      </Section>

      <Section title="Întrebări frecvente">
        <div className="space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/10 bg-card p-5"
            >
              <summary className="cursor-pointer text-sm font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-muted transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">
                {item.answer}
                {item.link ? (
                  <>
                    {" "}
                    <a
                      href={item.link.href}
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      {item.link.label}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
