import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Fab } from '../components/Navigation';

interface DashboardProps {
  toggleSidePanel: () => void;
}

export const Home: React.FC<DashboardProps> = ({ toggleSidePanel }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col mx-auto max-w-md bg-background-light dark:bg-background-dark pb-32">
      <div className="pt-12 px-6 pb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-wide uppercase">Monday, 12 August</p>
          <button onClick={toggleSidePanel} className="h-8 w-8 rounded-full bg-surface-dark/10 dark:bg-white/10 flex items-center justify-center hover:bg-surface-dark/20 dark:hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined text-sm filled">notifications</span>
          </button>
        </div>
        <h2 className="text-4xl font-bold leading-tight tracking-tight">Good Evening,<br/><span className="text-primary">Sir.</span></h2>
      </div>

      <div className="px-6 grid grid-cols-2 gap-4 mb-8">
        <div onClick={() => navigate('/todo')} className="col-span-1 bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <div className="flex flex-col h-full justify-between gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">list</span>
            </div>
            <div>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Pending Tasks</p>
            </div>
          </div>
        </div>

        <div onClick={() => navigate('/habits')} className="col-span-1 bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
          <div className="flex flex-col h-full justify-between gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <div>
              <p className="text-3xl font-bold">80%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Hydration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mb-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
           Next Up <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
        </h3>
        <div className="flex flex-col gap-3">
          <div onClick={() => navigate('/task/1')} className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5">
            <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-slate-400">code</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-base">Review Code PRs</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Project Jarvis • 10:00 PM</p>
            </div>
            <button className="h-8 w-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-lg">done</span>
            </button>
          </div>
          
           <div className="mt-4 rounded-2xl overflow-hidden h-40 relative group cursor-pointer" onClick={() => navigate('/search')}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjVsUkfKvzS2ScXINAsumwdPlJ1-3fxwOV4gr4HcSo4xRlHg9_gK0aJVmWs0I_FV_feeC0GtePtsIs654M6oj8Avui9tcYYJxvv3gHzBGJm2aRcj_7lDlCMKhWydHd_lWR71NbXvQxEafoZLiyrdxJA9kwKuLTBTqqZtUzr9LIV_3bdms8a1hsmz6vzkzHZ9Hm0uRi2n3rJHgmnnQ4FGh_OMewYcOEBvppnx-MW0NfBsTvX4R_BFj3wk8luCz1HQdnuI2C6vp4sNI" alt="Map" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Commute to HQ</p>
                  <p className="text-primary text-xs">15 min via Main St</p>
              </div>
          </div>
        </div>
      </div>
      <Fab onClick={() => navigate('/add-todo')} />
    </div>
  );
};

