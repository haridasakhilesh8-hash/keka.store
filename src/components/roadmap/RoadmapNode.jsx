import C from "./theme";

/**
 * RoadmapNode
 * A single skill/topic node within a phase lane.
 *
 * props:
 *  - node: { id, title, type: "required" | "optional" | "advanced" | "milestone" }
 */
const TYPE_STYLE = {
  required: {
    bg: "rgba(0,229,176,0.1)",
    border: "rgba(0,229,176,0.3)",
    text: C.t1,
    dot: C.teal,
    dotFilled: true,
  },
  milestone: {
    bg: "rgba(255,184,77,0.12)",
    border: "rgba(255,184,77,0.4)",
    text: C.amber,
    dot: C.amber,
    dotFilled: true,
  },
  optional: {
    bg: "rgba(255,255,255,0.03)",
    border: C.border,
    text: C.t2,
    dot: C.muted,
    dotFilled: false,
  },
  advanced: {
    bg: "rgba(255,255,255,0.02)",
    border: C.border,
    text: C.muted,
    dot: C.muted,
    dotFilled: false,
  },
};

export default function RoadmapNode({ node }) {
  const style = TYPE_STYLE[node.type] || TYPE_STYLE.optional;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.75rem",
        borderRadius: "8px",
        fontSize: "0.78rem",
        fontWeight: node.type === "milestone" ? 700 : 500,
        background: style.bg,
        border: `1px solid ${style.border}`,
        color: style.text,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          flexShrink: 0,
          background: style.dotFilled ? style.dot : "transparent",
          border: style.dotFilled ? "none" : `1.5px solid ${style.dot}`,
          boxShadow: style.dotFilled ? `0 0 6px ${style.dot}99` : "none",
        }}
      />
      {node.type === "milestone" && <span style={{ fontSize: "0.7rem" }}>★</span>}
      {node.title}
    </div>
  );
}
