"use client";

import { useEffect } from "react";

export default function HtmlLang() {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.lang;
    html.lang = "ro";
    return () => {
      html.lang = previous || "en";
    };
  }, []);

  return null;
}
