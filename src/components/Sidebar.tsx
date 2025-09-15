import React, { useState, type JSX } from "react";
import "../styles/Sidebar.css";
import {
  FaHouse,
  FaFolderClosed,
  FaFileLines,
  FaWrench,
  FaChartLine,
  FaTv,
  FaCirclePlay,
  FaBookOpen,
  FaGear,
} from "react-icons/fa6";

interface SidebarItem {
  id: string;
  icon: JSX.Element;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState<string>("analytics");

  const sidebarItems: SidebarItem[] = [
    { id: "home", icon: <FaHouse />, label: "Home" },
    { id: "briefcase", icon: <FaFolderClosed />, label: "Work" },
    { id: "document", icon: <FaFileLines />, label: "Documents" },
    { id: "key", icon: <FaWrench />, label: "Security" },
    { id: "analytics", icon: <FaChartLine />, label: "Analytics" },
    { id: "monitor", icon: <FaTv />, label: "Monitor" },
    { id: "settings1", icon: <FaCirclePlay />, label: "Settings" },
    { id: "grid", icon: <FaBookOpen />, label: "Apps" },
    { id: "settings2", icon: <FaGear />, label: "Configuration" },
  ];

  const handleItemClick = (itemId: string) => setActiveItem(itemId);

  return (
    <div className="sidebar" style={{ display: isOpen ? "block" : "none" }}>
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeItem === item.id ? "active" : ""}`}
            onClick={() => handleItemClick(item.id)}
            title={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
