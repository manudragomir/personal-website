import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manu Dragomir",
  description: "Personal portfolio and AI lessons."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
