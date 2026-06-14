import { Link } from "react-router-dom";
import { stages } from "../data";

function StageCard({ stage }) {
  return (
    <Link to="/roadmaps" style={{ textDecoration: "none" }}>
      <div className="card" style={{ padding: "1.5rem", borderRadius: "12px", height: "100%", cursor: "pointer" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "2rem" }}>{stage.icon}</span>
          <span style={{
            background: "rgba(59,130,246,0.1)",
            color: "#60a5fa",
            borderRadius: "999px",
            padding: "0.2rem 0.65rem",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            border: "1px solid rgba(59,130,246,0.2)",
            whiteSpace: "nowrap"
          }}>{stage.tag}</span>
        </div>
        <h3 className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{stage.title}</h3>
        <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.65 }}>{stage.desc}</p>
      </div>
    </Link>
  );
}

export default function StageCards({ limit }) {
  const items = limit ? stages.slice(0, limit) : stages;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "1rem"
    }}>
      {items.map(stage => <StageCard key={stage.id} stage={stage} />)}
    </div>
  );
}
