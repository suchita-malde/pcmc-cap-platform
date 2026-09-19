import { Link } from "react-router-dom";

export default function Dashboard() {
  const sections = [
    {
      name: "Sectors",
      description: "Manage climate action sectors.",
      path: "/sectors",
      icon: "🌿",
    },
    {
      name: "Projects",
      description: "Manage climate projects and actions.",
      path: "/projects",
      icon: "🌱",
    },
    {
      name: "Progress",
      description: "Track targets and progress.",
      path: "/progress",
      icon: "📈",
    },
    {
      name: "Map Data",
      description: "Manage climate map information.",
      path: "/map-data",
      icon: "🗺️",
    },
    {
      name: "Resources",
      description: "Manage climate resources.",
      path: "/resources",
      icon: "📚",
    },
    {
      name: "Events",
      description: "Manage climate-related events.",
      path: "/events",
      icon: "📅",
    },
    {
      name: "Suggestions",
      description: "Review citizen suggestions and queries.",
      path: "/suggestions",
      icon: "💬",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "20px",
            backgroundColor: "#e8f3e9",
            color: "#2f7d4a",
            fontSize: "12px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          CLIMATE ACTION ADMIN
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Admin Dashboard
        </h1>

        <p style={{ color: "#607565" }}>
          PCMC Climate Action Plan Platform
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
        }}
      >
        {sections.map((section) => (
          <Link
            key={section.name}
            to={section.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                minHeight: "170px",
                padding: "22px",
                backgroundColor: "#ffffff",
                border: "1px solid #d9e5d8",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow:
                  "0 4px 12px rgba(31, 78, 48, 0.06)",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  backgroundColor: "#e8f3e9",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                {section.icon}
              </div>

              <h2
                style={{
                  margin: "0 0 8px",
                  color: "#173b2a",
                  fontSize: "19px",
                }}
              >
                {section.name}
              </h2>

              <p
                style={{
                  color: "#667568",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}