import { useState } from "react";
import mockContent from "../data/mockContent.json";

const STORAGE_KEY = "pcmcProgressDrafts";

function loadDrafts() {
  const savedDrafts = localStorage.getItem(STORAGE_KEY);

  if (!savedDrafts) {
    return [];
  }

  try {
    return JSON.parse(savedDrafts);
  } catch {
    return [];
  }
}

export default function ProgressEntry() {
  const [selectedSector, setSelectedSector] = useState(
    mockContent[0]?.id || ""
  );

  const [form, setForm] = useState({
    goal: "",
    target: "",
    targetYear: "",
    currentValue: "",
    unit: "",
    status: "",
    lastUpdated: "",
    source: "",
  });

  const [saved, setSaved] = useState(false);
  const [drafts, setDrafts] = useState(loadDrafts);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setSaved(false);
  }

  function handleSectorChange(event) {
    setSelectedSector(event.target.value);
    setSaved(false);
  }

  function handleSaveDraft(event) {
    event.preventDefault();

    const selectedSectorData = mockContent.find(
      (sector) => sector.id === selectedSector
    );

    const newDraft = {
      id: Date.now(),
      sectorId: selectedSector,
      sectorTitle: selectedSectorData?.title || "",
      ...form,
    };

    const updatedDrafts = [...drafts, newDraft];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDrafts));
    setDrafts(updatedDrafts);
    setSaved(true);
  }

  const inputStyle = {
    display: "block",
    width: "100%",
    marginTop: "8px",
    marginBottom: "20px",
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
    color: "#304b38",
    fontSize: "14px",
    fontWeight: "600",
  };

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
          PROGRESS & TARGETS
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Progress & Targets
        </h1>

        <p style={{ color: "#607565" }}>
          Enter verified progress and target information for a climate action
          sector.
        </p>
      </div>

      <form
        onSubmit={handleSaveDraft}
        style={{
          maxWidth: "800px",
          padding: "28px",
          backgroundColor: "#ffffff",
          border: "1px solid #d9e5d8",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
        }}
      >
        <label style={labelStyle}>
          Sector

          <select
            value={selectedSector}
            onChange={handleSectorChange}
            style={inputStyle}
          >
            {mockContent.map((sector) => (
              <option key={sector.id} value={sector.id}>
                {sector.title}
              </option>
            ))}
          </select>
        </label>

        <label style={labelStyle}>
          Goal

          <textarea
            name="goal"
            value={form.goal}
            onChange={handleChange}
            rows="4"
            placeholder="Enter the verified goal..."
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />
        </label>

        <label style={labelStyle}>
          Target

          <input
            type="text"
            name="target"
            value={form.target}
            onChange={handleChange}
            placeholder="Enter the verified target..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Target Year

          <input
            type="text"
            name="targetYear"
            value={form.targetYear}
            onChange={handleChange}
            placeholder="Enter target year..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Current Value

          <input
            type="text"
            name="currentValue"
            value={form.currentValue}
            onChange={handleChange}
            placeholder="Enter verified current value..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Unit

          <input
            type="text"
            name="unit"
            value={form.unit}
            onChange={handleChange}
            placeholder="Example: %, MLD, tonnes/day..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Status

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select status</option>
            <option value="On Track">On Track</option>
            <option value="Needs Attention">Needs Attention</option>
            <option value="Delayed">Delayed</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <label style={labelStyle}>
          Last Updated

          <input
            type="text"
            name="lastUpdated"
            value={form.lastUpdated}
            onChange={handleChange}
            placeholder="Enter verified update date..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Source

          <input
            type="text"
            name="source"
            value={form.source}
            onChange={handleChange}
            placeholder="Enter source or verification reference..."
            style={inputStyle}
          />
        </label>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
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

      <div
        style={{
          maxWidth: "800px",
          marginTop: "32px",
        }}
      >
        <h2
          style={{
            color: "#173b2a",
            marginBottom: "14px",
          }}
        >
          Saved Progress Drafts
        </h2>

        {drafts.length === 0 ? (
          <div
            style={{
              padding: "22px",
              backgroundColor: "#ffffff",
              border: "1px solid #d9e5d8",
              borderRadius: "10px",
              color: "#607565",
            }}
          >
            No progress drafts saved yet.
          </div>
        ) : (
          drafts.map((draft) => (
            <div
              key={draft.id}
              style={{
                marginBottom: "16px",
                padding: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #d9e5d8",
                borderRadius: "10px",
                boxShadow: "0 3px 10px rgba(31, 78, 48, 0.05)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 16px",
                  color: "#173b2a",
                }}
              >
                {draft.sectorTitle}
              </h3>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Goal:</strong>{" "}
                {draft.goal || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Target:</strong>{" "}
                {draft.target || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Target Year:</strong>{" "}
                {draft.targetYear || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Current Value:</strong>{" "}
                {draft.currentValue || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Unit:</strong>{" "}
                {draft.unit || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Status:</strong>{" "}
                {draft.status || "Data to be updated"}
              </p>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Last Updated:</strong>{" "}
                {draft.lastUpdated || "Data to be updated"}
              </p>

              <p style={{ marginBottom: 0, color: "#607565" }}>
                <strong>Source:</strong>{" "}
                {draft.source || "Data to be updated"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}