// src/pages/HomePage.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/pages/HomePage.css";
import Steper from "../components/HomePage/TopSection/Steper";
import StatusButton from "../components/HomePage/TopSection/StatusButton";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <div className="top-section">
          <div className="top-left">
            <Steper />
          </div>
          <div className="top-right">
          <StatusButton type="usage" value={60} />
          <StatusButton type="upgrade" />{" "}          </div>
          
        </div>

        <div className="bottom-section"></div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
