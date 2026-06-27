import { useState } from "react";
import { Link } from "react-router-dom";
import C from "./theme";
import KekaPathBoard from "./KekaPathBoard";

/* ── Level Tabs ─────────────────────────────────────────────── */
function LevelTabs({ levels, activeId, onChange, accent }) {
  const acc = accent || C.teal;
  return (
    <div style={{
      display: "flex", gap: "0.4rem",
      overflowX: "auto", paddingBottom: "0.25rem",
      marginBottom: "2rem",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
    }}>
      {levels.map(lv => {
        const active = lv.id === activeId;
        return (
          <button
            key={lv.id}
            onClick={() => onChange(lv.id)}
            style={{
              flexShrink: 0,
              padding: "0.55rem 1.1rem",
              borderRadius: "8px",
              fontSize: "0.84rem", fontWeight: active ? 700 : 500,
              cursor: "pointer", whiteSpace: "nowrap",
              border: `1px solid ${active ? acc : C.border}`,
              background: active ? `${acc}18` : C.surface,
              color: active ? acc : C.t2,
              boxShadow: active ? `0 0 0 1px ${acc}33, 0 4px 14px ${acc}18` : "none",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
          >
            {lv.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Hero badges ─────────────────────────────────────────────── */
function HeroSection({ data, activeLevel }) {
  const acc = data.accent || C.teal;
  const levelRange = `${data.levels[0].label} → ${data.levels[data.levels.length - 1].label}`;

  const badges = [
    { icon: "👤", label: "Best for",     value: data.bestFor  },
    { icon: "📊", label: "Level",        value: levelRange    },
    { icon: "🎯", label: "Current goal", value: activeLevel.goal },
  ];

  return (
    <div style={{
      borderBottom: `1px solid ${C.border}`,
      background: C.bg2,
      paddingTop: "5.5rem",
      paddingBottom: "2.25rem",
    }}>
      <div className="container">
        <Link to="/roadmaps" style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          color: C.muted, fontSize: "0.78rem", textDecoration: "none",
          marginBottom: "1.25rem",
        }}>← All roadmaps</Link>

        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          {data.icon && <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{data.icon}</span>}
          <span style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: acc,
          }}>
            {data.typeLabel}
          </span>
        </div>

        <h1 style={{
          fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          color: C.t1, lineHeight: 1.2, letterSpacing: "-0.025em",
          marginBottom: "0.75rem",
        }}>
          {data.title}
        </h1>

        <p style={{ color: "#8B88A6", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "600px", marginBottom: "1.75rem" }}>
          {data.subtitle}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.6rem",
        }}>
          {badges.map(b => (
            <div key={b.label} style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "12px",
              padding: "0.875rem 1rem",
              display: "flex", gap: "0.75rem", alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>{b.icon}</span>
              <div>
                <p style={{
                  fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: acc, marginBottom: "0.25rem",
                }}>{b.label}</p>
                <p style={{ color: C.t1, fontSize: "0.82rem", fontWeight: 500, lineHeight: 1.45 }}>{b.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Continue Journey cards ──────────────────────────────────── */
function ContinueJourney({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ marginTop: "3rem" }}>
      <h3 style={{
        fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
        fontSize: "1.15rem", color: C.t1, marginBottom: "1.25rem",
        letterSpacing: "-0.01em",
      }}>Continue your journey</h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "0.875rem",
      }}>
        {items.map(item => (
          <Link key={item.title} to={item.to || "/roadmaps"} style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex", gap: "1rem", alignItems: "center",
                padding: "1.25rem",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: "14px",
                cursor: "pointer",
                transition: "all 0.18s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "#1A1730";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.background = C.surface;
              }}
            >
              <div style={{
                width: "44px", height: "44px", flexShrink: 0,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem",
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
                  fontSize: "0.9rem", color: C.t1, marginBottom: "0.2rem",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>
                  {item.title}
                </p>
                <p style={{ color: C.muted, fontSize: "0.78rem", lineHeight: 1.5 }}>{item.subtitle}</p>
              </div>
              <span style={{ color: C.muted, flexShrink: 0, fontSize: "1.1rem" }}>›</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Default recommendations by roadmap type ─────────────────── */
const DEFAULT_RECS = {
  role: [
    { icon: "📈", title: "Growth Roadmap",  subtitle: "Level up your career stage",    to: "/roadmaps" },
    { icon: "🎯", title: "Tech Lead Path",  subtitle: "Architecture & leadership",     to: "/roadmaps" },
    { icon: "🏛️", title: "Architect Path",  subtitle: "Design at enterprise scale",    to: "/roadmaps" },
  ],
  technology: [
    { icon: "🔗", title: "Full Stack Path",  subtitle: "Combine frontend and backend",  to: "/roadmaps" },
    { icon: "☁️", title: "Cloud & DevOps",   subtitle: "Deploy and scale your work",    to: "/roadmaps" },
    { icon: "🎯", title: "Tech Lead Path",   subtitle: "Move into leadership",           to: "/roadmaps" },
  ],
  stage: [
    { icon: "🎨", title: "Frontend Developer", subtitle: "Build interfaces people love", to: "/roadmaps/frontend-developer" },
    { icon: "⚙️", title: "Backend Developer",  subtitle: "Power apps with robust APIs",  to: "/roadmaps"                   },
    { icon: "📈", title: "Career Growth Path", subtitle: "Level up to the next stage",   to: "/roadmaps"                   },
  ],
  growth: [
    { icon: "🏆", title: "Senior Developer", subtitle: "Master advanced engineering",  to: "/roadmaps" },
    { icon: "🎯", title: "Tech Lead Path",   subtitle: "Architecture & leadership",    to: "/roadmaps" },
    { icon: "🏛️", title: "Architect Path",   subtitle: "Design enterprise systems",    to: "/roadmaps" },
  ],
};

/* ── Main layout ─────────────────────────────────────────────── */
export default function KekaRoadmapLayout({ data }) {
  const [activeId, setActiveId] = useState(data.defaultLevel || data.levels[0].id);
  const activeLevel = data.levels.find(l => l.id === activeId) || data.levels[0];
  const accent = data.accent || C.teal;
  const recs = data.recommendations || DEFAULT_RECS[data.roadmapType] || DEFAULT_RECS.role;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <HeroSection data={data} activeLevel={activeLevel} />

      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        <LevelTabs
          levels={data.levels}
          activeId={activeId}
          onChange={id => { setActiveId(id); }}
          accent={accent}
        />

        <KekaPathBoard level={activeLevel} accent={accent} />

        <ContinueJourney items={recs} />
      </div>
    </div>
  );
}
