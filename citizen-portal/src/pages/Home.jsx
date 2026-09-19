import "./Home.css";
import { useEffect } from "react";
import { translations } from "../data/translations";

import { Link } from "react-router-dom";
import sectors from "../data/sectors.json";
import SectorCard from "../components/sectors/SectorCard";

export default function Home({ language }) {
  const t = translations[language];

  useEffect(() => {
  if (window.location.hash === "#explore-issues") {
    document.getElementById("explore-issues")?.scrollIntoView({
      behavior:"smooth"
    });
    }
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>{t.homeTitle}</h1>

        <p>
          {t.homeTagline}
        </p>

      </section>

      <section id="explore-issues" className="sectors-section">
        <h2>{t.exploreClimateIssues}</h2>

        <p>
          {t.exploreDescription}
        </p>

        <div className="sector-grid">
          {sectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
            />
          ))}
        </div>
      </section>

    </div>
  );
}