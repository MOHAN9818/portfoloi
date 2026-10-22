import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Rocket, 
  CheckCircle2, 
  Terminal,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightIcons = [
    GraduationCap,
    Code2,
    BrainCircuit,
    Rocket
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Driven by Curiosity, Powered by Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Translating core computer science principles into robust web applications and intelligent interfaces.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
                Background & Engineering Focus
              </h3>
              
              <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed text-base">
                <p>
                  {personalInfo.aboutText}
                </p>
              </div>

              {/* Verified academic facts */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Current Program</div>
                    <div className="text-sm font-semibold text-white">B.Tech Computer Science</div>
                    <div className="text-xs text-slate-400">VIT-AP University (2023–2027)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">Amaravati, Andhra Pradesh</div>
                    <div className="text-xs text-slate-400">India</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Practical Engineering Philosophy */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Practical Product Mindset</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  I believe the best way to understand systems is to build and deploy them. Every project—from database schema design and authentication to frontend responsiveness—is an opportunity to craft dependable, user-first software.
                </p>
              </div>
            </div>

          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-slate-300 font-mono flex items-center gap-2">
              <span className="text-cyan-400">#</span> CORE FOCUS AREAS
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {personalInfo.highlights.map((highlight, idx) => {
                const Icon = highlightIcons[idx] || CheckCircle2;
                return (
                  <div 
                    key={highlight.title}
                    className="glass-card p-4.5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {highlight.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Academic Credential Card */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-dark-850 to-dark-900 border border-white/10 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">Academic Merit</span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Verified
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                96.5% <span className="text-xs font-normal text-slate-400">Intermediate Percentage (2021–2023)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Demonstrated strong analytical rigor and foundational mathematics proficiency leading into CSE studies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
