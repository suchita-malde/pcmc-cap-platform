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
    marginTop: "9px",
    marginBottom: "22px",
    padding: "12px 13px",
    boxSizing: "border-box",
    border: "1px solid #D2DCD4",
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
            CLIMATE RESOURCES
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
            Resources
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
            Manage verified climate action resources for the platform.
          </p>
        </section>

        {/* Resource Form */}
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
              borderBottom: "1px solid #E1E7E2",
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
              Add Resource
            </h2>

            <p
              style={{
                margin: 0,
                color: "#65743A",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Add verified documents, reports, plans, and awareness
              materials.
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
                rows="5"
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

            <div
              style={{
                paddingTop: "22px",
                borderTop: "1px solid #E1E7E2",
              }}
            >
              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#394F49",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontWeight: "750",
                  fontSize: "12px",
                  transition:
                    "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#65743A";
                  e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#394F49";
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

        {/* Resources List */}
        <section>
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
              Resources
            </h2>
          </div>

          <p
            style={{
              margin: "0 0 20px 14px",
              color: "#65743A",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            Resources currently available in this admin workspace.
          </p>

          {/* Empty State */}
          {resources.length === 0 ? (
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
                📚
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
                No resources added yet
              </strong>

              <span
                style={{
                  color: "#65743A",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Data to be added.
              </span>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, minmax(0, 1fr))",
                gap: "22px",
              }}
            >
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  style={{
                    position: "relative",
                    minHeight: "238px",
                    padding: "25px",
                    background: "#FFFFFF",
                    border: "1px solid #DCE3DD",
                    borderRadius: "16px",
                    boxShadow:
                      "0 4px 14px rgba(57, 79, 73, 0.07)",
                    overflow: "hidden",
                    boxSizing: "border-box",
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
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#394F49",
                        fontSize: "20px",
                        lineHeight: "1.3",
                        fontWeight: "750",
                        letterSpacing: "-0.1px",
                      }}
                    >
                      {resource.title}
                    </h3>

                    <span
                      style={{
                        padding: "5px 9px",
                        borderRadius: "20px",
                        background: "#E8EEE3",
                        color: "#65743A",
                        fontSize: "11px",
                        fontWeight: "800",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {resource.status}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      marginBottom: "14px",
                      padding: "5px 9px",
                      borderRadius: "20px",
                      background: "#F5F7F6",
                      color: "#65743A",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    {resource.category}
                  </div>

                  <div
                    style={{
                      padding: "13px 14px",
                      marginBottom: "12px",
                      background: "#F5F7F6",
                      borderRadius: "9px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#394F49",
                        fontSize: "13px",
                        lineHeight: "1.55",
                      }}
                    >
                      {resource.description ||
                        "No description entered."}
                    </p>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: "#65743A",
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Source:</strong>{" "}
                    {resource.source || "Source not entered."}
                  </p>
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
          Use this section to manage verified climate action resources.
        </div>
      </div>
    </div>
  );
}