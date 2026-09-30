import { Link } from "react-router-dom";

const dashboardItems = [
  {
    title: "Sectors",
    icon: "🌱",
    description:
      "Manage the climate action sectors and their information.",
    path: "/sectors",
  },
  {
    title: "Projects",
    icon: "📋",
    description:
      "Manage climate projects and implementation details.",
    path: "/projects",
  },
  {
    title: "Progress",
    icon: "📈",
    description:
      "Update and manage progress information for projects.",
    path: "/progress",
  },
  {
    title: "Map Data",
    icon: "🗺️",
    description:
      "Manage climate-related map and location information.",
    path: "/map-data",
  },
  {
    title: "Resources",
    icon: "📚",
    description:
      "Manage documents, reports, and climate resources.",
    path: "/resources",
  },
  {
    title: "Events",
    icon: "📅",
    description:
      "Manage climate events and related information.",
    path: "/events",
  },
  {
    title: "Suggestions",
    icon: "💬",
    description:
      "Review and manage suggestions submitted by citizens.",
    path: "/suggestions",
  },
];

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F7F6",
        padding: "32px 34px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        {/* Dashboard Hero */}
        <section
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #394F49 0%, #435A53 100%)",
            borderRadius: "20px",
            padding: "38px 40px",
            marginBottom: "34px",
            boxShadow:
              "0 8px 24px rgba(57, 79, 73, 0.13)",
            overflow: "hidden",
          }}
        >
          {/* Decorative Shape */}
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              right: "-70px",
              top: "-90px",
              borderRadius: "50%",
              background:
                "rgba(232, 238, 227, 0.08)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              right: "100px",
              bottom: "-80px",
              borderRadius: "50%",
              background:
                "rgba(232, 238, 227, 0.06)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "7px 13px",
                borderRadius: "20px",
                background: "#E8F3E9",
                color: "#2F7D4A",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "0.6px",
                marginBottom: "15px",
              }}
            >
              ADMIN PANEL
            </div>

            <h1
              style={{
                margin: "0 0 10px",
                color: "#FFFFFF",
                fontSize: "40px",
                lineHeight: "1.2",
                fontWeight: "750",
                letterSpacing: "-0.5px",
              }}
            >
              Climate Action Dashboard
            </h1>

            <p
              style={{
                margin: 0,
                maxWidth: "680px",
                color: "#DDE7D8",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Manage the PCMC Climate Action Plan from one
              place.
            </p>
          </div>
        </section>

        {/* Section Heading */}
        <section style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "7px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "24px",
                borderRadius: "4px",
                background: "#65743A",
              }}
            />

            <h2
              style={{
                margin: 0,
                color: "#394F49",
                fontSize: "24px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              Management Areas
            </h2>
          </div>

          <p
            style={{
              margin: "0 0 0 14px",
              color: "#65743A",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            Select an area to manage its information.
          </p>
        </section>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {dashboardItems.map((item) => (
            <div
              key={item.title}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "238px",
                padding: "25px",
                boxSizing: "border-box",
                background: "#FFFFFF",
                border: "1px solid #DCE3DD",
                borderRadius: "16px",
                boxShadow:
                  "0 4px 14px rgba(57, 79, 73, 0.07)",
                overflow: "hidden",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(57, 79, 73, 0.13)";
                e.currentTarget.style.borderColor =
                  "#C9D6CB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(57, 79, 73, 0.07)";
                e.currentTarget.style.borderColor =
                  "#DCE3DD";
              }}
            >
              {/* Green Top Border */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: "#65743A",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "19px",
                  borderRadius: "14px",
                  background: "#E8EEE3",
                  fontSize: "28px",
                  boxShadow:
                    "inset 0 0 0 1px rgba(101, 116, 58, 0.06)",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h2
                style={{
                  margin: "0 0 9px",
                  color: "#394F49",
                  fontSize: "20px",
                  lineHeight: "1.3",
                  fontWeight: "750",
                  letterSpacing: "-0.1px",
                }}
              >
                {item.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  color: "#65743A",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>

              {/* Manage Button */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "22px",
                }}
              >
                <Link
                  to={item.path}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    background: "#394F49",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: "750",
                    transition:
                      "background 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "#65743A";
                    e.currentTarget.style.transform =
                      "translateX(2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "#394F49";
                    e.currentTarget.style.transform =
                      "translateX(0)";
                  }}
                >
                  Manage
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: 1,
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Admin Note */}
        <div
          style={{
            marginTop: "30px",
            padding: "17px 19px",
            background: "#E8EEE3",
            border: "1px solid #DCE3DD",
            borderRadius: "12px",
            color: "#394F49",
            fontSize: "13px",
            lineHeight: "1.6",
          }}
        >
          <strong>Admin workspace:</strong>{" "}
          Use the sections above to manage climate action
          information.
        </div>
      </div>
    </div>
  );
}