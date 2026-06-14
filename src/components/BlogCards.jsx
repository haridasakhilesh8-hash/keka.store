import { Link } from "react-router-dom";
import { blogPosts } from "../data";

function BlogCard({ post }) {
  return (
    <Link to="/blog" style={{ textDecoration: "none" }}>
      <article className="card" style={{ padding: "1.5rem", borderRadius: "12px", height: "100%", cursor: "pointer" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span style={{
            background: `${post.color}18`,
            color: post.color,
            border: `1px solid ${post.color}30`,
            borderRadius: "999px",
            padding: "0.2rem 0.75rem",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.04em"
          }}>{post.tag}</span>
          <span style={{ color: "#475569", fontSize: "0.75rem" }}>{post.readTime}</span>
        </div>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.65rem" }}>{post.title}</h3>
        <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1rem" }}>{post.desc}</p>
        <p style={{ color: "#475569", fontSize: "0.75rem" }}>{post.date}</p>
      </article>
    </Link>
  );
}

export default function BlogCards({ limit }) {
  const items = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "1rem"
    }}>
      {items.map(post => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}
