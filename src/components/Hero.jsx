import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-blue/20 via-brand-violet/20 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Internships & Collaborations</span>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <span className="text-cyan-400 font-mono hidden sm:inline">Graduating 2027</span>
            </div>

            {/* Name & Animated Role */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 font-mono">
                Hello, World &bull; I am
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                <span className="block">{personalInfo.name}</span>
              </h1>
              
              {/* Rotating Role Pill */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold font-mono">
                  <span className="text-slate-500">&gt;</span>
                  <span 
                    key={roleIndex} 
                    className="text-gradient-primary animate-fadeIn transition-all duration-300"
                  >
                    {personalInfo.animatedRoles[roleIndex]}
                  </span>
                  <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse-subtle" />
                </div>
              </div>
            </div>

            {/* Hero Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
              {personalInfo.heroHeadline}
            </p>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Primary: View My Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 hover:text-white shadow-sm transition-all duration-200 active:scale-[0.99]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>

              {/* GitHub Link Button */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
                title="View GitHub Profile: MOHAN9818"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>MERN Full Stack</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Gemini API & RAG</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>3+ Live Deployments</span>
              </span>
            </div>

          </div>

          {/* Right Column: Code & Tech Abstract Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative gradient border card */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/40 via-violet-500/20 to-transparent shadow-2xl shadow-blue-900/20">
                <div className="rounded-2xl bg-dark-900/90 backdrop-blur-xl border border-white/5 p-5 space-y-4">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400">developer.profile.ts</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>

                  {/* Code Editor Body */}
                  <div className="font-mono text-xs text-slate-300 space-y-1.5 leading-relaxed overflow-x-auto">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-cyan-300">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">university:</span>{' '}
                      <span className="text-cyan-300">"VIT-AP University"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-cyan-300">"B.Tech CSE (2023-2027)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">focus:</span> [
                      <span className="text-emerald-300">"Full-Stack Web"</span>,{' '}
                      <span className="text-emerald-300">"AI/ML Systems"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-indigo-300">"React"</span>,{' '}
                      <span className="text-indigo-300">"Node.js"</span>,{' '}
                      <span className="text-indigo-300">"Express"</span>,{' '}
                      <span className="text-indigo-300">"MongoDB"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">aiIntegration:</span> [
                      <span className="text-amber-300">"Google Gemini"</span>,{' '}
                      <span className="text-amber-300">"RAG Architecture"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">activeProjects:</span>{' '}
                      <span className="text-blue-400">3</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">openToWork:</span>{' '}
                      <span className="text-emerald-400">true</span>
                    </div>
                    <div>&#125;;</div>
                  </div>

                  {/* Mini Interactive Preview Strip */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                      <div className="text-[11px] text-slate-400">University</div>
                      <div className="text-xs font-semibold text-slate-200">VIT-AP Amaravati</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                      <div className="text-[11px] text-slate-400">Expected Batch</div>
                      <div className="text-xs font-semibold text-cyan-400">Graduating 2027</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Tech Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-dark-850/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-cyan-950/50 hidden sm:flex">
                <Code2 className="w-3.5 h-3.5" />
                <span>React + Node.js</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark-850/90 backdrop-blur-md border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-purple-950/50 hidden sm:flex">
                <Cpu className="w-3.5 h-3.5" />
                <span>Gemini API + RAG</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
