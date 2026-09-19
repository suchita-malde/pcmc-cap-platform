export default function AdminSettings() {
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
          ADMINISTRATION
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Admin Settings & Data Management
        </h1>

        <p style={{ color: "#607565" }}>
          Manage administrative settings and prepare platform data for future
          backend integration.
        </p>
      </div>

      <div
        style={{
          maxWidth: "800px",
          padding: "28px",
          backgroundColor: "#ffffff",
          border: "1px solid #d9e5d8",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            backgroundColor: "#e8f3e9",
            fontSize: "22px",
            marginBottom: "16px",
          }}
        >
          ⚙️
        </div>

        <h2
          style={{
            margin: "0 0 10px",
            color: "#173b2a",
          }}
        >
          Data Management
        </h2>

        <p
          style={{
            marginBottom: "12px",
            color: "#607565",
            lineHeight: "1.6",
          }}
        >
          Backend, database, import, export, and other data-management
          functions will be connected here when the backend is introduced.
        </p>

        <div
          style={{
            padding: "14px 16px",
            backgroundColor: "#f3f7f1",
            border: "1px solid #d9e5d8",
            borderRadius: "8px",
            color: "#536456",
            fontSize: "14px",
          }}
        >
          No backend data operations are available yet.
        </div>
      </div>
    </div>
  );
}