import "./Resources.css";
import { translations } from "../data/translations";

export default function Resources({ language }) {
  const t = translations[language];

  return (
    <div className="resources-page">

      <section className="resources-hero">

        <div className="resources-hero-shape"></div>

        <span className="resources-label">
          PCMC • CLIMATE RESOURCES
        </span>

        <h1>{t.resourcesTitle}</h1>

        <p>{t.resourcesDescription}</p>

      </section>

      <section className="resources-section">

        <div className="resources-heading">
          <span>01</span>
          <h2>{t.guidesManuals}</h2>
        </div>

        <div className="resources-grid">

          <div className="resource-card waste-card">
            <div className="resource-icon">♻️</div>

            <h3>{t.resourceWaste}</h3>

            <p>{t.resourceWasteText}</p>

            <span>{t.resourcesToBeAdded}</span>
          </div>

          <div className="resource-card water-card">
            <div className="resource-icon">💧</div>

            <h3>{t.resourceWater}</h3>

            <p>{t.resourceWaterText}</p>

            <span>{t.resourcesToBeAdded}</span>
          </div>

          <div className="resource-card energy-card">
            <div className="resource-icon">☀️</div>

            <h3>{t.resourceEnergy}</h3>

            <p>{t.resourceEnergyText}</p>

            <span>{t.resourcesToBeAdded}</span>
          </div>

          <div className="resource-card green-card">
            <div className="resource-icon">🌳</div>

            <h3>{t.resourceGreen}</h3>

            <p>{t.resourceGreenText}</p>

            <span>{t.resourcesToBeAdded}</span>
          </div>

        </div>

      </section>

      <section className="schemes-section">

        <div className="resources-section-inner">

          <div className="resources-heading light-heading">
            <span>02</span>
            <h2>{t.schemesServices}</h2>
          </div>

          <div className="scheme-card">

            <div className="scheme-icon">🏛️</div>

            <div>
              <h3>{t.citizenServices}</h3>

              <p>{t.citizenServicesText}</p>

              <span>{t.informationToBeAdded}</span>
            </div>

          </div>

        </div>

      </section>

      <section className="resources-section best-practices-section">

        <div className="resources-heading">
          <span>03</span>
          <h2>{t.bestPractices}</h2>
        </div>

        <div className="resources-grid three-column">

          <div className="resource-card practice-card">
            <div className="resource-icon">🏠</div>

            <h3>{t.sustainableHomes}</h3>

            <p>{t.sustainableHomesText}</p>
          </div>

          <div className="resource-card practice-card">
            <div className="resource-icon">🚶</div>

            <h3>{t.sustainableMobility}</h3>

            <p>{t.sustainableMobilityText}</p>
          </div>

          <div className="resource-card practice-card">
            <div className="resource-icon">🌱</div>

            <h3>{t.communityAction}</h3>

            <p>{t.communityActionText}</p>
          </div>

        </div>

      </section>

      <section className="support-section">
        <div className="support-heading">
          <span>04</span>
          <h2>{t.organizationsSupport}</h2>
        </div>

        <div className="support-content">
          <div className="support-icon">🤝</div>

          <div className="support-text">
            <h3>{t.climateSupport}</h3>
            <p>{t.climateSupportText}</p>
            <span>{t.informationToBeAdded}</span>
          </div>
        </div>
      </section>

    </div>
  );
}