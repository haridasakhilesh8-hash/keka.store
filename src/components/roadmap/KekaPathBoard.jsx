import { useState, Fragment } from "react";
import C from "./theme";

const LANES = [
  { type: "required",  label: "Core Path",   color: "#00E5B0", dashed: false, icon: "◉"  },
  { type: "build",     label: "Build Path",  color: "#60a5fa", dashed: false, icon: "</>" },
  { type: "tools",     label: "Tools Path",  color: "#a78bfa", dashed: false, icon: "⚙"  },
  { type: "milestone", label: "Milestones",  color: "#FFB84D", dashed: true,  icon: "🏆" },
  { type: "optional",  label: "Future Path", color: "#4A4868", dashed: true,  icon: "◌"  },
];

function NodePill({ node, lane, isSelected, onClick }) {
  const isFuture = lane.type === "optional";
  const base = {
    display: "flex", alignItems: "center", gap: "0.35rem",
    padding: "0.3rem 0.75rem",
    borderRadius: "999px",
    border: `1.5px solid ${isSelected ? lane.color : isFuture ? "#3A3850" : `${lane.color}44`}`,
    background: isSelected ? `${lane.color}22` : isFuture ? "transparent" : `${lane.color}0A`,
    color: isFuture ? "#4A4868" : lane.color,
    fontSize: "0.74rem", fontWeight: isSelected ? 700 : 600,
    cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
    outline: "none", transition: "all 0.14s",
    fontFamily: "inherit",
  };
  return (
    <button
      onClick={onClick}
      style={base}
      onMouseEnter={e => {
        if (!isSelected) e.currentTarget.style.background = `${lane.color}18`;
      }}
      onMouseLeave={e => {
        if (!isSelected)
          e.currentTarget.style.background = isFuture ? "transparent" : `${lane.color}0A`;
      }}
    >
      {lane.type === "milestone" && <span style={{ fontSize: "0.6rem" }}>⭐</span>}
      {node.title}
    </button>
  );
}

