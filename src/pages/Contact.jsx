import { useState } from "react";

const topics = [
  "General question",
  "Roadmap feedback",
  "Career advice",
  "Content suggestion",
  "Partnership / collab",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#f1f5f9",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "Inter, sans-serif"
  };

  const labelStyle = {
    display: "block",
    color: "#94a3b8",
    fontSize: "0.82rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    letterSpacing: "0.02em"
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }} className="hero-bg">
        <div className="container">
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Get in Touch</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
            Talk to <span className="gradient-text">the team</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: "480px", lineHeight: 1.7 }}>
            Questions about your roadmap, path suggestions, or just want to say hello — we read everything.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "start" }}>

            {/* Left info */}
            <div>
              <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>How we can help</h2>
              {[
                { icon: "🗺️", title: "Roadmap feedback", desc: "Spotted something outdated or missing? Tell us." },
                { icon: "💡", title: "Content ideas", desc: "Want a blog post or path we don't cover yet?" },
                { icon: "🤝", title: "Partnership", desc: "Interested in collaborating or sharing our roadmaps?" },
                { icon: "✉️", title: "Direct email", desc: "hello@keka.store" },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: "38px", height: "38px", flexShrink: 0,
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem"
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{item.title}</p>
                    <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: "16px", padding: "2rem" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>✅</span>
                  <h3 className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Message sent!</h3>
                  <p style={{ color: "#94a3b8" }}>We'll get back to you within a couple of days.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Verma" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "#1e293b"} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "#1e293b"} />
                  </div>
                  <div>
                    <label style={labelStyle}>Topic</label>
                    <select name="topic" value={form.topic} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      {topics.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what's on your mind..." rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                      onBlur={e => e.target.style.borderColor = "#1e293b"} />
                  </div>
                  <button className="btn-primary" onClick={handleSubmit} style={{ width: "100%", padding: "0.85rem", fontSize: "0.95rem" }}>
                    Send Message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
