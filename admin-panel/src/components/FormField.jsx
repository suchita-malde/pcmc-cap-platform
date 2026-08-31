export default function FormField({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "0.25rem" }}>{label}</label>
      <input value={value} onChange={onChange} style={{ width: "100%" }} />
    </div>
  );
}