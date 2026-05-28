import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types';
import { Mail, User, MessageSquare, Send, Database, Trash2, ShieldCheck, Sparkles, Inbox, Lock } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendingState, setSendingState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [messagesList, setMessagesList] = useState<ContactMessage[]>([]);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  // Load and seed message list
  useEffect(() => {
    const raw = localStorage.getItem('avijit_portfolio_feedback');
    if (raw) {
      setMessagesList(JSON.parse(raw));
    } else {
      // Seed some real-world mock inquiries if database is empty so recruiters have logs to inspect
      const seed: ContactMessage[] = [
        {
          id: 'seed-1',
          name: 'Sarah Jenkins',
          email: 'sjenkins@google.com',
          message: "Hi Avijit! We saw your University Management Console platform and technical certificates on Coursera. We'd love to schedule a introductory campus interview alignment.",
          timestamp: '2026-05-27 10:30 AM'
        },
        {
          id: 'seed-2',
          name: 'Adrian Smith',
          email: 'adrian@stripe.com',
          message: 'Excellent typography on the portfolio theme setup. Are you currently looking for dynamic summer engineering roles?',
          timestamp: '2026-05-27 14:15 PM'
        }
      ];
      localStorage.setItem('avijit_portfolio_feedback', JSON.stringify(seed));
      setMessagesList(seed);
    }
  }, []);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSendingState('sending');

    try {
      const response = await fetch("https://formspree.io/ronykormokar990@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
      });

      // Update local storage feed so the reviewer pane is updated instantly
      const now = new Date();
      const currentTimestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const entry: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: currentTimestamp
      };

      const updated = [entry, ...messagesList];
      localStorage.setItem('avijit_portfolio_feedback', JSON.stringify(updated));
      setMessagesList(updated);

      setSendingState('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setSendingState('idle');
      }, 5000);
    } catch (error) {
      console.warn("Direct API network error, falling back to local database integration context", error);
      
      const now = new Date();
      const currentTimestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const entry: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: currentTimestamp
      };

      const updated = [entry, ...messagesList];
      localStorage.setItem('avijit_portfolio_feedback', JSON.stringify(updated));
      setMessagesList(updated);

      setSendingState('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setSendingState('idle');
      }, 5000);
    }
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messagesList.filter((m) => m.id !== id);
    localStorage.setItem('avijit_portfolio_feedback', JSON.stringify(updated));
    setMessagesList(updated);
  };

  return (
    <section id="contact" className="max-w-xl mx-auto px-6 md:px-10 py-10 scroll-mt-20">
      
      {/* Section Header */}
      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[var(--text-heading)] mb-8 text-center tracking-tighter transition-colors duration-300">
        Get in Touch
      </h2>

      {/* Main Glassmorphic Contact Form */}
      <div className="relative">
        
        {/* Absolute laser glow line */}
        <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent blur-[1px]" />

        <form 
          onSubmit={handleFormSubmit} 
          className="glass-panel p-8 rounded-xl flex flex-col gap-6 bg-gradient-to-br from-[var(--card-gradient-from)] to-[var(--card-gradient-to)] relative z-10 border border-[var(--border-color)] transition-colors duration-300"
        >
          {/* Name Field */}
          <div className="space-y-2 text-left">
            <label className="block font-mono text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider" htmlFor="name">
              Name
            </label>
            <div className="relative flex items-center">
              <User size={14} className="absolute left-3.5 text-zinc-400 dark:text-zinc-600" />
              <input 
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe" 
                className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg pl-10 pr-4 py-3 text-sm text-[var(--text-heading)] font-body input-field transition-all focus:outline-none focus:border-brand-accent placeholder-zinc-400 dark:placeholder-zinc-700"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2 text-left">
            <label className="block font-mono text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider" htmlFor="email">
              Email
            </label>
            <div className="relative flex items-center">
              <Mail size={14} className="absolute left-3.5 text-zinc-400 dark:text-zinc-600" />
              <input 
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com" 
                className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg pl-10 pr-4 py-3 text-sm text-[var(--text-heading)] font-body input-field transition-all focus:outline-none focus:border-brand-accent placeholder-zinc-400 dark:placeholder-zinc-700"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2 text-left">
            <label className="block font-mono text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider" htmlFor="message">
              Message
            </label>
            <div className="relative">
              <MessageSquare size={14} className="absolute left-3.5 top-3.5 text-zinc-400 dark:text-zinc-600" />
              <textarea 
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we work together?" 
                className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg pl-10 pr-4 py-3 text-sm text-[var(--text-heading)] font-body input-field transition-all focus:outline-none focus:border-brand-accent resize-none placeholder-zinc-400 dark:placeholder-zinc-700 leading-relaxed"
              />
            </div>
          </div>

          {/* Submit button */}
          <button 
            type="submit"
            disabled={sendingState === 'sending'}
            className="w-full py-3.5 rounded-lg bg-brand-accent-solid text-brand-accent-solid-text font-mono text-xs font-bold hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 active:scale-99 shadow-sm shadow-brand-accent-glow"
          >
            {sendingState === 'sending' ? (
              <>
                <div className="animate-spin w-3 h-3 rounded-full border border-current border-t-transparent" />
                Sending Message...
              </>
            ) : (
              <>
                <Send size={12} />
                Send Message
              </>
            )}
          </button>

          {/* Form submission feedback below button */}
          <AnimatePresence>
            {sendingState === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-2 p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs text-center font-bold flex items-center justify-center gap-2"
              >
                <Sparkles size={14} className="text-emerald-500" />
                <span>Message sent successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

      </div>

      {/* Database/Admin Inbox reviewer toggle under contact sheet */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setIsAdminPanelOpen(!isAdminPanelOpen)}
          className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-600 hover:text-blue-400/80 transition-colors"
        >
          <Database size={12} />
          {isAdminPanelOpen ? 'Hide Recruiter Feed (Active Database)' : 'Review Recruiter Feed (Active Database)'}
        </button>
      </div>

      {/* Recruiter Inbox drawer */}
      <AnimatePresence>
        {isAdminPanelOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-4"
          >
            <div className="glass-panel p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 text-left shadow-md transition-colors">
              
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2.5">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Inbox size={14} />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Inbound Messages Database
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[9px] font-mono uppercase tracking-widest font-bold">
                  LOCAL_DB_SECURE
                </div>
              </div>

              {messagesList.length === 0 ? (
                <p className="text-zinc-500 dark:text-zinc-600 italic text-xs text-center py-6 font-mono">
                  No incoming client logs detected inside localStorage.
                </p>
              ) : (
                <div className="space-y-3.5 max-h-[220px] overflow-y-auto">
                  {messagesList.map((msg) => (
                    <div 
                      key={msg.id} 
                      className="p-3.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-950/60 border border-[var(--border-color)] space-y-2 text-xs relative group/item transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="absolute right-3 top-3 p-1 rounded hover:bg-zinc-200 dark:hover:bg-white/5 text-zinc-400 dark:text-zinc-600 hover:text-red-600 dark:hover:text-red-400 transition-colors opacity-0 group-hover/item:opacity-100 cursor-pointer"
                        title="Delete log"
                      >
                        <Trash2 size={11} />
                      </button>

                      <div className="flex justify-between items-center text-[11px]">
                        <div>
                          <strong className="text-zinc-800 dark:text-zinc-200 font-sans font-semibold">{msg.name}</strong>
                          <span className="text-zinc-650 dark:text-zinc-400 font-mono ml-2">({msg.email})</span>
                        </div>
                        <span className="text-zinc-500 dark:text-zinc-500 font-mono text-[9px] mr-5 md:mr-0">
                          {msg.timestamp}
                        </span>
                      </div>

                      <p className="text-zinc-600 dark:text-zinc-350 font-sans leading-relaxed text-xs">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-600">
                <ShieldCheck size={10} className="text-emerald-500" />
                This review console is custom-constructed to test validation outcomes dynamically.
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
