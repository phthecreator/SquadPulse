
import React, { useState } from 'react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Reports from './components/Reports';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Dashboard />;
      case AppTab.ANALYTICS:
        return <Analytics />;
      case AppTab.REPORTS:
        return <Reports />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-slate-500">
            <span className="material-icons-round text-6xl mb-4">construction</span>
            <p className="text-xl font-bold">Em breve</p>
            <p className="text-sm">O módulo de {activeTab.toLowerCase()} está em desenvolvimento.</p>
            <button 
              onClick={() => setActiveTab(AppTab.HOME)}
              className="mt-6 text-primary font-bold border border-primary/20 px-6 py-2 rounded-full"
            >
              Voltar ao Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative overflow-x-hidden font-sans pb-32">
      {/* Background Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-30"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-30"></div>

      {renderContent()}

      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
