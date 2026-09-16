import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/content";
import { Button } from "@/components/ui/button";
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
          <Button asChild size="lg" className="rounded-full px-7">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail />
              {profile.email}
            </motion.a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
