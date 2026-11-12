import { Container } from "../components/Container";
import { CtaBand } from "../components/CtaBand";
import { PageBanner } from "../components/PageBanner";
import { Photo } from "../components/Photo";
import { cardHeadingClass, eyebrowClass, sectionHeadingClass } from "../lib/ui";
import { Reveal } from "../components/Reveal";
import { toneAt } from "../lib/tones";
import { leaderPhotoLabel, leaders } from "../data/content";

const principles = [
  {
    title: "Our mission",
    text: "To provide quality, child-centred education in a safe, loving, and stimulating environment where children learn, explore, build good character, and grow happily into confident and responsible individuals.",
    cardClass: "bg-brand-aqua",
  },
  {
    title: "Our vision",
    text: "To be a leading school where every child shines brightly, grows happily, and develops the knowledge, skills, and values needed for a successful future.",
    cardClass: "bg-brand-butter",
  },
];

export default function About() {
  return (
    <>
      <PageBanner
        crumb="About"
        title="About Brilliant Lights Great School"
        intro="A caring school in Agege where kids grow happy."
      />

      <section className="pb-12 pt-14 md:pt-20">
        <Container className="flex flex-wrap items-center gap-12">
          <div className="flex min-w-[280px] flex-[1_1_440px] flex-col gap-4">
            <div className={eyebrowClass}>OUR STORY</div>
            <h2 className={sectionHeadingClass}>How Brilliant Lights began</h2>
            <p className="text-brand-muted">
              Brilliant Lights began in June 2016 as a creche in Agege, a safe and loving place for the youngest children to learn, play and grow happy.
            </p>
            <p className="text-brand-muted">
              Today, Brilliant Lights Great School welcomes children from 4 months to 10 years, from the creche through nursery to primary. Our promise is the same as ever: where kids grow happy. Parents are always welcome to visit, Monday to Friday, 7am to 6pm.
            </p>
          </div>
          <div className="min-w-[280px] flex-[1_1_440px]">
            <Photo label="Photo: The Brilliant Lights campus" ratio="4/3" shape="soft" />
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-8 md:pb-20">
        <Container className="flex flex-wrap gap-6">
          {principles.map((principle, principleIndex) => (
            <Reveal
              key={principle.title}
              lift
              delayMs={principleIndex * 120}
              className={`min-w-[260px] flex-[1_1_300px] rounded-[28px] p-8 ${principle.cardClass}`}
            >
              <h3 className={`${cardHeadingClass} mb-2.5`}>{principle.title}</h3>
              <p className="text-brand-muted">{principle.text}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-brand-cream py-16 md:py-20">
        <Container className="flex flex-wrap items-center gap-12">
          <div className="w-[300px] max-w-full flex-[0_1_300px]">
            <Photo label="Photo of the proprietress" src="/leaders/proprietress.jpg" ratio="1/1" shape="circle" tone="yellow" />
          </div>
          <div className="flex min-w-[280px] flex-[1_1_440px] flex-col gap-3.5">
            <div className={eyebrowClass}>A WORD FROM THE HEAD</div>
            <h2 className="font-display text-[30px] font-extrabold leading-[1.15] md:text-[34px]">Welcome to our school family</h2>
            <p className="text-brand-muted">
              [WELCOME MESSAGE: a short note from the head or proprietor inviting parents to visit.]
            </p>
            <div className="font-extrabold">
              [Name], <span className="font-semibold text-brand-muted">Proprietress</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-14 md:pt-[88px]">
        <Container>
          <div className={eyebrowClass}>LEADERSHIP</div>
          <h2 className={`${sectionHeadingClass} mb-7 mt-2`}>The people who lead us</h2>
          <div className="flex flex-wrap gap-6">
            {leaders.map((leader, index) => (
              <Reveal
                as="article"
                key={leader.name}
                lift
                delayMs={index * 100}
                className="flex min-w-[220px] flex-[1_1_240px] flex-col gap-2 rounded-[28px] border border-brand-line bg-white p-6 shadow-[0_6px_24px_rgba(16,42,80,0.08)]"
              >
                <Photo label={leaderPhotoLabel} src={leader.photo} ratio="1/1" tone={toneAt(index)} />
                <h3 className="mt-2 font-display text-[22px] font-bold">{leader.name}</h3>
                <div className="font-bold text-brand-teal">{leader.role}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Come and meet us in person"
        primary={{ label: "Book a school visit", to: "/contact" }}
        secondary={{ label: "How to apply", to: "/admissions" }}
      />
    </>
  );
}
