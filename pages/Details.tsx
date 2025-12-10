import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="w-full max-w-lg flex flex-col min-h-screen pb-safe-bottom">
        <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 transition-all">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">arrow_back_ios_new</span>
            </button>
            <span className="text-sm font-semibold tracking-wide opacity-0 transition-opacity duration-300 pointer-events-none">Settings</span>
            <button onClick={() => navigate(-1)} className="flex items-center justify-center h-10 px-2 rounded-full">
                <span className="text-primary font-bold text-sm tracking-wide">Done</span>
            </button>
        </nav>
        <main className="flex-1 w-full px-5 pt-2 pb-10">
            <h1 className="text-[34px] font-bold tracking-tight text-gray-900 dark:text-white mb-6">Settings</h1>
            <div className="flex items-center gap-4 mb-8">
                <div className="relative group cursor-pointer">
                    <div className="size-20 rounded-full bg-cover bg-center shadow-lg border-2 border-white dark:border-gray-700 overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzuBFQBytITSdkd0eGSfbGKBQaEd9wpJaBg74p1GfJA9wlECgQGutFPWDBm_shOqpujPq8mpKRZ0zKNrokDimohaUU5Jou2mdv-j17JbK6UojSOSWBctQLVQnF2vEUh6J95k9dZY1WCJFbXGAVfqCg6LtQAt9qOto7NG55sMAGLYWkx1iPFIrBDKnHn1U-LJ-NrXrjsuTisfmREmNO9HJ7P2eqiy8lHxVzIKhBFq6X89xVZ0J3vNpD2DTXiHOm7UcZGtCUinTGAyA")'}}></div>
                    <div className="absolute bottom-0 right-0 size-5 bg-primary rounded-full border-[3px] border-background-light dark:border-background-dark flex items-center justify-center">
                        <div className="size-1.5 bg-background-dark rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight">Jarvis</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">Online</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">v2.4.0</span>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-4">Appearance</h3>
                <div className="bg-card-light dark:bg-card-dark rounded-3xl p-2 shadow-sm border border-gray-100 dark:border-white/5">
                     <div className="flex p-1 bg-gray-100 dark:bg-black/40 rounded-[1.2rem] relative h-10">
                        {['System', 'Light', 'Dark'].map((theme, i) => (
                             <label key={theme} className="flex-1 relative cursor-pointer z-10">
                                <input type="radio" name="theme" value={theme.toLowerCase()} className="peer sr-only" defaultChecked={theme === 'Dark'} />
                                <div className="w-full h-full flex items-center justify-center rounded-[1rem] transition-all duration-300 text-sm font-medium text-gray-500 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-gray-900 dark:peer-checked:text-white peer-checked:shadow-sm">{theme}</div>
                             </label>
                        ))}
                     </div>
                </div>
            </div>

             <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-4">Application</h3>
                <div className="bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 flex flex-col divide-y divide-gray-200 dark:divide-gray-700/50">
                     <button className="group w-full flex items-center justify-between p-4 pl-4 active:bg-gray-50 dark:active:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3.5">
                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-glow">
                                <span className="material-symbols-outlined text-[20px] font-bold">download</span>
                            </div>
                            <span className="text-base font-medium text-gray-900 dark:text-white">Install Jarvis</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                            <span className="text-primary text-xs font-bold uppercase tracking-wide">Get</span>
                        </div>
                    </button>
                    <div className="w-full flex items-center justify-between p-4 pl-4">
                        <div className="flex items-center gap-3.5">
                            <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined text-[20px]">notifications</span>
                            </div>
                            <span className="text-base font-medium text-gray-900 dark:text-white">Notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:shadow-sm after:h-[26px] after:w-[26px] after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export const TaskDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col">
       <nav className="sticky top-0 z-50 w-full glass-panel">
            <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="flex items-center text-primary transition-opacity hover:opacity-80 active:scale-95 p-2 -ml-2">
                    <span className="material-symbols-outlined text-[28px]">chevron_left</span>
                    <span className="text-base font-medium">Lists</span>
                </button>
                <h1 className="text-base font-semibold">Edit Task</h1>
                <button onClick={() => navigate(-1)} className="text-base font-bold text-primary transition-opacity hover:opacity-80 active:scale-95 p-2 -mr-2">Done</button>
            </div>
       </nav>
       <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6 pb-40">
           <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-subtle overflow-hidden">
                <div className="p-4 pb-2">
                    <input type="text" className="w-full bg-transparent border-none p-0 text-2xl font-bold placeholder:text-slate-400 dark:placeholder:text-white/30 focus:ring-0 text-slate-900 dark:text-white" placeholder="Task Title" defaultValue="Buy groceries for the week"/>
                </div>
                <div className="px-4"><div className="h-px w-full bg-border-light dark:bg-border-dark"></div></div>
                <div className="p-4 pt-3">
                    <textarea className="w-full bg-transparent border-none p-0 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-white/30 focus:ring-0 resize-none min-h-[80px]" defaultValue="Don't forget almond milk and fresh basil. Also check if we need more olive oil."></textarea>
                </div>
           </div>
           
           <div className="mt-6 flex flex-col gap-px bg-border-light dark:bg-border-dark rounded-xl overflow-hidden shadow-subtle border border-border-light dark:border-border-dark">
                <div className="flex items-center justify-between p-4 bg-card-light dark:bg-card-dark cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded-md bg-red-500 text-white"><span className="material-symbols-outlined text-[20px]">calendar_month</span></div>
                        <span className="text-base font-medium">Due Date</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-red-500 dark:text-red-400 font-medium">Today, 5:00 PM</span>
                    </div>
                </div>
                {/* More rows... */}
           </div>
       </main>
       <div className="fixed bottom-0 w-full glass-panel z-50 pb-safe-bottom">
            <div className="max-w-2xl mx-auto px-4 py-3 pb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                    <button className="p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors active:scale-95"><span className="material-symbols-outlined text-[24px]">delete</span></button>
                </div>
                <button onClick={() => navigate(-1)} className="flex-1 flex items-center justify-center gap-2 bg-primary text-black font-bold py-3.5 px-6 rounded-xl hover:bg-[#25d36b] active:scale-95 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[22px] font-semibold">check</span>
                    <span>Mark Complete</span>
                </button>
            </div>
       </div>
    </div>
  );
};

