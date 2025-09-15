import React, { useState } from "react";
import "../styles/layout.css";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout">
      <Header onBurgerClick={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <main className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
