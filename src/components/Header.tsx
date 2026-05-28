import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CosmicButton from './CosmicButton';

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [activeHash, setActiveHash] = useState('#about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple active link calculation
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[var(--nav-backdrop-color)] backdrop-blur-xl border-b border-[var(--border-color)] py-4' : 'bg-transparent py-6'}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Logo */}
          <a href="#" className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter text-[var(--text-heading)] hover:opacity-90 transition-opacity">
            AVIJIT
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8 bg-[var(--nav-bg)] px-5 py-2 rounded-full border border-[var(--border-color)] backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-xs font-semibold uppercase tracking-wider relative py-1 transition-colors ${isActive ? 'text-brand-accent' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume and Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-white/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center shadow-sm w-9 h-9"
              title={theme === 'light' ? 'Switch to Obsidian theme' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <CosmicButton type="resume" onClick={onOpenResume} />
          </div>

          {/* Mobile Right layout buttons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Switcher for Mobile */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-white transition-all active:scale-95 cursor-pointer flex items-center justify-center w-9 h-9"
              title={theme === 'light' ? 'Switch to Obsidian theme' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* Mobile hamburger menu */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-white cursor-pointer w-9 h-9"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[var(--bg-app)] flex flex-col justify-center items-center p-8 border-b border-[var(--border-color)] md:hidden animate-fade-in">
          <div className="space-y-6 text-center w-full max-w-xs">
            {menuItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-display text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-[var(--text-secondary)] hover:text-[var(--text-heading)]'}`}
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="h-[1px] w-24 bg-zinc-300 dark:bg-white/10 mx-auto my-6" />

            <div className="flex justify-center w-full">
              <CosmicButton
                type="resume"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
