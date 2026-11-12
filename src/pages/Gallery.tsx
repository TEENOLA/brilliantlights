import { Container } from "../components/Container";
import { CtaBand } from "../components/CtaBand";
import { PageBanner } from "../components/PageBanner";
import { GalleryGrid } from "../components/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <PageBanner
        crumb="Gallery"
        title="Gallery"
        intro="A look at life at Brilliant Lights: classrooms, sports, events and everyday moments."
      />

      <section className="py-14 md:py-[72px]">
        <Container>
          <GalleryGrid variant="full" />
        </Container>
      </section>

      <CtaBand
        title="Photos are good. Visiting is better."
        primary={{ label: "Book a school visit", to: "/contact" }}
        secondary={{ label: "How to apply", to: "/admissions" }}
      />
    </>
  );
}
