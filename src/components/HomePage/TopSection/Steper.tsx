import type React from "react"
import "../../../styles/Homepage/TopSection/Steper.css"

const Steper: React.FC = () => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <a href="/scans" className="breadcrumb-link">Scans</a>
          <span className="breadcrumb-separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <a href="/websites" className="breadcrumb-link">Websites</a>
          <span className="breadcrumb-separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-link">scan_name</span>
          <span className="breadcrumb-separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-text active">Issues</span>
        </li>
      </ol>
    </nav>
  )
}

export default Steper
