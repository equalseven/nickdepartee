/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import { ventures, wildCard, album, brand, web, clients, profiles } from "../lib/data";

export default function Page() {
  return (
    <>
      <nav className="wrap">
        <div className="mark">Nick de Partee</div>
        <a className="cta" href="#contact">Work With Me</a>
      </nav>

      <Hero />

      <section className="statement wrap">
        <p>I help people become the obvious choice.</p>
      </section>

      {/* INTRO */}
      <section className="intro wrap">
        <div className="igrid">
          <div>
            <h2>
              Nick de Partee
              <span className="title">Creative Director &amp; Brand Consultant</span>
            </h2>
            <p className="thesis">Brand and creative direction for people who win on trust.</p>
            <p className="bio">
              A touring guitarist and songwriter turned designer and creative director — two decades
              running from album covers and stage design to branding for artists, labels, law firms,
              churches, and small businesses across the country.
            </p>
          </div>
          <figure>
            <img src="/nick.jpg" alt="Nick de Partee" />
          </figure>
        </div>
      </section>

      {/* WORK */}
      <section className="work wrap">
        <div className="head">
          <h2>Selected Work</h2>
          <span className="label">Album art · brand · web</span>
        </div>

        <div className="sublabel">Album Art</div>
        <div className="wgrid">
          {album.map((src, i) => (
            <div className="tile" key={src}>
              <img src={src} alt={`Album cover ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="sublabel" style={{ marginTop: "clamp(30px,4vh,48px)" }}>Brand &amp; Design</div>
        <div className="bd-masonry">
          {brand.map((src, i) => (
            <img src={src} alt={`Brand and design work ${i + 1}`} key={src} loading="lazy" />
          ))}
        </div>

        <div className="sublabel" style={{ marginTop: "clamp(30px,4vh,48px)" }}>Web Design</div>
        <div className="web-grid">
          {web.map((src, i) => (
            <img src={src} alt={`Website design ${i + 1}`} key={src} loading="lazy" />
          ))}
        </div>
      </section>

      {/* WORK WITH ME */}
      <section className="router wrap">
        <div className="head">
          <h2>Work With Me</h2>
          <span className="label">Five ways in &nbsp;&rarr;</span>
        </div>
        <div className="cards">
          {ventures.map((v) => {
            const Mark = v.Mark;
            return (
              <a className="card" href={v.href} key={v.num}>
                <span className="num">{v.num}</span>
                <div className="lg"><Mark className={v.logoClass} /></div>
                <p className="who">{v.who}</p>
                <span className="go">Visit →</span>
              </a>
            );
          })}
          <a className="card wild" href={wildCard.href}>
            <span className="num">{wildCard.num}</span>
            <h3>{wildCard.title}</h3>
            <p className="who">{wildCard.who}</p>
            <span className="go">{wildCard.cta} →</span>
          </a>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients wrap">
        <div className="head">
          <h2>Selected work with</h2>
          <span className="label">{clients.length} clients &amp; collaborators</span>
        </div>
        <div className="cwrap">
          {clients.map((c) => (
            <span className="chip" key={c.name}>{c.name}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact wrap" id="contact">
        <span className="label">Start a conversation</span>
        <h2 style={{ marginTop: 18 }}>
          <a href={`mailto:${profiles.email}`}>{profiles.email}</a>
        </h2>
      </section>

      <footer className="wrap">
        <span className="label">Nick de Partee © 2026</span>
        <span className="label">Nashville · Spring Hill, TN</span>
      </footer>
    </>
  );
}
