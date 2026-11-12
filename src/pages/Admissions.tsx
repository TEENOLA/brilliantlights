import { Link } from "react-router-dom";
import { AdmissionFormDownload } from "../components/AdmissionFormDownload";
import { Reveal } from "../components/Reveal";
import { Container } from "../components/Container";
import { WhatsAppIcon } from "../components/Icons";
import { PageBanner } from "../components/PageBanner";
import { buttonClass } from "../lib/ui";
import { school } from "../lib/school";
import { admissionSteps, bringList, entryLevels } from "../data/content";

export default function Admissions() {
  return (
    <>
      <PageBanner
        crumb="Admissions"
        title="Admissions"
        intro="We welcome children from 4 months to 10 years, from the creche to Upper Basic. Here is how admission works and what to bring."
      />

      <section className="pb-6 pt-14 md:pt-[72px]">
        <Container>
          <h2 className="mb-7 font-display text-[30px] font-extrabold leading-[1.1] md:text-[34px]">How admission works</h2>
          <ol className="flex flex-wrap gap-5">
            {admissionSteps.map((step, index) => (
              <Reveal as="li" key={step.title} lift delayMs={index * 120} className={`min-w-[240px] flex-[1_1_240px] rounded-3xl p-[26px] ${step.cardClass}`}>
                <div
                  aria-hidden="true"
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-xl font-extrabold ${step.badgeClass}`}
                >
                  {index + 1}
                </div>
                <h3 className="mb-1.5 mt-3.5 font-display text-[21px] font-bold">{step.title}</h3>
                <p className="text-[15px] text-brand-muted">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pb-20 pt-14 md:pb-24">
        <Container className="flex flex-wrap items-start gap-10">
          <div className="flex min-w-[280px] flex-[2_1_560px] flex-col gap-7">
            <AdmissionFormDownload layout="wide" />

            <div>
              <h2 className="mb-[18px] font-display text-[28px] font-extrabold leading-[1.1] md:text-[30px]">Classes and entry ages</h2>
              <div className="flex flex-wrap gap-4">
                {entryLevels.map((level, levelIndex) => (
                  <Reveal key={level.name} lift delayMs={levelIndex * 120} className={`min-w-[200px] flex-[1_1_200px] rounded-3xl p-6 ${level.cardClass}`}>
                    <div className="font-display text-[22px] font-extrabold">{level.name}</div>
                    <div className="mt-1 font-bold text-brand-teal">{level.ages}</div>
                    <div className="mt-1.5 text-[15px] text-brand-muted">{level.classes}</div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-brand-sky p-6 md:p-8">
              <h3 className="mb-3 font-display text-2xl font-bold">What to bring</h3>
              <ul className="flex list-disc flex-col gap-1.5 pl-5 text-brand-muted">
                {bringList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex min-w-[280px] flex-[1_1_320px] flex-col gap-6">
            <div className="rounded-[28px] bg-brand-ink p-[30px] text-white">
              <h3 className="mb-2 font-display text-2xl font-bold">Ready to apply?</h3>
              <p className="mb-[18px] text-[#d6e3f5]">
                Speak to our admissions office. We are happy to answer questions and arrange a tour.
              </p>
              <a href={school.phoneHref} className="mb-1 block font-bold">
                {school.phone}
              </a>
              <div className="mb-[18px] text-[15px] text-[#d6e3f5]">{school.officeHoursShort}</div>
              <a href={school.whatsappHref} className={`${buttonClass("whatsapp", "small")} w-full`}>
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="mt-3 block rounded-full border-2 border-white px-[22px] py-[11px] text-center font-extrabold hover:bg-white hover:text-brand-ink"
              >
                Send us a message
              </Link>
            </div>
            <Link to="/about" className="font-extrabold text-brand-teal">
              Learn more about the school →
            </Link>
          </aside>
        </Container>
      </section>
    </>
  );
}
