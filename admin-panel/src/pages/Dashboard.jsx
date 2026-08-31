import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/content">Content Editor</Link></li>
        <li><Link to="/directory">Directory Editor</Link></li>
        <li><Link to="/progress">Progress Entry</Link></li>
        <li><Link to="/suggestions">Suggestions Inbox</Link></li>
      </ul>
    </div>
  );
}