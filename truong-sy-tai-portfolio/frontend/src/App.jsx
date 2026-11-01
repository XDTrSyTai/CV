import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SpiderProvider } from './context/SpiderContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { SpiderCanvas } from './components/SpiderCanvas';
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
      <SpiderProvider>
        <div className="relative min-h-screen bg-[#F7F8FA] dark:bg-[#090A0C] text-[#0F172A] dark:text-[#F1F3F5] transition-colors duration-300 overflow-x-hidden selection:bg-[#93C5FD]/20 selection:text-[#93C5FD]">
          {/* Dynamic Neural Particles Canvas Background */}
          <BackgroundCanvas />

          {/* Interactive Procedural Spider Layer */}
          <SpiderCanvas />

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
      </SpiderProvider>
    </ThemeProvider>
  );
}

export default App;
