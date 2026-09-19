import "./CitizenActions.css";
import { Link } from "react-router-dom";

export default function CitizenActions() {
  return (
    <div className="actions-page">

      <section className="actions-hero">
        <h1>Take Action</h1>

        <p>
          Small actions by citizens can contribute to a cleaner,
          healthier and more climate-resilient Pimpri-Chinchwad.
        </p>
      </section>

      <section className="actions-section">
        <h2>What Can You Do?</h2>

        <div className="actions-grid">

          <div className="action-card">
            <h3>🏠 At Home</h3>
            <ul>
              <li>Save electricity and use energy efficiently.</li>
              <li>Conserve water and prevent unnecessary wastage.</li>
              <li>Segregate waste at source.</li>
            </ul>
          </div>

          <div className="action-card">
            <h3>🚶 Travel</h3>
            <ul>
              <li>Walk or cycle for shorter journeys.</li>
              <li>Use public transport where possible.</li>
              <li>Consider shared mobility and cleaner vehicles.</li>
            </ul>
          </div>

          <div className="action-card">
            <h3>🌱 Green Your Neighbourhood</h3>
            <ul>
              <li>Plant and protect suitable trees.</li>
              <li>Support parks and local green spaces.</li>
              <li>Participate in community greening activities.</li>
            </ul>
          </div>

          <div className="action-card">
            <h3>♻️ Manage Waste</h3>
            <ul>
              <li>Keep wet and dry waste separated.</li>
              <li>Compost biodegradable waste where possible.</li>
              <li>Never burn waste in open areas.</li>
            </ul>
          </div>

          <div className="action-card">
            <h3>💧 Save Water</h3>
            <ul>
              <li>Use water carefully at home.</li>
              <li>Support rainwater harvesting and groundwater recharge.</li>
              <li>Reuse water where appropriate.</li>
            </ul>
          </div>

          <div className="action-card">
            <h3>🤝 Join Your Community</h3>
            <ul>
              <li>Participate in clean-up and plantation activities.</li>
              <li>Join climate-related community events.</li>
              <li>Share suggestions about local climate issues.</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="actions-section">
        <h2>How Your Actions Help</h2>

        <div className="impact-list">

          <div className="impact-item">
            <strong>Segregate waste</strong>
            <span>→ Better waste processing</span>
          </div>

          <div className="impact-item">
            <strong>Use public transport</strong>
            <span>→ Supports cleaner mobility</span>
          </div>

          <div className="impact-item">
            <strong>Save electricity</strong>
            <span>→ Reduces energy demand</span>
          </div>

          <div className="impact-item">
            <strong>Plant and protect trees</strong>
            <span>→ Supports shade, greenery and biodiversity</span>
          </div>

          <div className="impact-item">
            <strong>Save water</strong>
            <span>→ Supports water security</span>
          </div>

          <div className="impact-item">
            <strong>Avoid waste burning</strong>
            <span>→ Helps reduce local air pollution</span>
          </div>

        </div>
      </section>

      <section className="actions-section get-involved-prompt">
        <h2>Want to Do More?</h2>

        <p>
          Take part in community activities, share suggestions, and
          stay informed about climate-related events.
        </p>

        <Link to="/get-involved">
          Get Involved →
        </Link>
      </section>

    </div>
  );
}