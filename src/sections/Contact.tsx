"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { contact, links } from "@/data/portfolio";

function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6.5C3 5.12 4.12 4 5.5 4h13c1.38 0 2.5 1.12 2.5 2.5v11c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 20 3 18.88 3 17.5v-11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 7.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Connect"
          title="Let's Work Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <h4 className="mb-3 font-heading text-lg font-semibold">Contact Information</h4>
              <div className="mt-2 space-y-3">
                <div className="flex items-center gap-4 rounded-lg bg-background/5 p-4">
                  <div className="rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 text-white">
                    <IconEmail />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a className="block font-medium text-foreground/90" href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-background/5 p-4">
                  <div className="rounded-md bg-gradient-to-br from-orange-400 to-amber-500 p-3 text-white">
                    <IconLocation />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="block font-medium text-foreground/90">IIITDM Kancheepuram, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <h4 className="mb-3 font-heading text-lg font-semibold">Connect with me</h4>
              <div className="flex gap-3">
                <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/5 text-foreground/80 hover:bg-background/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.56 2.36 1.1 2.94.84.1-.67.35-1.1.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.06.36.31.69.92.69 1.86v2.76c0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
                  </svg>
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/5 text-foreground/80 hover:bg-background/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.06c.53-.96 1.82-1.98 3.74-1.98 4 0 4.74 2.63 4.74 6.05v6.29h-4v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9v-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <h4 className="mb-4 font-heading text-lg font-semibold">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-border/60 bg-background/5 px-3 py-2 text-sm text-foreground/90 outline-none focus:ring-2 focus:ring-accent/40" placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-border/60 bg-background/5 px-3 py-2 text-sm text-foreground/90 outline-none focus:ring-2 focus:ring-accent/40" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foreground/70">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="h-36 w-full rounded-md border border-border/60 bg-background/5 px-3 py-2 text-sm text-foreground/90 outline-none focus:ring-2 focus:ring-accent/40" placeholder="Tell me about your project or how we can work together..." />
                </div>

                <div className="flex items-center justify-end">
                  <button type="submit" className="inline-flex items-center gap-3 rounded-md px-6 py-3 text-sm font-semibold text-background gradient-btn shadow-[0_14px_50px_rgba(99,102,241,0.18)] hover:-translate-y-0.5">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2l-7 20 3-7 7-7-3-6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