export const HabitDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex justify-center">
            <div className="relative flex h-full w-full max-w-md flex-col overflow-x-hidden pb-20">
                <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-white/5 transition-all">
                    <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </button>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Morning Run</h2>
                    <button className="flex w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors h-10">
                        <p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0">Edit</p>
                    </button>
                </div>
                
                <div className="flex flex-col gap-6 p-4">
                    <div className="relative overflow-hidden rounded-3xl bg-surface-dark shadow-lg">
                         <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
                            <div className="w-full h-full bg-center bg-cover opacity-50" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBExYS-HQu3BfEsZw7x3ky0AG1XfRRJ7VgUfPNdE8O0HxlHfokbVG8nmizyepU5BsKjUxWdJQm8knnOwh86InXfddqnMXb45b7_6MHf0XjDEOUmY4HoJ8EQGtB8nXs60rQLJpZnRIY8za7t3fW-YWbZTcQgdsUAYA18oD2aPgu5pNXHy5V3BX7Vb6e87LTA0nuPTN9LOhW4YrYQawpatf1_NLhpwb7qnofOU2HdlezxATYyhoBVAs3fBw4zrMc25eiEPnZ0falGYOM")'}}></div>
                        </div>
                        <div className="relative z-20 p-6 flex flex-col items-center gap-6">
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-primary text-sm font-semibold tracking-wider uppercase">Current Streak</p>
                                <h1 className="text-white text-5xl font-bold tracking-tighter">12 Days</h1>
                                <p className="text-slate-300 text-sm">Best: 45 Days</p>
                            </div>
                            <button className="group relative flex items-center justify-center size-20 rounded-full bg-surface-dark border-4 border-primary/30 shadow-[0_0_20px_rgba(43,238,121,0.2)] transition-all active:scale-95">
                                <span className="material-symbols-outlined text-primary text-4xl filled">check</span>
                            </button>
                            <p className="text-white/80 text-sm font-medium">Check in for today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
