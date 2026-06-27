import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();
  const isRoadmaps              = pathname.startsWith("/roadmaps");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      transition: "background 0.3s, border-color 0.3s",
      background: isRoadmaps
        ? "rgba(7,7,17,0.97)"
        : scrolled ? "rgba(7,7,17,0.9)" : "transparent",
      backdropFilter: (isRoadmaps || scrolled) ? "blur(20px)" : "none",
      borderBottom: (isRoadmaps || scrolled)
        ? "1px solid rgba(255,255,255,0.07)"
        : "1px solid transparent",
    }}>
      <div className="container" style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height: isRoadmaps ? "56px" : "68px",
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"10px" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="url(#lg)" />
            <path d="M8 20 L14 8 L20 20" stroke="#070711" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="14" cy="20" r="2" fill="#070711"/>
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E5B0"/>
                <stop offset="1" stopColor="#00a8cc"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:"1.05rem", color:"#F8F7FF", letterSpacing:"-0.01em" }}>
            keka<span style={{ color:"#00E5B0" }}>.store</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems:"center", gap:"1.75rem" }}>
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"}
              style={({ isActive }) => ({
                color: isActive ? "#00E5B0" : "#B8B6CC",
                fontWeight: isActive ? 600 : 400,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "color 0.18s",
              })}
              onMouseEnter={e => { e.currentTarget.style.color = "#F8F7FF"; }}
              onMouseLeave={e => { e.currentTarget.style.color = e.currentTarget.classList.contains("active") ? "#00E5B0" : "#B8B6CC"; }}
            >{label}</NavLink>
          ))}
          <Link to="/roadmaps" className="btn btn-teal" style={{ fontSize:"0.85rem", padding:"0.55rem 1.25rem", borderRadius:"8px" }}>
            Start Roadmap
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background:"none", border:"none", cursor:"pointer", padding:"8px", display:"flex", flexDirection:"column", gap:"5px" }}
          aria-label="Menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:"block", width:"22px", height:"2px", background:"#B8B6CC",
              borderRadius:"2px", transition:"all 0.25s",
              transform: open ? (i===0 ? "rotate(45deg) translateY(7px)" : i===2 ? "rotate(-45deg) translateY(-7px)" : "scaleX(0)") : "none",
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow:"hidden", maxHeight: open ? "420px" : "0",
        transition:"max-height 0.3s ease",
        background:"rgba(7,7,17,0.97)", backdropFilter:"blur(20px)",
        borderBottom: open ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}>
        <div className="container" style={{ paddingTop:"1rem", paddingBottom:"1.5rem", display:"flex", flexDirection:"column", gap:"2px" }}>
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to==="/"} onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#00E5B0" : "#B8B6CC",
                fontWeight: isActive ? 600 : 400,
                fontSize:"1rem", textDecoration:"none",
                padding:"0.7rem 0", borderBottom:"1px solid rgba(255,255,255,0.05)", display:"block",
              })}>{label}</NavLink>
          ))}
          <Link to="/roadmaps" onClick={() => setOpen(false)} className="btn btn-teal"
            style={{ marginTop:"1rem", justifyContent:"center", fontSize:"0.925rem" }}>
            Start Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}
