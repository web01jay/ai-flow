import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AddTodo = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black/40 backdrop-blur-sm fixed inset-0 z-50 flex items-end md:items-center justify-center font-display overflow-hidden select-none animate-fade-in">
       <div className="relative w-full max-w-[640px] flex flex-col max-h-[92vh] md:max-h-[800px] bg-background-light dark:bg-background-dark md:rounded-[2.5rem] rounded-t-[2.5rem] shadow-2xl overflow-hidden animate-slide-up transition-all duration-300">
            <div className="w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing md:cursor-default">
                <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-handle-dark"></div>
            </div>
            <div className="flex items-center justify-between px-6 py-4 shrink-0 z-20">
                <button onClick={() => navigate(-1)} className="text-gray-500 dark:text-[#92c9a8]/80 text-base font-medium hover:text-gray-800 dark:hover:text-white transition-colors">Cancel</button>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">New Task</h2>
                <button onClick={() => navigate(-1)} className="text-primary text-base font-bold leading-normal tracking-[0.015em] hover:text-primary/80 transition-colors">Done</button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-28 no-scrollbar scroll-smooth">
                <div className="mt-2 mb-6">
                    <input autoFocus className="w-full bg-transparent border-none text-3xl font-bold text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-input-placeholder focus:ring-0 p-0 leading-tight" placeholder="What needs to be done?" type="text"/>
                </div>
                <div className="flex gap-3 pb-2 overflow-x-auto no-scrollbar">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-100 dark:border-none dark:bg-input-dark pl-3 pr-4 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                        <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">Today</p>
                    </button>
                     <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-100 dark:border-none dark:bg-input-dark pl-3 pr-4 shadow-sm">
                        <span className="material-symbols-outlined text-orange-400 text-[20px] filled">flag</span>
                        <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">Medium</p>
                    </button>
                </div>
                <div className="mt-6">
                     <div className="flex justify-between items-baseline mb-2">
                        <label className="text-gray-400 dark:text-[#92c9a8] text-xs font-bold uppercase tracking-wider pl-1">Description</label>
                    </div>
                    <textarea className="form-input flex w-full resize-none overflow-hidden rounded-2xl bg-gray-50 dark:bg-input-dark border-none dark:text-white placeholder-gray-400 dark:placeholder-input-placeholder focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-input-dark/80 min-h-[120px] p-4 text-base font-normal leading-relaxed transition-all" placeholder="Add details, notes or links..."></textarea>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-white/90 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 p-4 flex items-center justify-between z-30">
                 <div className="flex gap-2">
                    <button className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"><span className="material-symbols-outlined">mic</span></button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"><span className="material-symbols-outlined">image</span></button>
                 </div>
                 <button onClick={() => navigate(-1)} className="h-12 w-14 rounded-full bg-primary text-[#000000] flex items-center justify-center shadow-glow hover:shadow-glow-hover transition-all">
                    <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
                 </button>
            </div>
       </div>
    </div>
  );
};

export const AddHabit = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-900/50 backdrop-blur-sm fixed inset-0 z-50 flex items-end md:items-center justify-center font-display p-0 md:p-4 animate-fade-in">
            <div className="w-full max-w-lg bg-background-light dark:bg-background-dark h-[95vh] md:h-auto md:max-h-[85vh] rounded-t-[2rem] md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative transition-all duration-300 animate-slide-up">
                 <div className="flex justify-center pt-3 pb-1 md:hidden bg-background-light dark:bg-background-dark shrink-0">
                    <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-[#326747]"></div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 bg-background-light dark:bg-background-dark shrink-0 z-10">
                    <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-surface-highlight transition-colors">
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                    <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">New Habit</h2>
                    <button onClick={() => navigate(-1)} className="text-primary text-base font-bold px-2 py-1 hover:opacity-80 transition-opacity">Save</button>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-8 no-scrollbar">
                     <div className="relative group">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 ml-1">Habit Name</label>
                        <input autoFocus className="w-full bg-white dark:bg-surface-dark rounded-2xl border-0 p-5 text-xl font-medium placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-surface-highlight transition-all shadow-sm dark:text-white" placeholder="e.g., Morning Yoga" type="text"/>
                    </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Settings</label>
                        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm">
                             <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><span className="material-symbols-outlined text-xl">calendar_month</span></div>
                                    <span className="font-medium text-slate-900 dark:text-white">Frequency</span>
                                </div>
                                <div className="bg-gray-100 dark:bg-background-dark p-1 rounded-lg flex text-xs font-semibold">
                                    <button className="px-3 py-1.5 rounded-md bg-white dark:bg-surface-highlight shadow-sm text-gray-900 dark:text-white">Daily</button>
                                    <button className="px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Weekly</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pt-12 pb-6 px-6 z-20 flex flex-col gap-3">
                    <button onClick={() => navigate(-1)} className="w-full h-14 bg-primary rounded-xl text-black font-bold text-lg hover:bg-primary/90 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(43,238,121,0.2)] flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">play_arrow</span>
                        Create & Start Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export const GlobalSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white">
       <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="px-4 py-3 flex items-center gap-3">
                <div className="flex-1 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-[20px]">search</span>
                    </div>
                    <input autoFocus className="block w-full rounded-xl border-none bg-gray-200 dark:bg-white/10 py-2.5 pl-10 pr-10 text-base leading-6 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-white/20 transition-all duration-200 ease-out" placeholder="Search" type="text"/>
                </div>
                <button onClick={() => navigate(-1)} className="text-primary font-medium text-base hover:opacity-80 transition-opacity">Cancel</button>
            </div>
       </header>
       <main className="flex-1 overflow-y-auto pb-24 pt-4">
            <div className="mt-12 flex flex-col items-center justify-center text-center px-4 opacity-50">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[32px]">lightbulb</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tip: Use #tags to filter results</p>
            </div>
       </main>
    </div>
  );
};
