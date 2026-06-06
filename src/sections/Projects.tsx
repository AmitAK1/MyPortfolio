"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured"
          title="Projects"
          description="Selected work across multimodal AI, agentic workflows, and applied ML systems."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col gap-6 rounded-2xl border border-border/60 bg-muted/60 p-6 shadow-glow-soft"
            >
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70">
                  {project.tech.join(" • ")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                  {project.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                className="text-sm font-semibold text-accent transition hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
