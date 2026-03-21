import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import './Experience.css';

const Experience = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Summer Research Intern',
      org: 'IDEAS — ISI Kolkata',
      date: 'May 2025 - Jul 2025',
      description: 'Worked on data analytics, simulation environments, and intelligent systems. Gained exposure to research-oriented problem solving and system modeling.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.04, transition: { duration: prefersReducedMotion ? 0 : 1.2 } },
  };

  return (
    <motion.section
      className="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Section number bg text */}
      <motion.div
        className="experience-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        05
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="experience-rotated-label" aria-hidden="true">
        SECTION_05 // DEPLOYMENT_LOG
      </div>

      <div className="experience-container">
        <motion.div variants={itemVariants}>
          <SystemLabel text="SECTION_05 // DEPLOYMENT_LOG" />
        </motion.div>

        <motion.div className="timeline" variants={containerVariants}>
          {/* Vertical Japanese text along timeline */}
          <div className="timeline-japanese" aria-hidden="true">経験</div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="timeline-entry"
              variants={itemVariants}
            >
              {/* Manga badge dot — numbered, red, brutal */}
              <div className="timeline-badge">
                {String(exp.id).padStart(2, '0')}
              </div>
              <div className="entry-content">
                <h3 className="entry-title">{exp.title}</h3>
                <div className="entry-meta">
                  <span className="entry-org">{exp.org}</span>
                  <span className="entry-date">{exp.date}</span>
                </div>
                <p className="entry-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
