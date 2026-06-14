import { roadmapSteps } from "../data";

export default function RoadmapPreview() {
  return (
    <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
      {/* Mobile: vertical, Desktop: horizontal */}
      <div style={{
        display: "flex",
        gap: "0",
        minWidth: "min-content",
        flexWrap: "nowrap",
        alignItems: "stretch"
      }}>
        {roadmapSteps.map((step, idx) => (
          <div key={step.step} style={{ display: "flex", alignItems: "center" }}>
            {/* Step card */}
            <div style={{
              background: "#111827",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "1.25rem 1rem",
              width: "130px",
              flexShrink: 0,
              textAlign: "center",
              transition: "border-color 0.2s",
              position: "relative"
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1e293b"}
            >
              <div style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #3b82f6, #6d28d9)",
                color: "white",
                borderRadius: "999px",
                width: "22px", height: "22px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.7rem", fontWeight: 700
              }}>{step.step}</div>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem", marginTop: "0.25rem" }}>{step.icon}</div>
              <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.4rem" }}>{step.title}</p>
              <p style={{ color: "#475569", fontSize: "0.72rem", lineHeight: 1.5 }}>{step.desc}</p>
            </div>

            {/* Arrow connector (not after last) */}
            {idx < roadmapSteps.length - 1 && (
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center", padding: "0 4px" }}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M0 6 H14 M14 6 L8 1 M14 6 L8 11" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
