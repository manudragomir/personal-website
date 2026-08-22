import { heroFacts } from "@/data/ai-olympiad-lab";

const toneClasses = {
  sky: "border-sky-400/35 bg-sky-400/10 text-sky-300",
  emerald: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/35 bg-amber-400/10 text-amber-300",
  rose: "border-rose-400/35 bg-rose-400/10 text-rose-300",
  teal: "border-teal-400/35 bg-teal-400/10 text-teal-300",
  violet: "border-violet-400/35 bg-violet-400/10 text-violet-300"
} as const;

const badgeClass = "rounded-lg border px-3 py-1.5 text-xs font-medium tracking-wide";

export default function HeroFacts() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {heroFacts.map((fact) => {
        const className = `${badgeClass} ${toneClasses[fact.tone]}`;

        return fact.href ? (
          <a
            key={fact.label}
            href={fact.href}
            className={`${className} transition hover:opacity-80`}
          >
            {fact.label}
          </a>
        ) : (
          <span key={fact.label} className={className}>
            {fact.label}
          </span>
        );
      })}
    </div>
  );
}
