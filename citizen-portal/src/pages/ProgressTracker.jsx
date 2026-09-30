import "./ProgressTracker.css";
import { translations } from "../data/translations";

export default function ProgressTracker({ language }) {
  const t = translations[language];

  return (
    <div className="progress-page">

      <section className="progress-hero">
        <h1>{t.progressTitle}</h1>

        <p>{t.progressDescription}</p>
      </section>

      <section className="progress-section">
        <h2>{t.overallProgress}</h2>

        <div className="overall-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <span className="progress-label">{t.dataToBeUpdated}</span>

          <p>{t.verifiedProgressData}</p>
        </div>
      </section>

      <section className="progress-section">
        <h2>{t.progressByArea}</h2>

        <div className="progress-grid">

          <div className="progress-card">
            <h3>🔥 {t.risingHeat}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>🌊 {t.flooding}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>♻️ {t.solidWaste}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>🌳 {t.greenCity}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>🚌 {t.sustainableMobility}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>☀️ {t.renewableEnergy}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>💧 {t.waterConservation}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

          <div className="progress-card">
            <h3>🌫️ {t.cleanAir}</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span className="progress-label">{t.dataToBeUpdated}</span>
          </div>

        </div>
      </section>

      <section className="progress-section">
        <h2>{t.progressStatus}</h2>

        <div className="status-list">
          <span>{t.completed}</span>
          <span>{t.ongoing}</span>
          <span>{t.planned}</span>
          <span>{t.dataToBeUpdated}</span>
        </div>
      </section>

    </div>
  );
}