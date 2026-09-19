import "./Resources.css";

export default function Resources() {
  return (
    <div className="resources-page">

      <section className="resources-hero">
        <h1>Resources</h1>

        <p>
          Find useful guides, services, best practices and information
          to support climate action in Pimpri-Chinchwad.
        </p>
      </section>

      <section className="resources-section">
        <h2>Guides & Manuals</h2>

        <div className="resources-grid">

          <div className="resource-card">
            <h3>♻️ Waste Management</h3>
            <p>
              Guides and information on waste segregation, composting,
              recycling and responsible waste management.
            </p>
            <span>Resources to be added</span>
          </div>

          <div className="resource-card">
            <h3>💧 Water Conservation</h3>
            <p>
              Information on water conservation, rainwater harvesting,
              groundwater recharge and water reuse.
            </p>
            <span>Resources to be added</span>
          </div>

          <div className="resource-card">
            <h3>☀️ Energy Efficiency</h3>
            <p>
              Information and best practices for reducing energy use
              and adopting renewable energy.
            </p>
            <span>Resources to be added</span>
          </div>

          <div className="resource-card">
            <h3>🌳 Green Spaces</h3>
            <p>
              Information about tree protection, plantation, green spaces
              and nature-based solutions.
            </p>
            <span>Resources to be added</span>
          </div>

        </div>
      </section>

      <section className="resources-section">
        <h2>Schemes & Services</h2>

        <div className="resource-wide-card">
          <h3>🏛️ Citizen Services & Schemes</h3>

          <p>
            Verified information about relevant PCMC services,
            government schemes and climate-related initiatives will
            be provided here.
          </p>

          <span>Information to be added</span>
        </div>
      </section>

      <section className="resources-section">
        <h2>Best Practices</h2>

        <div className="resources-grid">

          <div className="resource-card">
            <h3>🏠 Sustainable Homes</h3>
            <p>
              Practical approaches for saving energy, conserving water
              and reducing household waste.
            </p>
          </div>

          <div className="resource-card">
            <h3>🚶 Sustainable Mobility</h3>
            <p>
              Information about walking, cycling, public transport and
              shared mobility.
            </p>
          </div>

          <div className="resource-card">
            <h3>🌱 Community Action</h3>
            <p>
              Ideas and examples for neighbourhood-level climate action
              and community participation.
            </p>
          </div>

        </div>
      </section>

      <section className="resources-section">
        <h2>Organizations & Support</h2>

        <div className="resource-wide-card">
          <h3>🤝 Climate Action Support</h3>

          <p>
            Verified organizations, experts and service providers
            supporting climate-related activities will be listed here.
          </p>

          <span>Information to be added</span>
        </div>
      </section>

    </div>
  );
}