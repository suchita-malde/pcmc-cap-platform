export default function Header() {
  return (
    <header className="admin-header">
      <div>
        <h2 className="admin-header-title">
          PCMC Climate Action Plan
        </h2>

        <p className="admin-header-subtitle">
          Climate Action Management
        </p>
      </div>

      <div className="admin-header-badge">
        <span className="admin-header-dot" />
        Admin
      </div>
    </header>
  );
}