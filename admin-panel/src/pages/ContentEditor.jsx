import { useState } from "react";
import mockContent from "../data/mockContent.json";

export default function ContentEditor() {
  const [sectors, setSectors] = useState(mockContent);
  const [selectedId, setSelectedId] = useState(sectors[0]?.id || null);

  const selected = sectors.find((s) => s.id === selectedId);

  const updateField = (field, value) => {
    setSectors((prev) =>
      prev.map((s) => (s.id === selectedId ? { ...s, [field]: value } : s))
    );
  };

  if (!selected) return <div style={{ padding: "2rem" }}>No content available.</div>;

  return (
    <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
      <div style={{ minWidth: "220px" }}>
        <h3>Sectors</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {sectors.map((s) => (
            <li key={s.id} style={{ marginBottom: "0.5rem" }}>
              <button
                onClick={() => setSelectedId(s.id)}
                style={{
                  fontWeight: s.id === selectedId ? "bold" : "normal",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Editing: {selected.title}</h2>

        <label>Current Scenario</label>
        <textarea
          value={selected.currentScenario}
          onChange={(e) => updateField("currentScenario", e.target.value)}
          rows={4}
          style={{ width: "100%", display: "block", marginBottom: "1rem" }}
        />

        <p style={{ color: "gray", fontSize: "0.85rem" }}>
          Note: changes here are local only (no backend connected yet).
        </p>
      </div>
    </div>
  );
}