export const Todo: React.FC<DashboardProps> = ({ toggleSidePanel }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
       <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-background-light/80 dark:bg-background-dark/80 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between p-5 pb-3 pt-safe-top">
            <div className="flex items-center gap-3" onClick={toggleSidePanel}>
                <div className="relative group cursor-pointer">
                    <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7QqV-Vl6KeG3SQF372Vdoz9bAqt-s49pECqzmQfza3-kq_Fp4wNVRqI-repT5lKO8IcMnxMmnvWj8smOltRmiIZfCNv8sn7IREjhyCtDQvvnoyY7dsbHhP80AdGJ1l9dtFwnEIQhtUGEq2LywOS4m7wpdIplt0YqL3LU_FOTzyRcYxhDAVHR5ZTHRGvrcPdY3ntlYRcooN-AMZm0PlDHBnZsCM3AAMaX3cLxl16KvGxjH22kv8nRZnL2vaobD1NJCHvveYXVGul0")'}}></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">Good Morning</span>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Jarvis</h2>
                </div>
            </div>
            <button onClick={() => navigate('/search')} className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-surface-dark-highlight transition-colors">
                <span className="material-symbols-outlined">search</span>
            </button>
        </div>
        <div className="px-5 pb-4">
            <div className="flex h-12 w-full items-center rounded-full bg-white dark:bg-surface-dark p-1 shadow-sm">
                <label className="group relative flex flex-1 cursor-pointer h-full items-center justify-center overflow-hidden rounded-full">
                    <input type="radio" name="task-filter" value="All" className="peer invisible w-0 absolute" />
                    <span className="z-10 text-sm font-semibold text-slate-500 dark:text-white/60 transition-colors peer-checked:text-background-dark">All</span>
                    <div className="absolute inset-0 bg-transparent transition-colors peer-checked:bg-primary rounded-full"></div>
                </label>
                <label className="group relative flex flex-1 cursor-pointer h-full items-center justify-center overflow-hidden rounded-full">
                    <input type="radio" name="task-filter" value="Today" className="peer invisible w-0 absolute" defaultChecked />
                    <span className="z-10 text-sm font-semibold text-slate-500 dark:text-white/60 transition-colors peer-checked:text-background-dark">Today</span>
                    <div className="absolute inset-0 bg-transparent transition-colors peer-checked:bg-primary rounded-full"></div>
                </label>
                <label className="group relative flex flex-1 cursor-pointer h-full items-center justify-center overflow-hidden rounded-full">
                    <input type="radio" name="task-filter" value="Upcoming" className="peer invisible w-0 absolute" />
                    <span className="z-10 text-sm font-semibold text-slate-500 dark:text-white/60 transition-colors peer-checked:text-background-dark">Upcoming</span>
                    <div className="absolute inset-0 bg-transparent transition-colors peer-checked:bg-primary rounded-full"></div>
                </label>
            </div>
        </div>
      </header>
      
      <main className="flex flex-col gap-6 px-5 pt-4">
        <section>
            <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-slate-400 dark:text-white/40 text-xs font-bold tracking-[0.15em] uppercase">High Priority</h3>
                <span className="text-slate-400 dark:text-white/20 text-xs font-medium">1 task</span>
            </div>
            <div onClick={() => navigate('/task/1')} className="group relative flex flex-col gap-3 rounded-[2rem] bg-white dark:bg-surface-dark p-4 shadow-sm dark:shadow-lg transition-transform active:scale-[0.98] cursor-pointer">
                <div className="flex items-start gap-4">
                    <button className="mt-1 flex-shrink-0 size-6 rounded-full border-2 border-slate-200 dark:border-white/20 flex items-center justify-center hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-transparent text-sm">check</span>
                    </button>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <h4 className="text-slate-900 dark:text-white text-base font-bold truncate pr-2">Submit Project Proposal</h4>
                            <div className="size-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">Due Today, 2:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
           <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-slate-400 dark:text-white/40 text-xs font-bold tracking-[0.15em] uppercase">Tasks</h3>
                <span className="text-slate-400 dark:text-white/20 text-xs font-medium">3 tasks</span>
            </div>
            <div className="flex flex-col gap-4">
                 <div onClick={() => navigate('/task/2')} className="relative flex flex-col rounded-[2rem] bg-white dark:bg-surface-dark p-1 shadow-sm dark:shadow-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/5 cursor-pointer">
                    <div className="p-4 pb-2 flex items-start gap-4">
                        <button className="mt-1 flex-shrink-0 size-6 rounded-full border-2 border-slate-200 dark:border-white/20 flex items-center justify-center hover:border-primary transition-colors group">
                            <span className="material-symbols-outlined text-transparent group-hover:text-primary/50 text-sm transition-colors">check</span>
                        </button>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                                <h4 className="text-slate-900 dark:text-white text-lg font-bold">Grocery Shopping</h4>
                                <div className="size-2 rounded-full bg-yellow-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
                            </div>
                            <p className="text-slate-500 dark:text-white/60 text-sm mt-1 leading-relaxed">Buy ingredients for the dinner party tonight.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
      </main>
      <Fab onClick={() => navigate('/add-todo')} />
    </div>
  );
};

export const Habits: React.FC<DashboardProps> = ({ toggleSidePanel }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col min-h-screen pb-24 overflow-x-hidden max-w-7xl mx-auto bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/5 transition-all">
        <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
                <button onClick={toggleSidePanel} className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined !text-[28px]">menu</span>
                </button>
                <h2 className="text-xl font-bold tracking-tight">Habits</h2>
            </div>
            <button onClick={() => navigate('/add-habit')} className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background-dark hover:brightness-110 active:scale-95 transition-all shadow-[0_0_12px_rgba(43,238,121,0.4)]">
                <span className="material-symbols-outlined !font-bold">add</span>
            </button>
        </div>
      </header>
      
      <main className="flex-1 px-4 pt-6 md:px-8">
         <div className="mb-8 px-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">Good Evening, Sir.</h1>
            <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-surface-dark rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-gray-400 whitespace-nowrap">4/6 Completed</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div onClick={() => navigate('/habit/1')} className="group relative flex flex-col p-5 rounded-[2rem] bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-white/5 transition-transform hover:scale-[1.01] cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-primary filled">directions_run</span>
                            <h3 className="text-lg font-bold">Morning Run</h3>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full w-fit">
                            <span className="material-symbols-outlined text-[14px]">local_fire_department</span> 12 Days
                        </span>
                    </div>
                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-background-dark shadow-[0_4px_12px_rgba(43,238,121,0.3)] transition-all active:scale-90">
                        <span className="material-symbols-outlined !text-[32px] !font-bold">check</span>
                    </button>
                </div>
                <div className="mt-auto">
                   <div className="flex justify-between items-end h-12 gap-1 px-1">
                        {[40, 60, 30, 80, 100, 50].map((h, i) => (
                             <div key={i} className="w-full bg-primary/20 dark:bg-white/10 rounded-sm" style={{height: `${h}%`}}></div>
                        ))}
                        <div className="w-full bg-primary dark:bg-primary rounded-sm h-[90%] shadow-[0_0_8px_rgba(43,238,121,0.5)]"></div>
                   </div>
                   <p className="text-[10px] text-gray-400 mt-2 font-medium text-right uppercase tracking-wider">This Week</p>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
