import React from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import './About.css';

const About = () => {
  const panelReveal = {
    hidden: { opacity: 0, scaleY: 0.95 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.03,
      transition: { duration: 1.2 },
    },
  };

  const bioData = [
    { label: 'Location', value: 'Visakhapatnam' },
    { label: 'Degree', value: 'B.Tech CSE' },
    { label: 'Year', value: '3rd Year' },
    { label: 'CGPA', value: '7.93/10' },
  ];

  const skills = [
    'React',
    'Python',
    'C++',
    'Node.js',
    'Embedded Systems',
    'ROS2',
    'Solidity',
  ];

  return (
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={panelReveal}
    >
      {/* Section number bg text */}
      <motion.div
        className="about-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        02
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="about-rotated-label" aria-hidden="true">
        SECTION_02 // PILOT_PROFILE
      </div>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* LEFT COLUMN — Bio Panel */}
        <motion.div variants={itemVariants}>
          {/* System Label */}
          <SystemLabel text="SECTION_02 // PILOT_PROFILE" />

          {/* Bio Paragraph inside brutal panel */}
          <div className="about-bio">
            <p>
              3rd year Computer Science student at{' '}
              <span className="highlight">
                Amrita Vishwa Vidyapeetham, passionate about building innovative systems
              </span>
              . I work across{' '}
              <span className="emphasis-red">embedded systems, robotics, and full-stack development</span>.{' '}
              <span className="highlight">
                Obsessed with clean code, scalable architectures, and{' '}
                <span className="emphasis-red">solving complex problems</span>.
              </span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Info blocks */}
        <motion.div className="about-right-col" variants={containerVariants}>
          {/* Personal Data Block */}
          <motion.div variants={itemVariants}>
            <div className="about-right-label">PERSONAL DATA // CLASSIFIED</div>
            <div className="bio-data">
              {bioData.map((item) => (
                <div key={item.label} className="bio-data-item">
                  <span className="bio-label">{item.label}</span>
                  <span className="bio-value">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Tags */}
          <motion.div variants={itemVariants}>
            <div className="skills-tags-label">TECH // STACK</div>
            <div className="skills-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
