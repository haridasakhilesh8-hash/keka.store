import { useState } from "react";
import { Link } from "react-router-dom";
import C from "./theme";
import GrowthRoadmapLevelTabs from "./GrowthRoadmapLevelTabs";
import GrowthRoadmapCanvas from "./GrowthRoadmapCanvas";

export default function GrowthRoadmapDetailPage({ growth }) {
  const accent = growth.accent || C.teal;
  const [activeId, setActiveId] = useState(growth.defaultLevel || growth.levels[0].id);
  const activeLevel = growth.levels.find((l) => l.id === activeId) || growth.levels[0];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        borderBottom: `1px solid ${C.border}`,
        background: C.bg2,
        paddingTop: "5.5rem",
        paddingBottom: "2.25rem",
      }}>
        <div className="container">
          <Link to="/roadmaps#growth-paths" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            fontSize: "0.78rem", color: C.muted, textDecoration: "none",
            marginBottom: "1.25rem",
          }}>
            ← Roadmaps
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{growth.icon}</span>
            <span style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: accent,
            }}>
              Growth Roadmap
            </span>
          </div>

          <h1 style={{
            fontFamily: "Space Grotesk, sans-serif", fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            color: C.t1, lineHeight: 1.2, letterSpacing: "-0.02em",
            marginBottom: "0.625rem",
          }}>{growth.title}</h1>

          <p style={{ color: "#8B88A6", fontSize: "0.925rem", lineHeight: 1.75, maxWidth: "560px", marginBottom: "1.25rem" }}>
            {growth.subtitle}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Best for", value: growth.bestFor },
              { label: "Steps",    value: `${growth.levels.length} phases` },
              { label: "Now",      value: activeLevel.goal },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: "0.35rem 0.75rem",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
                fontSize: "0.75rem", color: C.t2,
              }}>
                <span style={{ color: C.muted }}>{label}: </span>{value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs + Content */}
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>

        <div style={{ marginBottom: "1.75rem" }}>
          <GrowthRoadmapLevelTabs
            levels={growth.levels}
            activeId={activeId}
            onChange={setActiveId}
            accent={accent}
          />
        </div>

        <div style={{
          padding: "1rem 1.25rem",
          background: `${accent}0D`,
          border: `1px solid ${accent}33`,
          borderRadius: "10px",
          marginBottom: "2rem",
        }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: accent, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {activeLevel.label}
          </p>
          <p style={{ fontSize: "0.9rem", color: C.t2, lineHeight: 1.6 }}>{activeLevel.goal}</p>
        </div>

        <GrowthRoadmapCanvas level={activeLevel} accent={accent} />
      </div>
    </div>
  );
}
