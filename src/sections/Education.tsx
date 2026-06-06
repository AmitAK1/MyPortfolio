import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          description="Solid CS fundamentals with an AI-first curriculum."
        />
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-2xl border border-border/60 bg-muted/60 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    {item.school}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.degree}</p>
                </div>
                <span className="text-sm text-foreground/60">
                  {item.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
