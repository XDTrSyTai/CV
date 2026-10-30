import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { SocialMedia } from './components/SocialMedia';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
        {/* Dynamic Neural Particles Canvas Background */}
        <BackgroundCanvas />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <SocialMedia />
          <SkillsSection />
          <ProjectsSection />
          <TerminalSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

