import React from "react";
import "../styles/header.css";
import { FaUser } from "react-icons/fa"; 
interface HeaderProps {
  className?: string;
  onBurgerClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onBurgerClick }) => {
  return (
    <nav className={`header ${className || ""}`}>
      <div className="header-container">
        <div className="header-left">
          <button
            className="burger-menu"
            aria-label="Toggle menu"
            onClick={onBurgerClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="header-right">
          <div className="user-profile">
            <div className="user-avatar">
              <FaUser size={24} color="#555" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
