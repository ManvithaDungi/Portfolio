import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import './About.css';

const About = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const panelReveal = {
    hidden: { opacity: 0, scaleY: 0.95 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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
    visible: {
      opacity: 0.04,
      transition: { duration: prefersReducedMotion ? 0 : 1.2 },
    },
  };

  const bioData = [
    { label: 'Location', value: 'Visakhapatnam' },
    { label: 'Degree', value: 'B.Tech CSE' },
    { label: 'Year', value: '3rd Year' },
    { label: 'CGPA', value: '7.93/10' },
  ];

  const educationData = [
    {
      id: 'NODE_01',
      unit: 'Amrita Vishwa Vidyapeetham',
      sublabel: 'B.Tech — Computer Science & Engineering',
      duration: '2023 – 2027',
      metricLabel: 'SYNC RATE',
      metricValue: '7.93 / 10',
      status: 'ACTIVE',
    },
    {
      id: 'NODE_02',
      unit: 'Sri Venkateshwara Junior College',
      sublabel: 'Board of Intermediate Education, Andhra Pradesh',
      duration: '2021 – 2023',
      metricLabel: 'OUTPUT',
      metricValue: '92.1%',
      status: 'COMPLETE',
    },
    {
      id: 'NODE_03',
      unit: 'Timpany School',
      sublabel: 'ICSE — Andhra Pradesh',
      duration: 'Until 2021',
      metricLabel: 'OUTPUT',
      metricValue: '96%',
      status: 'COMPLETE',
    },
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

          {/* Education Log */}
          <motion.div variants={itemVariants}>
            <div className="edu-label">ACADEMIC LOG // SYNCHRONIZED</div>
            <div className="edu-log">
              {educationData.map((edu) => (
                <div key={edu.id} className="edu-entry">
                  <div className="edu-entry-header">
                    <span className="edu-id">{edu.id}</span>
                    <span className={`edu-status ${edu.status === 'ACTIVE' ? 'edu-status-active' : 'edu-status-complete'}`}>{edu.status}</span>
                  </div>
                  <div className="edu-entry-body">
                    <div className="edu-unit">{edu.unit}</div>
                    <div className="edu-sublabel">{edu.sublabel}</div>
                    <div className="edu-meta">
                      <span className="edu-duration">{edu.duration}</span>
                      <span className="edu-metric">
                        <span className="edu-metric-label">{edu.metricLabel}:</span>
                        <span className="edu-metric-value">{edu.metricValue}</span>
                      </span>
                    </div>
                  </div>
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
