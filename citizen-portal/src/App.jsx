import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CAPOverview from "./pages/CAPOverview";
import SectorPage from "./pages/SectorPage";
import ProgressTracker from "./pages/ProgressTracker";
import CitizenActions from "./pages/CitizenActions";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cap-overview" element={<CAPOverview />} />
        <Route path="/sector/:sectorId" element={<SectorPage />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/resources" element={<CitizenActions />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;