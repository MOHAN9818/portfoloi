import React from 'react';
import { 
  MessageCircle, 
  Repeat2, 
  Heart, 
  Bookmark, 
  Share, 
  User, 
  Sparkles,
  Globe
} from 'lucide-react';

export default function SocialFeedPreview() {
  return (
    <div className="w-full bg-dark-950/90 rounded-xl border border-slate-700/50 p-4 sm:p-5 text-left font-sans select-none overflow-hidden relative shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
          <span className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            Social Timeline Feed
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
          React UI
        </span>
      </div>

      {/* Simulated Post Card */}
      <div className="mt-3.5 bg-dark-900/90 rounded-lg p-3.5 border border-white/5 space-y-2.5">
        {/* Author info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono">
              MS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white">Galla Mohan Sai</span>
                <span className="text-[10px] text-slate-400 font-mono">@mohansai</span>
              </div>
              <span className="text-[10px] text-slate-500">2h ago &bull; Public</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
            Interactive
          </span>
        </div>

        {/* Post body */}
        <p className="text-xs text-slate-200 leading-relaxed">
          Exploring modern reactive state patterns in React. Building clean, high-performance timeline feeds with component modularity. 🚀
        </p>

        {/* Simulated engagement stats */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-slate-400 text-[11px] px-1 font-mono">
          <div className="flex items-center gap-1 hover:text-sky-400 transition-colors">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>24</span>
          </div>
          <div className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
            <Repeat2 className="w-3.5 h-3.5" />
            <span>12</span>
          </div>
          <div className="flex items-center gap-1 text-rose-400/90">
            <Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
            <span>98</span>
          </div>
          <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
            <Bookmark className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Mini compose box preview */}
      <div className="mt-3 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5 text-xs text-slate-400">
        <span className="w-2 h-2 rounded-full bg-slate-500" />
        <span className="italic text-[11px]">Compose a new post...</span>
      </div>
    </div>
  );
}
