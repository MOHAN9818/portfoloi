import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Lock, 
  Layers, 
  CheckCircle2, 
  FolderGit2, 
  Clock, 
  Brain, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects, academicProject } from '../data/portfolioData';
import AiInterviewPreview from './previews/AiInterviewPreview';
import FinanceDashboardPreview from './previews/FinanceDashboardPreview';
import SocialFeedPreview from './previews/SocialFeedPreview';

export default function Projects() {
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeatures = (id) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderPreview = (type) => {
    switch (type) {
      case 'ai-interview':
        return <AiInterviewPreview />;
      case 'finance-dashboard':
        return <FinanceDashboardPreview />;
      case 'social-feed':
        return <SocialFeedPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-900/60">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Practical Systems & Live Deployments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered with modern frontend frameworks, backend APIs, persistent databases, and AI model integrations. Every project is accessible online.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => {
            const isFeaturedAI = project.id === 'ai-mock-interviewer';
            const isFeaturesOpen = !!expandedFeatures[project.id];

            return (
              <div
                key={project.id}
                className={`rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 relative ${
                  isFeaturedAI
                    ? 'bg-gradient-to-b from-dark-850 to-dark-900 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/40'
                    : 'glass-card border border-white/10'
                }`}
              >
                {/* Visual Accent Glow */}
                <div 
                  className={`absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl pointer-events-none -z-10`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Project Information */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Badge row */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold font-mono flex items-center gap-1.5 ${
                        isFeaturedAI
                          ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/40'
                          : 'bg-blue-500/10 text-cyan-400 border border-blue-500/20'
                      }`}>
                        {isFeaturedAI && <Sparkles className="w-3 h-3 text-purple-400" />}
                        <span>{project.featuredBadge}</span>
                      </span>

                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live on Vercel
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Capabilities List */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                          Key Implemented Features
                        </span>
                        <button
                          onClick={() => toggleFeatures(project.id)}
                          className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                        >
                          <span>{isFeaturesOpen ? 'Show Less' : `View All (${project.features.length})`}</span>
                          {isFeaturesOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {project.features.slice(0, isFeaturesOpen ? project.features.length : 4).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 bg-dark-950/40 p-2 rounded-lg border border-white/5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links: Live Demo & Source Code */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
                      >
                        <span>View Live Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Source Code</span>
                        </a>
                      ) : (
                        <div 
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/5 cursor-default"
                          title="Source repository is private or unlisted"
                        >
                          <Lock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Source Private</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Interactive Preview Mockup */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full">
                      {renderPreview(project.previewType)}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Section: Academic Machine Learning Research Project */}
        <div className="mt-16">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {academicProject.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {academicProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {academicProject.title}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 self-start sm:self-center shrink-0">
                <Brain className="w-6 h-6" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {academicProject.description}
                </p>
                <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-200">Research Focus:</span> Balancing robust traffic sign visual recognition across distributed edge nodes while ensuring raw training data and client model gradients remain protected through rigorous differential privacy mechanisms.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Areas of Active Exploration
                </div>
                <div className="space-y-2">
                  {academicProject.areasOfExploration.map((area) => (
                    <div 
                      key={area}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
