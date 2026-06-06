"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { links, projects } from "@/data/portfolio";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);
  const spotlightProject = projects[4];

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured"
          title="Projects"
          description="Selected work across civic AI, computer vision, agentic systems, and applied ML."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-gradient-to-br from-muted/70 via-muted/50 to-background/60 p-6 shadow-glow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_70px_-30px_rgba(56,189,248,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/80">
                    {project.status}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  Featured
                </div>
              </div>

              <p className="text-sm leading-6 text-foreground/75">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-foreground/75">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-accent/40 hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        {spotlightProject ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-6 rounded-3xl border border-border/60 bg-gradient-to-r from-accent/10 via-muted/60 to-background/60 p-6 shadow-glow-soft lg:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/80">
                  Spotlight project
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground lg:text-3xl">
                  {spotlightProject.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  {spotlightProject.summary}
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-foreground/75 lg:grid-cols-2">
                  {spotlightProject.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col lg:items-end">
                {spotlightProject.live ? (
                  <a
                    href={spotlightProject.live}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                ) : null}
                <a
                  href={spotlightProject.github}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-accent/40 hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub ↗
                </a>
                <a
                  href={links.github}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore all projects ↗
                </a>
              </div>
            </div>
          </motion.article>
        ) : null}
      </Container>
    </section>
  );
}
