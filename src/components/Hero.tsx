import { motion } from 'motion/react';
import InteractiveTerminal from './InteractiveTerminal';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  return (
    <section 
      id="about" 
      className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
    >
      {/* Left Column: Avatar & Bio */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 md:col-span-7">
        
        {/* Avatar Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 relative group"
        >
          {/* Animated glow background circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-accent to-blue-600 opacity-25 blur-xl group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
          
          {/* Rotating elegant thin gradient border */}
          <div className="relative w-[146px] h-[146px] md:w-[176px] md:h-[176px] rounded-full flex items-center justify-center overflow-hidden p-[3px] shadow-[0_0_24px_rgba(6,182,212,0.15)] bg-zinc-200 dark:bg-zinc-800">
            <motion.div 
              className="absolute w-[160%] h-[160%] bg-gradient-to-tr from-brand-accent via-indigo-500 to-cyan-400 opacity-90"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            />
            {/* Inner Avatar Context */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-card)] flex items-center justify-center relative z-10 transition-colors duration-300">
              <img 
                alt="Avijit" 
                className="w-full h-full object-cover select-none scale-102 hover:scale-105 transition-transform duration-500" 
                src="/screen.png"
                onError={(e) => {
                  // Return fallback image if /screen.png is not loaded/cached yet to remain robust
                  e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjQWrvwMVPVt6qeLUrniu2VRxW5imlSka3z2_WsNJyhSWh5EFA9QXNtjEEs0rMLc79x_pIJScA3eCzWvZgkKzECktVdbTTiXXj0XjEZH7IoM8lwC0_xnG2l6gCt7k8fEUNGvuc_lWII6hXnU1FpDwKG5OemlBxASRrSQmTDnm19mbJKMtglttTuQovZZHQ0rCSmFP5MwfO-rr8m3dktdqop7-xO11j-A1EFbo1e3lJQETHhBsrvZQHGmtjPqERqN1osAm6cSPf6CVX";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio Text & Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left space-y-5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-bg border border-brand-accent-border text-brand-accent text-[10px] font-mono font-bold uppercase tracking-wider">
            <span>DIU CSE Student</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tighter transition-colors duration-300">
            Hi, I'm Avijit.
          </h1>

          <p className="font-body text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-lg transition-colors duration-300">
            I am a Computer Science and Engineering student at Daffodil International University. My current focus is on mastering the fundamentals through C programming, while building clean, responsive user interfaces with HTML and CSS.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
            <Magnetic>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onProjectsClick();
                }}
                className="px-6 py-3 rounded-full bg-brand-accent-solid text-brand-accent-solid-text font-mono text-xs font-bold hover:opacity-90 active:scale-95 transition-all flex items-center gap-1 cursor-pointer shadow-sm shadow-brand-accent-glow"
              >
                View Work
                <ChevronRight size={14} />
              </a>
            </Magnetic>
            
            <Magnetic>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
                className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-white font-mono text-xs font-bold active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                Contact
              </a>
            </Magnetic>
          </div>
        </motion.div>

      </div>

      {/* Right Column: Code Terminal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:col-span-5 w-full"
      >
        <InteractiveTerminal 
          onContactClick={onContactClick} 
          onProjectsClick={onProjectsClick} 
        />
      </motion.div>

    </section>
  );
}
