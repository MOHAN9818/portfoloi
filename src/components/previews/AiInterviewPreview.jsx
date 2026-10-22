import React from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Mic, 
  CheckCircle2, 
  BarChart3, 
  FileText,
  MessageSquare,
  Bot
} from 'lucide-react';

export default function AiInterviewPreview() {
  return (
    <div className="w-full bg-dark-950/90 rounded-xl border border-indigo-500/30 p-4 sm:p-5 text-left font-sans select-none overflow-hidden relative shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="font-mono text-purple-300 font-semibold flex items-center gap-1">
            <Bot className="w-3.5 h-3.5" />
            AI Mock Session #42
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          Gemini 1.5 + RAG
        </span>
      </div>

      {/* Main simulated question card */}
      <div className="mt-3.5 space-y-3">
        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1 font-mono">
            <span>QUESTION 3 OF 5 &bull; SYSTEM DESIGN</span>
            <span className="text-cyan-400">Context Matched</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-100 leading-snug">
            "Explain how a Retrieval-Augmented Generation (RAG) pipeline mitigates LLM hallucination in production."
          </p>
        </div>

        {/* AI Evaluation & Feedback box */}
        <div className="bg-gradient-to-r from-purple-950/40 to-indigo-950/40 rounded-lg p-3 border border-indigo-500/25 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-purple-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              AI Feedback & Scoring
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              88 / 100
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Strong coverage of vector embeddings and semantic grounding. Suggested adding re-ranking mechanisms.
          </p>

          {/* Metrics bar */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] font-mono">
            <div className="bg-black/30 rounded p-1.5 text-center border border-white/5">
              <div className="text-slate-400">Clarity</div>
              <div className="text-cyan-300 font-semibold">92%</div>
            </div>
            <div className="bg-black/30 rounded p-1.5 text-center border border-white/5">
              <div className="text-slate-400">Technical</div>
              <div className="text-indigo-300 font-semibold">86%</div>
            </div>
            <div className="bg-black/30 rounded p-1.5 text-center border border-white/5">
              <div className="text-slate-400">Relevance</div>
              <div className="text-purple-300 font-semibold">90%</div>
            </div>
          </div>
        </div>

        {/* Action tags */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
          <span className="flex items-center gap-1 text-slate-300">
            <Mic className="w-3 h-3 text-red-400 animate-pulse" />
            Audio & Text Input
          </span>
          <span className="flex items-center gap-1 text-cyan-400">
            <FileText className="w-3 h-3" />
            PDF Export Ready
          </span>
        </div>
      </div>
    </div>
  );
}
