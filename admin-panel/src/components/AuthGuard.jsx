
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
  const isAuthenticated =
    localStorage.getItem("adminAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
