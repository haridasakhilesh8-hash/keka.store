import C from "./theme";
import StageRoadmapNode from "./StageRoadmapNode";

export default function StagePhaseLane({ phase, index, isLast, variant = "desktop", accent = C.teal }) {
  if (variant === "mobile") {
    return (
      <div style={{ display: "flex", gap: "0.75rem", paddingBottom: "1.25rem", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
            background: `${accent}22`, border: `2px solid ${accent}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.7rem", fontWeight: 700, color: accent,
          }}>{index + 1}</div>
          {!isLast && (
            <div style={{ width: "2px", flex: 1, background: `${accent}22`, marginTop: "4px" }} />
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontSize: "0.78rem", fontWeight: 700, color: C.t2,
            textTransform: "uppercase", letterSpacing: "0.06em",
            marginBottom: "0.5rem", paddingTop: "5px",
          }}>{phase.title}</p>
          {phase.nodes.map(node => (
            <StageRoadmapNode key={node.id} node={node} accent={accent} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
      <div style={{
        width: "32px", height: "32px", borderRadius: "50%",
        background: `${accent}22`, border: `2px solid ${accent}66`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.72rem", fontWeight: 700, color: accent,
        marginBottom: "0.625rem", position: "relative", zIndex: 1,
        flexShrink: 0,
      }}>{index + 1}</div>
      <p style={{
        fontSize: "0.72rem", fontWeight: 700, color: C.t2,
        textTransform: "uppercase", letterSpacing: "0.06em",
        marginBottom: "0.5rem", lineHeight: 1.35,
      }}>{phase.title}</p>
      <div>
        {phase.nodes.map(node => (
          <StageRoadmapNode key={node.id} node={node} accent={accent} />
        ))}
      </div>
    </div>
  );
}
