import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemLabel from '../ui/SystemLabel';
import { projectsData } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

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
        staggerChildren: 0.1,
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

        <motion.div className="projects-grid" variants={containerVariants}>
          {projectsData.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card${hoveredId === project.id ? ' project-card--hovered' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Project: ${project.title}`}
            >
              {/* Thumbnail */}
              <div className="project-thumb-wrap">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="project-thumb"
                  loading="lazy"
                />
                <div className="project-thumb-overlay">
                  <div className="project-id-badge">CHAPTER №{project.id}</div>
                  <div className={`project-status status-${project.status.toLowerCase()}`}>
                    {project.status}
                  </div>
                </div>
                {/* Hover links overlay */}
                <div className="project-thumb-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-thumb-link"
                    >
                      VIEW CODE ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-thumb-link project-thumb-link--live"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="project-stack-pills">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="stack-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
