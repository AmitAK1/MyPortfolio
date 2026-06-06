import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements"
          description="Highlights from competitive programming and AI work."
        />
        <div className="grid gap-4">
          {achievements.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/60 bg-background/60 px-6 py-4 text-sm text-foreground/75"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
