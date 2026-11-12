import type { Tone } from "../lib/tones";
import type { NavItem } from "../components/SiteHeader";
import type { FooterColumn } from "../components/SiteFooter";
import { school } from "../lib/school";

export const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const headerCta: NavItem = { label: "Book a school visit", to: "/contact" };

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "About", to: "/about" },
      { label: "Admissions", to: "/admissions" },
      { label: "Gallery", to: "/gallery" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [{ label: school.address }, { label: school.phone, href: school.phoneHref }, { label: school.email, href: `mailto:${school.email}` }],
  },
];

export const stats = [
  { value: "4 months", label: "Youngest age we welcome" },
  { value: "6", label: "Class levels, Creche to Upper Basic" },
  { value: "7am to 6pm", label: "Monday to Friday, office and visiting hours" },
];

export const reasons = [
  {
    title: "Caring teachers",
    text: "Every child is known by name. Our teachers pair high expectations with warmth, so pupils feel safe to ask questions and try again.",
    cardClass: "bg-brand-aqua",
    icon: "heart",
  },
  {
    title: "Strong academics",
    text: "Learning that grows with your child, from first words in the creche to confident reading and number work in the basic classes.",
    cardClass: "bg-brand-butter",
    icon: "book",
  },
  {
    title: "A safe campus",
    text: "Caring staff and careful pick-up and drop-off give parents peace of mind from the very first day.",
    cardClass: "bg-brand-mist",
    icon: "shield",
  },
] as const;

export const levels: { name: string; ages: string; photo: string; text: string; tone: Tone }[] = [
  {
    name: "Creche",
    ages: "4 to 24 months",
    photo: "Photo: Creche play time",
    text: "Gentle, attentive care for our youngest children, with songs, play and plenty of cuddles.",
    tone: "cyan",
  },
  {
    name: "Nursery",
    ages: "2 to 5 years",
    photo: "Photo: Nursery class",
    text: "Reception, Nursery 1 and Nursery 2 build early language, number sense and social skills through play.",
    tone: "yellow",
  },
  {
    name: "Primary",
    ages: "5 to 10 years",
    photo: "Photo: Primary class",
    text: "Lower Basic and Upper Basic bring together reading, numeracy and creative learning in friendly classrooms.",
    tone: "blue",
  },
];


export const homeGalleryCaptions = [
  "Classroom time",
  "Play time",
  "Story time",
  "Art class",
  "Morning assembly",
  "School event",
];

export const galleryCaptions = [
  "Classroom time",
  "Play time",
  "Story time",
  "Art class",
  "Morning assembly",
  "School event",
  "Creche corner",
  "Nursery activities",
  "Reading time",
  "Outdoor play",
  "Celebration day",
  "Pupils and teachers",
];

export const leaders = [
  { name: "[Name]", role: "[Role]", photo: "/leaders/leader-1.jpg" },
  { name: "[Name]", role: "[Role]", photo: "/leaders/leader-2.jpg" },
  { name: "[Name]", role: "[Role]", photo: "/leaders/leader-3.jpg" },
  { name: "[Name]", role: "[Role]", photo: "/leaders/leader-4.jpg" },
];

/** Describes a leader photo until the school supplies names. Replace with "Photo of <name>". */
export const leaderPhotoLabel = "Brilliant Lights school leader";

export const entryLevels = [
  { name: "Creche", ages: "4 to 24 months", classes: "Creche", cardClass: "bg-brand-aqua" },
  { name: "Nursery", ages: "2 to 5 years", classes: "Reception (2 to 3), Nursery 1 (3 to 4), Nursery 2 (4 to 5)", cardClass: "bg-brand-butter" },
  { name: "Primary", ages: "5 to 10 years", classes: "Lower Basic (5 to 7), Upper Basic (8 to 10)", cardClass: "bg-brand-mist" },
];

export const bringList = [
  "Birth certificate or age declaration",
  "Last school report, if your child has attended school before",
  "Two passport photographs",
  "Immunisation record",
];

export const admissionSteps = [
  {
    title: "Get in touch",
    text: "Call us, message us on WhatsApp or send a note through the contact page. Can't visit? Download the admission form and send it back to us.",
    cardClass: "bg-brand-butter",
    badgeClass: "bg-brand-yellow",
  },
  {
    title: "Visit and meet us",
    text: "Tour the campus, meet the teachers and let your child take a short, friendly assessment.",
    cardClass: "bg-brand-aqua",
    badgeClass: "bg-[#8fdbe6]",
  },
  {
    title: "Confirm your place",
    text: "Once your child is offered a place, complete registration at the school office and our team will guide you through the rest.",
    cardClass: "bg-brand-mist",
    badgeClass: "bg-[#a9c4ee]",
  },
];
