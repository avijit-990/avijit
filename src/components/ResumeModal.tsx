import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, MapPin, Mail, Briefcase, Terminal } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isPreparing, setIsPreparing] = useState(false);

  const handlePrint = () => {
    const printContent = resumeRef.current?.innerHTML;
    
    // Create professional print window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Avijit_Karmokar_Resume_2026</title>
            <style>
              body {
                font-family: 'Inter', system-ui, sans-serif;
                color: #1f2937;
                line-height: 1.5;
                padding: 30px;
                background: #ffffff;
                max-width: 850px;
                margin: 0 auto;
              }
              h1 {
                font-size: 28px;
                font-weight: 800;
                color: #1a365d;
                margin-top: 0;
                margin-bottom: 5px;
                letter-spacing: -0.02em;
              }
              h2 {
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #1a365d;
                border-bottom: 2px solid #e2e8f0;
                padding-bottom: 4px;
                margin-top: 25px;
                margin-bottom: 15px;
              }
              .header-section {
                background-color: #1a365d;
                color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                margin-bottom: 25px;
              }
              .header-title {
                color: #ffffff;
                font-size: 28px;
                font-weight: 800;
                margin: 0 0 5px 0;
              }
              .header-subtitle {
                font-size: 16px;
                color: #cbd5e1;
                margin: 0 0 15px 0;
              }
              .header-contact {
                font-size: 11.5px;
                color: #e2e8f0;
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
              }
              .grid-container {
                display: grid;
                grid-template-columns: 1.6fr 1fr;
                gap: 30px;
              }
              .col-left {
                /* main */
              }
              .col-right {
                /* sidebar */
                border-left: 1px solid #f1f5f9;
                padding-left: 20px;
              }
              .school-block, .cert-block, .project-block {
                margin-bottom: 18px;
              }
              .block-title-row {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
              }
              .block-title {
                font-size: 13px;
                font-weight: 700;
                color: #1f2937;
                margin: 0;
              }
              .block-date {
                font-size: 11px;
                color: #64748b;
                font-family: monospace;
              }
              .block-institution {
                font-size: 11.5px;
                font-weight: 600;
                color: #64748b;
                margin: 2px 0 5px 0;
              }
              .bullet-list {
                margin: 6px 0 0 0;
                padding-left: 18px;
              }
              .bullet-item {
                font-size: 11.5px;
                color: #4b5563;
                margin-bottom: 4px;
              }
              .skill-pill {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                color: #1a365d;
                margin-bottom: 8px;
                display: inline-block;
                margin-right: 5px;
              }
              .interest-item {
                font-size: 11.5px;
                color: #4b5563;
                margin-bottom: 6px;
              }
              .lang-pill {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                padding: 8px 12px;
                border-radius: 6px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 11.5px;
                margin-bottom: 8px;
              }
              .lang-name {
                font-weight: 700;
                color: #1f2937;
              }
              .lang-desc {
                font-size: 9px;
                font-weight: 700;
                background: #e2e8f0;
                color: #475569;
                padding: 2px 6px;
                border-radius: 3px;
                text-transform: uppercase;
              }
              @media print {
                body { padding: 0; }
              }
            </style>
          </head>
          <body>
            
            <div class="header-section">
              <h1 class="header-title">Avijit Karmokar</h1>
              <p class="header-subtitle">Computer Science &amp; Engineering Student</p>
              <div class="header-contact">
                <span>📍 Savar, Dhaka, Bangladesh</span>
                <span>✉️ ronykormokar990@gmail.com</span>
                <span>📞 +88 01641077033</span>
              </div>
            </div>

            <div class="grid-container">
              <div class="col-left">
                
                <h2>Professional Summary</h2>
                <p style="font-size: 12px; color: #4b5563; line-height: 1.6; margin-top: 0;">
                  Highly motivated Computer Science and Engineering student at Daffodil International University with a demonstrated foundation in artificial intelligence. Backed by exceptional academic performance (GPA 5.00 in both HSC and SSC) and certified by Google as an AI Professional. Adept at problem-solving, possessing strong technical troubleshooting abilities alongside refined public speaking and communication skills.
                </p>

                <h2>Education</h2>
                
                <div class="school-block">
                  <div class="block-title-row">
                    <h3 class="block-title">B.Sc. in Computer Science &amp; Engineering</h3>
                    <span class="block-date">May 2026 – Present</span>
                  </div>
                  <p class="block-institution">Daffodil International University</p>
                  <ul class="bullet-list">
                    <li class="bullet-item">Currently pursuing foundational computer science coursework.</li>
                    <li class="bullet-item">Focused on C programming and core algorithmic problem-solving.</li>
                  </ul>
                </div>

                <div class="school-block">
                  <div class="block-title-row">
                    <h3 class="block-title">Higher Secondary Certificate (HSC) - Science</h3>
                    <span class="block-date">2025</span>
                  </div>
                  <p class="block-institution">Savar Model College</p>
                  <ul class="bullet-list">
                    <li class="bullet-item">Achieved a perfect GPA of 5.00 out of 5.00.</li>
                  </ul>
                </div>

                <div class="school-block">
                  <div class="block-title-row">
                    <h3 class="block-title">Secondary School Certificate (SSC) - Science</h3>
                    <span class="block-date">2023</span>
                  </div>
                  <p class="block-institution">Baidgaon High School</p>
                  <ul class="bullet-list">
                    <li class="bullet-item">Achieved a perfect GPA of 5.00 out of 5.00.</li>
                  </ul>
                </div>

                <h2>Certifications</h2>

                <div class="cert-block">
                  <div class="block-title-row">
                    <h3 class="block-title">
                      <a href="https://coursera.org/verify/professional-cert/25K1VZH58PMB" target="_blank" rel="noopener noreferrer" style="color: #1a365d; text-decoration: underline; font-weight: 700;">Google AI Professional Certificate</a>
                    </h3>
                    <span class="block-date">Issued: May 2026</span>
                  </div>
                  <p class="block-institution">Coursera</p>
                  <p style="font-size: 11.5px; color: #4b5563; margin: 4px 0 0 0;">
                    Completed a 7-course program demonstrating fluency in AI applications for brainstorming, research, content creation, data analysis, and coding.
                  </p>
                </div>

                <div class="cert-block" style="margin-top: 15px;">
                  <div class="block-title-row">
                    <h3 class="block-title">Speak To Win: Season 1</h3>
                    <span class="block-date">Issued: May 2026</span>
                  </div>
                  <p class="block-institution">Seenjoy Academy</p>
                  <p style="font-size: 11.5px; color: #4b5563; margin: 4px 0 0 0;">
                    Successfully completed rigorous public speaking and communication training to enhance presentation and interpersonal skills.
                  </p>
                </div>

                <div class="cert-block" style="margin-top: 15px;">
                  <div class="block-title-row">
                    <h3 class="block-title">Cyber Hygiene Training</h3>
                    <span class="block-date">May 2026</span>
                  </div>
                  <p class="block-institution">The Asia Foundation &amp; SAJIDA Foundation</p>
                  <p style="font-size: 11.5px; color: #4b5563; margin: 4px 0 0 0;">
                    Trained in fundamental cybersecurity practices and digital safety protocols.
                  </p>
                </div>

              </div>
              <div class="col-right">
                
                <h2>Core Skills</h2>
                <div>
                  <div class="skill-pill">C Programming</div>
                  <div class="skill-pill">AI &amp; Prompt Engineering</div>
                  <div class="skill-pill">Data Analysis Basics</div>
                  <div class="skill-pill">Electronics Troubleshooting</div>
                  <div class="skill-pill">Public Speaking</div>
                  <div class="skill-pill">Technical Communication</div>
                </div>

                <h2 style="margin-top: 25px;">Projects &amp; Hobbies</h2>
                
                <div style="margin-bottom: 15px;">
                  <h4 style="font-size: 12.5px; font-weight: 700; margin: 0 0 4px 0; color: #1f2937;">Hardware Modding</h4>
                  <p style="font-size: 11px; color: #4b5563; margin: 0; line-height: 1.4;">
                    Practical experience in modifying and repairing electronics, including Bluetooth speaker amplifiers and motorized appliances.
                  </p>
                </div>

                <div style="margin-bottom: 15px;">
                  <h4 style="font-size: 12.5px; font-weight: 700; margin: 0 0 4px 0; color: #1f2937;">Tech Optimization</h4>
                  <p style="font-size: 11px; color: #4b5563; margin: 0; line-height: 1.4;">
                    Strong interest in tech ecosystems, particularly optimizing iOS hardware performance and ensuring peripheral compatibility.
                  </p>
                </div>

                <div>
                  <h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin: 0 0 6px 0;">Other Interests</h4>
                  <div class="interest-item">• Fitness &amp; Weight Training</div>
                  <div class="interest-item">• Die-cast Car Collection</div>
                  <div class="interest-item">• Competitive Mobile Gaming</div>
                </div>

                <h2 style="margin-top: 25px;">Languages</h2>
                <div class="lang-pill">
                  <span class="lang-name">Bengali</span>
                  <span class="lang-desc">Native</span>
                </div>
                <div class="lang-pill">
                  <span class="lang-name">English</span>
                  <span class="lang-desc" style="background: #e0e7ff; color: #4f46e5;">Professional</span>
                </div>

              </div>
            </div>

          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  };

  const handleFakeDownload = () => {
    setIsPreparing(true);
    setTimeout(() => {
      handlePrint();
      setIsPreparing(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          {/* Backdrop Closer */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          {/* Dialog Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Modal Actions Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)] bg-zinc-100/50 dark:bg-[#161619]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-accent-bg text-brand-accent">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[var(--text-heading)]">Avijit Karmokar's Resume</h3>
                  <p className="text-[11px] font-mono text-zinc-500">Curriculum Vitae • Live Portfolio Integration</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  disabled={isPreparing}
                  className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:text-zinc-955 dark:hover:text-white active:scale-95 transition-all cursor-pointer disabled:opacity-50 shadow-sm"
                  title="Print Resume"
                >
                  <Printer size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleFakeDownload}
                  disabled={isPreparing}
                  className="flex items-center gap-2 bg-brand-accent-solid text-brand-accent-solid-text px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-all active:scale-95 cursor-pointer disabled:opacity-50 shadow-sm border border-transparent"
                >
                  <Download size={14} className={isPreparing ? "animate-bounce" : ""} />
                  {isPreparing ? "Generating PDF..." : "Download PDF"}
                </button>
                <div className="w-[1px] h-6 bg-[var(--border-color)] mx-1" />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-955 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-zinc-50 dark:bg-[#0e0e10]/40">
              
              {/* Inside paper sheet emulation */}
              <div 
                ref={resumeRef}
                className="bg-white text-zinc-800 rounded-xl shadow-2xl border border-zinc-200 font-sans max-w-[800px] mx-auto text-left overflow-hidden"
              >
                {/* Header Banner - Navy BG */}
                <div className="bg-[#1A365D] text-white p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                  <div className="space-y-3 text-center md:text-left flex-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">Avijit Karmokar</h1>
                    <p className="text-base md:text-lg font-light text-zinc-300">Computer Science &amp; Engineering Student</p>
                    
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1.5 pt-2 text-[11.5px] text-zinc-300 font-mono">
                      <span className="flex items-center gap-1 justify-center md:justify-start">
                        <MapPin size={12} className="text-cyan-400" /> Savar, Dhaka, Bangladesh
                      </span>
                      <span className="hidden sm:inline opacity-40">|</span>
                      <span className="flex items-center gap-1 justify-center md:justify-start">
                        <Mail size={12} className="text-cyan-400" /> ronykormokar990@gmail.com
                      </span>
                      <span className="hidden sm:inline opacity-40">|</span>
                      <span className="flex items-center gap-1 justify-center md:justify-start">
                        <span>Phone:</span> +88 01641077033
                      </span>
                    </div>
                  </div>

                  {/* Profile Image with Ring structure mirroring the PDF */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-zinc-800 flex items-center justify-center relative">
                      <img 
                        src="/avijit/screen.png" 
                        alt="Avijit Karmokar"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjQWrvwMVPVt6qeLUrniu2VRxW5imlSka3z2_WsNJyhSWh5EFA9QXNtjEEs0rMLc79x_pIJScA3eCzWvZgkKzECktVdbTTiXXj0XjEZH7IoM8lwC0_xnG2l6gCt7k8fEUNGvuc_lWII6hXnU1FpDwKG5OemlBxASRrSQmTDnm19mbJKMtglttTuQovZZHQ0rCSmFP5MwfO-rr8m3dktdqop7-xO11j-A1EFbo1e3lJQETHhBsrvZQHGmtjPqERqN1osAm6cSPf6CVX";
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Outer concentric stroke ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-white/10 pointer-events-none" />
                  </div>
                </div>

                {/* Sub-body columns */}
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                  
                  {/* Left Column (Main body) */}
                  <div className="md:col-span-7 space-y-8">
                    
                    {/* Professional Summary */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Professional Summary
                      </h2>
                      <p className="text-[12px] md:text-[12.5px] text-zinc-600 leading-relaxed font-normal">
                        Highly motivated Computer Science and Engineering student at Daffodil International University with a demonstrated foundation in artificial intelligence. Backed by exceptional academic performance (GPA 5.00 in both HSC and SSC) and certified by Google as an AI Professional. Adept at problem-solving, possessing strong technical troubleshooting abilities alongside refined public speaking and communication skills.
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Education
                      </h2>
                      
                      <div className="space-y-4">
                        {/* BSc */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-[13px] font-bold text-zinc-800">B.Sc. in Computer Science &amp; Engineering</h3>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 font-semibold flex-shrink-0">May 2026 – Present</span>
                          </div>
                          <p className="text-[11px] md:text-[11.5px] font-semibold text-zinc-500">Daffodil International University</p>
                          <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[11px] md:text-[11.5px] text-zinc-600">
                            <li>Currently pursuing foundational computer science coursework.</li>
                            <li>Focused on C programming and core algorithmic problem-solving.</li>
                          </ul>
                        </div>

                        {/* HSC */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-[13px] font-bold text-zinc-800">Higher Secondary Certificate (HSC) - Science</h3>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 font-semibold flex-shrink-0">2025</span>
                          </div>
                          <p className="text-[11px] md:text-[11.5px] font-semibold text-zinc-500">Savar Model College</p>
                          <ul className="mt-1 list-disc pl-4 text-[11px] md:text-[11.5px] text-zinc-600">
                            <li>Achieved a perfect GPA of <span className="font-bold text-[#1A365D]">5.00 out of 5.00</span>.</li>
                          </ul>
                        </div>

                        {/* SSC */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-[13px] font-bold text-zinc-800">Secondary School Certificate (SSC) - Science</h3>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 font-semibold flex-shrink-0">2023</span>
                          </div>
                          <p className="text-[11px] md:text-[11.5px] font-semibold text-zinc-500">Baidgaon High School</p>
                          <ul className="mt-1 list-disc pl-4 text-[11px] md:text-[11.5px] text-zinc-600">
                            <li>Achieved a perfect GPA of <span className="font-bold text-[#1A365D]">5.00 out of 5.00</span>.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Certifications
                      </h2>
                      
                      <div className="space-y-4">
                        {/* Cert 1 */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <a 
                              href="https://coursera.org/verify/professional-cert/25K1VZH58PMB" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[13px] font-bold text-[#1A365D] hover:text-blue-600 underline transition-colors"
                            >
                              Google AI Professional Certificate ↗
                            </a>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 flex-shrink-0">Issued: May 2026</span>
                          </div>
                          <p className="text-[11px] font-semibold text-zinc-500">Coursera</p>
                          <p className="mt-1 text-[11px] md:text-[11.5px] text-zinc-600 leading-relaxed">
                            Completed a 7-course program demonstrating fluency in AI applications for brainstorming, research, content creation, data analysis, and coding.
                          </p>
                        </div>

                        {/* Cert 2 */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-[13px] font-bold text-zinc-800">Speak To Win: Season 1</h4>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 flex-shrink-0">Issued: May 2026</span>
                          </div>
                          <p className="text-[11px] font-semibold text-zinc-500">Seenjoy Academy</p>
                          <p className="mt-1 text-[11px] md:text-[11.5px] text-zinc-600 leading-relaxed">
                            Successfully completed rigorous public speaking and communication training to enhance presentation and interpersonal skills.
                          </p>
                        </div>

                        {/* Cert 3 */}
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-[13px] font-bold text-zinc-800">Cyber Hygiene Training</h4>
                            <span className="text-[10px] md:text-[11px] font-mono text-zinc-500 flex-shrink-0">May 2026</span>
                          </div>
                          <p className="text-[11px] font-semibold text-zinc-500">The Asia Foundation &amp; SAJIDA Foundation</p>
                          <p className="mt-1 text-[11px] md:text-[11.5px] text-zinc-600 leading-relaxed">
                            Trained in fundamental cybersecurity practices and digital safety protocols.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column (Sidebar panel) */}
                  <div className="md:col-span-5 space-y-8 border-t md:border-t-0 md:border-l border-zinc-100 pt-6 md:pt-0 md:pl-8">
                    
                    {/* Core Skills */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-3.5 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Core Skills
                      </h2>
                      <div className="flex flex-col gap-2">
                        {[
                          'C Programming',
                          'AI & Prompt Engineering',
                          'Data Analysis Basics',
                          'Electronics Troubleshooting',
                          'Public Speaking',
                          'Technical Communication'
                        ].map((skill) => (
                          <div 
                            key={skill}
                            className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg text-[11px] md:text-[11.5px] font-bold text-[#1A365D] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A365D]" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects & Hobbies */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Projects &amp; Hobbies
                      </h2>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-[12px] md:text-[12.5px] font-bold text-zinc-800">Hardware Modding</h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed mt-1">
                            Practical experience in modifying and repairing electronics, including Bluetooth speaker amplifiers and motorized appliances.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[12px] md:text-[12.5px] font-bold text-zinc-800">Tech Optimization</h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed mt-1">
                            Strong interest in tech ecosystems, particularly optimizing iOS hardware performance and ensuring peripheral compatibility.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[10px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Other Interests</h4>
                          <ul className="mt-1.5 space-y-1 text-[11px] text-zinc-600 font-semibold">
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#1A365D]">•</span> Fitness &amp; Weight Training
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#1A365D]">•</span> Die-cast Car Collection
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#1A365D]">•</span> Competitive Mobile Gaming
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A365D] border-b-2 border-[#1A365D]/20 pb-1 mb-3.5 flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-[#1A365D] rounded-xs" />
                        Languages
                      </h2>
                      <div className="space-y-2">
                        <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg flex justify-between items-center text-[11px] md:text-[11.5px]">
                          <span className="font-bold text-zinc-800">Bengali</span>
                          <span className="bg-zinc-200/60 text-zinc-600 font-mono text-[8.5px] uppercase px-1.5 py-0.5 rounded-sm font-bold">Native</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg flex justify-between items-center text-[11px] md:text-[11.5px]">
                          <span className="font-bold text-zinc-800">English</span>
                          <span className="bg-indigo-50 text-indigo-600 font-mono text-[8.5px] uppercase px-1.5 py-0.5 rounded-sm font-bold">Professional</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              
            </div>

            {/* Resume Callout Info Footer */}
            <div className="px-6 py-4 border-t border-white/5 bg-[#101012] flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-3">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Terminal size={12} className="text-brand-accent" />
                Technical Resume generated securely in React.
              </span>
              <span className="text-[11px]">Ready for active Recruiter and Human Resources evaluation.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
