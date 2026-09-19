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
          CLIMATE SECTORS
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Climate Sectors
        </h1>

        <p style={{ color: "#607565" }}>
          Manage the 8 climate action sectors of the PCMC Climate Action Plan.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
        }}
      >
        {sectors.map((sector) => (
          <div
            key={sector.id}
            style={{
              padding: "22px",
              backgroundColor: "#ffffff",
              border: "1px solid #d9e5d8",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                backgroundColor: "#e8f3e9",
                fontSize: "26px",
                marginBottom: "16px",
              }}
            >
              {sector.icon}
            </div>

            <h2
              style={{
                margin: "0 0 12px",
                color: "#173b2a",
                fontSize: "19px",
              }}
            >
              {sector.title}
            </h2>

            <p
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                color: "#607565",
              }}
            >
              <strong>Sector ID:</strong> {sector.id}
            </p>

            <p
              style={{
                marginBottom: "20px",
                color: "#667568",
                fontSize: "14px",
              }}
            >
              Sector content can be managed here.
            </p>

            <Link
              to={`/sectors/${sector.id}/edit`}
              style={{
                display: "inline-block",
                padding: "9px 14px",
                borderRadius: "7px",
                backgroundColor: "#2f7d4a",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Edit Sector
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}