import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import RadarChart from '../ui/RadarChart';
import MangaPanel from '../ui/MangaPanel';
import './Proficiency.css';

const Proficiency = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const proficiencyData = [
    { name: 'Frontend', value: 82 },
    { name: 'Backend', value: 70 },
    { name: 'DSA', value: 75 },
    { name: 'Design', value: 78 },
    { name: 'DevOps', value: 60 },
    { name: 'System', value: 55 },
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const panelReveal = {
    hidden: { opacity: 0, scaleY: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
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
      className="proficiency"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={panelReveal}
    >
      {/* Section number bg text */}
      <motion.div
        className="proficiency-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        06
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="proficiency-rotated-label" aria-hidden="true">
        SECTION_06 // SYNC_RATE_ANALYSIS
      </div>

      <div className="proficiency-container">
        <motion.div variants={itemVariants}>
          <SystemLabel text="SECTION_06 // SYNC_RATE_ANALYSIS" />
        </motion.div>

        <motion.h2 className="proficiency-heading" variants={itemVariants}>
          SYNCHRONIZATION RATES
        </motion.h2>

        {/* Chart wrapper with シンク率 badge */}
        <motion.div className="chart-wrapper" variants={itemVariants}>
          <RadarChart data={proficiencyData} lightMode={true} />

          {/* シンク率 accent badge overlapping chart */}
          <MangaPanel variant="accent" className="sync-rate-badge">
            <span className="sync-rate-kanji">シンク率</span>
          </MangaPanel>
        </motion.div>

        <motion.div className="legend" variants={itemVariants}>
          {proficiencyData.map((item) => (
            <div key={item.name} className="legend-item">
              <span className="legend-name">{item.name.toUpperCase()}</span>
              <span className="legend-value">{item.value}%</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Proficiency;
