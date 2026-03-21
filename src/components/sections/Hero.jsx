import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import SpeedLines from '../ui/SpeedLines';
import MangaPanel from '../ui/MangaPanel';
import './Hero.css';

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.04, transition: { duration: prefersReducedMotion ? 0 : 1.2 } },
  };

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/ManvithaDungi',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manvitha-dungi-8a8040211/',
    },
  ];

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Speed Lines - radial burst */}
      <SpeedLines size={600} opacity={0.4} />

      {/* Section number bg text */}
      <motion.div
        className="hero-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        01
      </motion.div>

      {/* Warning accent panel - top right */}
      <MangaPanel variant="accent" className="hero-accent-badge">
        <div className="accent-badge-content">
          <div className="accent-kanji">警告</div>
          <div className="accent-text">CREATIVE HAZARD</div>
        </div>
      </MangaPanel>

      {/* Bottom-left floating panel */}
      <MangaPanel variant="dark" offset={true} className="hero-floating-panel">
        <div className="floating-panel-content">
          PILOT: MANVITHA DUNGI // UNIT_01
        </div>
      </MangaPanel>

      <div className="hero-content">
        {/* System Label */}
        <motion.div variants={itemVariants}>
          <SystemLabel text="UNIT_01 // PILOT IDENTIFICATION" />
        </motion.div>

        {/* Main Heading */}
        <motion.div className="hero-heading" variants={itemVariants}>
          <div className="hero-heading-line-1">PORTFOLIO</div>
          <div className="hero-heading-line-2">MANVITHA DUNGI</div>
        </motion.div>

        {/* Subline */}
        <motion.div className="hero-subline" variants={itemVariants}>
          FULL STACK DEVELOPER // ROBOTICIST // CSE STUDENT // CLASS OF 2027
        </motion.div>

        {/* Divider Line */}
        <motion.div className="hero-divider" variants={itemVariants} />

        {/* Status */}
        <motion.div className="hero-status" variants={itemVariants}>
          STATUS: ACTIVE // OPEN TO OPPORTUNITIES // VISAKHAPATNAM, INDIA
        </motion.div>

        {/* Social Links */}
        <motion.div className="hero-socials" variants={itemVariants}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.label}
              >
                <Icon className="social-icon" />
                <span className="social-label">{social.label}</span>
              </a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div className="scroll-indicator" variants={itemVariants}>
          SCROLL // ↓
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
