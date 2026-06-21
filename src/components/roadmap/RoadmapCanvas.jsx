import C from "./theme";
import RoadmapPhaseLane from "./RoadmapPhaseLane";

/**
 * RoadmapCanvas
 * Renders a full level's roadmap as connected phase lanes.
 * Desktop: horizontal grid of phase columns with a connecting spine line.
 * Mobile: vertical stack of phases with connector lines.
 *
 * props:
 *  - level: { id, label, goal, phases: [{id,title,nodes}] }
 */
export default function RoadmapCanvas({ level }) {
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
        {/* connecting spine */}
        <div
          style={{
            position: "absolute",
            top: "2.85rem",
            left: "1.75rem",
            right: "1.75rem",
            height: "2px",
            background: "linear-gradient(90deg, rgba(0,229,176,0.45), rgba(0,229,176,0.15))",
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${level.phases.length}, minmax(150px, 1fr))`,
            gap: "0.75rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {level.phases.map((phase, i) => (
            <RoadmapPhaseLane key={phase.id} phase={phase} index={i} variant="desktop" />
          ))}
        </div>
      </div>

      {/* Mobile: vertical connected sections */}
      <div className="md:hidden" style={{ display: "flex", flexDirection: "column" }}>
        {level.phases.map((phase, i) => (
          <RoadmapPhaseLane
            key={phase.id}
            phase={phase}
            index={i}
            isLast={i === level.phases.length - 1}
            variant="mobile"
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: C.teal,
              boxShadow: `0 0 6px ${C.teal}80`,
            }}
          />
          <span style={{ color: C.muted, fontSize: "0.75rem" }}>Core path</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: C.amber,
              boxShadow: `0 0 6px ${C.amber}80`,
            }}
          />
          <span style={{ color: C.muted, fontSize: "0.75rem" }}>Milestone</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", border: `1.5px solid ${C.muted}` }} />
          <span style={{ color: C.muted, fontSize: "0.75rem" }}>Optional / advanced</span>
        </div>
      </div>
    </div>
  );
}
