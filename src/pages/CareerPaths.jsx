import CareerPathCards from "../components/CareerPathCards";
import { careerPaths } from "../data";

const categories = ["All", "Frontend", "Backend", "DevOps & Cloud", "AI & Data", "Management"];

export default function CareerPaths() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }} className="hero-bg">
        <div className="container">
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>12 Tech Paths</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
            Choose Your <span className="gradient-text">Career Path</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "560px", lineHeight: 1.7 }}>
            Each path includes a skill sequence, key tools to learn, and what employers actually look for when hiring.
          </p>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ borderTop: "1px solid #1e293b", padding: "1.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} style={{
                background: cat === "All" ? "rgba(59,130,246,0.15)" : "transparent",
                color: cat === "All" ? "#60a5fa" : "#64748b",
                border: cat === "All" ? "1px solid rgba(59,130,246,0.35)" : "1px solid #1e293b",
                borderRadius: "999px",
                padding: "0.35rem 0.9rem",
                fontSize: "0.82rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s"
              }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* All paths */}
      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container">
          <CareerPathCards />
        </div>
      </section>

      {/* Comparison hint */}
      <section className="section" style={{ borderTop: "1px solid #1e293b", background: "rgba(17,24,39,0.4)" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>Not sure which path to pick?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { q: "Love visual design?", a: "→ Frontend Developer", icon: "🎨" },
              { q: "Prefer logic & systems?", a: "→ Backend / Java / Cloud", icon: "⚙️" },
              { q: "Want to build everything?", a: "→ Full Stack Developer", icon: "🔗" },
              { q: "Excited by AI & data?", a: "→ AI Engineer / Data Analyst", icon: "🧠" },
              { q: "Coming from another field?", a: "→ Career Switcher roadmap", icon: "🔄" },
              { q: "Like leading teams?", a: "→ Tech Lead / Product Manager", icon: "🎯" },
            ].map(item => (
              <div key={item.q} style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "1.2rem" }}>
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{item.icon}</span>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.35rem" }}>{item.q}</p>
                <p style={{ color: "#60a5fa", fontWeight: 600, fontSize: "0.9rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
