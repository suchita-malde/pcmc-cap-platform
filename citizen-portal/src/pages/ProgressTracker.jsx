import "./ProgressTracker.css";

export default function ProgressTracker() {
  return (
    <div className="progress-page">

      <section className="progress-hero">
        <h1>CAP Progress</h1>

        <p>
          Track progress across the climate action areas of
          Pimpri-Chinchwad.
        </p>
      </section>

      <section className="progress-section">
        <h2>Overall CAP Progress</h2>

        <div className="overall-progress">
          <strong>Data to be updated</strong>

          <p>
            Verified progress data from PCMC will be displayed here.
          </p>
        </div>
      </section>

      <section className="progress-section">
        <h2>Progress by Climate Area</h2>

        <div className="progress-grid">

          <div className="progress-card">
            <h3>🔥 Rising Heat</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>🌊 Flooding / Water Logging</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>♻️ Solid Waste Management</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>🌳 Green City / Biodiversity</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>🚌 Sustainable Mobility</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>☀️ Renewable / Efficient Energy</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>💧 Water Conservation</h3>
            <p>Progress data to be updated.</p>
          </div>

          <div className="progress-card">
            <h3>🌫️ Clean Air / Healthy Life</h3>
            <p>Progress data to be updated.</p>
          </div>

        </div>
      </section>

      <section className="progress-section">
        <h2>Progress Status</h2>

        <div className="status-list">
          <span>Completed</span>
          <span>Ongoing</span>
          <span>Planned</span>
          <span>Data to be updated</span>
        </div>
      </section>

    </div>
  );
}