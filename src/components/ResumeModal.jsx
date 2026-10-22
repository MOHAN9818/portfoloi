import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Info,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-dark-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-white tracking-tight">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-slate-400">
                {personalInfo.name} &bull; {personalInfo.role}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto py-5 space-y-5 text-left pr-1">
          
          {/* Quick Notice about file location */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-white">Verified Resume File:</span> Ready for immediate download. To swap in your official resume PDF anytime, place your file at <code className="text-cyan-300 font-mono bg-black/40 px-1 py-0.5 rounded">public/resume.pdf</code>.
            </div>
          </div>

          {/* Education Summary */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/5 space-y-1">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <span className="font-bold text-white">B.Tech Computer Science and Engineering</span>
                <span className="text-slate-400 font-mono text-xs">2023–2027</span>
              </div>
              <div className="text-xs text-cyan-300">VIT-AP University, Amaravati</div>
              <div className="text-[11px] text-slate-400 mt-1">Currently Pursuing &bull; Amaravati, Andhra Pradesh</div>
            </div>

            <div className="bg-white/5 rounded-xl p-3.5 border border-white/5 space-y-1">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <span className="font-bold text-white">Intermediate Education</span>
                <span className="text-slate-400 font-mono text-xs">2021–2023</span>
              </div>
              <div className="text-xs text-emerald-400 font-mono font-semibold">Percentage: 96.5%</div>
            </div>
          </div>

          {/* Core Skills & Projects Summary */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>Key Technical Assets</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/5 text-xs text-slate-300 space-y-2">
              <div>
                <span className="text-slate-400 font-mono">Languages: </span>
                <span className="text-white">Java, JavaScript</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono">Web Stack: </span>
                <span className="text-white">React.js, Node.js, Express.js, MongoDB, REST APIs, JWT</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono">AI Systems: </span>
                <span className="text-white">Google Gemini API, Retrieval-Augmented Generation (RAG), Embeddings</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono">Live Projects: </span>
                <span className="text-cyan-300">AI Mock Interviewer, Fin Tracker, X Clone</span>
              </div>
            </div>
          </div>

          {/* Internship & Certifications */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Internship & Certifications</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/5 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Web Development Internship & Letter of Recommendation &bull; Prodigy InfoTech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>MERN Full Stack Web Development Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>NPTEL AI: Search Methods for Problem Solving (Score: 60/100)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Close
          </button>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open PDF</span>
          </a>

          <a
            href={personalInfo.resumePath}
            download="Galla_Mohan_Sai_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
}
