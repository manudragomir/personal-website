import Image from "next/image";
import Section from "@/components/section";
import { education, experience, profile, socialLinks, teaching } from "@/data/profile";
import profilePhoto from "@/photo.jpeg";

export default function HomePage() {
  return (
    <>
      <section className="grid items-center gap-6 md:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">{profile.name}</h1>
          <p className="max-w-2xl text-base text-muted">{profile.intro}</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <Image
            src={profilePhoto}
            alt={`${profile.name} profile photo`}
            className="h-40 w-40 rounded-full border border-white/10 object-cover md:h-52 md:w-52"
            priority
          />
        </div>
      </section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-xl border border-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-medium">{item.role}</h3>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <p className="text-sm text-muted">{item.company}</p>
              <p className="mt-2 text-sm">{item.summary}</p>
              {item.papers && item.papers.length > 0 ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-muted">Papers</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {item.papers.map((paper) => (
                      <li key={paper.url}>
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-accent underline-offset-2 hover:underline"
                        >
                          {paper.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section id="teaching" title="Teaching">
        <div className="space-y-4">
          {teaching.map((item) => (
            <article key={`${item.institution}-${item.course}`} className="rounded-xl border border-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-medium">{item.course}</h3>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <p className="text-sm text-muted">{item.institution}</p>
              {item.details ? <p className="mt-2 text-sm">{item.details}</p> : null}
              {item.youtubeUrl ? (
                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black"
                >
                  Watch on YouTube
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-4">
          {education.map((item) => (
            <article key={`${item.institution}-${item.degree}`} className="rounded-xl border border-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <p className="text-sm text-muted">{item.institution}</p>
              {item.gpa ? <p className="mt-2 text-sm text-muted">GPA: {item.gpa}</p> : null}
              {item.supervisorName ? (
                item.supervisorUrl ? (
                  <a
                    href={item.supervisorUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-sm text-muted underline-offset-2 hover:underline"
                  >
                    Supervisor: {item.supervisorName}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-muted">Supervisor: {item.supervisorName}</p>
                )
              ) : null}
              {item.thesisTitle && item.thesisUrl ? (
                <a
                  href={item.thesisUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block text-sm text-accent underline-offset-2 hover:underline"
                >
                  Thesis: {item.thesisTitle}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
