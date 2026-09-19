import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { translations } from "../../data/translations";

export default function Navbar({ language, setLanguage }) {
  const navigate = useNavigate();
  const t = translations[language];

  function scrollToExplore() {
    if (window.location.pathname === "/") {
      document.getElementById("explore-issues")?.scrollIntoView({
        behavior:"smooth"
      });
    } else {
      navigate("/#explore-issues");
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        PCMC Climate Action
      </div>

      <div className="navbar-links">
        <Link to="/">{t.home}</Link>
        <Link to="/cap-overview">{t.capOverview}</Link>
        <button className="explore-link" onClick={scrollToExplore}>
          {t.exploreIssues}
        </button>
        <Link to="/climate-map">{t.climateMap}</Link>
        <Link to="/progress">{t.progress}</Link>
        <Link to="/actions">{t.takeAction}</Link>
        <Link to="/resources">{t.resources}</Link>
        <Link to="/get-involved">{t.getInvolved}</Link>
      </div>

      <button
        className="language-button"
        onClick={() => setLanguage(language === "en" ? "mr" : "en")}
      >
        {language === "en" ? t.marathi : t.english}
      </button>
    </nav>
  );
}