import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  Bell, 
  ArrowUpRight, 
  ArrowDownRight,
  Wallet
} from 'lucide-react';

export default function FinanceDashboardPreview() {
  return (
    <div className="w-full bg-dark-950/90 rounded-xl border border-blue-500/30 p-4 sm:p-5 text-left font-sans select-none overflow-hidden relative shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-blue-300 font-semibold flex items-center gap-1">
            <Wallet className="w-3.5 h-3.5" />
            Fin Tracker Dashboard
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
          <Bell className="w-2.5 h-2.5 text-amber-400" />
          Reminders Active
        </span>
      </div>

      {/* Financial metrics strip */}
      <div className="mt-3.5 grid grid-cols-2 gap-2.5">
        <div className="bg-emerald-950/25 border border-emerald-500/20 rounded-lg p-2.5">
          <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
            <span>Total Income</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
          <div className="text-base font-bold text-white mt-0.5">$3,450.00</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Oct Monthly Summary</div>
        </div>

        <div className="bg-rose-950/25 border border-rose-500/20 rounded-lg p-2.5">
          <div className="flex items-center justify-between text-[11px] text-rose-400 font-mono">
            <span>Total Expenses</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </div>
          <div className="text-base font-bold text-white mt-0.5">$1,280.00</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Budget on track</div>
        </div>
      </div>

      {/* Savings rate progress bar */}
      <div className="mt-3 bg-white/5 rounded-lg p-2.5 border border-white/5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-400">Monthly Savings Rate</span>
          <span className="text-cyan-400 font-bold">62.8%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 h-2 rounded-full" 
            style={{ width: '62.8%' }}
          />
        </div>
      </div>

      {/* Simulated transaction list */}
      <div className="mt-3 space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between bg-dark-900/80 px-2.5 py-1.5 rounded border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-200 font-medium">Stipend / Freelance Dev</span>
          </div>
          <span className="text-emerald-400 font-mono font-semibold">+$850.00</span>
        </div>
        <div className="flex items-center justify-between bg-dark-900/80 px-2.5 py-1.5 rounded border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span className="text-slate-200 font-medium">Cloud Server Hosting</span>
          </div>
          <span className="text-rose-400 font-mono font-semibold">-$45.00</span>
        </div>
      </div>
    </div>
  );
}
