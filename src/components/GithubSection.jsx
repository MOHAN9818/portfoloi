import React, { useState } from 'react';
import { 
  ExternalLink, 
  GitFork, 
  Star, 
  Terminal, 
  Code2, 
  Calendar, 
  Sparkles, 
  GitBranch 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function GithubSection() {
  const [imgError, setImgError] = useState(false);

  const featuredRepos = [
    {
      name: "mock-interview",
      description: "AI Mock Interviewer platform built with React, Node.js, Express, MongoDB, and Google Gemini API (RAG architecture).",
      url: "https://github.com/MOHAN9818/mock-interview",
      tech: ["JavaScript", "React", "Node.js", "Gemini API"],
      status: "Public Repository"
    },
    {
      name: "expensetrackernew",
      description: "Full-stack personal finance and expense tracking application with monthly analytics and reminder alerts.",
      url: "https://github.com/MOHAN9818/expensetrackernew",
      tech: ["React", "Express", "MongoDB", "JWT"],
      status: "Public Repository"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Info & CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB ACTIVITY & SOURCE CODE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Open Source & Code Contributions
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Explore the source code, commit history, and ongoing architectural experiments across my public repositories.
              </p>

              {/* GitHub Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit @MOHAN9818 on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <span className="text-xs font-mono text-slate-400">
                  Handle: <span className="text-white font-semibold">MOHAN9818</span>
                </span>
              </div>
            </div>

            {/* Right Column: Featured Repos Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Featured Verified Repositories
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-dark-950/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 block group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold text-white group-hover:text-cyan-300 font-mono transition-colors">
                          MOHAN9818/{repo.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {repo.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {repo.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* GitHub contribution activity graph / fallback */}
              <div className="mt-4 p-4 rounded-xl bg-dark-950/50 border border-white/5 text-center">
                {!imgError ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        Live Contribution Chart
                      </span>
                      <span className="text-slate-500">MOHAN9818</span>
                    </div>
                    <img
                      src="https://ghchart.rshah.org/38bdf8/MOHAN9818"
                      alt="Galla Mohan Sai GitHub Contributions"
                      onError={() => setImgError(true)}
                      className="w-full max-w-full rounded opacity-90 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="text-xs font-mono text-slate-400 py-2">
                    View active commit streams directly on <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">GitHub profile</a>.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
