import { useState } from "react";
import { Link } from "react-router-dom";
import C from "./theme";
import RoadmapLevelTabs from "./RoadmapLevelTabs";
import RoadmapCanvas from "./RoadmapCanvas";

/* ── Hero badges ──────────────────────────────────────────── */
function HeroBadges({ role, activeLevel }) {
  const badges = [
    { label: "Best for", value: role.bestFor },
    { label: "Level", value: `${role.levels[0].label} to ${role.levels[role.levels.length - 1].label}` },
    { label: "Current goal", value: activeLevel.goal },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "0.6rem",
        marginTop: "1.5rem",
      }}
    >
      {badges.map((b) => (
        <div
          key={b.label}
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: "10px",
            padding: "0.65rem 0.85rem",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: C.teal,
              marginBottom: "0.2rem",
            }}
          >
            {b.label}
          </p>
          <p style={{ color: C.t1, fontSize: "0.8rem", fontWeight: 500, lineHeight: 1.4 }}>{b.value}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * RoleRoadmapDetailPage
 * Fully data-driven role roadmap page. One component renders every role.
 *
 * props:
 *  - role: {
 *      slug, title, subtitle, bestFor, defaultLevel,
 *      levels: [{ id, label, goal, phases: [{id,title,nodes:[{id,title,type}]}] }]
 *    }
 */
export default function RoleRoadmapDetailPage({ role }) {
  const [activeLevelId, setActiveLevelId] = useState(role.defaultLevel || role.levels[0].id);
  const activeLevel = role.levels.find((l) => l.id === activeLevelId) || role.levels[0];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          borderBottom: `1px solid ${C.border}`,
          background: C.bg2,
          paddingTop: "5.5rem",
          paddingBottom: "2.25rem",
        }}
      >
        <div className="container">
          <Link
            to="/roadmaps"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: C.muted,
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.25rem",
            }}
          >
            ← All roadmaps
          </Link>

          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.teal,
              marginBottom: "0.75rem",
            }}
          >
            Role-Based Roadmap
          </p>
          <h1
            style={{
              fontFamily: "Space Grotesk,sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: C.t1,
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "0.875rem",
            }}
          >
            {role.title}
          </h1>
          <p style={{ color: "#8B88A6", fontSize: "0.975rem", lineHeight: 1.75, maxWidth: "600px" }}>
            {role.subtitle}
          </p>

          <HeroBadges role={role} activeLevel={activeLevel} />
        </div>
      </div>

      {/* Tabs + canvas */}
      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <RoadmapLevelTabs levels={role.levels} activeId={activeLevelId} onChange={setActiveLevelId} />

        {/* Active level heading + goal */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "3px", height: "18px", borderRadius: "2px", background: C.teal }} />
            <div>
              <h2
                style={{
                  fontFamily: "Space Grotesk,sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: C.t1,
                  letterSpacing: "-0.01em",
                }}
              >
                {activeLevel.label}
              </h2>
            </div>
          </div>

          <div
            style={{
              background: "rgba(0,229,176,0.06)",
              border: "1px solid rgba(0,229,176,0.2)",
              borderRadius: "10px",
              padding: "0.6rem 1rem",
              maxWidth: "360px",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.teal,
                marginBottom: "0.2rem",
              }}
            >
              Goal
            </p>
            <p style={{ color: C.t1, fontSize: "0.82rem", lineHeight: 1.5 }}>{activeLevel.goal}</p>
          </div>
        </div>

        {/* Canvas */}
        <RoadmapCanvas level={activeLevel} />
      </div>
    </div>
  );
}
