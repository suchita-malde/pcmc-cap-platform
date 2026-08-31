import { useState } from "react";

export default function DirectoryEditor() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const addEntry = () => {
    if (!name.trim()) return;
    setEntries((prev) => [...prev, { id: Date.now(), name, category }]);
    setName("");
    setCategory("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Vendor / Service Provider Directory</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Vendor name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          placeholder="Category (e.g. composting, solar)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <button onClick={addEntry}>Add</button>
      </div>

      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.name} — {entry.category}
          </li>
        ))}
      </ul>
      {entries.length === 0 && <p>No entries yet.</p>}
    </div>
  );
}