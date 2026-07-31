// Single source of truth for the venture router and résumé.
// Adding Cover Supply, Wandering Man, or Partee Thrift later = one entry here.

import { EqualSevenMark, TekoaMark, FieldmarkMark, AvvayMark } from "../components/Logos";

export const ventures = [
  {
    num: "01",
    name: "Equal Seven",
    Mark: EqualSevenMark,
    logoClass: "card-logo",
    who: "Album art and brand identity for recording artists, labels, and sync agencies.",
    href: "https://equalseven.com",
    cta: "Visit",
  },
  {
    num: "02",
    name: "Tekoa Studio",
    Mark: TekoaMark,
    logoClass: "card-logo card-logo--sm",
    who: "Design and brand for churches and nonprofits doing meaningful work.",
    href: "https://tekoa.studio",
    cta: "Visit",
  },
  {
    num: "03",
    name: "Fieldmark",
    Mark: FieldmarkMark,
    logoClass: "card-logo",
    who: "Creative support built for relationship-driven small businesses and entrepreneurs.",
    href: "https://fieldmark.studio",
    cta: "Visit",
  },
  {
    num: "04",
    name: "AVVAY",
    Mark: AvvayMark,
    logoClass: "card-logo",
    who: "The nationwide marketplace for booking the best film and photo locations.",
    href: "https://avvay.com",
    cta: "Visit",
  },
];

// The catch-all router card (styled dark).
export const wildCard = {
  num: "05",
  title: "Something else?",
  who: "Fractional creative direction and brand strategy for founders and small businesses. Start here.",
  href: "#contact",
  cta: "Talk to Nick",
};

// Logo / credit wall. Placeholders are real affiliations — swap in the
// marquee artist, label, and brand names you want featured (add `logo`
// paths later to render image marks instead of text).
export const clients = [
  { name: "Kutless" },
  { name: "Capitol CMG Publishing" },
  { name: "VEVA Sound" },
  { name: "Techstars" },
  { name: "Gideon Law Group" },
  { name: "The Lending Collective" },
];

export const acts = [
  {
    n: "I",
    title: "The Artist",
    roles: [
      { title: "Touring Guitarist & Songwriter", org: "Kutless", year: "2007–2014" },
      { title: "Staff Songwriter", org: "Capitol CMG Publishing", year: "2013–2015" },
    ],
  },
  {
    n: "II",
    title: "The Founder",
    roles: [
      { title: "Founder & Creative Director", org: "Equal Seven Creative", year: "2014–Now" },
      { title: "Founder", org: "Tekoa Studio · churches & nonprofits", year: "Active" },
      { title: "Founder", org: "Fieldmark™ · small business & entrepreneurs", year: "Active" },
      { title: "Co-Founder & CMO", org: "AVVAY · Techstars Boulder ’18", year: "2016–Now" },
    ],
  },
  {
    n: "III",
    title: "The Creative Leader",
    roles: [
      { title: "Head of Creative", org: "Wandering Man Music Group", year: "2026–Now" },
      { title: "Brand Manager", org: "The Lending Collective", year: "Current" },
      { title: "Director of Marketing", org: "Gideon Law Group", year: "2025–Now" },
      { title: "Creative Consultant", org: "VEVA Sound", year: "2022–2023" },
    ],
  },
];

// Used for both the footer links and the schema sameAs array.
export const profiles = {
  linkedin: "https://www.linkedin.com/in/nickdepartee",
  ventures: ventures.map((v) => v.href),
  email: "nick@equalseven.com",
};
