import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Terminal, AppWindow, Cpu, Code2, Play, ExternalLink, GitBranch, Eye, Check, X, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'C' | 'Web'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [workspaceInput, setWorkspaceInput] = useState('');
  const [workspaceConsole, setWorkspaceConsole] = useState<string[]>([]);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'C') return proj.category === 'C Programming';
    if (selectedCategory === 'Web') return proj.category === 'Web Web';
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={32} className="text-brand-accent" />;
      case 'Browser':
        return <AppWindow size={32} className="text-brand-accent" />;
      case 'Cpu':
        return <Cpu size={32} className="text-brand-accent" />;
      default:
        return <FolderGit2 size={32} className="text-brand-accent" />;
    }
  };

  const handleCopySnippet = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleTestRunProject = (proj: Project) => {
    setWorkspaceConsole(['gcc compile success', 'linking library buffers...']);
    setTimeout(() => {
      if (proj.id === 'personal-portfolio') {
        setWorkspaceConsole((prev) => [
          ...prev,
          '========================================',
          'PORTFOLIO ENGINE V1.0: RUNNING CLIENT',
          'Spawned static asset server on port 3000',
          'Status: Online & Fully Interactive',
          'Aesthetic: Glassmorphism / Space Grotesk Typo',
          '========================================'
        ]);
      } else if (proj.id === 'coming-soon') {
        setWorkspaceConsole((prev) => [
          ...prev,
          '========================================',
          'INITIALIZING FUTURISTIC BUILD PIPELINE',
          'Buffering upcoming features and algorithms...',
          'Status: Assembly Pending Core Repository',
          'Check back soon for active compilation!',
          '========================================'
        ]);
      } else {
        setWorkspaceConsole((prev) => [
          ...prev,
          'Host server spawned at port 3000 successfully.',
          'Injecting CSS Tailwind style margins...',
          'Compiled index.html and index.css -> viewport active.'
        ]);
      }
    }, 400);
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      <div className="space-y-10 text-left">
        
        {/* Header and filters line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[var(--text-heading)] tracking-tighter transition-colors duration-300">
              Selected Projects
            </h2>
            <p className="text-xs font-mono text-zinc-500">
              Technical structures and systems authored by Avijit
            </p>
          </div>

          {/* Filtering pill group */}
          <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-xl border border-[var(--border-color)] font-mono text-xs max-w-max transition-colors duration-300">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'all' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('C')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'C' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
            >
              C Language
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Web')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'Web' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
            >
              HTML & CSS
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-7 relative border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-[var(--card-gradient-from)] to-[var(--card-gradient-to)]"
                onClick={() => {
                  setActiveProject(project);
                  setWorkspaceConsole([]);
                }}
              >
                
                {/* Floating soft blur accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/5 to-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Upper Icon visual pane */}
                  <div className="w-full h-44 bg-zinc-100/50 dark:bg-zinc-950/70 border border-[var(--border-color)] rounded-xl flex items-center justify-center relative overflow-hidden group-hover:bg-zinc-100/10 dark:group-hover:bg-zinc-950/10 transition-colors">
                    <span className="p-4 rounded-full bg-zinc-200/50 dark:bg-zinc-900/80 border border-[var(--border-color)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(project.icon)}
                    </span>
                    {/* Simulated vertical terminal scanning laser */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-brand-accent/30 opacity-0 group-hover:opacity-100 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg md:text-xl font-bold text-[var(--text-heading)] group-hover:text-brand-accent transition-colors flex items-center gap-2">
                      {project.title}
                      <Eye size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                    </h3>
                    <p className="font-body text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags and tech list bottom block */}
                <div className="flex flex-wrap items-center gap-1.5 pt-6 mt-6 border-t border-[var(--border-color)]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-200/50 dark:bg-zinc-900 border border-[var(--border-color)] font-mono text-[10px] text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project detail lightbox modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            
            {/* Backdrop Closer */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveProject(null)} />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[85vh] overflow-hidden"
            >
              
              {/* Left Column: Descriptions & Details */}
              <div className="p-6 md:p-8 space-y-6 md:col-span-7 overflow-y-auto">
                
                {/* Header */}
                <div className="space-y-2.5">
                  <span className="px-2.5 py-1 text-[9px] font-mono uppercase bg-brand-accent-bg text-brand-accent border border-brand-accent-border rounded-full font-bold">
                    {activeProject.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-heading)]">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Long description */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs font-semibold text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-1">
                    System Architecture
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    {activeProject.longDescription}
                  </p>
                </div>

                {/* Core Features list */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-semibold text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-1">
                    Compiling Modules
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                        <Check size={12} className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Mini Interactive terminal execution & sources code */}
              <div className="bg-zinc-50 dark:bg-[#0c0c0e] border-t md:border-t-0 md:border-l border-[var(--border-color)] p-6 flex flex-col justify-between md:col-span-5 max-h-[45vh] md:max-h-full overflow-y-auto">
                
                <div className="space-y-4 flex-1">
                  
                  {/* Title tabs bar for sources / tests */}
                  <div className="flex justify-between items-center bg-black/10 dark:bg-black/30 p-1.5 rounded-lg border border-[var(--border-color)]">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider px-2">
                      Project Live Sandbox
                    </span>
                    <button
                      type="button"
                      onClick={() => handleTestRunProject(activeProject)}
                      className="px-2.5 py-1 text-[10px] bg-brand-accent-bg text-brand-accent border border-brand-accent-border hover:opacity-90 active:scale-95 transition-all font-mono font-bold rounded flex items-center gap-1 cursor-pointer"
                    >
                      <Play size={8} className="fill-current" />
                      Execute
                    </button>
                  </div>

                  {/* Sandboxed stdout view */}
                  <div className="w-full bg-zinc-100 dark:bg-black rounded-lg p-3 font-mono text-[11px] text-brand-accent leading-relaxed border border-[var(--border-color)] min-h-[140px] max-h-[180px] overflow-y-auto">
                    {workspaceConsole.length === 0 ? (
                      <p className="text-zinc-500 dark:text-zinc-600 text-center py-10 italic">
                        Click 'Execute' tab to compile and test system.
                      </p>
                    ) : (
                      workspaceConsole.map((line, idx) => (
                        <div key={idx} className={line.startsWith('[SUCCESS]') || line.startsWith('Found') ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-zinc-700 dark:text-zinc-400'}>
                          {line}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Code Snippet Box */}
                  {activeProject.codeSnippet && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1 pt-2">
                        <span>Source Snippet:</span>
                        <button
                          type="button"
                          onClick={() => handleCopySnippet(activeProject.codeSnippet)}
                          className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedSnippet ? 'Copied!' : 'Copy snippet'}
                        </button>
                      </div>
                      <div className="bg-zinc-100 dark:bg-zinc-950 rounded-lg p-3 font-mono text-[10px] text-zinc-600 dark:text-zinc-400 overflow-x-auto border border-[var(--border-color)] line-clamp-5 whitespace-pre">
                        {activeProject.codeSnippet}
                      </div>
                    </div>
                  )}

                </div>

                {/* Dismiss controls */}
                <div className="pt-6 mt-6 border-t border-[var(--border-color)] flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="w-full py-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-[var(--border-color)] hover:bg-zinc-300 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <X size={13} />
                    Dismiss View
                  </button>
                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
