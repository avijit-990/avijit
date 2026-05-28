import { motion } from 'motion/react';
import { Terminal, Code2, Globe, Cpu, GitBranch, ChevronRight, HelpCircle } from 'lucide-react';

export default function TechStack() {
  const techs = [
    { name: 'C Programming', icon: Terminal, color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/20', desc: 'Procedural workflows, custom pointer mathematics, structs, and recursion systems.' },
    { name: 'HTML5', icon: Globe, color: 'text-orange-400', bg: 'bg-orange-400/5', border: 'border-orange-400/20', desc: 'Semantic layouts, SEO markup, accessibility protocols, and structured metadata schemas.' },
    { name: 'CSS3', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-500/5', border: 'border-blue-500/20', desc: 'Advanced animations, layouts (flex/grids), responsive queries, and utility themes.' },
    { name: 'JavaScript', icon: Cpu, color: 'text-yellow-400', bg: 'bg-yellow-400/5', border: 'border-yellow-400/20', desc: 'Dynamic state manipulations, async flow linkages, promises, and DOM integration systems.' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'text-zinc-300', bg: 'bg-zinc-300/5', border: 'border-zinc-300/20', desc: 'Secure repository branching, conflicts tracking, pull request lifecycles, and dev pipelines.' }
  ];

  return (
    <section id="tech-stack" className="max-w-7xl mx-auto px-6 md:px-10 py-6">
      <div className="space-y-8 text-left">
        
        {/* Section Heading */}
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[var(--text-heading)] tracking-tighter transition-colors duration-300">
          Tech Stack
        </h2>

        {/* Tech Grid Pills */}
        <div className="flex flex-wrap gap-4">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative glass-panel ${tech.bg} border border-[var(--border-color)] px-5 py-3 rounded-full flex items-center gap-3 hover:-translate-y-1 transition-all duration-300 cursor-help`}
                title={tech.desc}
              >
                <Icon size={14} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="font-mono text-xs md:text-sm font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>

                {/* Micro hover card */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-xl bg-zinc-950/95 border border-white/10 text-[10.5px] font-sans leading-normal text-zinc-400 hidden group-hover:block z-30 shadow-2xl backdrop-blur-md pointer-events-none">
                  <div className="flex items-center gap-1.5 mb-1 font-mono text-white text-[11px] font-bold">
                    <Icon size={11} className={tech.color} />
                    {tech.name}
                  </div>
                  {tech.desc}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
