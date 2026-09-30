export default function AdminSettings() {
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
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "20px",
              background: "#E8F3E9",
              color: "#2F7D4A",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "0.5px",
              marginBottom: "12px",
            }}
          >
            ADMINISTRATION
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              color: "#394F49",
              fontSize: "40px",
              lineHeight: "1.2",
              fontWeight: "750",
            }}
          >
            Admin Settings & Data Management
          </h1>

          <p
            style={{
              margin: 0,
              color: "#65743A",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            Manage administrative settings and prepare platform data for future
            backend integration.
          </p>
        </div>

        {/* Data Management Section */}
        <section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "24px",
                background: "#65743A",
                borderRadius: "2px",
                display: "inline-block",
              }}
            />

            <h2
              style={{
                margin: 0,
                color: "#394F49",
                fontSize: "22px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              Data Management
            </h2>
          </div>

          <div
            style={{
              maxWidth: "900px",
              background: "#FFFFFF",
              border: "1px solid #DCE3DD",
              borderTop: "5px solid #65743A",
              borderRadius: "16px",
              boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
              overflow: "hidden",
            }}
          >
            {/* Card Header */}
            <div
              style={{
                padding: "26px 28px",
                borderBottom: "1px solid #E1E7E2",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "#E8EEE3",
                  fontSize: "25px",
                  marginBottom: "16px",
                }}
              >
                ⚙️
              </div>

              <h3
                style={{
                  margin: "0 0 7px",
                  color: "#394F49",
                  fontSize: "22px",
                  lineHeight: "1.3",
                  fontWeight: "750",
                }}
              >
                Data Management
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#65743A",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Manage the platform's administrative and data-management
                functions.
              </p>
            </div>

            {/* Card Content */}
            <div
              style={{
                padding: "28px",
              }}
            >
              {/* Backend Integration */}
              <div
                style={{
                  padding: "18px",
                  background: "#F5F7F6",
                  border: "1px solid #DCE3DD",
                  borderRadius: "11px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "#65743A",
                      display: "inline-block",
                    }}
                  />

                  <strong
                    style={{
                      color: "#394F49",
                      fontSize: "14px",
                    }}
                  >
                    Backend Integration
                  </strong>
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#65743A",
                    fontSize: "13px",
                    lineHeight: "1.6",
                  }}
                >
                  Backend, database, import, export, and other data-management
                  functions will be connected here when the backend is
                  introduced.
                </p>
              </div>

              {/* Current Status */}
              <div
                style={{
                  padding: "18px",
                  background: "#F3F0E6",
                  border: "1px solid #E2DDCC",
                  borderRadius: "11px",
                }}
              >
                <div
                  style={{
                    marginBottom: "6px",
                    color: "#394F49",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                  }}
                >
                  CURRENT STATUS
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#65743A",
                    fontSize: "13px",
                    lineHeight: "1.55",
                  }}
                >
                  No backend data operations are available yet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Workspace Note */}
        <div
          style={{
            maxWidth: "900px",
            marginTop: "22px",
            padding: "16px 18px",
            background: "#E8EEE3",
            border: "1px solid #DCE3DD",
            borderRadius: "12px",
            color: "#65743A",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          <strong style={{ color: "#394F49" }}>
            Admin workspace:
          </strong>{" "}
          Data-management controls can be added here when the backend is
          introduced.
        </div>
      </div>
    </div>
  );
}