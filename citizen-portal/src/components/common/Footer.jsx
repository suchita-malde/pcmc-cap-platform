import "./Footer.css";
import { Link } from "react-router-dom";
import { translations } from "../../data/translations";

export default function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <div className="footer-brand-mark">PCMC</div>

          <h2>{t.homeTitle}</h2>

          <p className="footer-tagline">
            {t.footerTagline}
          </p>

          <p className="footer-description">
            {t.footerDescription}
          </p>
        </div>

        <div className="footer-section">
          <h3>{t.quickLinks}</h3>

          <Link to="/cap-overview">{t.capOverview}</Link>
          <Link to="/climate-map">{t.climateMap}</Link>
          <Link to="/progress">{t.progress}</Link>
          <Link to="/actions">{t.takeAction}</Link>
          <Link to="/resources">{t.resources}</Link>
          <Link to="/get-involved">{t.getInvolved}</Link>
        </div>

        <div className="footer-section">
          <h3>{t.climateIssues}</h3>

          <Link to="/sector/rising-heat">{t.risingHeat}</Link>
          <Link to="/sector/flooding-water-logging">{t.flooding}</Link>
          <Link to="/sector/solid-waste-management">{t.solidWaste}</Link>
          <Link to="/sector/green-city-biodiversity">{t.greenCity}</Link>
          <Link to="/sector/sustainable-mobility">
            {t.sustainableMobility}
          </Link>
          <Link to="/sector/renewable-energy">
            {t.renewableEnergy}
          </Link>
          <Link to="/sector/water-security-conservation">
            {t.waterConservation}
          </Link>
          <Link to="/sector/clean-air-healthy-life">
            {t.cleanAir}
          </Link>
        </div>

      </div>

      <div className="footer-visual">
        <div className="footer-visual-word">
          PCMC
        </div>

        <div className="footer-visual-line"></div>
      </div>

      <div className="footer-bottom">
        <p>{t.footerCopyright}</p>
        <p>{t.footerPlatform}</p>
      </div>

    </footer>
  );
}