function Connector({ color, dashed }) {
  return (
    <div style={{ display: "flex", alignItems: "center", minWidth: "20px", maxWidth: "44px", flex: "0 1 36px" }}>
      <div style={{
        flex: 1, height: "1.5px",
        background: dashed ? "none" : color,
        borderTop: dashed ? `1.5px dashed ${color}55` : "none",
        opacity: dashed ? 1 : 0.5,
      }}/>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
        <path d="M0 0L5 4L0 8" stroke={color} strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

const HOW_TO = [
  { n: "1", title: "Follow the core path",       sub: "Start at the beginning and progress left to right." },
  { n: "☆", title: "Build milestone projects",   sub: "Apply your skills with real-world projects."        },
  { n: "□", title: "Open each node for details", sub: "Click any node to learn key concepts and next steps." },
];

export default function KekaPathBoard({ level, accent }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const acc = accent || C.teal;

  /* Build per-lane node lists, preserving phase order */
  const laneData = {};
  LANES.forEach(l => { laneData[l.type] = []; });

  level.phases.forEach(phase => {
    phase.nodes.forEach(node => {
      let t = node.type || "required";
      if (t === "advanced") t = "optional";
      if (laneData[t] !== undefined) {
        laneData[t].push({ ...node, phaseTitle: phase.title });
      }
    });
  });

  const activeLanes = LANES.filter(l => laneData[l.type].length > 0);

  function handleClick(node, lane) {
    if (selectedNode?.id === node.id) { setSelectedNode(null); return; }
    const arr = laneData[lane.type];
    const idx = arr.findIndex(n => n.id === node.id);
    const nextNode = idx >= 0 && idx < arr.length - 1 ? arr[idx + 1].title : null;
    setSelectedNode({ ...node, lane, nextNode });
  }

  return (
    <div>
      {/* ── How to use strip ─────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "flex-start", flexWrap: "wrap",
        gap: "1.25rem", padding: "0.875rem 1.25rem",
        background: C.surface, border: `1px solid ${C.border}`,
        borderRadius: "12px", marginBottom: "1.25rem",
      }}>
        <p style={{ color: C.t1, fontWeight: 700, fontSize: "0.82rem", whiteSpace: "nowrap", alignSelf: "center" }}>
          How to use this roadmap
        </p>
        {HOW_TO.map(s => (
          <div key={s.title} style={{ display: "flex", gap: "0.45rem", alignItems: "flex-start" }}>
            <span style={{
              width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
              background: `${acc}14`, border: `1px solid ${acc}44`,
              color: acc, fontSize: "0.68rem", fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{s.n}</span>
            <div>
              <p style={{ color: C.t1, fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.3 }}>{s.title}</p>
              <p style={{ color: C.muted, fontSize: "0.7rem", lineHeight: 1.4, marginTop: "0.1rem" }}>{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── PathBoard ─────────────────────────────────────────── */}
      <div style={{
        background: "#08071A",
        border: `1px solid ${C.border}`,
        borderRadius: "16px",
        overflow: "hidden",
      }}>

        {/* Column header row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "130px 1fr",
          borderBottom: `1px solid ${C.border}`,
          background: "#0A091C",
        }}>
          <div style={{ padding: "0.7rem 1rem", borderRight: `1px solid ${C.border}` }}/>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${level.phases.length}, 1fr)`,
          }}>
            {level.phases.map((phase, i) => (
              <div key={phase.id} style={{
                padding: "0.7rem 0.5rem", textAlign: "center",
                borderRight: i < level.phases.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <span style={{ color: acc, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.03em" }}>
                  {phase.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lane rows */}
        {activeLanes.map((lane, li) => (
          <div key={lane.type} style={{
            display: "grid",
            gridTemplateColumns: "130px 1fr",
            borderBottom: li < activeLanes.length - 1 ? `1px solid ${C.border}` : "none",
            minHeight: "52px",
          }}>
            {/* Label */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              padding: "0.875rem 0.875rem",
              borderRight: `1px solid ${C.border}`,
            }}>
              <span style={{ color: lane.color, fontSize: "0.78rem", flexShrink: 0 }}>{lane.icon}</span>
              <span style={{ color: lane.color, fontSize: "0.74rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                {lane.label}
              </span>
            </div>

            {/* Nodes */}
            <div style={{
              display: "flex", alignItems: "center",
              padding: "0.75rem 0.875rem",
              overflowX: "auto", gap: 0,
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}>
              {laneData[lane.type].map((node, ni) => (
                <Fragment key={node.id}>
                  <NodePill
                    node={node}
                    lane={lane}
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => handleClick(node, lane)}
                  />
                  {ni < laneData[lane.type].length - 1 && (
                    <Connector color={lane.color} dashed={lane.dashed} />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div style={{
          display: "flex", gap: "1.5rem", flexWrap: "wrap",
          padding: "0.75rem 0.875rem",
          borderTop: `1px solid ${C.border}`,
          background: "#0A091C",
        }}>
          {[
            { line: true, color: "#00E5B0", dashed: false, label: "Main path (required)"       },
            { line: true, color: "#60a5fa", dashed: true,  label: "Related path (recommended)" },
            { star: true, color: "#FFB84D",               label: "Milestone (project)"         },
            { line: true, color: "#4A4868", dashed: true,  label: "Optional / Advanced"        },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {item.star ? (
                <span style={{ fontSize: "0.72rem" }}>⭐</span>
              ) : (
                <div style={{
                  width: "22px", height: "1.5px",
                  background: item.dashed ? "none" : item.color,
                  borderTop: item.dashed ? `1.5px dashed ${item.color}` : "none",
                }}/>
              )}
              <span style={{ color: C.muted, fontSize: "0.68rem" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Selected Node Panel ───────────────────────────────── */}
      {selectedNode && (
        <div style={{
          position: "relative",
          marginTop: "1.25rem",
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: "16px",
          padding: "1.5rem",
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}>
          {/* Left: icon + text */}
          <div style={{ display: "flex", gap: "1.25rem", flex: 1, minWidth: "240px" }}>
            <div style={{
              width: "68px", height: "68px", flexShrink: 0,
              borderRadius: "12px",
              background: `${selectedNode.lane.color}18`,
              border: `1px solid ${selectedNode.lane.color}33`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem",
            }}>
              {selectedNode.lane.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                <h3 style={{
                  fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
                  fontSize: "1.1rem", color: C.t1,
                }}>
                  {selectedNode.title}
                </h3>
                <span style={{
                  padding: "0.15rem 0.55rem", borderRadius: "999px",
                  background: `${selectedNode.lane.color}1A`,
                  border: `1px solid ${selectedNode.lane.color}44`,
                  color: selectedNode.lane.color,
                  fontSize: "0.68rem", fontWeight: 700,
                }}>
                  {selectedNode.lane.label}
                </span>
              </div>
              <p style={{ color: C.t2, fontSize: "0.84rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                {selectedNode.description ||
                  `${selectedNode.title} is a step in the ${selectedNode.lane.label}. Work through this topic to build the skills needed for the next stage.`}
              </p>
              {selectedNode.chips && selectedNode.chips.length > 0 && (
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {selectedNode.chips.map(chip => (
                    <span key={chip} style={{
                      padding: "0.2rem 0.55rem",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${C.border}`,
                      borderRadius: "6px",
                      color: C.t2, fontSize: "0.72rem",
                    }}>{chip}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: next step */}
          {selectedNode.nextNode && (
            <div style={{
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "0 1.25rem",
              borderLeft: `1px solid ${C.border}`,
              minWidth: "160px", flexShrink: 0,
            }}>
              <p style={{ color: C.teal, fontSize: "0.74rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                Next step
              </p>
              <p style={{ color: C.t1, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.3, marginBottom: "0.875rem" }}>
                {selectedNode.nextNode}
              </p>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.t1, fontSize: "0.9rem",
              }}>→</div>
            </div>
          )}

          {/* Close */}
          <button
            onClick={() => setSelectedNode(null)}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "transparent", border: "none",
              color: C.muted, cursor: "pointer", fontSize: "1rem", lineHeight: 1,
            }}
          >✕</button>
        </div>
      )}
    </div>
  );
}
