type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm text-foreground/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
