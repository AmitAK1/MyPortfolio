"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { hero, links } from "@/data/portfolio";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function Hero() {
  const [headlineStart, headlineEnd] = hero.headline.split("Building");

  return (
    <section className="relative min-h-[90vh] py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="flex flex-col gap-6"
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {hero.badge}
          </span>
          <h1 className="font-heading text-[48px] leading-[0.98] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[88px] font-extrabold tracking-tight">
            <span className="block text-foreground">Amit Kamble —</span>
            <span className="block gradient-text">Building LLM, CV, and Agentic Systems.</span>
          </h1>
          <p className="max-w-xl text-base text-foreground/70 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={links.resume}
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-background shadow-[0_18px_50px_rgba(96,165,250,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(96,165,250,0.45)]"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              href={links.github}
              className="rounded-full border border-border/80 px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-accent hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span>{hero.location}</span>
            <span>Open to AI roles</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -top-12 left-12 z-30 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available
            </div>

            <div className="relative flex items-center justify-center">
              <div className="gradient-ring rounded-full p-1">
                <div className="rounded-full bg-card p-4">
                  <div className="h-[320px] w-[320px] overflow-hidden rounded-full md:h-[360px] md:w-[360px]">
                    <Image
                      src="/assets/profile.png"
                      alt="Amit Kamble"
                      width={360}
                      height={360}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-24 flex flex-col gap-4">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-orange-400 shadow-md" />
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500 shadow-md" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
