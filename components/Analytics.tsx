
import React, { useState, useMemo } from 'react';
import { 
  AreaChart, Area, ResponsiveContainer, XAxis, Tooltip
} from 'recharts';

type ProjectionRange = '3M' | '6M' | '1Y';

const Analytics: React.FC = () => {
  const [range, setRange] = useState<ProjectionRange>('3M');
  
  // Base de dados para cálculo (Faturamento atual e crescimento mensal estimado)
  const baseRevenue = 20000;
  const growthRate = 0.15; // 15% ao mês de crescimento exponencial

  const projectionData = useMemo(() => {
    const months = range === '3M' ? 3 : range === '6M' ? 6 : 12;
    const data = [];
    for (let i = 0; i <= months; i++) {
      const revenue = baseRevenue * Math.pow(1 + growthRate, i);
      data.push({
        month: `Mês ${i}`,
        revenue: Math.round(revenue),
      });
    }
    return data;
  }, [range]);

  const finalValue = projectionData[projectionData.length - 1].revenue;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pt-12">
      <header className="px-6 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight leading-none">Crescimento</h1>
          <p className="text-slate-500 text-sm font-medium mt-2">Simulação de Escala Exponencial</p>
        </div>
        <div className="bg-zinc-900 p-1 rounded-xl flex gap-1">
          {(['3M', '6M', '1Y'] as ProjectionRange[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                range === r ? 'bg-primary text-black' : 'text-slate-500'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      <main className="px-5 space-y-6">
        {/* Main Projection Value */}
        <div className="bg-card-dark border border-zinc-800 rounded-[32px] p-8 neon-border">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Meta Estimada em {range}</p>
          <h2 className="text-5xl font-black text-primary tracking-tighter neon-glow mb-2">
            R$ {finalValue.toLocaleString()}
          </h2>
          <p className="text-xs text-slate-400">Considerando taxa de escala de <span className="text-primary">15% ao mês</span>.</p>
          
          <div className="h-48 mt-8 -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectionData}>
                <defs>
                  <linearGradient id="projGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF88" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#00FF88" 
                  strokeWidth={4}
                  fill="url(#projGradient)"
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Scalability KPIs */}
        <section className="grid grid-cols-2 gap-4 pb-10">
          <div className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-3xl">
            <span className="material-icons-round text-primary mb-2">rocket_launch</span>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Fator ROI</p>
            <h3 className="text-xl font-black text-white mt-1">4.2x</h3>
          </div>
          <div className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-3xl">
            <span className="material-icons-round text-primary mb-2">payments</span>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Lucro Projetado</p>
            <h3 className="text-xl font-black text-white mt-1">32%</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Analytics;
