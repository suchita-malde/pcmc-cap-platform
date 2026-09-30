import { Link } from "react-router-dom";

const sectors = [
  {
    id: "rising-heat",
    title: "Rising Heat",
    icon: "☀️",
  },
  {
    id: "flooding-water-logging",
    title: "Flooding and Water Logging",
    icon: "🌧️",
  },
  {
    id: "solid-waste-management",
    title: "Solid Waste Management",
    icon: "♻️",
  },
  {
    id: "green-city-biodiversity",
    title: "Green City and Biodiversity",
    icon: "🌳",
  },
  {
    id: "sustainable-mobility",
    title: "Sustainable Mobility",
    icon: "🚲",
  },
  {
    id: "renewable-energy",
    title: "Renewable and Efficient Energy",
    icon: "⚡",
  },
  {
    id: "water-security-conservation",
    title: "Water Conservation",
    icon: "💧",
  },
  {
    id: "clean-air-healthy-life",
    title: "Clean Air and Healthy Life",
    icon: "🌿",
  },
];

export default function Sectors() {
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
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        {/* Page Header */}
        <section style={{ marginBottom: "32px" }}>
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
              marginBottom: "14px",
            }}
          >
            CLIMATE SECTORS
          </div>

          <h1
            style={{
              margin: "0 0 9px",
              color: "#394F49",
              fontSize: "38px",
              lineHeight: "1.2",
              fontWeight: "750",
              letterSpacing: "-0.4px",
            }}
          >
            Climate Sectors
          </h1>

          <p
            style={{
              margin: 0,
              color: "#65743A",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Manage climate sectors and their associated information.
          </p>
        </section>

        {/* Sector Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {sectors.map((sector) => (
            <div
              key={sector.id}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "235px",
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
                {sector.icon}
              </div>

              {/* Title */}
              <h2
                style={{
                  margin: "0 0 9px",
                  color: "#394F49",
                  fontSize: "18px",
                  lineHeight: "1.4",
                  fontWeight: "750",
                }}
              >
                {sector.title}
              </h2>

              {/* Sector ID */}
              <p
                style={{
                  margin: 0,
                  color: "#65743A",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  flex: 1,
                }}
              >
                Sector ID: {sector.id}
              </p>

              {/* Edit Button */}
              <Link
                to={`/sectors/${sector.id}/edit`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  background: "#394F49",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "750",
                  transition:
                    "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "#65743A";

                  e.currentTarget.style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "#394F49";

                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                Edit Sector
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
          ))}
        </div>
      </div>
    </div>
  );
}