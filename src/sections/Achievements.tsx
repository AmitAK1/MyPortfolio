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
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-border/60 bg-background/60 px-6 py-4 text-sm text-foreground/75"
            >
              <div className="font-medium text-foreground">{achievement.title}</div>
              {achievement.details ? (
                <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                  {achievement.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
