import "./App.css";
import { useEffect, useState } from "react";
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
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

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
        <Route
          path="/cap-overview"
          element={<CAPOverview language={language} />}
        />
        <Route path="/climate-map" element={<ClimateMap language={language} />} />
        <Route
          path="/sector/:sectorId"
          element={<SectorPage language={language} />}
        />
        <Route
          path="/progress"
          element={<ProgressTracker language={language} />}
        />
        <Route path="/actions" element={<CitizenActions language={language} />} />
        <Route
          path="/resources"
          element={<Resources language={language} />}
        />
        <Route
          path="/get-involved"
          element={<GetInvolved language={language} />}
        />
      </Routes>

      <Footer language={language} />
      
    </BrowserRouter>
  );
}

export default App;