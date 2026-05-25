import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/progress", label: "Progress" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-bold">
          Learning.dev
        </Link>

        <div className="flex gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}