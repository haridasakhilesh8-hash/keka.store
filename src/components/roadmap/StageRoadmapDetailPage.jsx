import { useState } from "react";
import { Link } from "react-router-dom";
import C from "./theme";
import StageRoadmapLevelTabs from "./StageRoadmapLevelTabs";
import StageRoadmapCanvas from "./StageRoadmapCanvas";

export default function StageRoadmapDetailPage({ stage }) {
  const accent = stage.accent || C.teal;
  const [activeId, setActiveId] = useState(stage.defaultLevel || stage.levels[0].id);
  const activeLevel = stage.levels.find((l) => l.id === activeId) || stage.levels[0];

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
          <Link to="/roadmaps#by-stage" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            fontSize: "0.78rem", color: C.muted, textDecoration: "none",
            marginBottom: "1.25rem",
          }}>
            ← Roadmaps
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{stage.icon}</span>
            <span style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: accent,
            }}>
              Stage Roadmap
            </span>
          </div>

          <h1 style={{
            fontFamily: "Space Grotesk, sans-serif", fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            color: C.t1, lineHeight: 1.2, letterSpacing: "-0.02em",
            marginBottom: "0.625rem",
          }}>{stage.title}</h1>

          <p style={{ color: "#8B88A6", fontSize: "0.925rem", lineHeight: 1.75, maxWidth: "560px", marginBottom: "1.25rem" }}>
            {stage.subtitle}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Best for", value: stage.bestFor },
              { label: "Stages",   value: `${stage.levels.length} tabs` },
              { label: "Goal",     value: activeLevel.goal },
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
          <StageRoadmapLevelTabs
            levels={stage.levels}
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

        <StageRoadmapCanvas level={activeLevel} accent={accent} />
      </div>
    </div>
  );
}
