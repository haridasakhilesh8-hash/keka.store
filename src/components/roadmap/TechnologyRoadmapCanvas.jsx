import C from "./theme";
import TechnologyPhaseLane from "./TechnologyPhaseLane";

export default function TechnologyRoadmapCanvas({ level, accent = C.teal }) {
  return (
    <div>
      {/* Desktop: horizontal phase lanes */}
      <div
        className="hidden md:block"
        style={{
          position: "relative",
          background: "#0B0918",
          border: `1px solid ${C.border}`,
          borderRadius: "20px",
          padding: "2rem 1.75rem 1.75rem",
          overflowX: "auto",
        }}
      >
        {/* Connecting spine */}
        <div
          style={{
            position: "absolute",
            top: "2.85rem", left: "1.75rem", right: "1.75rem",
            height: "2px",
            background: `linear-gradient(90deg, ${accent}70, ${accent}22)`,
            zIndex: 0,
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${level.phases.length}, minmax(150px, 1fr))`,
            gap: "0.75rem",
            position: "relative", zIndex: 1,
          }}
        >
          {level.phases.map((phase, i) => (
            <TechnologyPhaseLane
              key={phase.id} phase={phase} index={i}
              variant="desktop" accent={accent}
            />
          ))}
        </div>
      </div>

      {/* Mobile: vertical connected sections */}
      <div className="md:hidden" style={{ display: "flex", flexDirection: "column" }}>
        {level.phases.map((phase, i) => (
          <TechnologyPhaseLane
            key={phase.id} phase={phase} index={i}
            isLast={i === level.phases.length - 1}
            variant="mobile" accent={accent}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
        {[
          { dot: accent, filled: true, label: "Core path" },
          { dot: C.amber, filled: true, label: "Milestone" },
          { dot: C.muted, filled: false, label: "Optional / advanced" },
        ].map(({ dot, filled, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: filled ? dot : "transparent",
              border: filled ? "none" : `1.5px solid ${dot}`,
              boxShadow: filled ? `0 0 6px ${dot}80` : "none",
            }} />
            <span style={{ color: C.muted, fontSize: "0.75rem" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
