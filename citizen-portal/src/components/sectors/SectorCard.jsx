import "./SectorCard.css";
import { Link } from "react-router-dom";

export default function SectorCard({ sector }) {
  return (
    <div className="sector-card">
      <div className="sector-icon">
        {sector.icon}
      </div>

      <h3>{sector.title}</h3>

      <p>{sector.currentScenario}</p>

      <Link to={`/sector/${sector.id}`}>
        Explore Sector →
      </Link>
    </div>
  );
}