
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("adminAuthenticated", "true");
    navigate("/dashboard");
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Admin Login</h1>

      <p>(Placeholder — real auth not connected yet)</p>

      <button onClick={handleLogin}>
        Continue to Dashboard
      </button>
    </div>
  );
}
