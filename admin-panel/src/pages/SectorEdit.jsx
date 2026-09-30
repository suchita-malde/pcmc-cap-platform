import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import mockContent from "../data/mockContent.json";

const sectorIcons = {
  "rising-heat": "☀️",
  "flooding-water-logging": "🌧️",
  "solid-waste-management": "♻️",
  "green-city-biodiversity": "🌳",
  "sustainable-mobility": "🚲",
  "renewable-energy": "⚡",
  "water-security-conservation": "💧",
  "clean-air-healthy-life": "🌿",
};

export default function SectorEdit() {
  const { sectorId } = useParams();

  const sector = mockContent.find((item) => item.id === sectorId);

  const [form, setForm] = useState({
    title: sector?.title || "",
    currentScenario: sector?.currentScenario || "",
    whyItMatters: sector?.whyItMatters || "",
    relevantAreas: sector?.relevantAreas || "",
    plannedActions: sector?.plannedActions?.join("\n") || "",
    citizenActions: sector?.citizenActions?.join("\n") || "",
  });

  const [saved, setSaved] = useState(false);

  if (!sector) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F5F7F6",
          padding: "40px 34px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "36px",
            background: "#FFFFFF",
            border: "1px solid #DCE3DD",
            borderRadius: "18px",
            boxShadow: "0 6px 20px rgba(57, 79, 73, 0.07)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "7px 12px",
              borderRadius: "20px",
              background: "#F5EAEA",
              color: "#8A4A4A",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "0.5px",
              marginBottom: "14px",
            }}
          >
            ERROR
          </div>

          <h1
            style={{
              margin: "0 0 10px",
              color: "#394F49",
              fontSize: "30px",
              fontWeight: "750",
            }}
          >
            Sector Not Found
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#65743A",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            The requested sector does not exist.
          </p>

          <Link
            to="/sectors"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#394F49",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: "750",
              textDecoration: "none",
            }}
          >
            ← Back to Sectors
          </Link>
        </div>
      </div>
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setSaved(false);
  }

  function handleSaveDraft(event) {
    event.preventDefault();

    console.log("Sector draft:", {
      id: sectorId,
      ...form,
    });

    setSaved(true);
  }

  const inputStyle = {
    display: "block",
    width: "100%",
    marginTop: "9px",
    padding: "12px 14px",
    boxSizing: "border-box",
    border: "1px solid #D2DCD4",
    borderRadius: "9px",
    background: "#FFFFFF",
    color: "#394F49",
    fontSize: "14px",
    lineHeight: "1.55",
    outline: "none",
    fontFamily: "inherit",
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "23px",
    color: "#394F49",
    fontSize: "14px",
    fontWeight: "700",
  };

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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Back Link */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            to="/sectors"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              color: "#65743A",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            ← Back to Sectors
          </Link>
        </div>

        {/* Page Header */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          {/* Sector Icon */}
          <div
            style={{
              width: "68px",
              height: "68px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "17px",
              background: "#E8EEE3",
              border: "1px solid #DCE3DD",
              fontSize: "32px",
              flexShrink: 0,
              boxShadow:
                "0 4px 12px rgba(57, 79, 73, 0.05)",
            }}
          >
            {sectorIcons[sectorId] || "📌"}
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "6px 10px",
                borderRadius: "20px",
                background: "#E8F3E9",
                color: "#2F7D4A",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              SECTOR MANAGEMENT
            </div>

            <h1
              style={{
                margin: "0 0 5px",
                color: "#394F49",
                fontSize: "34px",
                lineHeight: "1.2",
                fontWeight: "750",
                letterSpacing: "-0.3px",
              }}
            >
              Edit Sector
            </h1>

            <p
              style={{
                margin: 0,
                color: "#65743A",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              Editing:{" "}
              <strong style={{ color: "#394F49" }}>
                {sector.title}
              </strong>
            </p>
          </div>
        </section>

        {/* Main Form */}
        <form
          onSubmit={handleSaveDraft}
          style={{
            background: "#FFFFFF",
            border: "1px solid #DCE3DD",
            borderRadius: "18px",
            boxShadow:
              "0 6px 20px rgba(57, 79, 73, 0.07)",
            overflow: "hidden",
          }}
        >
          {/* Green Top Border */}
          <div
            style={{
              height: "5px",
              background: "#65743A",
            }}
          />

          {/* Form Header */}
          <div
            style={{
              padding: "24px 28px",
              borderBottom: "1px solid #E1E7E2",
              background: "#FFFFFF",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "6px 10px",
                marginBottom: "10px",
                borderRadius: "20px",
                background: "#E8EEE3",
                color: "#65743A",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "0.4px",
              }}
            >
              SECTOR DETAILS
            </div>

            <h2
              style={{
                margin: "0 0 6px",
                color: "#394F49",
                fontSize: "21px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              Sector Information
            </h2>

            <p
              style={{
                margin: 0,
                color: "#65743A",
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              Manage the information associated with this
              climate sector.
            </p>
          </div>

          {/* Form Content */}
          <div
            style={{
              padding: "30px",
            }}
          >
            {/* Sector ID */}
            <div
              style={{
                marginBottom: "28px",
                padding: "15px 17px",
                background: "#F5F7F6",
                border: "1px solid #DCE3DD",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 5px",
                  fontSize: "10px",
                  color: "#65743A",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Sector ID
              </p>

              <strong
                style={{
                  display: "block",
                  color: "#394F49",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {sectorId}
              </strong>
            </div>

            {/* Sector Title */}
            <label style={labelStyle}>
              Sector Title

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                style={inputStyle}
              />
            </label>

            {/* Current Scenario */}
            <label style={labelStyle}>
              Current Scenario

              <textarea
                name="currentScenario"
                value={form.currentScenario}
                onChange={handleChange}
                rows="5"
                placeholder="Enter the verified current scenario..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </label>

            {/* Why It Matters */}
            <label style={labelStyle}>
              Why It Matters

              <textarea
                name="whyItMatters"
                value={form.whyItMatters}
                onChange={handleChange}
                rows="5"
                placeholder="Enter why this sector matters..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </label>

            {/* Relevant Areas */}
            <label style={labelStyle}>
              Relevant Areas

              <textarea
                name="relevantAreas"
                value={form.relevantAreas}
                onChange={handleChange}
                rows="4"
                placeholder="Enter relevant areas, one per line..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "100px",
                }}
              />
            </label>

            {/* Planned Actions */}
            <label style={labelStyle}>
              Planned Actions

              <textarea
                name="plannedActions"
                value={form.plannedActions}
                onChange={handleChange}
                rows="5"
                placeholder="Enter verified planned actions, one per line..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </label>

            {/* Citizen Actions */}
            <label style={labelStyle}>
              Citizen Actions

              <textarea
                name="citizenActions"
                value={form.citizenActions}
                onChange={handleChange}
                rows="5"
                placeholder="Enter verified citizen actions, one per line..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </label>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "6px",
                paddingTop: "24px",
                borderTop: "1px solid #E1E7E2",
              }}
            >
              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  padding: "11px 19px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#394F49",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontWeight: "750",
                  fontSize: "13px",
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
                Save Draft
                <span>→</span>
              </button>

              <Link
                to="/sectors"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 18px",
                  border: "1px solid #D2DCD4",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  color: "#394F49",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "700",
                  transition:
                    "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "#F5F7F6";
                  e.currentTarget.style.borderColor =
                    "#BFCBC1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "#FFFFFF";
                  e.currentTarget.style.borderColor =
                    "#D2DCD4";
                }}
              >
                Cancel
              </Link>

              {saved && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 11px",
                    borderRadius: "8px",
                    background: "#E8F3E9",
                    color: "#2F7D4A",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  ✓ Draft saved locally.
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}