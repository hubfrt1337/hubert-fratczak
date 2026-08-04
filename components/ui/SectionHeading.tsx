import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow ? (
        <p className={dark ? "eyebrow text-accent-300" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ink-300" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
