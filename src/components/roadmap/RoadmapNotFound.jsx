import { Link } from "react-router-dom";
import C from "./theme";

export default function RoadmapNotFound() {
  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "4rem",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            margin: "0 auto 1.25rem",
          }}
        >
          🗺️
        </div>
        <h1
          style={{
            fontFamily: "Space Grotesk,sans-serif",
            fontWeight: 700,
            fontSize: "1.4rem",
            color: C.t1,
            marginBottom: "0.6rem",
          }}
        >
          Roadmap not found
        </h1>
        <p style={{ color: C.muted, fontSize: "0.9rem", marginBottom: "1.75rem", maxWidth: "320px" }}>
          We couldn't find a roadmap at this address. It may have moved or doesn't exist yet.
        </p>
        <Link
          to="/roadmaps"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: C.teal,
            color: "#070711",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "0.7rem 1.5rem",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          ← Back to Roadmaps
        </Link>
      </div>
    </div>
  );
}
