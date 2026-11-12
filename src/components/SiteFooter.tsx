import { Link } from "react-router-dom";
import { Container } from "./Container";
import { LogoMark } from "./Logo";
import { school } from "../lib/school";

export type FooterLink = {
  label: string;
  /** Internal route. */
  to?: string;
  /** External link. */
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SiteFooterProps = {
  columns: FooterColumn[];
};

function FooterItem({ link }: { link: FooterLink }) {
  if (link.to) {
    return (
      <Link to={link.to} className="hover:text-white">
        {link.label}
      </Link>
    );
  }
  if (link.href) {
    return (
      <a href={link.href} className="hover:text-white">
        {link.label}
      </a>
    );
  }
  return <span>{link.label}</span>;
}

export function SiteFooter({ columns }: SiteFooterProps) {
  return (
    <footer className="bg-brand-navy pb-7 pt-12 text-[#d6e3f5] md:pt-16">
      <Container>
        <div className="flex flex-wrap gap-10">
          <div className="min-w-[240px] flex-[2_1_280px]">
            <div className="mb-3 flex items-center gap-3">
              <LogoMark height={52} />
              <span className="font-display text-2xl font-extrabold text-white">{school.name}</span>
            </div>
            <p className="max-w-[340px]">{school.tagline}</p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="flex min-w-[160px] flex-[1_1_160px] flex-col gap-2">
              <div className="font-extrabold text-white">{column.title}</div>
              {column.links.map((link) => (
                <FooterItem key={link.label} link={link} />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-brand-ink-line pt-5 text-sm">
          <span>
            © {school.year} {school.name}. All rights reserved.
          </span>
          <span>Website by {school.builder}</span>
        </div>
      </Container>
    </footer>
  );
}
