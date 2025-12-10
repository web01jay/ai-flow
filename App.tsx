import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BottomNav, SidePanel } from './components/Navigation';
import { Home, Todo, Habits } from './pages/Dashboard';
import { Settings, TaskDetail, HabitDetail } from './pages/Details';
import { AddTodo, AddHabit, GlobalSearch } from './pages/Actions';

/* 
  Navigation Map Summary:
  - Home (/) -> Todo, Habits, Settings, AddTodo (FAB), Search, SidePanel
  - Todo (/todo) -> AddTodo (FAB), TaskDetail (List Item Click)
  - Habits (/habits) -> AddHabit (Header Btn), HabitDetail (Card Click)
  - Settings (/settings) -> Back
  - AddTodo (/add-todo) -> Back/Save
  - AddHabit (/add-habit) -> Back/Save
  - Search (/search) -> Back
*/

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  // Hide BottomNav on these specific full-screen or modal-like routes
  const hideNavRoutes = ['/add-todo', '/add-habit', '/search', '/task/', '/habit/'];
  const shouldHideNav = hideNavRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {children}
      {!shouldHideNav && <BottomNav />}
    </>
  );
};

export default function App() {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <Router>
      <SidePanel isOpen={isPanelOpen} onClose={() => setPanelOpen(false)} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home toggleSidePanel={() => setPanelOpen(true)} />} />
          <Route path="/todo" element={<Todo toggleSidePanel={() => setPanelOpen(true)} />} />
          <Route path="/habits" element={<Habits toggleSidePanel={() => setPanelOpen(true)} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/add-habit" element={<AddHabit />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/habit/:id" element={<HabitDetail />} />
          <Route path="/search" element={<GlobalSearch />} />
        </Routes>
      </Layout>
    </Router>
  );
}