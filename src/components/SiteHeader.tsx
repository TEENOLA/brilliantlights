import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { LogoMark } from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";
import { buttonClass } from "../lib/ui";
import { school } from "../lib/school";

export type NavItem = {
  label: string;
  to: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  cta: NavItem;
  /** Content for the right side of the thin utility bar (hours, social links). */
  utilityRight: ReactNode;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-bold transition-colors hover:text-brand-teal ${
    isActive ? "text-brand-teal underline decoration-2 underline-offset-8" : ""
  }`;

export function SiteHeader({ navItems, cta, utilityRight }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-brand-teal text-sm text-white">
        <Container className="flex flex-wrap items-center justify-between gap-x-7 gap-y-1 py-2.5">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a href={school.phoneHref}>Call us: {school.phone}</a>
            <a href={`mailto:${school.email}`} className="hidden sm:inline">
              Email: {school.email}
            </a>
          </div>
          <div className="hidden font-bold md:flex md:gap-5">{utilityRight}</div>
        </Container>
      </div>

      <header className="relative border-b border-brand-line bg-white">
        <Container className="flex items-center justify-between gap-4 py-3.5 md:py-[18px]">
          <Link to="/" className="group flex items-center gap-3">
            <LogoMark height={48} className="origin-bottom motion-safe:group-hover:animate-wiggle" />
            <span className="font-display text-lg font-extrabold tracking-[-0.01em] md:text-[21px]">
              {school.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 text-[15px] lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              <Link to={cta.to} className={buttonClass("accent", "small")}>
                {cta.label}
              </Link>
            </span>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-brand-ink lg:hidden"
            >
              {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </Container>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute inset-x-0 top-full z-40 border-b border-brand-line bg-white shadow-[0_16px_30px_rgba(16,42,80,0.12)] motion-safe:animate-drop lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-lg font-bold ${isActive ? "bg-brand-sky text-brand-teal" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to={cta.to} className={`${buttonClass("accent")} mt-2`}>
                {cta.label}
              </Link>
            </Container>
          </nav>
        )}
      </header>
    </>
  );
}
