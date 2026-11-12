import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { GalleryGrid } from "../components/GalleryGrid";
import { Photo } from "../components/Photo";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { BookIcon, HeartIcon, ShieldIcon, SparkleIcon, WhatsAppIcon } from "../components/Icons";
import { Reveal } from "../components/Reveal";
import { MapEmbed } from "../components/MapEmbed";
import { buttonClass, eyebrowClass, sectionHeadingClass } from "../lib/ui";
import { school } from "../lib/school";
import { toneAt } from "../lib/tones";
import { leaderPhotoLabel, leaders, levels, reasons, stats } from "../data/content";

const reasonIcons = {
  heart: HeartIcon,
  book: BookIcon,
  shield: ShieldIcon,
};

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-brand-sky">
        <Container className="flex flex-wrap items-center gap-12 pb-14 pt-10 md:pb-[84px] md:pt-[72px]">
          <div className="flex min-w-[280px] flex-[1_1_480px] flex-col items-start gap-6">
            <span className="rounded-full border border-[#f4d35e] bg-brand-butter px-4 py-1.5 text-sm font-bold motion-safe:animate-rise">
              Ages 4 months to 10 years
            </span>
            <h1 className="font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] motion-safe:animate-rise motion-safe:[animation-delay:120ms] md:text-[62px]">
              A happy place to learn, grow and shine.
            </h1>
            <p className="max-w-[520px] text-[19px] text-brand-muted motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
              Brilliant Lights Great School in Agege, Lagos welcomes children from the creche to Upper Basic, in a warm
              place where kids grow happy.
            </p>
            <div className="flex flex-wrap gap-3.5 motion-safe:animate-rise motion-safe:[animation-delay:360ms]">
              <Link to="/admissions" className={buttonClass("primary")}>
                How to apply
              </Link>
              <a href="#visit" className={buttonClass("outline")}>
                Visit our school
              </a>
            </div>
          </div>
          <div className="relative min-w-[280px] flex-[1_1_420px] motion-safe:animate-rise motion-safe:[animation-delay:200ms]">
            <div className="absolute -right-[30px] -top-5 hidden h-[150px] w-[150px] rounded-full bg-brand-yellow motion-safe:animate-float md:block" />
            <div className="absolute -bottom-6 left-2.5 hidden h-[110px] w-[110px] rounded-full bg-brand-cyan motion-safe:animate-float-slow md:block" />
            <SparkleIcon size={34} className="absolute -left-3 top-2 hidden text-brand-yellow motion-safe:animate-twinkle md:block" />
            <SparkleIcon size={24} className="absolute -top-8 left-1/3 hidden text-brand-cyan motion-safe:animate-twinkle motion-safe:[animation-delay:1s] md:block" />
            <SparkleIcon size={22} className="absolute -right-8 bottom-24 hidden text-brand-yellow motion-safe:animate-twinkle motion-safe:[animation-delay:2s] md:block" />
            <Photo
              label="Photo: Pupils at play"
              ratio="4/3"
              shape="soft"
              className="relative md:aspect-auto md:h-[440px]"
            />
            <div className="relative mt-4 w-fit rounded-[20px] bg-white px-[22px] py-4 shadow-[0_10px_30px_rgba(16,42,80,0.16)] motion-safe:animate-float-slow md:absolute md:-left-4 md:bottom-10 md:mt-0">
              <div className="text-[13px] font-bold text-brand-muted">Office and visiting hours</div>
              <div className="font-display text-[22px] font-extrabold">{school.officeHoursShort}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-ink text-white">
        <Container className="grid grid-cols-1 gap-6 py-9 sm:grid-cols-3">
          {stats.map((stat, statIndex) => (
            <Reveal key={stat.label} from="scale" delayMs={statIndex * 120} className="text-center">
              <div className="font-display text-[34px] font-extrabold text-brand-yellow md:text-[40px]">{stat.value}</div>
              <div className="font-semibold">{stat.label}</div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-16 pt-14 md:pb-[72px] md:pt-[88px]">
        <Container>
          <Reveal className="mb-10 max-w-[640px]">
            <div className={eyebrowClass}>WHY FAMILIES CHOOSE US</div>
            <h2 className={`${sectionHeadingClass} mt-2`}>Where every child feels seen</h2>
          </Reveal>
          <div className="flex flex-wrap gap-6">
            {reasons.map((reason, reasonIndex) => {
              const ReasonIcon = reasonIcons[reason.icon];
              return (
                <Reveal
                  key={reason.title}
                  lift
                  delayMs={reasonIndex * 120}
                  className={`flex min-w-[260px] flex-[1_1_300px] flex-col gap-3.5 rounded-[28px] p-8 ${reason.cardClass}`}
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white text-brand-teal">
                    <ReasonIcon />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{reason.title}</h3>
                  <p className="text-brand-muted">{reason.text}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-sky py-16 md:py-20">
        <Container>
          <Reveal className="mb-9">
            <div className={eyebrowClass}>LEARNING AT BRILLIANT LIGHTS</div>
            <h2 className={`${sectionHeadingClass} mt-2`}>Learning for every stage</h2>
          </Reveal>
          <div className="flex flex-wrap gap-6">
            {levels.map((level, levelIndex) => (
              <Reveal
                as="article"
                key={level.name}
                lift
                delayMs={levelIndex * 120}
                className="flex min-w-[260px] flex-[1_1_300px] flex-col gap-3 rounded-[28px] bg-white p-7 shadow-[0_6px_24px_rgba(16,42,80,0.08)]"
              >
                <Photo label={level.photo} ratio="16/9" tone={level.tone} />
                <h3 className="font-display text-2xl font-bold">{level.name}</h3>
                <div className="font-bold text-brand-teal">{level.ages}</div>
                <p className="text-brand-muted">{level.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <UpcomingEvents />

      <section className="bg-brand-cream py-16 md:py-20">
        <Container>
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className={eyebrowClass}>GALLERY</div>
              <h2 className={`${sectionHeadingClass} mt-2`}>Life at Brilliant Lights Great School</h2>
            </div>
            <Link to="/gallery" className="font-extrabold text-brand-teal">
              Open the gallery →
            </Link>
          </Reveal>
          <GalleryGrid variant="preview" />
        </Container>
      </section>

      <section className="pb-12 pt-14 md:pb-[72px] md:pt-[88px]">
        <Container>
          <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className={eyebrowClass}>OUR LEADERSHIP</div>
              <h2 className={`${sectionHeadingClass} mt-2`}>Meet the people behind the school</h2>
            </div>
            <Link to="/about" className="font-extrabold text-brand-teal">
              More about us →
            </Link>
          </Reveal>
          <div className="flex flex-wrap gap-6">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delayMs={index * 100} className="min-w-[200px] flex-[1_1_220px] text-center">
                <Photo
                  label={leaderPhotoLabel}
                  src={leader.photo}
                  ratio="1/1"
                  shape="circle"
                  tone={toneAt(index)}
                  className="mx-auto mb-3.5 w-40!"
                />
                <div className="font-display text-xl font-bold">{leader.name}</div>
                <div className="text-brand-muted">{leader.role}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-yellow py-14 md:py-16">
        <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <Reveal from="left" className="min-w-[260px] flex-[1_1_480px]">
            <h2 className={sectionHeadingClass}>Ready to join the Brilliant Lights family?</h2>
            <p className="mt-2.5 text-lg">
              Call us, message us on WhatsApp or come in for a tour. We reply within two working days.
            </p>
          </Reveal>
          <Reveal from="right" delayMs={150} className="flex flex-wrap gap-3.5">
            <Link to="/admissions" className={buttonClass("dark")}>
              How to apply
            </Link>
            <Link to="/contact" className={buttonClass("outline")}>
              Book a school visit
            </Link>
          </Reveal>
        </Container>
      </section>

      <section id="visit" className="py-16 md:py-[88px]">
        <Container className="flex flex-wrap gap-10">
          <Reveal from="left" className="flex min-w-[280px] flex-[1_1_380px] flex-col items-start gap-[18px]">
            <div className={eyebrowClass}>VISIT US</div>
            <h2 className={sectionHeadingClass}>Come and see our campus</h2>
            <dl className="flex flex-col gap-2 text-brand-muted">
              <div>
                <dt className="inline font-bold text-brand-ink">Address: </dt>
                <dd className="inline">{school.address}</dd>
              </div>
              <div>
                <dt className="inline font-bold text-brand-ink">Phone: </dt>
                <dd className="inline">{school.phone}</dd>
              </div>
              <div>
                <dt className="inline font-bold text-brand-ink">Email: </dt>
                <dd className="inline">{school.email}</dd>
              </div>
              <div>
                <dt className="inline font-bold text-brand-ink">Office hours: </dt>
                <dd className="inline">{school.officeHours}</dd>
              </div>
            </dl>
            <a href={school.whatsappHref} className={buttonClass("whatsapp")}>
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Reveal>
          <Reveal from="right" delayMs={150} className="flex min-h-[340px] min-w-[280px] flex-[1_1_480px]">
            <MapEmbed className="min-h-[340px] w-full" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
