import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Boot from './components/sections/Boot';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Proficiency from './components/sections/Proficiency';
import Contact from './components/sections/Contact';
import TransitionRibbon from './components/ui/TransitionRibbon';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <div className="App">
      {!bootComplete ? (
        <Boot onComplete={handleBootComplete} />
      ) : (
        <>
          <Navbar />
          <main style={{ paddingTop: '64px' }}>
            <section id="hero">
              <Hero />
            </section>
            <TransitionRibbon direction="dark-to-light" />
            <section id="about">
              <About />
            </section>
            <TransitionRibbon direction="light-to-dark" />
            <section id="skills">
              <Skills />
            </section>
            <TransitionRibbon direction="dark-to-light" />
            <section id="projects">
              <Projects />
            </section>
            <TransitionRibbon direction="light-to-dark" />
            <section id="experience">
              <Experience />
            </section>
            <TransitionRibbon direction="dark-to-light" />
            <section id="proficiency">
              <Proficiency />
            </section>
            <TransitionRibbon direction="light-to-dark" />
            <section id="contact">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
