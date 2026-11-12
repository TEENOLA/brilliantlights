import { Link } from "react-router-dom";
import { Container } from "./Container";

type PageBannerProps = {
  /** Current page name shown in the breadcrumb. */
  crumb: string;
  title: string;
  intro: string;
};

export function PageBanner({ crumb, title, intro }: PageBannerProps) {
  return (
    <section className="bg-brand-sky">
      <Container className="pb-12 pt-10 md:pb-[60px] md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm font-bold text-brand-muted">
          <Link to="/" className="hover:text-brand-teal">
            Home
          </Link>{" "}
          / <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="mb-3 mt-2.5 motion-safe:animate-rise font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[52px]">
          {title}
        </h1>
        <p className="max-w-[620px] text-lg text-brand-muted motion-safe:animate-rise motion-safe:[animation-delay:150ms] md:text-[19px]">{intro}</p>
      </Container>
    </section>
  );
}
