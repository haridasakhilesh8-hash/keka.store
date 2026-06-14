import { Link } from "react-router-dom";

const COLS = [
  { h:"Platform", links:[{l:"All Roadmaps",to:"/roadmaps"},{l:"Career Paths",to:"/career-paths"},{l:"Blog",to:"/blog"}]},
  { h:"Company",  links:[{l:"About",to:"/about"},{l:"Contact",to:"/contact"}]},
  { h:"Top Paths",links:[{l:"Frontend",to:"/career-paths"},{l:"Backend",to:"/career-paths"},{l:"AI Engineer",to:"/career-paths"},{l:"DevOps",to:"/career-paths"}]},
];

export default function Footer() {
  return (
    <footer style={{ background:"#04040e", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div className="container" style={{ padding:"4rem 1.5rem 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.8fr repeat(3,1fr)", gap:"2.5rem", marginBottom:"3rem" }}>
          <div>
            <Link to="/" style={{ textDecoration:"none", display:"inline-flex", alignItems:"center", gap:"9px", marginBottom:"1rem" }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="url(#flg)"/>
                <path d="M8 20 L14 8 L20 20" stroke="#070711" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="14" cy="20" r="2" fill="#070711"/>
                <defs><linearGradient id="flg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#00E5B0"/><stop offset="1" stopColor="#00a8cc"/></linearGradient></defs>
              </svg>
              <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, color:"#F8F7FF", fontSize:"0.975rem" }}>
                keka<span style={{color:"#00E5B0"}}>.store</span>
              </span>
            </Link>
            <p style={{ color:"#3D3B52", fontSize:"0.85rem", lineHeight:1.75, maxWidth:"220px" }}>
              Clear career roadmaps for every tech stage — from fresher to tech lead.
            </p>
            <p style={{ color:"#00E5B0", fontSize:"0.75rem", fontWeight:600, marginTop:"1.25rem", letterSpacing:"0.04em" }}>
              FREE · NO LOGIN · ALWAYS UPDATED
            </p>
          </div>
          {COLS.map(col => (
            <div key={col.h}>
              <p style={{ color:"#F8F7FF", fontWeight:600, fontSize:"0.75rem", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"1.1rem" }}>{col.h}</p>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.65rem" }}>
                {col.links.map(({l,to}) => (
                  <li key={l}>
                    <Link to={to} style={{ color:"#3D3B52", fontSize:"0.875rem", textDecoration:"none", transition:"color 0.18s" }}
                      onMouseEnter={e=>e.target.style.color="#B8B6CC"}
                      onMouseLeave={e=>e.target.style.color="#3D3B52"}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"1.5rem", display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"0.5rem" }}>
          <p style={{ color:"#2a2840", fontSize:"0.78rem" }}>© 2025 keka.store · Built for builders.</p>
          <p style={{ color:"#2a2840", fontSize:"0.78rem" }}>Free forever · No account required</p>
        </div>
      </div>
    </footer>
  );
}
