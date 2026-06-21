import C from "./theme";

const makeStyles = (accent) => ({
  required: { bg: `${accent}18`, border: `${accent}4D`, text: C.t1,    dot: accent, dotFilled: true },
  milestone:{ bg: "rgba(255,184,77,0.12)", border: "rgba(255,184,77,0.4)", text: C.amber, dot: C.amber, dotFilled: true },
  optional: { bg: "rgba(255,255,255,0.03)", border: C.border, text: C.t2,  dot: C.muted, dotFilled: false },
  advanced: { bg: "rgba(255,255,255,0.02)", border: C.border, text: C.muted,dot: C.muted, dotFilled: false },
});

export default function StageRoadmapNode({ node, accent = C.teal }) {
  const S = (makeStyles(accent))[node.type] || makeStyles(accent).required;
  const isMilestone = node.type === "milestone";

  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "0.5rem",
      padding: "0.45rem 0.6rem",
      background: S.bg,
      border: `1px solid ${S.border}`,
      borderRadius: "7px",
      marginBottom: "0.3rem",
    }}>
      {isMilestone ? (
        <span style={{ fontSize: "0.65rem", flexShrink: 0, marginTop: "2px", color: C.amber }}>★</span>
      ) : (
        <span style={{
          width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0, marginTop: "4px",
          background: S.dotFilled ? S.dot : "transparent",
          border: `1.5px solid ${S.dot}`,
        }} />
      )}
      <span style={{ fontSize: "0.78rem", color: S.text, lineHeight: 1.45 }}>{node.title}</span>
    </div>
  );
}
