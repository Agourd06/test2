// src/components/StatusButton.tsx
import React from "react";
import "../../../styles/Homepage/TopSection/StatusButton.css"; 
interface ButtonProps {
  type: "usage" | "upgrade";
  value?: number; 
}

const StatusButton: React.FC<ButtonProps> = ({ type, value }) => {
  if (type === "usage") {
    return (
      <button className="status-btn usage-btn">
        <div className="circle">
          <svg className="circle-svg" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#34d399"
              strokeWidth="3"
              strokeDasharray={`${value}, 100`}
            />
          </svg>
          <span className="circle-text">{value}</span>
        </div>
        <span className="btn-text">Usage</span>
      </button>
    );
  }

  return (
    <button className="status-btn upgrade-btn">
      <span className="sparkle">✨</span>
      <span className="btn-text">Upgrade Now</span>
    </button>
  );
};

export default StatusButton;
