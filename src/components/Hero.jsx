import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/content";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const blob1X = useTransform(springX, (v) => v * 1);
  const blob1Y = useTransform(springY, (v) => v * 1);
  const blob2X = useTransform(springX, (v) => v * -1.4);
  const blob2Y = useTransform(springY, (v) => v * -1.4);
  const blob3X = useTransform(springX, (v) => v * 0.7);
  const blob3Y = useTransform(springY, (v) => v * -0.7);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 60);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 60);
  };

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-blobs" aria-hidden="true">
        <motion.div
          className="blob blob-purple"
          style={{ x: blob1X, y: blob1Y }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob-pink"
          style={{ x: blob2X, y: blob2Y }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob-mint"
          style={{ x: blob3X, y: blob3Y }}
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="hero-eyebrow">
          Hi, ich bin
        </motion.p>
        <motion.h1 variants={item} className="hero-title">
          {profile.name}
        </motion.h1>
        <motion.h2 variants={item} className="hero-subtitle">
          {profile.role}
        </motion.h2>
        <motion.p variants={item} className="hero-text">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <Button asChild size="lg" className="rounded-full px-7">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Projekte ansehen
            </motion.a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-7">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Kontakt aufnehmen
            </motion.a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="hero-social">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: -8 }}
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 8 }}
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            aria-label="E-Mail"
            whileHover={{ scale: 1.2, rotate: -8 }}
          >
            <FiMail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
