import { Link } from "react-router-dom";
import StageCards from "../components/StageCards";
import RoadmapPreview from "../components/RoadmapPreview";

const featuredRoadmaps = [
  {
    title: "Fresher to First Job",
    desc: "A structured 6-month plan to go from zero to employed as a junior developer.",
    steps: 8,
    time: "4–6 months",
    icon: "🌱",
    color: "#10b981",
  },
  {
    title: "Junior to Senior",
    desc: "Level up from writing code to designing systems and leading technical decisions.",
    steps: 10,
    time: "2–3 years",
    icon: "⚡",
    color: "#3b82f6",
  },
  {
    title: "Senior to Tech Lead",
    desc: "Shift from individual contributor to leading teams, architecture, and delivery.",
    steps: 8,
    time: "1–2 years",
    icon: "🎯",
    color: "#8b5cf6",
  },
  {
    title: "Career Switcher Fast Track",
    desc: "Coming from finance, marketing, or another field? Here's your shortest path in.",
    steps: 9,
    time: "6–12 months",
    icon: "🔄",
    color: "#f59e0b",
  },
  {
    title: "AI / ML Starter Roadmap",
    desc: "From Python basics to deploying your first ML model. No PhD required.",
    steps: 10,
    time: "8–12 months",
    icon: "🤖",
    color: "#a855f7",
  },
  {
    title: "Manager's Growth Path",
    desc: "From team lead to engineering manager — people skills, planning, and delivery.",
    steps: 7,
    time: "1–2 years",
    icon: "👥",
    color: "#ec4899",
  },
];

export default function Roadmaps() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }} className="hero-bg">
        <div className="container">
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Structured Paths</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
            Tech Career <span className="gradient-text">Roadmaps</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "560px", lineHeight: 1.7 }}>
            Every roadmap is stage-specific, skill-sequenced, and built around real hiring expectations — not just tutorial lists.
          </p>
        </div>
      </section>

      {/* The Universal 8-Step Journey */}
      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="section-title">The 8-Step Developer Journey</h2>
            <p className="section-sub">Every roadmap follows this universal structure, adapted for your stage and path.</p>
          </div>
          <RoadmapPreview />
        </div>
      </section>

      {/* Stage selector */}
      <section className="section" style={{ borderTop: "1px solid #1e293b", background: "rgba(17,24,39,0.4)" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="section-title">Roadmaps by Stage</h2>
            <p className="section-sub">Pick where you are — every stage has a dedicated, actionable roadmap.</p>
          </div>
          <StageCards />
        </div>
      </section>

      {/* Featured roadmap cards */}
      <section className="section" style={{ borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="section-title">Featured Roadmaps</h2>
            <p className="section-sub">Popular paths chosen by thousands of learners at every level.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {featuredRoadmaps.map(r => (
              <div key={r.title} className="card" style={{ padding: "1.5rem", borderRadius: "12px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                  <div style={{
                    width: "40px", height: "40px",
                    background: `${r.color}18`,
                    border: `1px solid ${r.color}30`,
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem"
                  }}>{r.icon}</div>
                  <h3 className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem" }}>{r.title}</h3>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1rem" }}>{r.desc}</p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#475569", fontSize: "0.75rem" }}>📋 {r.steps} steps</span>
                  <span style={{ color: "#475569", fontSize: "0.75rem" }}>⏱ {r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
