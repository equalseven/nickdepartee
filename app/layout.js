import "./globals.css";
import { profiles, ventures } from "../lib/data";

const SITE = "https://nickdepartee.com";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Nick de Partee — Creative Director & Brand Consultant",
  description:
    "Nick de Partee is a creative director and brand consultant with two decades in music and entertainment, now building brand and design for trust-driven businesses — law firms, mortgage advisors, churches, artists, and small businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nick de Partee — Creative Director & Brand Consultant",
    description:
      "Design and story are how you stop competing on price and start getting chosen. Two decades of it, from album covers to law firms.",
    url: SITE,
    siteName: "Nick de Partee",
    type: "website",
  },
};

// Person entity — the SEO heavy-lifter. Canonical name + variants + sameAs.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nick de Partee",
  alternateName: ["Nick De Partee", "Nick Departee"],
  jobTitle: "Creative Director & Brand Consultant",
  description:
    "Creative director and brand consultant with two decades in music and entertainment, building brand and design for trust-driven businesses.",
  url: SITE,
  address: { "@type": "PostalAddress", addressRegion: "TN", addressCountry: "US" },
  sameAs: [profiles.linkedin, ...ventures.map((v) => v.href)],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
