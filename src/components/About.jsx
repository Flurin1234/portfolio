import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Über mich</p>
          <h2 className="section-title">Wer ich bin</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="photo-placeholder">Foto</div>
          </Reveal>

          <Reveal delay={0.2} className="about-text">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="about-facts">
              <div>
                <strong>Standort</strong>
                <span>{profile.location}</span>
              </div>
              <div>
                <strong>Fokus</strong>
                <span>{profile.focus}</span>
              </div>
              {profile.availability && (
                <div>
                  <strong>Verfügbar für</strong>
                  <span>{profile.availability}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
