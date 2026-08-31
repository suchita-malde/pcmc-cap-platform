import { useState } from "react";
import mockContent from "../data/mockContent.json";

export default function ProgressEntry() {
  const [progress, setProgress] = useState(
    mockContent.map((s) => ({ id: s.id, title: s.title, target: "", actual: "" }))
  );

  const updateValue = (id, field, value) => {
    setProgress((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Progress Data Entry</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Sector</th>
            <th>Target</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          {progress.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>
                <input
                  value={p.target}
                  onChange={(e) => updateValue(p.id, "target", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={p.actual}
                  onChange={(e) => updateValue(p.id, "actual", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}