import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="Core technologies powering my AI and backend builds."
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-foreground/80 shadow-glow-soft"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
