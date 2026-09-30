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
import wasteFacilities from "../data/waste-facilities";
import stpLocations from "../data/stp-locations";
import climateProjects from "../data/climate-projects";

import { translations } from "../data/translations";

export default function ClimateMap({ language }) {
  const t = translations[language];

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
        <h1>{t.climateMapTitle}</h1>

        <p>{t.climateMapDescription}</p>
      </section>

      <section className="map-container">

        <div className="map-controls">

          <h3>{t.mapLayers}</h3>

          <label>
            <input
              type="checkbox"
              checked={layers.flooding}
              onChange={() => toggleLayer("flooding")}
            />
            {t.layerFlooding}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.heat}
              onChange={() => toggleLayer("heat")}
            />
            {t.layerHeat}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.greenSpaces}
              onChange={() => toggleLayer("greenSpaces")}
            />
            {t.layerGreenSpaces}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.municipalBuildings}
              onChange={() => toggleLayer("municipalBuildings")}
            />
            {t.layerMunicipalBuildings}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.pedestrianStreets}
              onChange={() => toggleLayer("pedestrianStreets")}
            />
            {t.layerPedestrianStreets}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.floodRisk}
              onChange={() => toggleLayer("floodRisk")}
            />
            {t.layerFloodRisk}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.heatRisk}
              onChange={() => toggleLayer("heatRisk")}
            />
            {t.layerHeatRisk}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.water}
              onChange={() => toggleLayer("water")}
            />
            {t.layerWater}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.waste}
              onChange={() => toggleLayer("waste")}
            />
            {t.layerWaste}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.mobility}
              onChange={() => toggleLayer("mobility")}
            />
            {t.layerMobility}
          </label>

          <label>
            <input
              type="checkbox"
              checked={layers.projects}
              onChange={() => toggleLayer("projects")}
            />
            {t.layerProjects}
          </label>

        </div>

        {layers.floodRisk && (
          <div className="flood-risk-panel">

            <h3>{t.floodRiskTitle}</h3>

            {floodRiskAreas.map((area) => (
              <div
                key={area.name}
                className="flood-risk-area"
              >
                🌊 {area.name}
              </div>
            ))}

            <small>
              {t.riskAreaNote}
            </small>

          </div>
        )}

        {layers.heatRisk && (
          <div className="flood-risk-panel">

            <h3>{t.heatRiskTitle}</h3>

            {heatRiskAreas.map((area) => (
              <div
                key={area.name}
                className="flood-risk-area"
              >
                🌡️ {area.name}
              </div>
            ))}

            <small>
              {t.riskAreaNote}
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
          {/* FLOOD RISK AREAS */}

          {layers.floodRisk &&
            floodRiskAreas.map((area) => (

              <Marker
                key={area.name}
                position={area.coordinates}
              >

              <Popup>
                <strong>🌊 {area.name}</strong>

                <br />

                Flood Risk / Waterlogging Area

                <br />

                Coordinates: {area.coordinates[0]}, {area.coordinates[1]}
              </Popup>

            </Marker>

          ))}
          {/* HEAT RISK AREAS */}

          {layers.heatRisk &&
            heatRiskAreas.map((area) => (

              <Marker
                key={area.name}
                position={area.coordinates}
              >
                <Popup>
                  <strong>🌡️ {area.name}</strong>

                  <br />

                  Heat Risk Area

                  <br />

                  Coordinates: {area.coordinates[0]}, {area.coordinates[1]}
                </Popup>
              </Marker>

            ))
          }
          {/* WASTE INFRASTRUCTURE */}

          {layers.waste &&
            wasteFacilities.map((site) => (
              <Marker
                key={site.siteName}
                position={site.coordinates}
              >
                <Popup>

                  <strong>♻️ {site.siteName}</strong>

                  <br /><br />

                  <strong>Facilities:</strong>

                  {site.facilities.map((facility) => (
                    <div key={facility.name}>
                      <br />
                      <strong>{facility.name}</strong>
                      <br />
                      Type: {facility.type}
                      <br />
                      Capacity: {facility.capacityTPD} TPD
                    </div>
                  ))}

                  <br />

                  <small>
                    Location: {site.location}
                  </small>

                </Popup>
              </Marker>
            ))
          }

          {/* WATER INFRASTRUCTURE / STPs */}

          {layers.water &&
            stpLocations.map((stp) => (
            <Marker
              key={stp.name}
              position={stp.coordinates}
            >
              <Popup>
                <strong>🚰 {stp.name}</strong>

                <br />

                Sewage Treatment Plant

                <br />

                Capacity: {stp.capacity} MLD
              </Popup>
            </Marker>
            ))
            }
        
          {/* PCMC CLIMATE PROJECTS */}

          {layers.projects &&
            climateProjects.map((project) => (
              <Marker
                key={project.name}
                position={project.coordinates}
              >
                <Popup>
                  <strong>🌱 {project.name}</strong>

                  <br /><br />

                  PCMC Climate Action Project

                  <br />

                  {project.description && (
                    <>
                      <br />
                      {project.description}
                    </>
                  )}
                </Popup>
              </Marker>
            ))
          }

          {/* GREEN SPACES */}

          {layers.greenSpaces &&
            greenSpaces.map((place) => (

              <Marker
                key={place.id}
                position={place.position}
              >

                <Popup>

                  <strong>{place.name}</strong>

                  <br />

                  {t.type}: {place.type}

                  <br />

                  {t.pcmc}

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
                    {t.pcmcGisFeatureId}: {place.featId}
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

                  {t.type}: {t.pedestrianFriendlyStreet}

                  <br />

                  {t.pcmc}

                </Popup>

              </Polyline>

            ))}

        </MapContainer>

      </section>

    </div>
  );
}