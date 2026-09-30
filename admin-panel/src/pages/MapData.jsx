import { useState } from "react";

const mapLayers = [
  "Flooding / Water Logging",
  "Heat",
  "Green Spaces",
  "Water Infrastructure",
  "Waste Infrastructure",
  "Mobility",
  "PCMC Climate Projects",
];

export default function MapData() {
  const [selectedLayer, setSelectedLayer] = useState(mapLayers[0]);

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
            CLIMATE MAP DATA
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
            Map Data
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
            Manage verified information used for climate-related map layers.
          </p>
        </section>

        {/* Map Management Layout */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "330px minmax(0, 1fr)",
            gap: "22px",
            alignItems: "stretch",
          }}
        >
          {/* Map Layers Card */}
          <div
            style={{
              position: "relative",
              background: "#FFFFFF",
              border: "1px solid #DCE3DD",
              borderRadius: "16px",
              boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
              overflow: "hidden",
              padding: "25px",
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

            <h2
              style={{
                margin: "0 0 7px",
                color: "#394F49",
                fontSize: "24px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              Map Layers
            </h2>

            <p
              style={{
                margin: "0 0 20px",
                color: "#65743A",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Select a climate map layer to manage its information.
            </p>

            {/* Layer Buttons */}
            <div>
              {mapLayers.map((layer) => {
                const isSelected = selectedLayer === layer;

                return (
                  <button
                    key={layer}
                    type="button"
                    onClick={() => setSelectedLayer(layer)}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "12px 13px",
                      marginBottom: "9px",
                      textAlign: "left",
                      border: isSelected
                        ? "1px solid #C9D6CB"
                        : "1px solid #DCE3DD",
                      borderRadius: "9px",
                      backgroundColor: isSelected
                        ? "#E8EEE3"
                        : "#FFFFFF",
                      color: isSelected
                        ? "#394F49"
                        : "#65743A",
                      fontWeight: isSelected ? "750" : "600",
                      fontSize: "13px",
                      cursor: "pointer",
                      boxSizing: "border-box",
                      transition:
                        "background 0.2s ease, border 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background =
                          "#F5F7F6";
                        e.currentTarget.style.borderColor =
                          "#C9D6CB";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background =
                          "#FFFFFF";
                        e.currentTarget.style.borderColor =
                          "#DCE3DD";
                      }
                    }}
                  >
                    {layer}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Layer Card */}
          <div
            style={{
              position: "relative",
              minHeight: "430px",
              background: "#FFFFFF",
              border: "1px solid #DCE3DD",
              borderRadius: "16px",
              boxShadow: "0 4px 14px rgba(57, 79, 73, 0.07)",
              overflow: "hidden",
              padding: "28px",
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

            <h2
              style={{
                margin: "0 0 18px",
                color: "#394F49",
                fontSize: "25px",
                lineHeight: "1.3",
                fontWeight: "750",
              }}
            >
              {selectedLayer}
            </h2>

            {/* Data Placeholder */}
            <div
              style={{
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "28px",
                background: "#F5F7F6",
                borderRadius: "12px",
                boxSizing: "border-box",
              }}
            >
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
                🗺️
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
                Map data not entered yet
              </strong>

              <p
                style={{
                  margin: 0,
                  color: "#65743A",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Data to be updated.
              </p>
            </div>
          </div>
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
          Select a map layer to manage its climate-related information.
        </div>
      </div>
    </div>
  );
}