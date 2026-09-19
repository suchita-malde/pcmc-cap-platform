import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h2>PCMC Climate Action</h2>
          <p>
            For all, through the participation of all.
          </p>
          <p>
            Learn about climate challenges, planned actions, and how citizens
            can contribute to a more resilient Pimpri-Chinchwad.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/cap-overview">CAP Overview</Link>
          <Link to="/climate-map">Climate Map</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/actions">Take Action</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/get-involved">Get Involved</Link>
        </div>

        <div className="footer-section">
          <h3>Climate Issues</h3>

          <Link to="/sector/rising-heat">Rising Heat</Link>
          <Link to="/sector/flooding-water-logging">Flooding</Link>
          <Link to="/sector/solid-waste-management">Waste</Link>
          <Link to="/sector/green-city-biodiversity">Green City</Link>
          <Link to="/sector/sustainable-mobility">Mobility</Link>
          <Link to="/sector/renewable-energy">Energy</Link>
          <Link to="/sector/water-security-conservation">Water</Link>
          <Link to="/sector/clean-air-healthy-life">Clean Air</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 PCMC Climate Action Plan</p>
        <p>Citizen Climate Engagement Platform</p>
      </div>

    </footer>
  );
}