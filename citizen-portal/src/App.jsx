import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import CAPOverview from "./pages/CAPOverview";
import ClimateMap from "./pages/ClimateMap";
import SectorPage from "./pages/SectorPage";
import ProgressTracker from "./pages/ProgressTracker";
import CitizenActions from "./pages/CitizenActions";
import Resources from "./pages/Resources";
import GetInvolved from "./pages/GetInvolved";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={<Home language={language} />}
        />
        <Route path="/cap-overview" element={<CAPOverview />} />
        <Route path="/climate-map" element={<ClimateMap />} />
        <Route path="/sector/:sectorId" element={<SectorPage />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/actions" element={<CitizenActions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;