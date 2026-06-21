import { Link } from "react-router-dom";

const COLS = [
  {
    h:"Navigate",
    links:[
      { l:"Roadmaps",      to:"/roadmaps" },
      { l:"Growth Paths",  to:"/roadmaps" },
    ],
  },
  {
    h:"Company",
    links:[
      { l:"About",          to:"/about" },
      { l:"Contact",        to:"/contact" },
    ],
  },
  {
    h:"Legal",
    links:[
      { l:"Privacy Policy", to:"/contact" },
      { l:"Terms of Use",   to:"/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ position:"relative", background:"#04040e",
      borderTop:"1px solid rgba(255,255,255,0.07)", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:"500px", height:"280px", borderRadius:"50%",
        top:"-140px", left:"50%", transform:"translateX(-50%)", pointerEvents:"none",
        background:"radial-gradient(circle,rgba(0,229,176,0.05) 0%,transparent 70%)" }}/>

      <div className="container" style={{ position:"relative", padding:"3.5rem 1.5rem 2.25rem" }}>
        <div className="footer-grid" style={{ marginBottom:"2.5rem" }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration:"none", display:"inline-flex",
              alignItems:"center", gap:"9px", marginBottom:"0.875rem" }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="url(#flg)"/>
                <path d="M8 20 L14 8 L20 20" stroke="#070711" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="14" cy="20" r="2" fill="#070711"/>
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E5B0"/><stop offset="1" stopColor="#00a8cc"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700,
                color:"#F8F7FF", fontSize:"1rem" }}>
                Keka<span style={{ color:"#00E5B0" }}> Store</span>
              </span>
            </Link>

            <p style={{ color:"#00E5B0", fontSize:"0.8rem", fontWeight:600,
              marginBottom:"0.75rem", letterSpacing:"0.01em" }}>
              A storehouse of tech career clarity.
            </p>
            <p style={{ color:"#6B6882", fontSize:"0.85rem", lineHeight:1.75, maxWidth:"260px" }}>
              Helping tech learners find the right path and grow with confidence.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.h}>
              <p style={{ color:"#F8F7FF", fontWeight:600, fontSize:"0.72rem",
                letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"1rem" }}>
                {col.h}
              </p>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.65rem" }}>
                {col.links.map(({ l, to }) => (
                  <li key={l}>
                    <Link to={to} style={{ color:"#6B6882", fontSize:"0.875rem",
                      textDecoration:"none", transition:"color 0.18s" }}
                      onMouseEnter={e => e.target.style.color = "#B8B6CC"}
                      onMouseLeave={e => e.target.style.color = "#6B6882"}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:"1.375rem",
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem" }}>
          <p style={{ color:"#3A3850", fontSize:"0.78rem" }}>
            © 2026 Keka Store. Built to give tech careers direction.
          </p>
          <p style={{ color:"#3A3850", fontSize:"0.78rem" }}>Free · No login required</p>
        </div>
      </div>
    </footer>
  );
}
