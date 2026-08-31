import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav style={{ padding: "1rem", borderRight: "1px solid #ccc" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/content">Content</Link></li>
        <li><Link to="/directory">Directory</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/suggestions">Suggestions</Link></li>
      </ul>
    </nav>
  );
}