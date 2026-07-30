import Image from "next/image";
import Reveal from "../components/Reveal";
import { ventures, wildCard, acts, profiles } from "../lib/data";

export default function Page() {
  return (
    <>
      <nav className="wrap">
        <div className="mark">Nick de Partee</div>
        <a className="cta" href="#contact">Get in touch</a>
      </nav>

      {/* HERO */}
      <header className="hero wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="label">Nashville, TN</span>
              <span className="label accent">Creative Direction &amp; Brand</span>
            </div>
            <h1>
              <span className="nm">Nick de Partee,</span>
              <span className="title">Creative Director &amp; Brand Consultant</span>
            </h1>
            <p className="thesis">Brand and creative direction for people who win on trust.</p>
            <div className="meta">
              <div><span className="label">Founder</span><span className="v">Equal Seven Creative</span></div>
              <div><span className="label">Co-Founder &amp; CMO</span><span className="v">AVVAY</span></div>
              <div><span className="label">Background</span><span className="v">Musician · Designer · Builder</span></div>
            </div>
          </div>
          <figure className="hero-photo">
            <Image
              src="/nick.jpg"
              alt="Nick de Partee, photographed against a graffiti wall"
              width={1000}
              height={1334}
              priority
            />
          </figure>
        </div>
      </header>

      <hr className="rule wrap" style={{ border: 0, borderTop: "1px solid var(--hair)" }} />

      {/* STATEMENT */}
      <section className="statement wrap">
        <Reveal as="div" className="grid">
          <span className="label">The through-line</span>
          <p>
            I help people become the{" "}
            <span className="accent">obvious choice</span>.
          </p>
        </Reveal>
      </section>

      {/* ROUTER */}
      <Reveal className="router wrap" id="work-with">
        <div className="head">
          <h2>Find the right fit.</h2>
          <span className="label">Five ways in&nbsp;&nbsp;&rarr;</span>
        </div>
        <div className="cards">
          {ventures.map((v) => {
            const Mark = v.Mark;
            return (
              <a className="card" href={v.href} key={v.num}>
                <span className="num">{v.num}</span>
                <h3>
                  <span className="vh">{v.name}</span>
                  <Mark className={v.logoClass} />
                </h3>
                <p className="who">{v.who}</p>
                <span className="go">{v.cta} <span className="arrow">→</span></span>
              </a>
            );
          })}
          <a className="card wild" href={wildCard.href}>
            <span className="num">{wildCard.num}</span>
            <h3>{wildCard.title}</h3>
            <p className="who">{wildCard.who}</p>
            <span className="go">{wildCard.cta} <span className="arrow">→</span></span>
          </a>
        </div>
      </Reveal>

      {/* WORK / THREE ACTS */}
      <section className="work wrap">
        <span className="label">Selected history — three acts</span>
        {acts.map((act) => (
          <Reveal as="div" className="act" key={act.n}>
            <div className="actlabel">
              <span className="n">{act.n}</span>
              <h3>{act.title}</h3>
            </div>
            <div className="roles">
              {act.roles.map((r, i) => (
                <div className="role" key={i}>
                  <div>
                    <div className="r-title">{r.title}</div>
                    <div className="r-org">{r.org}</div>
                  </div>
                  <div className="r-year">{r.year}</div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      {/* CONTACT */}
      <section className="contact wrap" id="contact">
        <span className="label">Start a conversation</span>
        <h2 style={{ marginTop: 20 }}>
          <a href={`mailto:${profiles.email}`}>{profiles.email}</a>
        </h2>
        <div className="links">
          <a href={profiles.linkedin}>LinkedIn</a>
          <a href="https://equalseven.com">Equal Seven</a>
          <a href="https://tekoa.studio">Tekoa</a>
          <a href="https://fieldmark.studio">Fieldmark</a>
          <a href="https://avvay.com">AVVAY</a>
        </div>
      </section>

      <hr className="rule wrap" style={{ border: 0, borderTop: "1px solid var(--hair)" }} />
      <footer className="wrap">
        <span className="label">Nick de Partee © 2026</span>
        <span className="label">Nashville · Spring Hill, TN</span>
      </footer>
    </>
  );
}
