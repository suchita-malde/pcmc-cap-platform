import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@pcmc.gov.in";
const ADMIN_PASSWORD = "admin123";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignIn(event) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    if (
      email.trim().toLowerCase() !== ADMIN_EMAIL ||
      password !== ADMIN_PASSWORD
    ) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem("adminAuthenticated", "true");

    navigate("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(245, 247, 246, 0.35), rgba(245, 247, 246, 0.35)), url('/pcmc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#FFFFFF",
          border: "1px solid #DCE3DD",
          borderRadius: "18px",
          padding: "36px",
          boxSizing: "border-box",
          boxShadow: "0 8px 28px rgba(57, 79, 73, 0.08)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "20px",
              background: "#e8f3e9",
              color: "#2f7d4a",
              fontSize: "12px",
              fontWeight: "800",
              letterSpacing: "0.5px",
              marginBottom: "14px",
            }}
          >
            PCMC CLIMATE ACTION
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              color: "#394F49",
              fontSize: "32px",
              lineHeight: "1.2",
              fontWeight: "750",
            }}
          >
            Admin Sign In
          </h1>

          <p
            style={{
              margin: 0,
              color: "#65743A",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            Sign in to access the Climate Action Admin Panel.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignIn}>
          <label
            style={{
              display: "block",
              marginBottom: "18px",
              color: "#394F49",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Email

            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              autoComplete="email"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px 14px",
                boxSizing: "border-box",
                border: "1px solid #DCE3DD",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px",
                color: "#394F49",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              marginBottom: "18px",
              color: "#394F49",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Password

            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder="Enter your password"
              autoComplete="current-password"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px 14px",
                boxSizing: "border-box",
                border: "1px solid #DCE3DD",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px",
                color: "#394F49",
              }}
            />
          </label>

          {error && (
            <div
              style={{
                marginBottom: "18px",
                padding: "11px 12px",
                background: "#F5EAEA",
                border: "1px solid #E4CCCC",
                borderRadius: "8px",
                color: "#8A4A4A",
                fontSize: "13px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "none",
              borderRadius: "8px",
              background: "#394F49",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "750",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p
          style={{
            margin: "20px 0 0",
            textAlign: "center",
            color: "#65743A",
            fontSize: "11px",
            lineHeight: "1.5",
          }}
        >
          Authorized administrator access only.
        </p>
      </div>
    </div>
  );
}