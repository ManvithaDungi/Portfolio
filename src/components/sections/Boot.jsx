import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Boot.css';

const Boot = ({ onComplete = () => {} }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  const prefersReducedRef = useRef(false);
  const completedRef = useRef(false);

  // Detect reduced motion preference on mount
  useEffect(() => {
    prefersReducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Main boot sequence loop
  useEffect(() => {
    const bootLines = [
      'NERV MAGI SYSTEM // PORTFOLIO_OS v2.0.26',
      'INITIALIZING...',
      'USER: MANVITHA DUNGI',
      'CLEARANCE: LEVEL 3 // CSE_STUDENT',
      'LOADING MODULES: [FRONTEND] [BACKEND] [DESIGN] [DSA]',
      'SYNCHRONIZATION RATE: 99.4%',
      'WARNING: CREATIVE HAZARD DETECTED',
      'ALL SYSTEMS NOMINAL.',
      'LAUNCHING INTERFACE...',
    ];

    // Skip animation if reduced motion is preferred
    if (prefersReducedRef.current) {
      setDisplayedLines(bootLines);
      setTimeout(() => {
        setFadeOut(true);
      }, 100);
      return;
    }

    // Typewriter effect: add one line every 120ms
    if (displayedLines.length < bootLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, bootLines[prev.length]]);
      }, 120);

      return () => clearTimeout(timer);
    }

    // All lines displayed - fade out after 300ms pause
    if (displayedLines.length === bootLines.length && !fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [displayedLines, fadeOut]);

  // Handle fade out completion
  useEffect(() => {
    if (fadeOut && !completedRef.current) {
      completedRef.current = true;
      const timer = setTimeout(() => {
        onComplete();
      }, prefersReducedRef.current ? 0 : 300);

      return () => clearTimeout(timer);
    }
  }, [fadeOut, onComplete]);

  return (
    <motion.div
      className="boot-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: prefersReducedRef.current ? 0 : 0.3, ease: 'easeInOut' }}
    >
      {/* NERV Hexagon Logo */}
      <div className="nerv-logo">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <polygon
            points="50,10 93.3,32.5 93.3,77.5 50,100 6.7,77.5 6.7,32.5"
            stroke="var(--color-cyan)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="50,25 80,40 80,70 50,85 20,70 20,40"
            stroke="var(--color-blue)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Boot Text Output */}
      <div className="boot-output">
        {displayedLines.map((line, index) => (
          <div
            key={index}
            className={`boot-line ${index === displayedLines.length - 1 && !fadeOut ? 'active' : ''}`}
          >
            {line}
            {index === displayedLines.length - 1 && !fadeOut && <span className="cursor">▮</span>}
          </div>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="boot-status">
        <span className="status-dot pulse-slow"></span>
        <span className="status-text">SYNCHRONIZATION IN PROGRESS</span>
      </div>
    </motion.div>
  );
};

export default Boot;
