import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Admin Login</h1>
      <p>(Placeholder — real auth not connected yet)</p>
      <Link to="/dashboard">
        <button>Continue to Dashboard</button>
      </Link>
    </div>
  );
}