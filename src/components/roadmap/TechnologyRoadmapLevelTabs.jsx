import C from "./theme";

export default function TechnologyRoadmapLevelTabs({ levels, activeId, onChange, accent = C.teal }) {
  return (
    <div
      style={{
        display: "flex", gap: "0.5rem",
        overflowX: "auto", paddingBottom: "0.25rem", marginBottom: "1.75rem",
        WebkitOverflowScrolling: "touch", scrollbarWidth: "none",
      }}
    >
      {levels.map((level) => {
        const isActive = level.id === activeId;
        return (
          <button
            key={level.id}
            onClick={() => onChange(level.id)}
            style={{
              flexShrink: 0,
              padding: "0.6rem 1.1rem",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: isActive ? 700 : 500,
              fontFamily: "Inter,sans-serif",
              cursor: "pointer",
              whiteSpace: "nowrap",
              border: `1px solid ${isActive ? accent : C.border}`,
              background: isActive ? `${accent}22` : C.surface,
              color: isActive ? accent : C.t2,
              boxShadow: isActive
                ? `0 0 0 1px ${accent}33, 0 4px 16px ${accent}2A`
                : "none",
              transition: "all 0.15s ease",
            }}
          >
            {level.label}
          </button>
        );
      })}
    </div>
  );
}
