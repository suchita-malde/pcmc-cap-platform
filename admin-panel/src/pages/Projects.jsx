import { useState } from "react";
import mockContent from "../data/mockContent.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    name: "",
    sector: mockContent[0]?.id || "",
    status: "Draft",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSaveDraft(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      name: form.name.trim(),
      sector: form.sector,
      status: form.status,
    };

    setProjects([...projects, newProject]);

    setForm({
      name: "",
      sector: mockContent[0]?.id || "",
      status: "Draft",
    });
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
            PROJECT MANAGEMENT
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
            Projects
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "680px",
              color: "#65743A",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Manage climate projects and implementation details under the PCMC
            Climate Action Plan.
          </p>
        </section>

        {/* Add Project Card */}
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

          {/* Card Header */}
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
              Add Project
            </h2>

            <p
              style={{
                margin: 0,
                color: "#65743A",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Add a climate project and associate it with a sector.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSaveDraft}
            style={{
              padding: "28px",
            }}
          >
            <label style={labelStyle}>
              Project Name

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter project name..."
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              Sector

              <select
                name="sector"
                value={form.sector}
                onChange={handleChange}
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
              Status

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </label>

            {/* Form Action */}
            <div
              style={{
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
            </div>
          </form>
        </section>

        {/* Projects Section */}
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
                Projects
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
              Projects currently available in this admin workspace.
            </p>
          </div>

          {/* Empty State */}
          {projects.length === 0 ? (
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
                📋
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
                No projects added yet
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
            /* Project Cards */
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                gap: "22px",
              }}
            >
              {projects.map((project) => {
                const sector = mockContent.find(
                  (item) => item.id === project.sector
                );

                return (
                  <div
                    key={project.id}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "220px",
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

                    {/* Project Header */}
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
                        {project.name}
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
                        {project.status}
                      </span>
                    </div>

                    {/* Sector */}
                    <div
                      style={{
                        marginTop: "auto",
                        padding: "13px 14px",
                        background: "#F5F7F6",
                        borderRadius: "9px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 5px",
                          color: "#65743A",
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Sector
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: "#394F49",
                          fontSize: "13px",
                          lineHeight: "1.5",
                          fontWeight: "650",
                        }}
                      >
                        {sector ? sector.title : "Unknown sector"}
                      </p>
                    </div>
                  </div>
                );
              })}
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
          Use this section to manage climate projects and their associated
          sectors.
        </div>
      </div>
    </div>
  );
}