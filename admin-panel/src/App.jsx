import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContentEditor from "./pages/ContentEditor";
import DirectoryEditor from "./pages/DirectoryEditor";
import ProgressEntry from "./pages/ProgressEntry";
import SuggestionsInbox from "./pages/SuggestionsInbox";
import AuthGuard from "./components/AuthGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/content"
          element={
            <AuthGuard>
              <ContentEditor />
            </AuthGuard>
          }
        />
        <Route
          path="/directory"
          element={
            <AuthGuard>
              <DirectoryEditor />
            </AuthGuard>
          }
        />
        <Route
          path="/progress"
          element={
            <AuthGuard>
              <ProgressEntry />
            </AuthGuard>
          }
        />
        <Route
          path="/suggestions"
          element={
            <AuthGuard>
              <SuggestionsInbox />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;