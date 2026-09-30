import "./Home.css";
import SplitText from "../components/common/SplitText";
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

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <SplitText
            key={language}
            text={t.homeTitle}
            className="hero-title"
            delay={45}
            duration={1.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 35 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
            tag="h1"
          />

          <p className="hero-tagline">
            {t.homeTagline}
          </p>

        </div>

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
              language={language}
            />
          ))}
        </div>
      </section>

    </div>
  );
}