import "./SectorPage.css";
import { useParams, Link } from "react-router-dom";
import sectors from "../data/sectors.json";

export default function SectorPage() {
  const { sectorId } = useParams();

  const sector = sectors.find((item) => item.id === sectorId);

  if (!sector) {
    return (
      <div className="sector-page">
        <h1>Sector Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="sector-page">
      <section className="sector-hero">
        <div className="sector-page-icon">
          {sector.icon}
        </div>

        <h1>{sector.title}</h1>

        <p>
          Understand the current situation, planned actions, and how citizens
          can contribute.
        </p>
      </section>

      <section className="sector-content">
        <div className="sector-section">
          <h2>What's Happening?</h2>
          <p>{sector.currentScenario}</p>
        </div>

        <div className="sector-section">
          <h2>Why It Matters</h2>

          <p>{sector.whyItMatters}</p>
        </div>

        <div className="sector-section">
          <h2>Where Is This Relevant?</h2>

          {sector.relevantAreas ? (
            <ul>
              {sector.relevantAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          ) : (
            <p>
              Location-based information will be displayed as verified city data
              becomes available.
            </p>
          )}

          <Link className="back-home" to="/climate-map">
            Explore Climate Map →
          </Link>
        </div>

        <div className="sector-section">
          <h2>Goals & Targets</h2>

          <p>
            PCMC has identified sector-specific goals and actions under its
            Climate Action Plan. Targets and measurable progress will be
            displayed here as official data becomes available.
          </p>

          <div className="target-placeholder">
            <strong>Target data:</strong> To be updated with official PCMC data.
          </div>
        </div>

        <div className="sector-section">
          <h2>PCMC Planned Actions</h2>

          <ul>
            {sector.plannedActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        <div className="sector-section">
          <h2>What Citizens Can Do</h2>

          <ul>
            {sector.citizenActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        <Link className="back-home" to="/">
          ← Back to Climate Issues
        </Link>
      </section>
    </div>
  );
}