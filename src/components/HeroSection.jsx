import { Link } from "react-router-dom";
import { stats } from "../data";

export default function HeroSection() {
  return (
    <section className="hero-bg" style={{ paddingTop: "8rem", paddingBottom: "5rem", minHeight: "90vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          {/* Eyebrow */}
          <span className="tag" style={{ marginBottom: "1.75rem", display: "inline-block" }}>
            🚀 Tech Career Roadmaps · 2025
          </span>

          {/* Headline */}
          <h1 className="font-display" style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
            marginBottom: "1.5rem"
          }}>
            Build Your Tech Career<br />
            With <span className="gradient-text">Clear Roadmaps</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: "#94a3b8",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem"
          }}>
            Keka Store helps freshers, developers, tech leads, managers, and career switchers choose the right path and grow step by step.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link to="/roadmaps" className="btn-primary" style={{ fontSize: "1rem" }}>
              Start Roadmap →
            </Link>
            <Link to="/career-paths" className="btn-outline" style={{ fontSize: "1rem" }}>
              Explore Career Paths
            </Link>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1.5rem, 4vw, 3rem)",
            flexWrap: "wrap",
            paddingTop: "2rem",
            borderTop: "1px solid #1e293b"
          }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>{value}</p>
                <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.3rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
