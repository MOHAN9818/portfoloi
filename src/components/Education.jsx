import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal foundations in Computer Science and Engineering, combining theory with modern practical application.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent">
          {educationData.map((item, index) => {
            const isUniversity = index === 0;

            return (
              <div 
                key={item.degree}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Timeline node dot */}
                <div className={`absolute left-3.5 sm:left-6 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-2 ${
                  isUniversity 
                    ? 'bg-blue-500 border-dark-950 ring-4 ring-blue-500/20' 
                    : 'bg-purple-500 border-dark-950 ring-4 ring-purple-500/20'
                }`} />

                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/5 text-cyan-400 border border-white/10 w-fit">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-blue-400 mt-1">
                    {item.institution}
                  </div>

                  {item.score && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>Academic Performance: {item.score}</span>
                    </div>
                  )}

                  {item.status && !item.score && (
                    <div className="mt-2 text-xs font-mono text-slate-400">
                      Status: <span className="text-emerald-400 font-semibold">{item.status}</span>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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
