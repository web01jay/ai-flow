import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full glass-panel border-t border-slate-200/50 dark:border-white/5 z-40 pb-safe-bottom">
      <div className="flex justify-around items-center h-[60px] px-2 max-w-md mx-auto">
        {/* Home */}
        <Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 group">
          <div className="relative p-1 rounded-xl transition-all duration-300">
            <span className={`material-symbols-outlined text-[28px] transition-colors ${isActive('/') ? 'text-primary filled' : 'text-slate-400 dark:text-slate-500'}`} style={{ fontVariationSettings: isActive('/') ? "'FILL' 1, 'wght' 500" : "'FILL' 0" }}>home</span>
            {isActive('/') && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>}
          </div>
          <span className={`text-[10px] font-medium tracking-wide transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Home</span>
        </Link>

        {/* Todo */}
        <Link to="/todo" className="flex flex-1 flex-col items-center justify-center gap-1 group">
          <div className="relative p-1 rounded-xl transition-all duration-300">
            <span className={`material-symbols-outlined text-[26px] transition-colors ${isActive('/todo') ? 'text-primary filled' : 'text-slate-400 dark:text-slate-500'}`}>check_circle</span>
            {isActive('/todo') && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>}
          </div>
          <span className={`text-[10px] font-medium transition-colors ${isActive('/todo') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Todo</span>
        </Link>

        {/* Spacer for FAB */}
        <div className="w-12"></div>

        {/* Habits */}
        <Link to="/habits" className="flex flex-1 flex-col items-center justify-center gap-1 group">
          <div className="relative p-1 rounded-xl transition-all duration-300">
             <span className={`material-symbols-outlined text-[26px] transition-colors ${isActive('/habits') ? 'text-primary filled' : 'text-slate-400 dark:text-slate-500'}`}>autorenew</span>
             {isActive('/habits') && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>}
          </div>
          <span className={`text-[10px] font-medium transition-colors ${isActive('/habits') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Habits</span>
        </Link>

        {/* Settings */}
        <Link to="/settings" className="flex flex-1 flex-col items-center justify-center gap-1 group">
          <div className="relative p-1 rounded-xl transition-all duration-300">
             <span className={`material-symbols-outlined text-[26px] transition-colors ${isActive('/settings') ? 'text-primary filled' : 'text-slate-400 dark:text-slate-500'}`}>settings</span>
             {isActive('/settings') && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>}
          </div>
          <span className={`text-[10px] font-medium transition-colors ${isActive('/settings') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export const SidePanel = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  
  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Slide-over Panel */}
      <div className={`fixed inset-y-0 right-0 z-[51] w-[85%] sm:w-[420px] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-2xl flex flex-col transform transition-transform duration-300 ease-out border-l border-white/20 dark:border-white/5 rounded-l-3xl overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex-none px-6 pt-8 pb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOWtl3xugS6bUNpsHrQYQB-_pEj6h8pVBWlsMcRjTybDoCZQ2d6CT0ZeskzRCZz3puFqwyNL3xwXTMOL3nQOuHhtXQq95zwW8Af-iVDm_C5zVtgZwdKyDCHyztRANttASR3sZKkLMHxUhgroLAWXMXp7jIpDeCFukqe_qo0oUNOxss-p7y9HfZS4i0Lvn6sFajAQley_tCrUr2XODtKTonwEKITjjySq7XNE4KmFxzWqtWY6EWDDpiCWd7oQXRx1pKl-xLhQW0vrU")' }}></div>
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-primary border-2 border-background-light dark:border-background-dark rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Jarvis User</h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">Online</span>
                  <span className="text-gray-300 dark:text-gray-600 text-[10px]">•</span>
                  <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-medium">v2.1</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>
          </div>

          <div className="relative group cursor-pointer" onClick={() => handleNav('/search')}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">search</span>
            </div>
            <div className="block w-full pl-10 pr-3 py-3 border-none rounded-xl leading-5 bg-white dark:bg-background-dark-surface text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none shadow-sm transition-all">Search commands...</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-8 no-scrollbar">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3 ml-1">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleNav('/add-todo')} className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-background-dark-surface border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add_task</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Add Todo</span>
              </button>
              <button onClick={() => handleNav('/add-habit')} className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-background-dark-surface border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Add Habit</span>
              </button>
            </div>
          </div>

          <div>
             <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3 ml-1">Notifications</h3>
             <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-background-dark-surface border border-gray-100 dark:border-white/5">
                  <div className="mt-0.5 min-w-[6px] h-[6px] rounded-full bg-red-500"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-none mb-1">Reminder: Drink Water</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">It's been 2 hours since your last glass.</p>
                  </div>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">10m ago</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-none p-6 border-t border-gray-200 dark:border-white/5 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNav('/settings')} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </button>
            <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors">
              <span className="text-sm font-medium">Sign Out</span>
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Fab = ({ onClick, icon = "add" }: { onClick: () => void; icon?: string }) => (
  <div className="fixed bottom-[90px] left-0 right-0 flex justify-center z-30 pointer-events-none">
    <button onClick={onClick} className="pointer-events-auto h-14 w-14 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(0,122,255,0.4)] flex items-center justify-center hover:scale-105 hover:shadow-[0_0_25px_rgba(0,122,255,0.5)] active:scale-95 transition-all duration-300 group">
      <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">{icon}</span>
    </button>
  </div>
);
