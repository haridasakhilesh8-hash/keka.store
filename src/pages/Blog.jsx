import BlogCards from "../components/BlogCards";
import { blogPosts } from "../data";

const tags = ["All", "Career", "Paths", "Roadmap", "Career Switch", "Growth", "AEM"];

export default function Blog() {
  const featured = blogPosts[0];

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }} className="hero-bg">
        <div className="container">
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Insights & Guides</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: "1rem" }}>
            The Keka <span className="gradient-text">Blog</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Practical, no-fluff writing on careers, roadmaps, and navigating the tech industry.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding: "2.5rem 0", borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <p style={{ color: "#475569", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>Featured Post</p>
          <div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.08))",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            cursor: "pointer"
          }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{
                background: `${featured.color}18`,
                color: featured.color,
                border: `1px solid ${featured.color}30`,
                borderRadius: "999px",
                padding: "0.2rem 0.75rem",
                fontSize: "0.72rem",
                fontWeight: 600,
              }}>{featured.tag}</span>
              <span style={{ color: "#475569", fontSize: "0.8rem" }}>{featured.date} · {featured.readTime}</span>
            </div>
            <h2 className="font-display" style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
              {featured.title}
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px" }}>{featured.desc}</p>
          </div>
        </div>
      </section>

      {/* Filter tags */}
      <section style={{ padding: "1rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {tags.map(tag => (
              <button key={tag} style={{
                background: tag === "All" ? "rgba(59,130,246,0.15)" : "transparent",
                color: tag === "All" ? "#60a5fa" : "#64748b",
                border: tag === "All" ? "1px solid rgba(59,130,246,0.35)" : "1px solid #1e293b",
                borderRadius: "999px",
                padding: "0.35rem 0.9rem",
                fontSize: "0.82rem",
                fontWeight: 500,
                cursor: "pointer"
              }}>{tag}</button>
            ))}
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <BlogCards />
        </div>
      </section>
    </>
  );
}
