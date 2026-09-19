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
          CLIMATE PROJECTS
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Projects
        </h1>

        <p style={{ color: "#607565" }}>
          Manage climate projects and actions under the PCMC Climate Action
          Plan.
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
      </form>

      <div style={{ marginTop: "32px" }}>
        <h2
          style={{
            color: "#173b2a",
            marginBottom: "14px",
          }}
        >
          Projects
        </h2>

        {projects.length === 0 ? (
          <div
            style={{
              padding: "22px",
              backgroundColor: "#ffffff",
              border: "1px solid #d9e5d8",
              borderRadius: "10px",
              color: "#607565",
            }}
          >
            Data to be added.
          </div>
        ) : (
          projects.map((project) => {
            const sector = mockContent.find(
              (item) => item.id === project.sector
            );

            return (
              <div
                key={project.id}
                style={{
                  padding: "20px",
                  marginBottom: "16px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #d9e5d8",
                  borderRadius: "10px",
                  boxShadow: "0 3px 10px rgba(31, 78, 48, 0.05)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#173b2a",
                  }}
                >
                  {project.name}
                </h3>

                <p style={{ marginBottom: "6px", color: "#607565" }}>
                  <strong>Sector:</strong>{" "}
                  {sector ? sector.title : "Unknown sector"}
                </p>

                <p style={{ color: "#607565" }}>
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}