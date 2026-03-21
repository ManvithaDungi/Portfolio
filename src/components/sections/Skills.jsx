import React from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import MangaPanel from '../ui/MangaPanel';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.03, transition: { duration: 1.2 } },
  };

  return (
    <motion.section
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Section number bg text */}
      <motion.div
        className="skills-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        03
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="skills-rotated-label" aria-hidden="true">
        SECTION_03 // CAPABILITIES
      </div>
      <div className="skills-container">
        <motion.div variants={itemVariants}>
          <SystemLabel text="SECTION_03 // CAPABILITIES" />
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              className="skills-category-wrapper"
              variants={itemVariants}
            >
              <MangaPanel variant="dark" offset={true} className="skills-panel">
                <div className="category-label">
                  <span className="category-accent" />
                  &gt; {category.category}
                </div>
                <div className="category-skills">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-item">
                      <span className="skill-prefix">{"// "}</span>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </MangaPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
