import { useState } from "react";

const resourceCategories = [
  "Guidelines",
  "Reports",
  "Plans",
  "Awareness Materials",
  "Other",
];

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "Guidelines",
    description: "",
    source: "",
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

    if (!form.title.trim()) {
      return;
    }

    const newResource = {
      id: Date.now(),
      ...form,
      title: form.title.trim(),
    };

    setResources([...resources, newResource]);

    setForm({
      title: "",
      category: "Guidelines",
      description: "",
      source: "",
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
          CLIMATE RESOURCES
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Resources
        </h1>

        <p style={{ color: "#607565" }}>
          Manage verified climate action resources for the platform.
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
          Resource Title

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter resource title..."
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Category

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            style={inputStyle}
          >
            {resourceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label style={labelStyle}>
          Description

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter verified resource description..."
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />
        </label>

        <label style={labelStyle}>
          Source

          <input
            type="text"
            name="source"
            value={form.source}
            onChange={handleChange}
            placeholder="Enter verified source..."
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
          Resources
        </h2>

        {resources.length === 0 ? (
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
          resources.map((resource) => (
            <div
              key={resource.id}
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
                {resource.title}
              </h3>

              <p style={{ marginBottom: "7px", color: "#607565" }}>
                <strong>Category:</strong> {resource.category}
              </p>

              <p style={{ marginBottom: "12px", color: "#607565" }}>
                <strong>Status:</strong> {resource.status}
              </p>

              <p
                style={{
                  marginBottom: "12px",
                  color: "#607565",
                  lineHeight: "1.5",
                }}
              >
                {resource.description || "No description entered."}
              </p>

              <p style={{ margin: 0, color: "#607565" }}>
                <strong>Source:</strong>{" "}
                {resource.source || "Source not entered."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}