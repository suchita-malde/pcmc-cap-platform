import { useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    source: "",
    status: "Draft",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSaveDraft(event) {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...form,
      title: form.title.trim(),
    };

    setEvents([...events, newEvent]);

    setForm({
      title: "",
      date: "",
      location: "",
      description: "",
      source: "",
      status: "Draft",
    });
  }

  return (
    <div>
      <h1>Events & Meetings</h1>

      <p>
        Manage verified climate-related events and meetings.
      </p>

      <form
        onSubmit={handleSaveDraft}
        style={{
          maxWidth: "800px",
          marginTop: "24px",
          padding: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <label>
          <strong>Event Title</strong>
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter event title..."
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Date</strong>
        </label>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Location</strong>
        </label>

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Enter verified location..."
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Description</strong>
        </label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          placeholder="Enter verified event description..."
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Source</strong>
        </label>

        <input
          type="text"
          name="source"
          value={form.source}
          onChange={handleChange}
          placeholder="Enter verified source..."
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Status</strong>
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
          <option value="Archived">Archived</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save Draft
        </button>
      </form>

      <div style={{ marginTop: "32px" }}>
        <h2>Events</h2>

        {events.length === 0 ? (
          <p>Data to be added.</p>
        ) : (
          events.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "20px",
                marginBottom: "16px",
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>

              <p>
                <strong>Date:</strong>{" "}
                {item.date || "Date not entered."}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {item.location || "Location not entered."}
              </p>

              <p>
                <strong>Status:</strong> {item.status}
              </p>

              <p>
                {item.description || "No description entered."}
              </p>

              <p>
                <strong>Source:</strong>{" "}
                {item.source || "Source not entered."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}