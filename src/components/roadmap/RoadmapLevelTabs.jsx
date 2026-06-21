import C from "./theme";

/**
 * RoadmapLevelTabs
 * Horizontally scrollable tab row for switching between roadmap levels.
 *
 * props:
 *  - levels: [{ id, label, goal, phases }]
 *  - activeId: string
 *  - onChange: (id) => void
 */
export default function RoadmapLevelTabs({ levels, activeId, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        overflowX: "auto",
        paddingBottom: "0.25rem",
        marginBottom: "1.75rem",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
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
              border: `1px solid ${isActive ? C.teal : C.border}`,
              background: isActive ? "rgba(0,229,176,0.14)" : C.surface,
              color: isActive ? C.teal : C.t2,
              boxShadow: isActive
                ? `0 0 0 1px ${C.teal}40, 0 4px 16px rgba(0,229,176,0.18)`
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
