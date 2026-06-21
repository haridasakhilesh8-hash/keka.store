import C from "./theme";

const makeStyles = (accent) => ({
  required: {
    bg: `${accent}18`, border: `${accent}4D`,
    text: C.t1, dot: accent, dotFilled: true,
  },
  milestone: {
    bg: "rgba(255,184,77,0.12)", border: "rgba(255,184,77,0.4)",
    text: C.amber, dot: C.amber, dotFilled: true,
  },
  optional: {
    bg: "rgba(255,255,255,0.03)", border: C.border,
    text: C.t2, dot: C.muted, dotFilled: false,
  },
  advanced: {
    bg: "rgba(255,255,255,0.02)", border: C.border,
    text: C.muted, dot: C.muted, dotFilled: false,
  },
});

export default function TechnologyRoadmapNode({ node, accent = C.teal }) {
  const styles = makeStyles(accent);
  const s = styles[node.type] || styles.optional;

  return (
    <div
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.45rem 0.75rem", borderRadius: "8px",
        fontSize: "0.78rem",
        fontWeight: node.type === "milestone" ? 700 : 500,
        background: s.bg, border: `1px solid ${s.border}`,
        color: s.text, whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
          background: s.dotFilled ? s.dot : "transparent",
          border: s.dotFilled ? "none" : `1.5px solid ${s.dot}`,
          boxShadow: s.dotFilled ? `0 0 6px ${s.dot}99` : "none",
        }}
      />
      {node.type === "milestone" && <span style={{ fontSize: "0.7rem" }}>★</span>}
      {node.title}
    </div>
  );
}
