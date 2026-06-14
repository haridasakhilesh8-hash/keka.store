import { Link } from "react-router-dom";
import { careerPaths } from "../data";

function PathCard({ path }) {
  return (
    <Link to="/career-paths" style={{ textDecoration: "none" }}>
      <div className="card" style={{ padding: "1.5rem", borderRadius: "12px", height: "100%", cursor: "pointer" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
          <div style={{
            width: "42px", height: "42px",
            background: `${path.color}18`,
            border: `1px solid ${path.color}30`,
            borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.3rem"
          }}>
            {path.icon}
          </div>
          <h3 className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem" }}>{path.title}</h3>
        </div>
        <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1rem" }}>{path.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {path.skills.map(skill => (
            <span key={skill} style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              color: "#64748b",
              borderRadius: "4px",
              padding: "0.2rem 0.55rem",
              fontSize: "0.72rem",
              fontWeight: 500
            }}>{skill}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function CareerPathCards({ limit }) {
  const items = limit ? careerPaths.slice(0, limit) : careerPaths;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "1rem"
    }}>
      {items.map(path => <PathCard key={path.id} path={path} />)}
    </div>
  );
}
