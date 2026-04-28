import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <ul className="flex items-center gap-5 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="transition hover:text-foreground" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
