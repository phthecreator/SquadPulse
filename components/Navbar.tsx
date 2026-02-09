
import React from 'react';
import { AppTab } from '../types';

interface NavbarProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: AppTab.HOME, icon: 'dashboard', label: 'Home' },
    { id: AppTab.REPORTS, icon: 'assignment', label: 'Relatórios' },
    { id: AppTab.ANALYTICS, icon: 'trending_up', label: 'Projeções' },
    { id: AppTab.TEAMS, icon: 'groups', label: 'Squad' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-[28px] px-4 py-3 flex justify-between items-center shadow-2xl z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 relative flex-1 ${
              isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className={`material-icons-round text-[22px] ${isActive ? 'neon-glow' : ''}`}>
              {tab.icon}
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest text-center">
              {tab.label}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#00FF88]"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
