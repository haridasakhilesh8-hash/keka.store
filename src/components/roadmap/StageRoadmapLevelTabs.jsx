import C from "./theme";

export default function StageRoadmapLevelTabs({ levels, activeId, onChange, accent = C.teal }) {
  return (
    <div style={{
      display: "flex", gap: "0.5rem",
      overflowX: "auto", paddingBottom: "2px",
      scrollbarWidth: "none", WebkitOverflowScrolling: "touch",
    }}>
      {levels.map((lv) => {
        const active = lv.id === activeId;
        return (
          <button
            key={lv.id}
            onClick={() => onChange(lv.id)}
            style={{
              flexShrink: 0,
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              border: `1px solid ${active ? accent : C.border}`,
              background: active ? `${accent}22` : "transparent",
              color: active ? accent : C.t2,
              fontSize: "0.8rem",
              fontWeight: active ? 700 : 500,
              cursor: "pointer",
              boxShadow: active ? `0 0 10px ${accent}33` : "none",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            {lv.label}
          </button>
        );
      })}
    </div>
  );
}
