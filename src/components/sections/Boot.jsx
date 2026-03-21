import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Boot.css';

const Boot = ({ onComplete = () => {} }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  // Boot sequence typewriter effect
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

    if (displayedLines.length < bootLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, bootLines[prev.length]]);
      }, 350); // 300-400ms delay between lines

      return () => clearTimeout(timer);
    } else if (displayedLines.length === bootLines.length && !isComplete) {
      // All lines displayed, wait then mark complete
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 600); // 600ms pause after last line

      return () => clearTimeout(timer);
    }
  }, [displayedLines.length, isComplete]);

  // Fade out and unmount
  useEffect(() => {
    if (isComplete && !shouldFadeOut) {
      setShouldFadeOut(true);
      setTimeout(() => onComplete(), 500);
    }
  }, [isComplete, shouldFadeOut, onComplete]);

  return (
    <motion.div
      className="boot-container"
      initial={{ opacity: 1 }}
      animate={shouldFadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
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
            className={`boot-line ${index === displayedLines.length - 1 && !isComplete ? 'active' : ''}`}
          >
            {line}
            {index === displayedLines.length - 1 && !isComplete && <span className="cursor">▮</span>}
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
