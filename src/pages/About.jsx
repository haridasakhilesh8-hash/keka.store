import { Link } from "react-router-dom";

const values = [
  { icon: "🎯", title: "Stage-specific guidance", desc: "Roadmaps built for where you actually are, not generic advice for everyone." },
  { icon: "🔓", title: "Free forever", desc: "No paywall. No subscription. Career clarity shouldn't cost money." },
  { icon: "🧱", title: "Practical, not theoretical", desc: "Skills, tools, and projects that hiring managers actually look for." },
  { icon: "🔄", title: "Constantly updated", desc: "Tech changes fast. Our roadmaps evolve with industry demand." },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & Frontend Lead", emoji: "👨‍💻" },
  { name: "Priya Sharma", role: "Career Advisor & Content", emoji: "👩‍🏫" },
  { name: "Dev Nair", role: "Backend & DevOps Roadmaps", emoji: "🧑‍💻" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "7rem", paddingBottom: "3.5rem" }} className="hero-bg">
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>About Keka Store</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: "1.25rem" }}>
            We map the <span className="gradient-text">path forward</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.75 }}>
            Keka Store was born from a simple frustration: too much advice on the internet, not enough structure. Freshers didn't know where to start. Mid-level devs didn't know how to level up. Career switchers were overwhelmed. We built the guide we wish we'd had.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 className="section-title">Our mission</h2>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Tech careers shouldn't be a maze. Whether you're writing your first line of code or navigating the jump from senior engineer to tech lead, you deserve a clear, honest roadmap that reflects how the industry actually works.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                We don't sell courses or push affiliate links. Keka Store is purely a guide — built to give you direction, not dependency.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { value: "50+", label: "Roadmaps" },
                { value: "12+", label: "Career Paths" },
                { value: "10k+", label: "Learners" },
                { value: "100%", label: "Free" },
              ].map(s => (
                <div key={s.label} style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
                  <p className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "2rem" }}>{s.value}</p>
                  <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.3rem" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ borderTop: "1px solid #1e293b", background: "rgba(17,24,39,0.4)" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>What we believe</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>{v.icon}</span>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>The team</h2>
          <p className="section-sub" style={{ marginBottom: "2rem" }}>Practitioners who've lived these career transitions themselves.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {team.map(m => (
              <div key={m.name} className="card" style={{ padding: "1.75rem 1.5rem", borderRadius: "12px", textAlign: "center" }}>
                <div style={{
                  width: "60px", height: "60px",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.75rem", margin: "0 auto 1rem"
                }}>{m.emoji}</div>
                <p className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{m.name}</p>
                <p style={{ color: "#64748b", fontSize: "0.8rem" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Start your roadmap today</h2>
          <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>Free. No login. Just pick your stage and go.</p>
          <Link to="/roadmaps" className="btn-primary" style={{ fontSize: "1rem" }}>View All Roadmaps →</Link>
        </div>
      </section>
    </>
  );
}
