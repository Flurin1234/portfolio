import { motion } from "framer-motion";
import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section section-soft contact">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Kontakt</p>
          <h2 className="section-title">Lass uns reden</h2>
          <p className="contact-text">
            Du hast ein Projekt, eine Frage oder willst einfach Hallo sagen?
            Schreib mir gerne eine Nachricht.
          </p>
          <motion.a
            href={`mailto:${profile.email}`}
            className="btn btn-primary contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {profile.email}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
