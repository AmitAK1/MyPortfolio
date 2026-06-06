import Container from "@/components/Container";
import { links } from "@/data/portfolio";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <Container className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight">
            <span className="font-heading text-gradient">AK</span>
          </span>
        </div>
        <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition hover:text-foreground"
            >
              <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <a
            href={links.github}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/70 transition hover:border-accent hover:text-foreground"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.56 2.36 1.1 2.94.84.1-.67.35-1.1.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.06.36.31.69.92.69 1.86v2.76c0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a
            href={links.linkedin}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/70 transition hover:border-accent hover:text-foreground"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.06c.53-.96 1.82-1.98 3.74-1.98 4 0 4.74 2.63 4.74 6.05v6.29h-4v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9v-12z" />
            </svg>
          </a>
          <a
            href={links.resume}
            className="ml-3 hidden rounded-md px-4 py-2 text-sm font-semibold text-background gradient-btn shadow-[0_12px_40px_rgba(96,165,250,0.18)] md:inline-block"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
