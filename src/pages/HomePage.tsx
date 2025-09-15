import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/pages/HomePage.css"; 

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <div className="hom">{}</div>

        <h1>Welcome to Your Dashboard</h1>
        <p>This is the main page content. Add charts, tables, or other components here.</p>

        <div className="dashboard-grid">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
