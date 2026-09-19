import "./ClimateMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useState } from "react";

export default function ClimateMap() {
  const [layers, setLayers] = useState({
    flooding:false,
    heat:false,
    greenSpaces:false,
    water:false,
    waste:false,
    mobility:false,
    projects:false
  });

  function toggleLayer(layer) {
    setLayers({
      ...layers,
      [layer]:!layers[layer]
    });
  }
  return (
    <div className="climate-map-page">
      <section className="map-header">
        <h1>Climate Map</h1>

        <p>
          Explore climate-related information and infrastructure across
          Pimpri-Chinchwad.
        </p>
      </section>

      <section className="map-container">
        <div className="map-controls">
          <h3>Map Layers</h3>

          <label>
            <input type="checkbox" />
            Flooding / Water Logging
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.heat}
              onChange={() => toggleLayer("heat")}
            />
            Heat
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.greenSpaces}
              onChange={() => toggleLayer("greenSpaces")}
            />
            Green Spaces
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.water}
              onChange={() => toggleLayer("water")}
            />
            Water Infrastructure
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.waste}
              onChange={() => toggleLayer("waste")}
            />
            Waste Infrastructure
          </label>

          <label>
              <input
                type="checkbox"
                checked={layers.mobility}
                onChange={() => toggleLayer("mobility")}
              />
              Mobility
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.projects}
              onChange={() => toggleLayer("projects")}
            />
            PCMC Climate Projects
          </label>
          
        </div>
        <MapContainer
          center={[18.6298,73.7997]}
          zoom={12}
          scrollWheelZoom={true}
          className="climate-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </section>
    </div>
  );
}