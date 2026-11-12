import { Outlet, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { school } from "./lib/school";
import { footerColumns, headerCta, navItems } from "./data/content";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="absolute -top-20 left-4 z-50 rounded-full bg-brand-ink px-4 py-2 font-bold text-white focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader
        navItems={navItems}
        cta={headerCta}
        utilityRight={<span>{school.officeHoursShort}</span>}
      />
      <main id="main" key={pathname} className="motion-safe:animate-page-in">
        <Outlet />
      </main>
      <SiteFooter columns={footerColumns} />
    </>
  );
}
