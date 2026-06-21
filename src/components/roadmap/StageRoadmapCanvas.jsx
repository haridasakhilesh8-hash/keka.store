import C from "./theme";
import StagePhaseLane from "./StagePhaseLane";

function Legend({ accent }) {
  const items = [
    { dot: accent, filled: true,  label: "Core step"  },
    { dot: C.amber, filled: true, label: "Milestone"  },
    { dot: C.muted, filled: false,label: "Optional"   },
  ];
  return (
    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
      {items.map(({ dot, filled, label }) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {label === "Milestone" ? (
            <span style={{ fontSize: "0.6rem", color: C.amber }}>★</span>
          ) : (
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: filled ? dot : "transparent",
              border: `1.5px solid ${dot}`,
              display: "inline-block",
            }} />
          )}
          <span style={{ fontSize: "0.72rem", color: C.muted }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function StageRoadmapCanvas({ level, accent = C.teal }) {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block" style={{ overflowX: "auto" }}>
        <div style={{ position: "relative", paddingTop: "1rem", minWidth: "500px" }}>
          <div style={{
            position: "absolute", top: "2.85rem", left: "1.75rem", right: "1.75rem",
            height: "2px",
            background: `linear-gradient(90deg, ${accent}70, ${accent}22)`,
            zIndex: 0,
          }} />
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${level.phases.length}, minmax(150px, 1fr))`,
            gap: "1rem",
            position: "relative",
          }}>
            {level.phases.map((phase, i) => (
              <StagePhaseLane
                key={phase.id}
                phase={phase}
                index={i}
                isLast={i === level.phases.length - 1}
                variant="desktop"
                accent={accent}
              />
            ))}
          </div>
        </div>
        <Legend accent={accent} />
      </div>

      {/* Mobile */}
      <div className="md:hidden" style={{ paddingTop: "0.5rem" }}>
        {level.phases.map((phase, i) => (
          <StagePhaseLane
            key={phase.id}
            phase={phase}
            index={i}
            isLast={i === level.phases.length - 1}
            variant="mobile"
            accent={accent}
          />
        ))}
        <Legend accent={accent} />
      </div>
    </div>
  );
}
