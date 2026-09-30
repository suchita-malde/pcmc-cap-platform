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
    marginTop: "9px",
    marginBottom: "22px",
    padding: "12px 13px",
    boxSizing: "border-box",
    border: "1px solid #DCE3DD",
    borderRadius: "9px",
    backgroundColor: "#FFFFFF",
    color: "#394F49",
    fontSize: "14px",
    lineHeight: "1.5",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
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
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        {/* Page Header */}
        <section
          style={{
            marginBottom: "34px",
          }}
        >
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
            PROGRESS & TARGETS
          </div>

          <h1
            style={{
              margin: "0 0 10px",
              color: "#394F49",
              fontSize: "40px",
              lineHeight: "1.2",
              fontWeight: "750",
              letterSpacing: "-0.5px",
            }}
          >
            Progress & Targets
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "720px",
              color: "#65743A",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Enter verified progress and target information for a climate action
            sector.
          </p>
        </section>

        {/* Progress Form */}
        <section
          style={{
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid #DCE3DD",
            borderRadius: "16px",
            boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
            overflow: "hidden",
            marginBottom: "34px",
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

          {/* Form Header */}
          <div
            style={{
              padding: "28px 28px 22px",
              borderBottom: "1px solid #DCE3DD",
            }}
          >
            <h2
              style={{
                margin: "0 0 7px",
                color: "#394F49",
                fontSize: "24px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              Progress Information
            </h2>

            <p
              style={{
                margin: 0,
                color: "#65743A",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Manage verified targets and current progress information.
            </p>
          </div>

          {/* Form Body */}
          <form
            onSubmit={handleSaveDraft}
            style={{
              padding: "28px",
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

            {/* Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                paddingTop: "5px",
                borderTop: "1px solid #DCE3DD",
              }}
            >
              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "20px",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#394F49",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "750",
                  transition:
                    "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#65743A";
                  e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#394F49";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Save Draft

                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: 1,
                  }}
                >
                  →
                </span>
              </button>

              {saved && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "20px",
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
          </form>
        </section>

        {/* Saved Drafts */}
        <section>
          {/* Section Heading */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
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
                Saved Progress Drafts
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
              Progress information saved locally in this admin workspace.
            </p>
          </div>

          {/* Empty State */}
          {drafts.length === 0 ? (
            <div
              style={{
                position: "relative",
                padding: "25px",
                background: "#FFFFFF",
                border: "1px solid #DCE3DD",
                borderRadius: "16px",
                boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
                overflow: "hidden",
              }}
            >
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
                📈
              </div>

              <strong
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: "#394F49",
                  fontSize: "20px",
                  lineHeight: "1.3",
                  fontWeight: "750",
                }}
              >
                No progress drafts saved yet
              </strong>

              <p
                style={{
                  margin: 0,
                  color: "#65743A",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Data to be added.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                gap: "22px",
              }}
            >
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "300px",
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

                  {/* Draft Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "19px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#394F49",
                        fontSize: "20px",
                        lineHeight: "1.3",
                        fontWeight: "750",
                      }}
                    >
                      {draft.sectorTitle}
                    </h3>

                    <span
                      style={{
                        flexShrink: 0,
                        padding: "6px 10px",
                        borderRadius: "20px",
                        background: "#E8F3E9",
                        color: "#2F7D4A",
                        fontSize: "11px",
                        fontWeight: "800",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {draft.status || "Data to be updated"}
                    </span>
                  </div>

                  {/* Draft Details */}
                  <div
                    style={{
                      display: "grid",
                      gap: "9px",
                    }}
                  >
                    <div
                      style={{
                        padding: "11px 13px",
                        background: "#F5F7F6",
                        borderRadius: "9px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 4px",
                          color: "#65743A",
                          fontSize: "10px",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Goal
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: "#394F49",
                          fontSize: "13px",
                          lineHeight: "1.5",
                        }}
                      >
                        {draft.goal || "Data to be updated"}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "9px",
                      }}
                    >
                      <div
                        style={{
                          padding: "11px 13px",
                          background: "#F5F7F6",
                          borderRadius: "9px",
                        }}
                      >
                        <p
                          style={{
                            margin: "0 0 4px",
                            color: "#65743A",
                            fontSize: "10px",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.4px",
                          }}
                        >
                          Target
                        </p>

                        <p
                          style={{
                            margin: 0,
                            color: "#394F49",
                            fontSize: "13px",
                          }}
                        >
                          {draft.target || "Data to be updated"}
                        </p>
                      </div>

                      <div
                        style={{
                          padding: "11px 13px",
                          background: "#F5F7F6",
                          borderRadius: "9px",
                        }}
                      >
                        <p
                          style={{
                            margin: "0 0 4px",
                            color: "#65743A",
                            fontSize: "10px",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.4px",
                          }}
                        >
                          Target Year
                        </p>

                        <p
                          style={{
                            margin: 0,
                            color: "#394F49",
                            fontSize: "13px",
                          }}
                        >
                          {draft.targetYear || "Data to be updated"}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "9px",
                      }}
                    >
                      <div
                        style={{
                          padding: "11px 13px",
                          background: "#F5F7F6",
                          borderRadius: "9px",
                        }}
                      >
                        <p
                          style={{
                            margin: "0 0 4px",
                            color: "#65743A",
                            fontSize: "10px",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.4px",
                          }}
                        >
                          Current Value
                        </p>

                        <p
                          style={{
                            margin: 0,
                            color: "#394F49",
                            fontSize: "13px",
                          }}
                        >
                          {draft.currentValue || "Data to be updated"}
                        </p>
                      </div>

                      <div
                        style={{
                          padding: "11px 13px",
                          background: "#F5F7F6",
                          borderRadius: "9px",
                        }}
                      >
                        <p
                          style={{
                            margin: "0 0 4px",
                            color: "#65743A",
                            fontSize: "10px",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.4px",
                          }}
                        >
                          Unit
                        </p>

                        <p
                          style={{
                            margin: 0,
                            color: "#394F49",
                            fontSize: "13px",
                          }}
                        >
                          {draft.unit || "Data to be updated"}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "11px 13px",
                        background: "#F5F7F6",
                        borderRadius: "9px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 4px",
                          color: "#65743A",
                          fontSize: "10px",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Last Updated
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: "#394F49",
                          fontSize: "13px",
                        }}
                      >
                        {draft.lastUpdated || "Data to be updated"}
                      </p>
                    </div>

                    <div
                      style={{
                        padding: "11px 13px",
                        background: "#F5F7F6",
                        borderRadius: "9px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 4px",
                          color: "#65743A",
                          fontSize: "10px",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Source
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: "#394F49",
                          fontSize: "13px",
                          lineHeight: "1.5",
                        }}
                      >
                        {draft.source || "Data to be updated"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

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
          Progress drafts are stored locally until a backend data service is
          connected.
        </div>
      </div>
    </div>
  );
}