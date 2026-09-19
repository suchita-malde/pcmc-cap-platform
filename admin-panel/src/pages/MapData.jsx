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
          CLIMATE MAP DATA
        </div>

        <h1
          style={{
            margin: "0 0 8px",
            color: "#173b2a",
          }}
        >
          Map Data
        </h1>

        <p style={{ color: "#607565" }}>
          Manage verified information used for climate-related map layers.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "280px",
            padding: "18px",
            backgroundColor: "#ffffff",
            border: "1px solid #d9e5d8",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              color: "#173b2a",
              fontSize: "19px",
            }}
          >
            Map Layers
          </h2>

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
                  padding: "11px 12px",
                  marginBottom: "8px",
                  textAlign: "left",
                  border: isSelected
                    ? "1px solid #8fbe99"
                    : "1px solid #d9e5d8",
                  borderRadius: "7px",
                  backgroundColor: isSelected
                    ? "#e8f3e9"
                    : "#ffffff",
                  color: isSelected ? "#23633b" : "#536456",
                  fontWeight: isSelected ? "600" : "500",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                {layer}
              </button>
            );
          })}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "280px",
            minHeight: "280px",
            padding: "28px",
            backgroundColor: "#ffffff",
            border: "1px solid #d9e5d8",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(31, 78, 48, 0.06)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "5px 9px",
              borderRadius: "16px",
              backgroundColor: "#f3f7f1",
              color: "#607565",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            SELECTED LAYER
          </div>

          <h2
            style={{
              margin: "0 0 12px",
              color: "#173b2a",
            }}
          >
            {selectedLayer}
          </h2>

          <div
            style={{
              padding: "18px",
              backgroundColor: "#f8faf7",
              border: "1px dashed #b8cdbb",
              borderRadius: "9px",
            }}
          >
            <p
              style={{
                marginBottom: "8px",
                color: "#536456",
              }}
            >
              Map data for this layer has not been entered yet.
            </p>

            <p
              style={{
                margin: 0,
                color: "#607565",
                fontSize: "14px",
              }}
            >
              Data to be updated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}