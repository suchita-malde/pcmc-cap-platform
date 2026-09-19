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
      <div>
        <h1 style={{ color: "#173b2a" }}>Sector Not Found</h1>
        <p style={{ color: "#607565", marginBottom: "16px" }}>
          The requested sector does not exist.
        </p>

        <Link
          to="/sectors"
          style={{
            color: "#2f7d4a",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          ← Back to Sectors
        </Link>
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
    marginTop: "8px",
    padding: "11px 12px",
    boxSizing: "border-box",
    border: "1px solid #cddccd",
    borderRadius: "7px",
    backgroundColor: "#ffffff",
    color: "#344638",
    fontSize: "14px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "20px",
    color: "#304b38",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <Link
          to="/sectors"
          style={{
            color: "#2f7d4a",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          ← Back to Sectors
        </Link>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            width: "54px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: "#e8f3e9",
            fontSize: "28px",
            marginBottom: "14px",
          }}
        >
          {sectorIcons[sectorId] || "📌"}
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Edit Sector
        </h1>

        <p style={{ color: "#607565" }}>
          Editing: <strong>{sector.title}</strong>
        </p>
      </div>

      <form
        onSubmit={handleSaveDraft}
        style={{
          maxWidth: "850px",
          padding: "28px",
          backgroundColor: "#ffffff",
          border: "1px solid #d9e5d8",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
        }}
      >
        <div
          style={{
            marginBottom: "24px",
            padding: "14px 16px",
            backgroundColor: "#f3f7f1",
            border: "1px solid #d9e5d8",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#607565",
            }}
          >
            Sector ID
          </p>

          <strong
            style={{
              display: "block",
              marginTop: "4px",
              color: "#304b38",
              fontSize: "14px",
            }}
          >
            {sectorId}
          </strong>
        </div>

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
            }}
          />
        </label>

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
            }}
          />
        </label>

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
            }}
          />
        </label>

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
            }}
          />
        </label>

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
            }}
          />
        </label>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "8px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "7px",
              backgroundColor: "#2f7d4a",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Save Draft
          </button>

          <Link
            to="/sectors"
            style={{
              padding: "9px 18px",
              border: "1px solid #cddccd",
              borderRadius: "7px",
              backgroundColor: "#f3f7f1",
              color: "#405744",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Cancel
          </Link>

          {saved && (
            <span
              style={{
                color: "#2f7d4a",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              ✓ Draft saved locally.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}