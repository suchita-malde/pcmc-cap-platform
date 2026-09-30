export default function SuggestionsInbox() {
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
            CITIZEN FEEDBACK
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
            Citizen Suggestions & Queries
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              color: "#65743A",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Review suggestions and queries submitted through the
            citizen-facing platform.
          </p>
        </section>

        {/* Empty State */}
        <section
          style={{
            position: "relative",
            maxWidth: "900px",
            padding: "28px",
            background: "#FFFFFF",
            border: "1px solid #DCE3DD",
            borderRadius: "16px",
            boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
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

          {/* Icon */}
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
            💬
          </div>

          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "5px 9px",
              marginBottom: "12px",
              borderRadius: "20px",
              background: "#F5F7F6",
              color: "#65743A",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "0.3px",
            }}
          >
            DATA SOURCE NOT CONNECTED
          </div>

          <h2
            style={{
              margin: "0 0 10px",
              color: "#394F49",
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: "750",
            }}
          >
            No submissions available
          </h2>

          <p
            style={{
              margin: 0,
              color: "#65743A",
              fontSize: "14px",
              lineHeight: "1.65",
            }}
          >
            Citizen submissions will appear here once the submission
            data source is connected.
          </p>
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
          Citizen suggestions and queries will be managed here when
          the submission data source is connected.
        </div>
      </div>
    </div>
  );
}