import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS, CERTIFICATIONS } from '../data';
import { Certification } from '../types';
import { Award, Layers, ShieldCheck, AwardIcon, CheckCircle2, Search, ExternalLink, Calendar, HelpCircle, X } from 'lucide-react';

export default function SkillsCertifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'Languages' | 'Web' | 'Tools'>('all');
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const categories = [
    { label: 'All Stack', value: 'all' },
    { label: 'Languages', value: 'Languages' },
    { label: 'Web Dev', value: 'Web' },
    { label: 'Tools & Soft', value: 'Tools' }
  ];

  const filteredSkills = SKILLS.filter((sk) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'Languages') return sk.category === 'Languages';
    if (activeTab === 'Web') return sk.category === 'Web Development';
    if (activeTab === 'Tools') return sk.category === 'Tools & Other';
    return true;
  });

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      
      {/* Upper header line */}
      <div className="space-y-2 text-left mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[var(--text-heading)] tracking-tighter transition-colors duration-300">
          Skills &amp; Certifications
        </h2>
        <p className="text-xs font-mono text-zinc-500">
          Professional development credentials and technological capabilities verified dynamically
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Hand: Custom Skill Grid with level ratings */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
            <h3 className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={14} className="text-brand-accent" />
              Technical Competencies
            </h3>

            {/* Sub-Filters */}
            <div className="flex gap-1.5 bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-[var(--border-color)] text-[10px] font-mono">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveTab(cat.value as any)}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer ${activeTab === cat.value ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-400'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((sk, index) => (
                <motion.div
                  key={sk.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group relative glass-panel bg-gradient-to-br from-[var(--card-gradient-from)] to-[var(--card-gradient-to)] border border-[var(--border-color)] rounded-xl p-4.5 hover:-translate-y-1 hover:shadow-[0_0_20px_var(--accent-glow)] hover:border-brand-accent/40 transition-all duration-300"
                >
                  <div className="space-y-2.5">
                    
                    {/* Header */}
                    <div className="block">
                      <span className="font-mono text-xs text-[var(--text-heading)] font-bold tracking-tight">
                        {sk.name}
                      </span>
                    </div>

                    <p className="text-[10.5px] leading-relaxed text-[var(--text-secondary)] line-clamp-2 select-none group-hover:text-blue-600 dark:group-hover:text-zinc-300 transition-colors">
                      {sk.description}
                    </p>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Hand: Dynamic interactive Certifications with credential lightbox links */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="border-b border-[var(--border-color)] pb-4">
            <h3 className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award size={14} className="text-brand-accent" />
              Credentials &amp; Certifications
            </h3>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCert(cert)}
                className="glass-panel bg-gradient-to-br from-[var(--card-gradient-from)] to-[var(--card-gradient-to)] hover:bg-zinc-100/30 dark:hover:bg-white/5 border border-[var(--border-color)] rounded-xl p-4 flex items-center gap-5 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_0_20px_var(--accent-glow)] hover:border-brand-accent/40"
              >
                {/* Embedded credential image thumbnail with secure loading config */}
                <div className="w-20 h-14 rounded overflow-hidden border border-[var(--border-color)] flex-shrink-0 bg-neutral-950 group-hover:border-zinc-300 dark:group-hover:border-white/20 transition-colors relative">
                  <img
                    alt={cert.title}
                    src={cert.image}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 select-none scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                <div className="flex-1 space-y-1">
                  <h4 className="font-display text-sm font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-brand-accent transition-colors line-clamp-1">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10.5px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    <span className="text-zinc-700 dark:text-zinc-400">{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {cert.date}
                    </span>
                  </div>
                </div>

                <Search size={14} className="text-zinc-550 dark:text-zinc-600 group-hover:text-brand-accent transition-colors flex-shrink-0" />

              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Certification Image/Detail Lightbox modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            
            {/* Closer overlay */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveCert(null)} />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)] bg-zinc-100/50 dark:bg-[#17171a]">
                <div className="flex items-center gap-2 text-brand-accent">
                  <ShieldCheck size={16} />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Verified Credential Profile
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-955 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Lightbox main body */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Dual Layout: Huge Image Display / Highlights details */}
                <div className="flex flex-col md:grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* High Quality visual card */}
                  <div className="w-full md:col-span-5 rounded-lg overflow-hidden border border-[var(--border-color)] bg-neutral-900 shadow-xl group hover:border-brand-accent-border transition-all select-none">
                    <img
                      alt={activeCert.title}
                      src={activeCert.image}
                      className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Highlights and scopes description */}
                  <div className="w-full md:col-span-7 space-y-4 text-left">
                    <div className="space-y-1">
                      <h4 className="font-display text-base md:text-lg font-bold text-[var(--text-heading)]">
                        {activeCert.title}
                      </h4>
                      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase">
                        Issued by <span className="text-zinc-700 dark:text-zinc-300 font-sans font-medium">{activeCert.issuer}</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                        Core Syllabus covered:
                      </p>
                      <ul className="space-y-1.5">
                        {activeCert.highlights.map((hlt, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle2 size={11} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeCert.verificationId && (
                      <div className="pt-2">
                        <span className="font-mono text-[9px] text-zinc-500 dark:text-zinc-500 block">
                          VERIFICATION ID:
                        </span>
                        <code className="font-mono text-[10.5px] text-brand-accent">
                          {activeCert.verificationId}
                        </code>
                      </div>
                    )}

                  </div>

                </div>

              </div>

              {/* Action buttons footer */}
              <div className="px-6 py-4 border-t border-[var(--border-color)] bg-zinc-50 dark:bg-[#101012] flex gap-2 justify-end">
                {activeCert.link && (
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-brand-accent-solid text-brand-accent-solid-text font-sans font-bold text-xs rounded-lg transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-sm hover:opacity-90"
                  >
                    <ExternalLink size={13} />
                    Verify Credential Page
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 border border-[var(--border-color)] dark:hover:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 font-mono rounded-lg transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  Dismiss
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
