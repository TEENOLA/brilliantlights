import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Container } from "../components/Container";
import { EnquiryForm } from "../components/EnquiryForm";
import { WhatsAppIcon } from "../components/Icons";
import { MapEmbed } from "../components/MapEmbed";
import { PageBanner } from "../components/PageBanner";
import { buttonClass } from "../lib/ui";
import { school } from "../lib/school";

const detailCards = [
  { label: "Address", value: school.address, cardClass: "bg-brand-aqua" },
  { label: "Phone", value: school.phone, cardClass: "bg-brand-butter" },
  { label: "Email", value: school.email, cardClass: "bg-brand-mist" },
  { label: "Office hours", value: school.officeHours, cardClass: "bg-brand-sky" },
];

export default function Contact() {
  return (
    <>
      <PageBanner
        crumb="Contact"
        title="Contact us"
        intro="Questions about the school, or want to see it for yourself? We would love to hear from you."
      />

      <section className="pb-10 pt-14 md:pt-[72px]">
        <Container className="flex flex-wrap items-start gap-10">
          <div className="flex min-w-[280px] flex-[1_1_360px] flex-col gap-[18px]">
            {detailCards.map((card, cardIndex) => (
              <Reveal key={card.label} lift delayMs={cardIndex * 100} className={`rounded-3xl p-6 ${card.cardClass}`}>
                <div className="mb-1 font-extrabold">{card.label}</div>
                <div className="text-brand-muted">{card.value}</div>
              </Reveal>
            ))}
            <a href={school.whatsappHref} className={buttonClass("whatsapp")}>
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          <EnquiryForm
            className="min-w-[280px] flex-[2_1_520px]"
            formName="starter-contact"
            title="Send us a message"
            intro={
              <>
                Asking about a place for your child? See{" "}
                <Link to="/admissions" className="font-extrabold text-brand-teal">
                  how admission works
                </Link>{" "}
                first.
              </>
            }
            submitLabel="Send message"
            fields={[
              { name: "name", label: "Your name", type: "text", placeholder: "Full name", required: true, half: true },
              { name: "phone", label: "Phone number", type: "tel", placeholder: "e.g. 0803 000 0000", required: true, half: true },
              { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
              {
                name: "subject",
                label: "What is this about?",
                type: "select",
                options: ["General question", "Admissions", "Book a school visit"],
                required: true,
              },
              { name: "message", label: "Your message", type: "textarea", placeholder: "How can we help?", required: true },
            ]}
          />
        </Container>
      </section>

      <section className="pb-16 pt-8 md:pb-[88px]">
        <Container>
          <MapEmbed className="h-[420px] rounded-[32px]" />
        </Container>
      </section>
    </>
  );
}
