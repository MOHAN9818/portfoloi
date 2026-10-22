import React from 'react';
import { 
  Award, 
  Briefcase, 
  CheckCircle, 
  FileCheck, 
  GraduationCap, 
  Layers,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getBadgeIcon = (id) => {
    switch (id) {
      case 'mern-cert':
        return Layers;
      case 'prodigy-internship':
        return Briefcase;
      case 'nptel-ai':
        return Award;
      default:
        return FileCheck;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certifications & Industry Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technical competencies in full-stack architecture, software internship experience, and AI search methodologies.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const Icon = getBadgeIcon(cert.id);
            const isInternship = cert.id === 'prodigy-internship';

            return (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top type & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500/10 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {cert.type}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-slate-400 mt-1">
                    {cert.issuer}
                  </div>

                  {/* Score if applicable */}
                  {cert.score && (
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                      <span>Examination Score: {cert.score}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-4">
                    {cert.description}
                  </p>
                </div>

                {/* Core Focus Area Footnote */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">
                    Competency Domain:
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    {cert.focus}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
