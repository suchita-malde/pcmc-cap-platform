import "./ClimateMap.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import { useState } from "react";

import municipalBuildings from "../data/municipal-buildings";
import pedestrianStreets from "../data/pedestrian-streets";
import floodRiskAreas from "../data/flood-risk";
import heatRiskAreas from "../data/heat-risk";
import greenSpaces from "../data/green-spaces";
import pcmcGIS from "../data/pcmc-gis";

export default function ClimateMap() {

  const [layers, setLayers] = useState({
    flooding: false,
    heat: false,
    greenSpaces: false,
    municipalBuildings: false,
    pedestrianStreets: false,
    floodRisk: false,
    heatRisk: false,
    water: false,
    waste: false,
    mobility: false,
    projects: false
  });

  function toggleLayer(layer) {
    setLayers({
      ...layers,
      [layer]: !layers[layer]
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
            <input
              type="checkbox"
              checked={layers.flooding}
              onChange={() => toggleLayer("flooding")}
            />
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
              checked={layers.municipalBuildings}
              onChange={() => toggleLayer("municipalBuildings")}
            />
            Municipal Buildings
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.pedestrianStreets}
              onChange={() => toggleLayer("pedestrianStreets")}
            />
            Pedestrian-Friendly Streets
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.floodRisk}
              onChange={() => toggleLayer("floodRisk")}
            />
            Flood Risk Areas
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.heatRisk}
              onChange={() => toggleLayer("heatRisk")}
            />
            Heat Risk Areas
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

        {layers.floodRisk && (
          <div className="flood-risk-panel">

            <h3>Flood Risk Areas</h3>

            {floodRiskAreas.map((area) => (
              <div key={area} className="flood-risk-area">
                🌊 {area}
              </div>
            ))}

            <small>
              Named risk areas from the project infrastructure dataset.
              Spatial geometry is not currently available in the source data.
            </small>

          </div>
        )}

        {layers.heatRisk && (
          <div className="flood-risk-panel">

            <h3>Heat Risk Areas</h3>

            {heatRiskAreas.map((area) => (
              <div key={area} className="flood-risk-area">
                🌡️ {area}
              </div>
            ))}

            <small>
              Named risk areas from the project infrastructure dataset.
              Spatial geometry is not currently available in the source data.
            </small>

          </div>
        )}

        <MapContainer
          center={[18.6298, 73.7997]}
          zoom={12}
          scrollWheelZoom={true}
          className="climate-map"
        >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* GREEN SPACES */}

          {layers.greenSpaces &&
            greenSpaces.map((place) => (

              <Marker
                key={place.name}
                position={place.position}
              >

                <Popup>

                  <strong>{place.name}</strong>

                  <br />

                  Type: {place.type}

                  <br />

                  Pimpri-Chinchwad

                </Popup>

              </Marker>

            ))}

          {/* REAL PCMC GIS FEATURES */}

          {layers.municipalBuildings &&
            pcmcGIS.map((place) => (

              <Marker
                key={place.featId}
                position={place.position}
              >

                <Popup>

                  <strong>{place.name}</strong>

                  <br />

                  {place.address}

                  <br />

                  {place.description}

                  <br />

                  <small>
                    PCMC City GIS Feature ID: {place.featId}
                  </small>

                </Popup>

              </Marker>

            ))}

          {/* PEDESTRIAN STREETS */}

          {layers.pedestrianStreets &&
            pedestrianStreets.map((street) => (

              <Polyline
                key={street.name}
                positions={street.coordinates}
              >

                <Popup>

                  <strong>{street.name}</strong>

                  <br />

                  Type: Pedestrian-Friendly Street

                  <br />

                  Pimpri-Chinchwad

                </Popup>

              </Polyline>

            ))}

        </MapContainer>

      </section>

    </div>
  );
}