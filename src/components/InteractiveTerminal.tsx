import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal, Play, RotateCcw, Check, Sparkles, Code2 } from 'lucide-react';

interface InteractiveTerminalProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function InteractiveTerminal({ onContactClick, onProjectsClick }: InteractiveTerminalProps) {
  const [activeTab, setActiveTab] = useState<'editor' | 'compiler' | 'cli'>('editor');
  const fullCode = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Welcome to Avijit's high-rigor developer portfolio.\\n");
    return 0;
}`;

  const [typedCode, setTypedCode] = useState<string>('');
  
  useEffect(() => {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCode.length) {
        currentText += fullCode[index];
        setTypedCode(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12); // Snappy high-fidelity typing speed

    return () => clearInterval(interval);
  }, []);
  
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ type: 'input' | 'output' | 'error'; text: string }>>([
    { type: 'output', text: "Avijit DevOS [Version 2.4.9]" },
    { type: 'output', text: "Type 'help' to view available terminal actions." },
    { type: 'output', text: "" }
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [compilerLogs, setCompilerLogs] = useState<string[]>([]);
  const cliEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cliEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [cliHistory]);

  const handleRunCode = () => {
    setActiveTab('compiler');
    setIsRunning(true);
    setCompilerLogs([
      'avijit@diu-compilers:~$ gcc main.c -o main',
      'avijit@diu-compilers:~$ ./main'
    ]);

    setTimeout(() => {
      setCompilerLogs(prev => [
        ...prev,
        'Compiling sources safely with technical rigor [O3 optimized]...',
        'Linking object frames with Inter-core and JetBrains hooks...',
      ]);
    }, 400);

    setTimeout(() => {
      setCompilerLogs(prev => [
        ...prev,
        '================= PROGRAM OUTPUT =================',
        'Hello, World!',
        "Welcome to Avijit's high-rigor developer portfolio.",
        '==================================================',
        'Process completed with exit code 0.'
      ]);
      setIsRunning(false);
    }, 1200);
  };

  const handleCliSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;

    const cmd = cliInput.trim().toLowerCase();
    const newHistory = [...cliHistory, { type: 'input' as const, text: `avijit@terminal:~$ ${cliInput}` }];

    if (cmd === 'help') {
      newHistory.push(
        { type: 'output', text: 'Commands:' },
        { type: 'output', text: '  about      - Display brief bio details about Avijit' },
        { type: 'output', text: '  projects   - Output direct pointers to engineering projects' },
        { type: 'output', text: '  skills     - Printout technological stack levels' },
        { type: 'output', text: '  contact    - Scroll directly to recruit channel forms' },
        { type: 'output', text: '  clear      - Empty active console logs stdout' },
        { type: 'output', text: '  neofetch   - View custom tech profile layout' }
      );
    } else if (cmd === 'about') {
      newHistory.push(
        { type: 'output', text: 'CSE Student at Daffodil International University.' },
        { type: 'output', text: 'Focus: Clean algorithms, functional system frameworks, visual design.' }
      );
    } else if (cmd === 'projects') {
      newHistory.push(
        { type: 'output', text: '1. Personal Portfolio (HTML5 / Modern CSS / JavaScript)' },
        { type: 'output', text: '2. Coming Soon (Future systems and architectures)' },
        { type: 'output', text: "Type 'go projects' or use navigation grids to interact." }
      );
    } else if (cmd === 'skills') {
      newHistory.push(
        { type: 'output', text: 'C Programming: [███████░░░] 70%' },
        { type: 'output', text: 'HTML & CSS:    [███████████] 95%' },
        { type: 'output', text: 'Tailwind CSS:  [███████████] 95%' },
        { type: 'output', text: 'Git & GitHub:  [██████░░░░] 60%' }
      );
    } else if (cmd === 'contact') {
      newHistory.push({ type: 'output', text: 'Scrolling to Contact section...' });
      setTimeout(onContactClick, 300);
    } else if (cmd === 'clear') {
      setCliHistory([]);
      setCliInput('');
      return;
    } else if (cmd === 'neofetch') {
      newHistory.push(
        { type: 'output', text: '       /\\_/\\       AVIJIT@DIU-CSE-PORTFOLIO' },
        { type: 'output', text: '      ( o.o )      ------------------------' },
        { type: 'output', text: '       > ^ <       OS: React & Tailwind 4.0' },
        { type: 'output', text: '                   Host: Daffodil International Univ.' },
        { type: 'output', text: '                   Kernel: Gemini 3.5 AI Studio' },
        { type: 'output', text: '                   Uptime: Infinite Dev Spirit' },
        { type: 'output', text: '                   Shell: Interactive React Terminal' },
        { type: 'output', text: '                   Editor: JetBrains / VSCode' }
      );
    } else {
      newHistory.push({ type: 'error', text: `Command '${cmd}' not recognized. Type 'help' for instructions.` });
    }

    setCliHistory(newHistory);
    setCliInput('');
  };

  return (
    <div className="relative w-full glass-panel rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[340px] border border-[var(--terminal-border)] transition-colors duration-300" id="terminal-widget">
      {/* Top Header Controls bar */}
      <div className="flex justify-between items-center bg-zinc-100/30 dark:bg-zinc-950/20 px-4 py-3 border-b border-[var(--terminal-header-border)]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Close" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Minimize" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Maximize" />
        </div>
        
        {/* Tab Selection */}
        <div className="flex gap-1.5 bg-black/10 dark:bg-black/30 p-1 rounded-lg border border-[var(--terminal-header-border)]">
          <button 
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1 rounded text-[11px] font-mono tracking-tight transition-all flex items-center gap-1 cursor-pointer ${activeTab === 'editor' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
          >
            <Code2 size={12} />
            main.c
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('compiler')}
            className={`px-3 py-1 rounded text-[11px] font-mono tracking-tight transition-all flex items-center gap-1 cursor-pointer ${activeTab === 'compiler' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
          >
            <Sparkles size={12} />
            Output {isRunning && '●'}
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('cli')}
            className={`px-3 py-1 rounded text-[11px] font-mono tracking-tight transition-all flex items-center gap-1 cursor-pointer ${activeTab === 'cli' ? 'bg-brand-accent-bg text-brand-accent border border-brand-accent-border font-bold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
          >
            <Terminal size={12} />
            Interactive CLI
          </button>
        </div>

        <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 hidden sm:block">
          C11 (gcc 12.2)
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 p-5 font-mono text-xs md:text-sm overflow-y-auto bg-[var(--terminal-body)] transition-colors duration-300 min-h-[220px] max-h-[300px]">
        
        {/* Tab 1: C code display */}
        {activeTab === 'editor' && (
          <div className="relative">
            <textarea
              className="w-full bg-transparent text-brand-accent resize-none focus:outline-none font-mono text-xs md:text-sm leading-relaxed border-none p-0 focus:ring-0 whitespace-pre"
              value={typedCode}
              onChange={(e) => setTypedCode(e.target.value)}
              rows={8}
              spellCheck="false"
            />
            
            {/* Run Button embedded in editor */}
            <div className="absolute right-0 bottom-0 mt-4 flex gap-2">
              <button
                type="button"
                onClick={handleRunCode}
                className="flex items-center gap-2 bg-brand-accent-bg border border-brand-accent-border text-brand-accent px-3.5 py-1.5 rounded-lg text-xs hover:opacity-90 active:scale-95 transition-all text-label-caps cursor-pointer shadow-sm shadow-brand-accent-glow"
              >
                <Play size={12} className="fill-current" />
                Run main.c
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Compiler logs & outputs */}
        {activeTab === 'compiler' && (
          <div className="space-y-1.5 text-zinc-700 dark:text-zinc-300 font-mono text-xs leading-5">
            {compilerLogs.length === 0 ? (
              <div className="text-zinc-500 text-center py-8">
                <p>No build reports recorded yet.</p>
                <button
                  type="button"
                  onClick={handleRunCode}
                  className="mt-3 text-xs text-brand-accent underline underline-offset-4 hover:opacity-80"
                >
                  Click here to build & run main.c
                </button>
              </div>
            ) : (
              <>
                {compilerLogs.map((log, idx) => (
                  <div key={idx} className={
                    log.includes('SUCCESS') || log.includes('OUTPUT') ? 'text-brand-accent' : 
                    log.includes('exit code 0') ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500 dark:text-zinc-400'
                  }>
                    {log}
                  </div>
                ))}
                {isRunning && (
                  <div className="flex items-center gap-2 text-zinc-500 italic mt-2">
                    <div className="animate-spin w-3.5 h-3.5 rounded-full border-2 border-zinc-400 dark:border-zinc-500 border-t-blue-600 dark:border-t-white" />
                    Executing binary safely...
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Tab 3: Interactive CLI */}
        {activeTab === 'cli' && (
          <div className="space-y-2 h-full flex flex-col justify-between">
            <div className="space-y-1 overflow-y-auto max-h-[190px]">
              {cliHistory.map((item, idx) => (
                <div 
                  key={idx} 
                  className={
                    item.type === 'input' ? 'text-brand-accent font-semibold' :
                    item.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap'
                  }
                >
                  {item.text}
                </div>
              ))}
              <div ref={cliEndRef} />
            </div>

            {/* Micro command shortcut pills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--terminal-header-border)]">
              {['help', 'neofetch', 'skills', 'about', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => {
                    setCliInput(cmd);
                    const dummyEvent = { preventDefault: () => {} } as FormEvent;
                    setTimeout(() => {
                      setCliHistory(prev => [
                        ...prev,
                        { type: 'input', text: `avijit@terminal:~$ ${cmd}` }
                      ]);
                      // trigger command logic inline
                      if (cmd === 'clear') {
                        setCliHistory([]);
                      } else if (cmd === 'help') {
                        setCliHistory(prev => [
                          ...prev,
                          { type: 'output', text: 'Commands:' },
                          { type: 'output', text: '  about      - Display brief bio details about Avijit' },
                          { type: 'output', text: '  projects   - Output direct pointers to engineering projects' },
                          { type: 'output', text: '  skills     - Printout technological stack levels' },
                          { type: 'output', text: '  contact    - Scroll directly to recruit channel forms' },
                          { type: 'output', text: '  clear      - Empty active console logs stdout' },
                          { type: 'output', text: '  neofetch   - View custom tech profile layout' }
                        ]);
                      } else if (cmd === 'skills') {
                        setCliHistory(prev => [
                          ...prev,
                          { type: 'output', text: 'C Programming: [███████░░░] 70%' },
                          { type: 'output', text: 'HTML & CSS:    [███████████] 95%' },
                          { type: 'output', text: 'Tailwind CSS:  [███████████] 95%' },
                          { type: 'output', text: 'Git & GitHub:  [██████░░░░] 60%' }
                        ]);
                      } else if (cmd === 'about') {
                        setCliHistory(prev => [
                          ...prev,
                          { type: 'output', text: 'CSE Student at Daffodil International University.' },
                          { type: 'output', text: 'Focus: Clean algorithms, functional system frameworks, visual design.' }
                        ]);
                      } else if (cmd === 'neofetch') {
                        setCliHistory(prev => [
                          ...prev,
                          { type: 'output', text: '       /\\_/\\       AVIJIT@DIU-CSE-PORTFOLIO' },
                          { type: 'output', text: '      ( o.o )      ------------------------' },
                          { type: 'output', text: '       > ^ <       OS: React & Tailwind 4.0' },
                          { type: 'output', text: '                   Host: Daffodil International Univ.' },
                          { type: 'output', text: '                   Kernel: Gemini 3.5 AI Studio' },
                          { type: 'output', text: '                   Uptime: Infinite Dev Spirit' }
                        ]);
                      }
                    }, 50);
                  }}
                  className="bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 hover:border-zinc-300 dark:hover:border-zinc-600 px-2 py-0.5 rounded text-[10px] text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleCliSubmit} className="flex gap-2 items-center mt-2.5">
              <span className="text-zinc-500 dark:text-zinc-500 font-bold">avijit@terminal:~$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type a command (e.g., neofetch)..."
                className="flex-1 bg-transparent border-none text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:outline-none focus:ring-0 p-0 text-xs md:text-sm font-mono"
              />
              <button type="submit" className="hidden">Submit</button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
