import Container from "@/components/Container";
import { links } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-background/95 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">Amit Kamble</h3>
          <p className="mt-2 max-w-md text-sm text-foreground/70">
            AI Engineer passionate about building agentic systems, computer vision pipelines, and scalable ML infrastructure.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-foreground/80">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground/80">Connect</h4>
          <div className="flex gap-3 text-foreground/80">
            <a href={links.github} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-background/5 inline-flex items-center justify-center">GH</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-background/5 inline-flex items-center justify-center">IN</a>
            <a href={`mailto:${links.resume}`} className="h-9 w-9 rounded-full bg-background/5 inline-flex items-center justify-center">@</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
