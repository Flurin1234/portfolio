import { motion } from "framer-motion";
import { skillCategories } from "../data/content";
import { getSkillIcon } from "../data/skillIcons";
import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Womit ich arbeite</h2>
        </Reveal>

        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 0.1}>
              <h3 className="skills-category-title">{category.title}</h3>

              {category.title === "Soft Skills" ? (
                <div className="skills-badges">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                      whileHover={{ y: -3 }}
                    >
                      <Badge variant="outline" className="skill-badge">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="skills-grid">
                  {category.skills.map((skill, i) => {
                    const Icon = getSkillIcon(skill);
                    return (
                      <motion.div
                        key={skill}
                        className="skill-chip"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                        whileHover={{ y: -4, scale: 1.03 }}
                      >
                        <Icon className="skill-chip-icon" />
                        <span>{skill}</span>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
