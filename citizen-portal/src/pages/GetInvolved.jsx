import "./GetInvolved.css";

export default function GetInvolved() {
  return (
    <div className="involved-page">

      <section className="involved-hero">
        <h1>Get Involved</h1>

        <p>
          Your ideas, participation and local actions can help shape
          climate action in Pimpri-Chinchwad.
        </p>
      </section>

      <section className="involved-section">
        <h2>Share Your Voice</h2>

        <div className="involved-grid">

          <div className="involved-card">
            <h3>💡 Share a Suggestion</h3>

            <p>
              Have an idea for improving climate resilience or
              sustainability in your neighbourhood?
            </p>

            <span>Suggestion form to be connected</span>
          </div>

          <div className="involved-card">
            <h3>❓ Ask a Query</h3>

            <p>
              Share a question or concern related to climate action
              and your neighbourhood.
            </p>

            <span>Query form to be connected</span>
          </div>

        </div>
      </section>

      <section className="involved-section">
        <h2>Upcoming Events & Meetings</h2>

        <div className="event-placeholder">
          <h3>📅 Climate Action Events</h3>

          <p>
            Upcoming climate-related events, meetings, workshops and
            citizen engagement activities will be displayed here.
          </p>

          <span>Event information to be added</span>
        </div>
      </section>

      <section className="involved-section">
        <h2>Community Participation</h2>

        <div className="involved-grid">

          <div className="involved-card">
            <h3>🌱 Join Local Activities</h3>

            <p>
              Participate in activities such as plantation drives,
              clean-up campaigns and community climate initiatives.
            </p>
          </div>

          <div className="involved-card">
            <h3>🤝 Volunteer</h3>

            <p>
              Stay connected with opportunities to support climate
              action in your community.
            </p>

            <span>Registration details to be added</span>
          </div>

        </div>
      </section>

      <section className="involved-section registration-section">
        <h2>Register for Climate Activities</h2>

        <p>
          Registration links for upcoming events and citizen
          engagement activities will be provided here.
        </p>

        <span>Registration form to be connected</span>
      </section>

    </div>
  );
}