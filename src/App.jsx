import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Boot from './components/sections/Boot';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import CRTOverlay from './components/ui/CRTOverlay';

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
      {/* Persistent CRT / scanline overlay — covers entire viewport */}
      <CRTOverlay />
      {!bootComplete ? (
        <Boot onComplete={handleBootComplete} />
      ) : (
        <>
          <Navbar />
          <main style={{ paddingTop: '64px' }}>
            <section id="hero">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <Experience />
            </section>

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
