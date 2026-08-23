import type { ReactNode } from "react";
import HtmlLang from "./html-lang";

export default function AiOlympiadLabLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="ro" className="flex flex-col gap-16">
      <HtmlLang />
      {children}
    </div>
  );
}
