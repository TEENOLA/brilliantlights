import { Link } from "react-router-dom";
import { Container } from "./Container";
import { buttonClass } from "../lib/ui";
import { Reveal } from "./Reveal";

type CtaLink = {
  label: string;
  to: string;
};

type CtaBandProps = {
  title: string;
  text?: string;
  primary: CtaLink;
  secondary: CtaLink;
};

/** Yellow call-to-action band used above the footer. */
export function CtaBand({ title, text, primary, secondary }: CtaBandProps) {
  return (
    <section className="bg-brand-yellow py-12 md:py-14">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <Reveal from="left" className="min-w-[260px] flex-[1_1_420px]">
          <h2 className="font-display text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[34px]">
            {title}
          </h2>
          {text && <p className="mt-2.5 text-lg">{text}</p>}
        </Reveal>
        <Reveal from="right" delayMs={150} className="flex flex-wrap gap-3.5">
          <Link to={primary.to} className={buttonClass("dark")}>
            {primary.label}
          </Link>
          <Link to={secondary.to} className={buttonClass("outline")}>
            {secondary.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
