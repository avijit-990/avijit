import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SkillsCertifications from './components/SkillsCertifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import ScrollReveal from './components/ScrollReveal';
import ParticleNetwork from './components/ParticleNetwork';
import CosmicButton from './components/CosmicButton';
import { Terminal, Cpu, ShieldAlert, Heart, Activity } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Clock in footer demonstrating precision ticks
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[var(--bg-app)] text-[var(--text-primary)] min-h-screen font-sans antialiased selection:bg-brand-accent/25 relative overflow-x-hidden transition-colors duration-300">
      
      {/* Absolute faint global grid visual decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Interactive responsive particle network background connection layer */}
      <ParticleNetwork />

      {/* Decorative subtle background radial glow maps */}
      <div className="absolute top-[8%] left-[-15%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full radial-glow-accent pointer-events-none z-0 blur-3xl opacity-80" />
      <div className="absolute top-[25%] right-[-15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full radial-glow-indigo pointer-events-none z-0 blur-3xl opacity-70" />
      <div className="absolute top-[50%] left-[-10%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] rounded-full radial-glow-indigo pointer-events-none z-0 blur-3xl opacity-60" />
      <div className="absolute top-[75%] right-[-10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full radial-glow-accent pointer-events-none z-0 blur-3xl opacity-80" />

      {/* Persistent global header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main core portfolio segments */}
      <main className="space-y-10 md:space-y-14 pb-12 relative z-10">
        
        {/* Intro section */}
        <Hero 
          onProjectsClick={() => handleScrollToSection('projects')}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* Tech horizontal tagging pill list */}
        <ScrollReveal delay={0.1}>
          <TechStack />
        </ScrollReveal>

        {/* Portfolio gallery index pages */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Technical skills and certifications panel */}
        <ScrollReveal>
          <SkillsCertifications />
        </ScrollReveal>

        {/* Recruit form workspace contact block */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>

      </main>

      {/* Immersive high precision document modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Aesthetic precise technical footer */}
      <footer className="w-full py-10 bg-[var(--bg-footer)] border-t border-[var(--border-color)] relative z-10 text-xs text-zinc-500 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400">
              © 2026 Avijit. Built with technical rigor.
            </p>
            {currentTime && (
              <span className="font-mono text-[9.5px] text-zinc-700 dark:text-zinc-500 flex items-center gap-1">
                <Activity size={10} className="text-brand-accent animate-ping" />
                SYSTEM TIME: {currentTime}
              </span>
            )}
          </div>

          {/* Social connections with glowing planetary orbits and official logos */}
          <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
            <CosmicButton type="facebook" href="https://www.facebook.com/avijit8638" />
            <CosmicButton type="github" href="https://github.com/avijit-990" />
            <CosmicButton type="linkedin" href="https://www.linkedin.com/in/avijit-karmokar-rony8638/" />
          </div>

          <div className="font-display font-extrabold tracking-tight text-[var(--text-heading)] hover:text-brand-accent transition-colors">
            AVIJIT
          </div>

        </div>
      </footer>

    </div>
  );
}
