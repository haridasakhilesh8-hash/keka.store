import C from "./theme";
import RoadmapNode from "./RoadmapNode";

/**
 * RoadmapPhaseLane
 * Renders one phase as either:
 *  - a vertical lane (desktop, part of a horizontal grid of phases)
 *  - a horizontal row (mobile, part of a vertical stack)
 *
 * props:
 *  - phase: { id, title, nodes: [{id,title,type}] }
 *  - index: number (0-based position, used for the step number)
 *  - isLast: boolean (mobile only — hides the connector line after the last phase)
 *  - variant: "desktop" | "mobile"
 */
export default function RoadmapPhaseLane({ phase, index, isLast, variant = "desktop" }) {
  const stepNumber = (
    <div
      style={{
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        background: "rgba(0,229,176,0.14)",
        border: `2px solid ${C.teal}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.65rem",
        fontWeight: 700,
        color: C.teal,
        fontFamily: "Space Grotesk,sans-serif",
        flexShrink: 0,
        boxShadow: "0 0 10px rgba(0,229,176,0.35)",
      }}
    >
      {index + 1}
    </div>
  );

  if (variant === "mobile") {
    return (
      <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
        {/* connector column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          {stepNumber}
          {!isLast && (
            <div
              style={{
                width: "2px",
                flex: 1,
                minHeight: "24px",
                background: "linear-gradient(to bottom, rgba(0,229,176,0.35), rgba(0,229,176,0.1))",
                marginTop: "4px",
              }}
            />
          )}
        </div>

        {/* phase content */}
        <div style={{ paddingBottom: "1.25rem", flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "Space Grotesk,sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              color: C.t1,
              marginBottom: "0.6rem",
            }}
          >
            {phase.title}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {phase.nodes.map((node) => (
              <RoadmapNode key={node.id} node={node} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // desktop variant — vertical lane
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "0.75rem" }}>{stepNumber}</div>

      <p
        style={{
          fontFamily: "Space Grotesk,sans-serif",
          fontWeight: 700,
          fontSize: "0.82rem",
          color: C.t1,
          textAlign: "center",
          marginBottom: "0.9rem",
          minHeight: "2.2em",
        }}
      >
        {phase.title}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%", alignItems: "center" }}>
        {phase.nodes.map((node) => (
          <RoadmapNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}
