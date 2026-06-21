import { useState } from "react";
import { Link } from "react-router-dom";
import C from "./theme";
import TechnologyRoadmapLevelTabs from "./TechnologyRoadmapLevelTabs";
import TechnologyRoadmapCanvas from "./TechnologyRoadmapCanvas";

const CATEGORY_COLORS = {
  Frontend:     "#00E5B0",
  Backend:      "#60a5fa",
  CMS:          "#FFB84D",
  Cloud:        "#a78bfa",
  DevOps:       "#34d399",
  Tools:        "#f59e0b",
  Architecture: "#FF5E7E",
  AI:           "#e879f9",
};

function CategoryBadge({ category }) {
  const color = CATEGORY_COLORS[category] || C.teal;
  return (
    <span style={{
      display: "inline-block",
      padding: "0.25rem 0.65rem",
      borderRadius: "999px",
      fontSize: "0.7rem", fontWeight: 700,
      letterSpacing: "0.06em", textTransform: "uppercase",
      background: `${color}18`,
      border: `1px solid ${color}44`,
      color: color,
    }}>
      {category}
    </span>
  );
}

export default function TechnologyRoadmapDetailPage({ tech }) {
  const accent = tech.accent || C.teal;
  const [activeLevelId, setActiveLevelId] = useState(tech.defaultLevel || tech.levels[0].id);
  const activeLevel = tech.levels.find((l) => l.id === activeLevelId) || tech.levels[0];

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
          <Link
            to="/roadmaps"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              color: C.muted, fontSize: "0.8rem", textDecoration: "none",
              marginBottom: "1.25rem",
            }}
          >
            ← All roadmaps
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{tech.icon}</span>
            <p style={{
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: accent, margin: 0,
            }}>
              Technology Roadmap
            </p>
            <CategoryBadge category={tech.category} />
          </div>

          <h1 style={{
            fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: C.t1, lineHeight: 1.2, letterSpacing: "-0.025em",
            marginBottom: "0.875rem",
          }}>
            {tech.title}
          </h1>

          <p style={{ color: "#8B88A6", fontSize: "0.975rem", lineHeight: 1.75, maxWidth: "600px" }}>
            {tech.subtitle}
          </p>

          {/* Info badges */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "0.6rem", marginTop: "1.5rem",
          }}>
            {[
              { label: "Best for", value: tech.bestFor },
              { label: "Levels", value: `${tech.levels[0].label} → ${tech.levels[tech.levels.length - 1].label}` },
              { label: "Current goal", value: activeLevel.goal },
            ].map((b) => (
              <div key={b.label} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: "10px", padding: "0.65rem 0.85rem",
              }}>
                <p style={{
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: accent, marginBottom: "0.2rem",
                }}>
                  {b.label}
                </p>
                <p style={{ color: C.t1, fontSize: "0.8rem", fontWeight: 500, lineHeight: 1.4 }}>
                  {b.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs + Canvas */}
      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <TechnologyRoadmapLevelTabs
          levels={tech.levels}
          activeId={activeLevelId}
          onChange={setActiveLevelId}
          accent={accent}
        />

        {/* Level heading + goal */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", flexWrap: "wrap",
          gap: "0.75rem", marginBottom: "1.25rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "3px", height: "18px", borderRadius: "2px", background: accent }} />
            <h2 style={{
              fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
              fontSize: "1.05rem", color: C.t1, letterSpacing: "-0.01em",
            }}>
              {activeLevel.label}
            </h2>
          </div>

          <div style={{
            background: `${accent}0F`,
            border: `1px solid ${accent}33`,
            borderRadius: "10px",
            padding: "0.6rem 1rem",
            maxWidth: "360px",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em",
              textTransform: "uppercase", color: accent, marginBottom: "0.2rem",
            }}>
              Goal
            </p>
            <p style={{ color: C.t1, fontSize: "0.82rem", lineHeight: 1.5 }}>
              {activeLevel.goal}
            </p>
          </div>
        </div>

        <TechnologyRoadmapCanvas level={activeLevel} accent={accent} />
      </div>
    </div>
  );
}
