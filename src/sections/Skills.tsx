"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Technical Expertise"
          description="A practical stack for AI, backend systems, security, and applied research."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-gradient-to-br from-muted/60 via-background/60 to-background/40 p-6 shadow-glow-soft"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-border/60 bg-background/60 px-4 py-2 text-sm font-semibold text-accent">
                {group.eyebrow}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/60">
                Practical tools and concepts used across the current portfolio.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground/80 shadow-glow-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
