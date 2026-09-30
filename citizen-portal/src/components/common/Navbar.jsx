import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { translations } from "../../data/translations";

export default function Navbar({ language, setLanguage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  function scrollToExplore() {
    if (location.pathname === "/") {
      document.getElementById("explore-issues")?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      navigate("/#explore-issues");
    }
  }

  function navClass({ isActive }) {
    return isActive ? "nav-link active" : "nav-link";
  }

  return (
    <nav className="navbar">

      <NavLink to="/" className="navbar-logo">
        {language === "en" ? "PCMC" : "पिं.चिं.म.पा."}
      </NavLink>

      <div className="navbar-links">

        <NavLink to="/" className={navClass}>
          {t.home}
        </NavLink>

        <NavLink to="/cap-overview" className={navClass}>
          {t.capOverview}
        </NavLink>

        <button
          className="nav-link explore-link"
          onClick={scrollToExplore}
        >
          {t.exploreIssues}
        </button>

        <NavLink to="/climate-map" className={navClass}>
          {t.climateMap}
        </NavLink>

        <NavLink to="/progress" className={navClass}>
          {t.progress}
        </NavLink>

        <NavLink to="/actions" className={navClass}>
          {t.takeAction}
        </NavLink>

        <NavLink to="/resources" className={navClass}>
          {t.resources}
        </NavLink>

        <NavLink to="/get-involved" className={navClass}>
          {t.getInvolved}
        </NavLink>

      </div>

      <button
        className={`language-toggle ${language === "mr" ? "marathi" : ""}`}
        onClick={() => setLanguage(language === "en" ? "mr" : "en")}
      >
        <span className="toggle-track">
          <span className="toggle-thumb"></span>
        </span>

        <span className="language-name">
          {language === "en" ? "English" : "मराठी"}
        </span>
      </button>

    </nav>
  );
}