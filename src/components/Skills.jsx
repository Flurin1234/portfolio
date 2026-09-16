import { motion } from "framer-motion";
import { skills } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Womit ich arbeite</h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
