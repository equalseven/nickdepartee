// Single source of truth for the site.
import { EqualSevenMark, TekoaMark, FieldmarkMark, AvvayMark } from "../components/Logos";

// ---- Work (image files live in /public/work) ----
export const album = [
  "/work/album-1.jpg", "/work/album-2.jpg", "/work/album-3.jpg",
  "/work/album-4.jpg", "/work/album-5.jpg", "/work/album-6.jpg",
];
export const brand = [
  "/work/brand-1.jpg", "/work/brand-2.jpg", "/work/brand-3.jpg", "/work/brand-4.jpg",
  "/work/brand-5.jpg", "/work/brand-6.jpg", "/work/brand-7.jpg",
];
export const web = ["/work/web-1.jpg", "/work/web-2.jpg", "/work/web-3.jpg"];

// ---- Venture router ----
export const ventures = [
  { num: "01", name: "Equal Seven", Mark: EqualSevenMark, logoClass: "card-logo",
    who: "Album art and brand identity for recording artists, labels, and sync agencies.",
    href: "https://equalseven.com" },
  { num: "02", name: "Tekoa Studio", Mark: TekoaMark, logoClass: "card-logo logo-sm",
    who: "Design and brand for churches and nonprofits doing meaningful work.",
    href: "https://tekoa.studio" },
  { num: "03", name: "Fieldmark", Mark: FieldmarkMark, logoClass: "card-logo",
    who: "Creative support built for relationship-driven small businesses and entrepreneurs.",
    href: "https://fieldmark.studio" },
  { num: "04", name: "AVVAY", Mark: AvvayMark, logoClass: "card-logo",
    who: "The nationwide marketplace for booking the best film and photo locations.",
    href: "https://avvay.com" },
];
export const wildCard = {
  num: "05", title: "Something else?",
  who: "Fractional creative direction and brand strategy for founders and small businesses. Start here.",
  href: "#contact", cta: "Talk to Nick",
};

export const profiles = {
  linkedin: "https://www.linkedin.com/in/nickdepartee",
  email: "nick@equalseven.com",
};

export const clients = [
  { name: "Cameron James" },{ name: "Jeffrey Goldford" },{ name: "Daphne Willis" },
  { name: "Music With Friends Records" },{ name: "Tooth & Nail Records" },{ name: "Wendy Moten" },
  { name: "Jason Walker" },{ name: "Gideon Law Group" },{ name: "Starset" },{ name: "Andy Grammer" },
  { name: "Sun Heat" },{ name: "3 One Oh" },{ name: "Jonathan Jackson" },{ name: "AG" },
  { name: "Good Folk Mgmt" },{ name: "Boundary Run" },{ name: "Jordan Feliz" },{ name: "Club Danger" },
  { name: "VEVA Sound" },{ name: "UNSECRET" },{ name: "Sogma" },{ name: "Joshua Frerichs" },
  { name: "Matt Hammitt" },{ name: "High Valley" },{ name: "Nick Brophy" },{ name: "Matthew Zigenis" },
  { name: "Mark Cofer" },{ name: "Tinman Ent." },{ name: "Exodus Church" },{ name: "Stillman" },
  { name: "Shelly Fairchild" },{ name: "Goodness Agency" },{ name: "Tina Parol" },{ name: "Ryan Innes" },
  { name: "Franklin Vineyard Church" },{ name: "Compassion International" },{ name: "Sam Tinnesz" },
  { name: "Fearless Records" },{ name: "Lasting Media" },{ name: "Biz Colletti" },{ name: "Resin8 Music" },
  { name: "TwoSevenTwo Ent." },{ name: "Thompson Square" },{ name: "Position Music" },{ name: "Tim Halperin" },
  { name: "Ghost Machines" },{ name: "The Lending Collective" },{ name: "LÒNIS" },{ name: "Manhead Merch" },
  { name: "BEC Recordings" },{ name: "Altitude Mgmt" },{ name: "Ernie Ball" },{ name: "Natalie Taylor" },
  { name: "Conduit Church" },{ name: "Rick Seibold" },{ name: "Josh Logan" },{ name: "Bella Stine" },
  { name: "OUTSKRTS" },{ name: "Tyler Amps" },{ name: "Backline Creative" },{ name: "Aron Wright" },
  { name: "BMG" },{ name: "Katie Braswell" },{ name: "Caleb Grimm" },
  { name: "First Christian Church of Huntington Beach" },{ name: "Society of Villains" },
];
