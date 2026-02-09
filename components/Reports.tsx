
import React, { useState } from 'react';
import { WeeklyReport } from '../types';

const Reports: React.FC = () => {
  // Dados mockados para simular "vinda do backend"
  const history: WeeklyReport[] = [
    { id: '1', date: 'Semana 01/03', revenue: 15000, profit: 4500, roi: 3.2, tasksCompleted: 24, highlights: 'Lançamento campanha X' },
    { id: '2', date: 'Semana 08/03', revenue: 18500, profit: 5200, roi: 3.5, tasksCompleted: 31, highlights: 'Otimização de checkout' },
  ];

  const current = history[history.length - 1];
  const previous = history[history.length - 2];

  const calcDiff = (curr: number, prev: number) => {
    const diff = ((curr - prev) / prev) * 100;
    return {
      value: diff.toFixed(1),
      isPositive: diff >= 0
    };
  };

  const revenueDiff = calcDiff(current.revenue, previous.revenue);
  const profitDiff = calcDiff(current.profit, previous.profit);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 px-6 pt-12">
      <header className="mb-8">
        <h1 className="text-3xl font-black tracking-tight">Relatórios Semanais</h1>
        <p className="text-slate-500 text-sm">Compare e planeje sua próxima semana.</p>
      </header>

      {/* Form Card */}
      <section className="bg-card-dark border border-zinc-800 rounded-[32px] p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <span className="material-icons-round">add_chart</span>
          </div>
          <h2 className="font-bold">Novo Relatório</h2>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 mb-1 block tracking-widest">Faturamento (R$)</label>
              <input type="number" placeholder="0,00" className="w-full bg-zinc-900 border-none rounded-xl text-sm font-bold focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 mb-1 block tracking-widest">Lucro Líquido (R$)</label>
              <input type="number" placeholder="0,00" className="w-full bg-zinc-900 border-none rounded-xl text-sm font-bold focus:ring-1 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 mb-1 block tracking-widest">Destaques da Semana</label>
            <textarea placeholder="O que foi feito?" rows={2} className="w-full bg-zinc-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-primary" />
          </div>
          <button className="w-full bg-primary text-black font-black py-4 rounded-2xl hover:brightness-110 active:scale-95 transition-all">
            SALVAR RELATÓRIO
          </button>
        </div>
      </section>

      {/* Comparison section */}
      <section className="space-y-4 pb-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">Performance vs Semana Anterior</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {/* Revenue Compare */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Faturamento</p>
              <h4 className="text-xl font-black">R$ {current.revenue.toLocaleString()}</h4>
            </div>
            <div className={`flex items-center gap-1 ${revenueDiff.isPositive ? 'text-primary' : 'text-red-500'}`}>
              <span className="material-icons-round text-sm">{revenueDiff.isPositive ? 'trending_up' : 'trending_down'}</span>
              <span className="font-mono font-bold">{revenueDiff.value}%</span>
            </div>
          </div>

          {/* Profit Compare */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lucro</p>
              <h4 className="text-xl font-black">R$ {current.profit.toLocaleString()}</h4>
            </div>
            <div className={`flex items-center gap-1 ${profitDiff.isPositive ? 'text-primary' : 'text-red-500'}`}>
              <span className="material-icons-round text-sm">{profitDiff.isPositive ? 'trending_up' : 'trending_down'}</span>
              <span className="font-mono font-bold">{profitDiff.value}%</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/80 p-6 rounded-3xl border border-dashed border-zinc-700">
           <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Projeção Semana Que Vem</h4>
           <p className="text-sm text-slate-300 font-medium">Com base no crescimento de {revenueDiff.value}%, a meta estimada para o faturamento é de <span className="text-white font-bold">R$ {(current.revenue * (1 + parseFloat(revenueDiff.value)/100)).toLocaleString()}</span>.</p>
        </div>
      </section>
    </div>
  );
};

export default Reports;
