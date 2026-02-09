
import React from 'react';
import { TeamMember } from '../types';

const MEMBERS: TeamMember[] = [
  { id: '1', name: 'Marcus Vinicius', role: 'Architect', avatar: 'https://picsum.photos/seed/marcus/100/100', trend: [35, 10, 30, 15] },
  { id: '2', name: 'Isabella Rios', role: 'Product', avatar: 'https://picsum.photos/seed/isabella/100/100', trend: [25, 5, 25, 10] },
];

const Dashboard: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="px-6 pt-12 pb-6 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">SquadPulse v2.0</p>
          <h1 className="text-2xl font-black mt-1">Visão Geral</h1>
        </div>
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <span className="material-icons-round text-primary">insights</span>
        </div>
      </header>

      <main className="px-6 space-y-6">
        {/* Business Vitals */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-card-dark border border-zinc-800 p-5 rounded-[28px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
               <span className="material-icons-round text-primary">trending_up</span>
            </div>
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Faturamento Mês</p>
            <h3 className="text-xl font-black leading-none">R$ 84.2k</h3>
            <div className="mt-3 text-[10px] font-bold text-primary">+14% vs u.m</div>
          </div>
          <div className="bg-card-dark border border-zinc-800 p-5 rounded-[28px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
               <span className="material-icons-round text-primary">pie_chart</span>
            </div>
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">ROI Global</p>
            <h3 className="text-xl font-black leading-none">3.8x</h3>
            <div className="mt-3 text-[10px] font-bold text-primary">Saudável</div>
          </div>
        </section>

        {/* Efficiency Card */}
        <section className="bg-primary p-6 rounded-[32px] text-black shadow-[0_20px_40px_-15px_rgba(0,255,136,0.3)]">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-black text-xl leading-tight">Eficiência Operacional</h2>
            <span className="bg-black/10 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest">Semana 12</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-black tracking-tighter">92%</span>
            <span className="text-xs font-bold mb-2 opacity-70">↑ 4% hoje</span>
          </div>
        </section>

        {/* Core Members Mini */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Core Team</h2>
            <span className="material-icons-round text-sm text-slate-600">more_horiz</span>
          </div>
          <div className="space-y-2">
            {MEMBERS.map((member) => (
              <div key={member.id} className="bg-zinc-900/40 border border-zinc-800/50 p-3 rounded-2xl flex items-center gap-3">
                <img src={member.avatar} className="w-8 h-8 rounded-full grayscale" alt="" />
                <div className="flex-1">
                  <p className="text-xs font-bold">{member.name}</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">{member.role}</p>
                </div>
                <div className="w-12 h-4 bg-zinc-800 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <button className="w-full bg-zinc-900 text-white p-5 rounded-3xl flex items-center justify-between border border-zinc-800 hover:border-primary/50 transition-all group">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-xl">
              <span className="material-icons-round text-primary">auto_awesome</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm">Insight do Dia</h3>
              <p className="text-[10px] text-slate-500 font-medium">IA analisando seus relatórios...</p>
            </div>
          </div>
          <span className="material-icons-round text-slate-700 group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
