import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Terminal,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Frontend', 'Backend', 'AI & ML', 'Languages', 'Tools & DB'];

  const filteredCategories = skillsData.filter((group) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Frontend') return group.category.includes('Frontend');
    if (selectedFilter === 'Backend') return group.category.includes('Backend');
    if (selectedFilter === 'AI & ML') return group.category.includes('AI');
    if (selectedFilter === 'Languages') return group.category.includes('Languages');
    if (selectedFilter === 'Tools & DB') return group.category.includes('Tools') || group.category.includes('Databases');
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brand-violet/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-medium text-violet-400">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skills & Modern Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured skillsets gained through hands-on project engineering, course curricula, and practical web deployments.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            const isAI = group.category.includes('AI');

            return (
              <div
                key={group.category}
                className={`glass-card rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isAI 
                    ? 'border-indigo-500/30 hover:border-indigo-400/60 shadow-lg shadow-indigo-950/30' 
                    : 'border-white/10 hover:border-blue-500/40'
                }`}
              >
                {isAI && (
                  <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-semibold font-mono px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Specialized Focus</span>
                  </div>
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isAI 
                        ? 'bg-gradient-to-tr from-purple-500/20 to-indigo-500/30 text-purple-300 border border-purple-500/30' 
                        : 'bg-white/5 text-cyan-400 border border-white/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          isAI
                            ? 'bg-purple-950/40 text-purple-200 border border-purple-500/25 hover:border-purple-400/50'
                            : 'bg-white/5 text-slate-200 border border-white/10 hover:border-blue-400/40 hover:text-white'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Applied in projects</span>
                  <span className="text-slate-400 font-sans">Tested & Deployed</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
