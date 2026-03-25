import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import { projectsData } from '../../data/projects';
import './Projects.css';

const Projects = () => {
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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
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

  const panelReveal = {
    hidden: { opacity: 0, scaleY: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={panelReveal}
    >
      {/* Section number bg text */}
      <motion.div
        className="projects-section-number"
        variants={numberVariants}
        aria-hidden="true"
      >
        04
      </motion.div>

      {/* Rotated page-edge label */}
      <div className="projects-rotated-label" aria-hidden="true">
        SECTION_04 // CLASSIFIED_PROJECTS
      </div>
      <div className="projects-container">
        <motion.div variants={itemVariants}>
          <SystemLabel text="SECTION_04 // CLASSIFIED_PROJECTS" />
        </motion.div>

        <motion.div className="projects-list" variants={containerVariants}>
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-row"
              variants={itemVariants}
            >
              <div className="project-header">
                <div className="project-id">CHAPTER №{project.id}</div>
                <div className={`project-status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((f, i) => (
                    <li key={i} className="project-feature-item">
                      <span className="feature-bullet">▸</span>
                      <span className="feature-text">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-stack">
                  <span className="stack-label">STACK:</span>
                  <span className="stack-items">
                    {project.stack.join(' · ')}
                  </span>
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      VIEW CODE ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      VIEW DEMO ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
