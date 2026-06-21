import C from "./theme";
import TechnologyRoadmapNode from "./TechnologyRoadmapNode";

export default function TechnologyPhaseLane({ phase, index, isLast, variant = "desktop", accent = C.teal }) {
  const stepBubble = (
    <div
      style={{
        width: "26px", height: "26px", borderRadius: "50%",
        background: `${accent}22`,
        border: `2px solid ${accent}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.65rem", fontWeight: 700, color: accent,
        fontFamily: "Space Grotesk,sans-serif",
        flexShrink: 0,
        boxShadow: `0 0 10px ${accent}55`,
      }}
    >
      {index + 1}
    </div>
  );

  if (variant === "mobile") {
    return (
      <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          {stepBubble}
          {!isLast && (
            <div
              style={{
                width: "2px", flex: 1, minHeight: "24px",
                background: `linear-gradient(to bottom, ${accent}55, ${accent}18)`,
                marginTop: "4px",
              }}
            />
          )}
        </div>
        <div style={{ paddingBottom: "1.25rem", flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
            fontSize: "0.88rem", color: C.t1, marginBottom: "0.6rem",
          }}>
            {phase.title}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {phase.nodes.map((node) => (
              <TechnologyRoadmapNode key={node.id} node={node} accent={accent} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "0.75rem" }}>{stepBubble}</div>
      <p style={{
        fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
        fontSize: "0.82rem", color: C.t1,
        textAlign: "center", marginBottom: "0.9rem", minHeight: "2.2em",
      }}>
        {phase.title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%", alignItems: "center" }}>
        {phase.nodes.map((node) => (
          <TechnologyRoadmapNode key={node.id} node={node} accent={accent} />
        ))}
      </div>
    </div>
  );
}
