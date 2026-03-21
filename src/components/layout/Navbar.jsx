import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <a href="#top" className="brand-text">
              NERV // MD
            </a>
          </div>

          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="navbar-right">
            <ThemeToggle />
            <span className="navbar-text">[ NERV ] // ポートフォリオ</span>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="menu-close"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <motion.div className="menu-items" variants={menuVariants}>
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  className="menu-link"
                  onClick={() => handleNavClick(item.id)}
                  variants={itemVariants}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
