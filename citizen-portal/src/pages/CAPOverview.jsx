import "./CAPOverview.css";
export default function CAPOverview() {
  return (
    <div className="cap-page">

      <section className="cap-hero">
        <h1>PCMC Climate Action Plan</h1>

        <p>
          A city-wide plan to reduce climate impacts, lower greenhouse
          gas emissions and build a safer and more resilient
          Pimpri-Chinchwad.
        </p>
      </section>

      <section className="cap-section">
        <h2>What is the Climate Action Plan?</h2>

        <p>
          PCMC's Climate Action Plan is a roadmap for making
          Pimpri-Chinchwad more climate-resilient while reducing
          greenhouse gas emissions.
        </p>

        <p>
          It brings together actions across different sectors of the
          city and encourages participation from citizens, communities,
          institutions and the municipal administration.
        </p>
      </section>

      <section className="cap-section">
        <h2>Why does PCMC need a Climate Action Plan?</h2>

        <div className="risk-grid">
          <div className="risk-card">
            <h3>🌡️ Extreme Heat</h3>
            <p>
              Summers are becoming longer and hotter, with many areas
              crossing 40°C.
            </p>
          </div>

          <div className="risk-card">
            <h3>🌧️ Flooding</h3>
            <p>
              Changing rainfall patterns can increase flooding and
              water logging.
            </p>
          </div>

          <div className="risk-card">
            <h3>💧 Water Stress</h3>
            <p>
              Water shortages, groundwater depletion and increasing
              demand create pressure on water resources.
            </p>
          </div>

          <div className="risk-card">
            <h3>🌫️ Air Pollution</h3>
            <p>
              PM2.5 and PM10 pollution can affect air quality and
              public health.
            </p>
          </div>
        </div>
      </section>

      <section className="cap-section">
        <h2>Key Climate Figures</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>36.1 lakh</strong>
            <span>tonnes CO₂e</span>
            <p>PCMC greenhouse gas emissions in 2025</p>
          </div>

          <div className="stat-card">
            <strong>66%</strong>
            <span>of emissions</span>
            <p>
              From buildings and energy sectors in 2025
            </p>
          </div>

          <div className="stat-card">
            <strong>1400</strong>
            <span>tonnes/day</span>
            <p>Approximate municipal solid waste generated</p>
          </div>

          <div className="stat-card">
            <strong>100 MLD</strong>
            <span>by 2035</span>
            <p>Wastewater recycling and reuse target</p>
          </div>
        </div>
      </section>

      <section className="cap-section">
        <h2>What does the plan aim to achieve?</h2>

        <ul className="goal-list">
          <li>Reduce greenhouse gas emissions</li>
          <li>Prepare the city for climate impacts</li>
          <li>Improve public health and quality of life</li>
          <li>Protect natural resources</li>
          <li>Strengthen public transport</li>
          <li>Increase greenery and nature-based solutions</li>
          <li>Make neighbourhoods safer and more resilient</li>
          <li>Work towards a Net Zero city</li>
        </ul>
      </section>

            <section className="cap-section">
        <h2>CAP & City Budget</h2>

        <p>
          Climate action is connected with planning and investment across
          different sectors of Pimpri-Chinchwad. This section will show how
          city budgets and Climate Action Plan components support climate
          action.
        </p>

        <div className="budget-info">
          <div className="budget-card">
            <h3>🏛️ PCMC City Budget</h3>
            <p>
              Verified information about relevant PCMC budget allocations
              will be displayed here.
            </p>
            <span>Budget data to be updated</span>
          </div>

          <div className="budget-card">
            <h3>🌱 CAP Components</h3>
            <p>
              Budget information related to climate action sectors and
              planned initiatives will be displayed here.
            </p>
            <span>CAP budget data to be updated</span>
          </div>
        </div>
      </section>

    </div>
  );
}