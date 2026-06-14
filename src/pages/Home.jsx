import { Link } from "react-router-dom";
import { stages, interests, careerPaths, popularRoadmaps, roadmapIncludes } from "../data";

/* ─────────────────────────────────────────────────────────────
   BACKGROUND  — fixed dot grid + ambient glows
───────────────────────────────────────────────────────────── */
function PageBg() {
  return (
    <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(170deg,#070711 0%,#0C0A1E 55%,#07101A 100%)" }}/>
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)",
        backgroundSize:"38px 38px",
        maskImage:"radial-gradient(ellipse 90% 80% at 50% 10%,black 0%,transparent 75%)",
      }}/>
      {/* teal top-left */}
      <div style={{ position:"absolute", width:"800px", height:"800px", borderRadius:"50%", top:"-250px", left:"-200px",
        background:"radial-gradient(circle,rgba(0,229,176,0.06) 0%,transparent 65%)" }}/>
      {/* amber center-right */}
      <div style={{ position:"absolute", width:"600px", height:"600px", borderRadius:"50%", top:"30%", right:"-150px",
        background:"radial-gradient(circle,rgba(255,184,77,0.05) 0%,transparent 65%)" }}/>
      {/* rose bottom */}
      <div style={{ position:"absolute", width:"500px", height:"500px", borderRadius:"50%", bottom:"-100px", left:"30%",
        background:"radial-gradient(circle,rgba(255,94,126,0.04) 0%,transparent 65%)" }}/>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1 · HERO
───────────────────────────────────────────────────────────── */
function HeroVisual() {
  // SVG "clarity map" — nodes connected by curved paths
  const nodes = [
    { cx:80,  cy:60,  label:"Student",     color:"#00E5B0", r:8,  active:false },
    { cx:220, cy:40,  label:"Graduate",    color:"#00c4ff", r:8,  active:false },
    { cx:155, cy:140, label:"Developer",   color:"#FFB84D", r:10, active:true  },
    { cx:290, cy:170, label:"Senior Dev",  color:"#a78bfa", r:8,  active:false },
    { cx:100, cy:230, label:"Tech Lead",   color:"#FF5E7E", r:8,  active:false },
    { cx:240, cy:280, label:"Architect",   color:"#34d399", r:9,  active:false },
    { cx:145, cy:330, label:"Manager",     color:"#f59e0b", r:7,  active:false },
  ];
  const connections = [
    { x1:80,y1:60,  x2:155,y2:140 },
    { x1:220,y1:40, x2:155,y2:140 },
    { x1:155,y1:140,x2:290,y2:170 },
    { x1:155,y1:140,x2:100,y2:230 },
    { x1:290,y1:170,x2:240,y2:280 },
    { x1:100,y1:230,x2:240,y2:280 },
    { x1:240,y1:280,x2:145,y2:330 },
  ];
  const chips = [
    { x:175, y:95,  label:"React",        color:"#FFB84D" },
    { x:32,  y:150, label:"System Design",color:"#a78bfa" },
    { x:205, y:215, label:"Leadership",   color:"#FF5E7E" },
    { x:90,  y:295, label:"Strategy",     color:"#34d399" },
  ];

  return (
    <div style={{ position:"relative", width:"100%", maxWidth:"380px" }}>
      {/* Glow behind */}
      <div style={{ position:"absolute", inset:"-30px", borderRadius:"50%",
        background:"radial-gradient(ellipse at 50% 50%,rgba(0,229,176,0.08),transparent 70%)", zIndex:0 }}/>

      {/* Panel */}
      <div style={{
        position:"relative", zIndex:1,
        background:"rgba(12,10,30,0.82)",
        border:"1px solid rgba(255,255,255,0.08)",
        borderRadius:"20px", padding:"1.75rem",
        backdropFilter:"blur(24px)",
        boxShadow:"0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}>
        {/* Top bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.25rem" }}>
          <div>
            <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.85rem" }}>Career Clarity Map</p>
            <p style={{ color:"#3A3850", fontSize:"0.68rem", marginTop:"2px" }}>keka.store · your path, visualised</p>
          </div>
          <div style={{ display:"flex", gap:"5px" }}>
            {["#FF5E7E","#FFB84D","#00E5B0"].map(c=><div key={c} style={{width:"7px",height:"7px",borderRadius:"50%",background:c,opacity:0.6}}/>)}
          </div>
        </div>

        {/* SVG Map */}
        <svg viewBox="0 0 360 370" style={{ width:"100%", height:"auto", overflow:"visible" }}>
          <defs>
            <filter id="ng"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <filter id="ng2"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          {/* Connection lines */}
          {connections.map((c,i)=>(
            <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
              stroke="rgba(0,229,176,0.14)" strokeWidth="1.5" strokeDasharray="5 4"
              filter="url(#ng)"/>
          ))}

          {/* Nodes */}
          {nodes.map((n,i)=>(
            <g key={i} filter={n.active?"url(#ng2)":undefined}>
              {/* Pulse ring on active */}
              {n.active && <circle cx={n.cx} cy={n.cy} r={n.r+7} fill="none" stroke={n.color} strokeWidth="1" opacity="0.25"/>}
              {/* Outer ring */}
              <circle cx={n.cx} cy={n.cy} r={n.r+3} fill="none" stroke={n.color} strokeWidth="1" opacity={n.active?0.6:0.2}/>
              {/* Core */}
              <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.active?n.color:`${n.color}25`} stroke={n.color} strokeWidth={n.active?2:1}/>

              {/* Label below node */}
              <text x={n.cx} y={n.cy+n.r+14} textAnchor="middle"
                fill={n.active?n.color:"#6B6882"} fontSize="10" fontWeight={n.active?"700":"400"} fontFamily="Space Grotesk,sans-serif">
                {n.label}
              </text>
            </g>
          ))}

          {/* Skill chips as foreign objects */}
          {chips.map((ch,i)=>(
            <foreignObject key={i} x={ch.x-40} y={ch.y-10} width="90" height="22">
              <div style={{
                background:`${ch.color}12`, border:`1px solid ${ch.color}30`,
                borderRadius:"5px", padding:"2px 7px",
                fontSize:"9px", fontWeight:600, color:ch.color,
                whiteSpace:"nowrap", display:"inline-block", letterSpacing:"0.03em",
              }}>{ch.label}</div>
            </foreignObject>
          ))}

          {/* "You are here" callout */}
          <foreignObject x="158" y="115" width="100" height="22">
            <div style={{
              background:"#00E5B0", borderRadius:"5px", padding:"2px 7px",
              fontSize:"8px", fontWeight:800, color:"#070711", letterSpacing:"0.06em",
              boxShadow:"0 0 10px rgba(0,229,176,0.5)", whiteSpace:"nowrap",
            }}>YOU ARE HERE</div>
          </foreignObject>
        </svg>

        {/* Bottom milestone bar */}
        <div style={{ marginTop:"0.75rem", display:"flex", justifyContent:"space-between",
          background:"rgba(0,229,176,0.05)", border:"1px solid rgba(0,229,176,0.1)", borderRadius:"10px", padding:"0.75rem 1rem" }}>
          <div>
            <p style={{ color:"#3A3850", fontSize:"0.62rem", textTransform:"uppercase", letterSpacing:"0.06em" }}>Now</p>
            <p style={{ color:"#00E5B0", fontWeight:700, fontSize:"0.8rem", marginTop:"2px" }}>Developer</p>
          </div>
          <div style={{ width:"1px", background:"rgba(255,255,255,0.07)" }}/>
          <div style={{ textAlign:"right" }}>
            <p style={{ color:"#3A3850", fontSize:"0.62rem", textTransform:"uppercase", letterSpacing:"0.06em" }}>Next</p>
            <p style={{ color:"#FFB84D", fontWeight:700, fontSize:"0.8rem", marginTop:"2px" }}>Senior Dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid-split">

          {/* ── Copy ── */}
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", marginBottom:"2rem",
              background:"rgba(0,229,176,0.07)", border:"1px solid rgba(0,229,176,0.15)",
              borderRadius:"999px", padding:"0.4rem 1rem" }}>
              <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#00E5B0",
                boxShadow:"0 0 8px #00E5B0", display:"block", flexShrink:0 }}/>
              <span style={{ color:"#00E5B0", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase" }}>
                Tech Career Clarity Platform
              </span>
            </div>

            <h1 className="font-display" style={{
              fontSize:"clamp(2.4rem,5.5vw,4rem)",
              fontWeight:700, lineHeight:1.08, letterSpacing:"-0.03em",
              color:"#F8F7FF", marginBottom:"1.5rem",
            }}>
              Confused About<br/>
              Your Tech<br/>
              <span className="g-teal">Career Path?</span>
            </h1>

            <p style={{ color:"#6B6882", fontSize:"1.05rem", lineHeight:1.85, maxWidth:"430px", marginBottom:"2.5rem" }}>
              Keka Store helps you discover your interests, choose the right technology path,
              and follow a clear step-by-step roadmap — from student to senior engineer and beyond.
            </p>

            <div style={{ display:"flex", gap:"0.875rem", flexWrap:"wrap", marginBottom:"2.75rem" }}>
              <Link to="/career-paths" className="btn btn-teal">Find My Path →</Link>
              <Link to="/roadmaps" className="btn btn-outline">Explore Roadmaps</Link>
            </div>

            {/* Stats row */}
            <div style={{ display:"flex", gap:"2.5rem", paddingTop:"1.75rem", borderTop:"1px solid rgba(255,255,255,0.06)", flexWrap:"wrap" }}>
              {[["12+","Career Paths"],["8","Growth Stages"],["50+","Roadmaps"],["Free","Always"]].map(([v,l])=>(
                <div key={l}>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"1.4rem", lineHeight:1 }}>{v}</p>
                  <p style={{ color:"#3A3850", fontSize:"0.68rem", marginTop:"4px", letterSpacing:"0.05em", textTransform:"uppercase" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="hidden md:flex" style={{ justifyContent:"center" }}>
            <HeroVisual/>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   2 · WHY KEKA STORE
───────────────────────────────────────────────────────────── */
const storeItems = [
  { icon:"🗺️", title:"Career Roadmaps",        desc:"Step-by-step paths for every stage — from student to senior engineer.", accent:"#00E5B0" },
  { icon:"🧭", title:"Role Guidance",          desc:"Clear explanations of what each tech role actually does, day to day.",   accent:"#00c4ff" },
  { icon:"🧠", title:"Skill Store",            desc:"The exact skills to learn, mapped to your stage and target role.",       accent:"#FFB84D" },
  { icon:"🏗️", title:"Project Ideas",          desc:"Real portfolio projects that prove your skills to recruiters.",          accent:"#a78bfa" },
  { icon:"📜", title:"Certification Guidance", desc:"Which certifications matter for your path, and which to skip.",          accent:"#FF5E7E" },
  { icon:"📈", title:"Growth Paths",           desc:"What comes after this role — and how to get there with intent.",         accent:"#34d399" },
];

function WhyKekaStore() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1 }}>
      <div className="line-t"/>
      <div className="container">

        {/* Heading block */}
        <div style={{ textAlign:"center", maxWidth:"700px", margin:"0 auto 1.25rem" }}>
          <span className="s-eyebrow" style={{ justifyContent:"center" }}>The Name Behind The Mission</span>
          <h2 className="s-heading">Why "Keka Store"?</h2>
        </div>

        {/* Main copy — short and clear */}
        <div style={{ maxWidth:"680px", margin:"0 auto 3.5rem", textAlign:"center" }}>
          <p style={{ color:"#F8F7FF", fontSize:"1.2rem", lineHeight:1.7, fontWeight:600, marginBottom:"1.1rem" }}>
            Keka Store is not a shopping store.<br/>It is a storehouse of tech career clarity.
          </p>
          <p style={{ color:"var(--desc)", fontSize:"1rem", lineHeight:1.85 }}>
            Roadmaps, role guidance, skills, projects, certifications, interview prep, and growth paths —
            all stored in one clear place for students, graduates, developers, and career switchers.
          </p>
        </div>

        {/* Connected map — center node radiating to 6 stored items */}
        <div style={{ position:"relative" }}>

          {/* Center node — desktop only, decorative */}
          <div className="hidden md:block" style={{
            position:"absolute", top:"-2.25rem", left:"50%", transform:"translateX(-50%)",
            width:"52px", height:"52px", borderRadius:"50%", zIndex:2,
            background:"#0C0A1E", border:"2px solid rgba(0,229,176,0.35)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 0 28px rgba(0,229,176,0.18)",
          }}>
            <span style={{ fontSize:"1.35rem" }}>📦</span>
          </div>

          {/* Connector lines from center down to grid — decorative */}
          <svg className="hidden md:block" style={{ position:"absolute", top:"-2.25rem", left:0, width:"100%", height:"60px", overflow:"visible", zIndex:1 }}>
            <line x1="50%" y1="26" x2="16.6%" y2="60" stroke="rgba(0,229,176,0.14)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <line x1="50%" y1="26" x2="50%"   y2="60" stroke="rgba(0,229,176,0.14)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <line x1="50%" y1="26" x2="83.3%" y2="60" stroke="rgba(0,229,176,0.14)" strokeWidth="1.5" strokeDasharray="4 4"/>
          </svg>

          <div style={{
            display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1px",
            background:"rgba(255,255,255,0.05)", borderRadius:"20px", overflow:"hidden",
            border:"1px solid rgba(255,255,255,0.07)", paddingTop:"1.5rem",
          }}>
            {storeItems.map((item) => (
              <div key={item.title}
                style={{ padding:"1.75rem 1.625rem", background:"#0C0A1E", position:"relative", overflow:"hidden", transition:"background 0.2s", cursor:"default" }}
                onMouseEnter={e => { e.currentTarget.style.background="#131128"; e.currentTarget.querySelector(".wi").style.transform="scale(1.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="#0C0A1E"; e.currentTarget.querySelector(".wi").style.transform="scale(1)"; }}
              >
                {/* Top accent line */}
                <div style={{ position:"absolute", top:0, left:"1.625rem", right:"1.625rem", height:"2px",
                  background:`linear-gradient(90deg,${item.accent},transparent)`, opacity:0.6 }}/>

                {/* Node dot connecting to the "store" concept */}
                <div style={{ position:"absolute", top:"1.625rem", right:"1.625rem", width:"6px", height:"6px",
                  borderRadius:"50%", background:item.accent, boxShadow:`0 0 8px ${item.accent}`, opacity:0.55 }}/>

                <span className="wi" style={{ fontSize:"1.6rem", display:"block", marginBottom:"0.875rem", transition:"transform 0.22s ease" }}>{item.icon}</span>
                <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.95rem", marginBottom:"0.5rem" }}>{item.title}</p>
                <p style={{ color:"var(--desc)", fontSize:"0.85rem", lineHeight:1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   3 · FOUNDER NOTE (short — full story lives on /about)
───────────────────────────────────────────────────────────── */
function FounderNote() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1 }}>
      <div className="line-a"/>
      <div className="container">
        <div style={{
          maxWidth:"760px", margin:"0 auto",
          background:"linear-gradient(135deg,rgba(19,17,40,0.9),rgba(26,23,48,0.9))",
          border:"1px solid rgba(255,255,255,0.08)",
          borderRadius:"20px", padding:"2.25rem",
          display:"flex", gap:"1.5rem", alignItems:"flex-start", flexWrap:"wrap",
        }}>
          {/* Avatar */}
          <div style={{
            width:"48px", height:"48px", borderRadius:"50%", flexShrink:0,
            background:"linear-gradient(135deg,#00E5B0,#00c4ff)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:"1.25rem", fontWeight:700, color:"#070711", fontFamily:"Space Grotesk,sans-serif",
          }}>K</div>

          {/* Copy */}
          <div style={{ flex:1, minWidth:"240px" }}>
            <span className="s-eyebrow s-eyebrow-a" style={{ marginBottom:"0.6rem" }}>Founder Note</span>
            <h2 className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"clamp(1.3rem,2.4vw,1.7rem)", marginBottom:"0.875rem", letterSpacing:"-0.02em" }}>
              Why I Built Keka Store
            </h2>
            <p style={{ color:"var(--t2)", fontSize:"1rem", lineHeight:1.85, marginBottom:"1rem" }}>
              I faced career confusion after engineering. I did not know which tech path to choose.
              Keka Store is built so students, graduates, and professionals can get clarity before wasting time.
            </p>
            <Link to="/about" style={{ color:"#00E5B0", fontWeight:700, fontSize:"0.85rem", textDecoration:"none", letterSpacing:"0.02em" }}>
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4 · FIND MY PATH — combined 3-step flow
───────────────────────────────────────────────────────────── */
function StepHeader({ num, accent, title, sub }) {
  return (
    <div style={{ display:"flex", gap:"1.125rem", alignItems:"flex-start", marginBottom:"1.75rem", flexWrap:"wrap" }}>
      <div style={{
        width:"42px", height:"42px", borderRadius:"50%", flexShrink:0,
        background:`${accent}14`, border:`2px solid ${accent}45`,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:"0.95rem", color:accent,
      }}>{num}</div>
      <div style={{ flex:1, minWidth:"220px" }}>
        <h3 className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"1.2rem", marginBottom:"0.4rem", letterSpacing:"-0.01em" }}>
          {title}
        </h3>
        <p style={{ color:"var(--desc)", fontSize:"0.92rem", lineHeight:1.7, maxWidth:"540px" }}>{sub}</p>
      </div>
    </div>
  );
}

function FindMyPath() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1 }}>
      <div className="line-a"/>
      <div className="container">

        {/* Section heading */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <span className="s-eyebrow s-eyebrow-a" style={{ justifyContent:"center" }}>Get Started</span>
          <h2 className="s-heading">Find My Path</h2>
          <p className="s-sub" style={{ maxWidth:"560px", margin:"0.875rem auto 0" }}>
            Three quick steps to go from "I don't know where to start" to a clear, personalised roadmap.
          </p>
        </div>

        {/* ── Step 1 — Stage ── */}
        <div style={{ marginBottom:"4rem" }}>
          <StepHeader num="1" accent="#00E5B0" title="Choose your current stage"
            sub="Every stage has its own roadmap. Pick where you are today and we'll show you exactly what comes next." />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1rem" }}>
            {stages.map((s) => (
              <Link key={s.id} to="/roadmaps" style={{ textDecoration:"none" }}>
                <div
                  style={{
                    background:"#0C0A1E", border:"1px solid rgba(255,255,255,0.07)",
                    borderRadius:"16px", padding:"1.75rem", cursor:"pointer",
                    position:"relative", overflow:"hidden", height:"100%",
                    transition:"background 0.2s, border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background="#131128";
                    e.currentTarget.style.borderColor=`${s.accent}30`;
                    e.currentTarget.style.transform="translateY(-2px)";
                    e.currentTarget.querySelector(".si").style.transform="scale(1.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background="#0C0A1E";
                    e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform="none";
                    e.currentTarget.querySelector(".si").style.transform="scale(1)";
                  }}
                >
                  {/* Left accent stripe */}
                  <div style={{ position:"absolute", left:0, top:"1.5rem", bottom:"1.5rem", width:"3px",
                    background:`linear-gradient(to bottom,${s.accent},transparent)`, borderRadius:"0 2px 2px 0" }}/>

                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
                    <span className="si" style={{ fontSize:"1.6rem", transition:"transform 0.22s ease", display:"block" }}>{s.icon}</span>
                    <span style={{ fontSize:"0.7rem", fontWeight:700, color:s.accent, letterSpacing:"0.05em",
                      background:`${s.accent}12`, border:`1px solid ${s.accent}25`, borderRadius:"999px", padding:"0.25rem 0.7rem" }}>{s.tag}</span>
                  </div>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.975rem", marginBottom:"0.5rem" }}>{s.title}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.83rem", lineHeight:1.75 }}>{s.desc}</p>
                  <p style={{ color:s.accent, fontSize:"0.72rem", fontWeight:700, marginTop:"1.1rem", letterSpacing:"0.04em" }}>
                    VIEW ROADMAP →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Step 2 — Interest ── */}
        <div style={{ marginBottom:"4rem" }}>
          <StepHeader num="2" accent="#FFB84D" title="Choose your interest"
            sub="What genuinely draws you in — not what sounds impressive. Interest is what keeps you consistent." />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:"1rem" }}>
            {interests.map((item) => (
              <Link key={item.id} to="/career-paths" style={{ textDecoration:"none" }}>
                <div style={{
                  background:"#0C0A1E", border:"1px solid rgba(255,255,255,0.07)",
                  borderRadius:"16px", padding:"1.75rem", cursor:"pointer", height:"100%",
                  transition:"all 0.22s ease", position:"relative", overflow:"hidden",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background="#131128";
                    e.currentTarget.style.borderColor=`${item.accent}30`;
                    e.currentTarget.style.transform="translateY(-2px)";
                    e.currentTarget.style.boxShadow=`0 8px 28px ${item.accent}12`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background="#0C0A1E";
                    e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform="none";
                    e.currentTarget.style.boxShadow="none";
                  }}
                >
                  {/* Glow dot */}
                  <div style={{ position:"absolute", top:"16px", right:"16px", width:"6px", height:"6px",
                    borderRadius:"50%", background:item.accent, opacity:0.55, boxShadow:`0 0 8px ${item.accent}` }}/>

                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{item.icon}</div>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"1.05rem", marginBottom:"0.5rem" }}>{item.title}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.83rem", lineHeight:1.75, marginBottom:"1.1rem" }}>{item.desc}</p>

                  {/* Suggested path chips */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {item.paths.map(p=>(
                      <span key={p} style={{ fontSize:"0.7rem", fontWeight:500, padding:"0.25rem 0.65rem",
                        borderRadius:"5px", background:`${item.accent}10`, border:`1px solid ${item.accent}22`, color:item.accent }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Step 3 — Career direction ── */}
        <div>
          <StepHeader num="3" accent="#FF5E7E" title="Choose your career direction"
            sub="12 career tracks, each mapped to real job roles and the skills employers actually look for." />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem" }}>
            {careerPaths.map((p) => (
              <Link key={p.id} to="/career-paths" style={{ textDecoration:"none" }}>
                <div style={{
                  background:"#0C0A1E", border:"1px solid rgba(255,255,255,0.07)",
                  borderRadius:"14px", padding:"1.5rem 1.375rem", cursor:"pointer", height:"100%",
                  transition:"all 0.22s", position:"relative", overflow:"hidden",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor=`${p.accent}35`;
                    e.currentTarget.style.background="#131128";
                    e.currentTarget.style.transform="translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";
                    e.currentTarget.style.background="#0C0A1E";
                    e.currentTarget.style.transform="none";
                  }}
                >
                  {/* Corner dot */}
                  <div style={{ position:"absolute", top:"12px", right:"12px", width:"5px", height:"5px",
                    borderRadius:"50%", background:p.accent, boxShadow:`0 0 6px ${p.accent}`, opacity:0.6 }}/>

                  <div style={{ fontSize:"1.5rem", marginBottom:"0.85rem" }}>{p.icon}</div>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.925rem", marginBottom:"0.5rem" }}>{p.title}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.8rem", lineHeight:1.7, marginBottom:"0.9rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                    {p.skills.slice(0,2).map(sk=>(
                      <span key={sk} style={{ fontSize:"0.68rem", padding:"0.2rem 0.55rem",
                        borderRadius:"4px", background:`${p.accent}10`, border:`1px solid ${p.accent}22`, color:p.accent }}>
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
            <Link to="/career-paths" className="btn btn-outline">Explore All 12 Career Paths →</Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5 · POPULAR ROADMAPS
───────────────────────────────────────────────────────────── */
function PopularRoadmaps() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1, background:"rgba(12,10,30,0.5)" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"1rem", marginBottom:"3rem" }}>
          <div>
            <span className="s-eyebrow">Most Followed</span>
            <h2 className="s-heading">Popular roadmaps</h2>
            <p className="s-sub" style={{ maxWidth:"440px" }}>Role-specific, week-by-week plans to help you get started with confidence.</p>
          </div>
          <Link to="/roadmaps" className="btn btn-outline" style={{ fontSize:"0.875rem" }}>All Roadmaps →</Link>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1rem" }}>
          {popularRoadmaps.map((r) => (
            <Link key={r.title} to="/roadmaps" style={{ textDecoration:"none" }}>
              <div style={{
                background:"#0C0A1E", border:"1px solid rgba(255,255,255,0.07)",
                borderRadius:"16px", padding:"1.5rem", cursor:"pointer",
                transition:"all 0.22s", display:"flex", gap:"1rem", alignItems:"flex-start",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=`${r.accent}30`; e.currentTarget.style.background="#131128"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.background="#0C0A1E"; e.currentTarget.style.transform="none"; }}
              >
                <div style={{ width:"44px", height:"44px", borderRadius:"12px", flexShrink:0,
                  background:`${r.accent}12`, border:`1px solid ${r.accent}25`,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem" }}>
                  {r.icon}
                </div>
                <div style={{ flex:1 }}>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.95rem", marginBottom:"0.35rem" }}>{r.title}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.8rem", marginBottom:"0.7rem" }}>{r.stage}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                    <span style={{ fontSize:"0.7rem", color:r.accent, fontWeight:600,
                      background:`${r.accent}10`, border:`1px solid ${r.accent}22`,
                      borderRadius:"5px", padding:"0.2rem 0.55rem" }}>
                      {r.weeks} weeks
                    </span>
                    <span style={{ color:"var(--t3)", fontSize:"0.72rem" }}>Structured · Free</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6 · WHAT EACH ROADMAP INCLUDES
───────────────────────────────────────────────────────────── */
function RoadmapIncludes() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1 }}>
      <div className="line-r"/>
      <div className="container">
        <div className="grid-split-wide-r">

          {/* Left */}
          <div>
            <span className="s-eyebrow s-eyebrow-r">Inside Every Roadmap</span>
            <h2 className="s-heading" style={{ marginBottom:"1rem" }}>
              Not just a link list.<br/>
              <span className="g-warm">A complete system.</span>
            </h2>
            <p className="s-sub">
              Every roadmap on Keka Store is structured around what actually gets you hired and helps you grow — not what looks impressive on a syllabus.
            </p>
            <Link to="/roadmaps" className="btn btn-teal" style={{ marginTop:"2rem" }}>Start a Roadmap →</Link>
          </div>

          {/* Right — feature rows */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1px",
            background:"rgba(255,255,255,0.05)", borderRadius:"16px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)" }}>
            {roadmapIncludes.map((item) => (
              <div key={item.title} style={{
                display:"flex", gap:"1.1rem", padding:"1.375rem 1.5rem",
                background:"#0C0A1E", alignItems:"flex-start", transition:"background 0.18s",
              }}
                onMouseEnter={e => e.currentTarget.style.background="#131128"}
                onMouseLeave={e => e.currentTarget.style.background="#0C0A1E"}
              >
                <div style={{ width:"38px", height:"38px", borderRadius:"9px", flexShrink:0,
                  background:`${item.accent}10`, border:`1px solid ${item.accent}22`,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.9rem", marginBottom:"0.3rem" }}>{item.title}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.83rem", lineHeight:1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   7 · GROWTH PATH TIMELINE
───────────────────────────────────────────────────────────── */
function GrowthPath() {
  const track = [
    { title:"Developer",        sub:"Write code · Ship features · Learn fast",          color:"#00E5B0", n:"01" },
    { title:"Senior Developer", sub:"Design systems · Mentor · Own quality",            color:"#FFB84D", n:"02" },
    { title:"Tech Lead",        sub:"Architect · Cross-team · Align tech + business",   color:"#a78bfa", n:"03" },
    { title:"Architect /\nManager", sub:"Strategy · Culture · Scale the team",          color:"#FF5E7E", n:"04" },
  ];

  return (
    <section className="section" style={{ position:"relative", zIndex:1 }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <span className="s-eyebrow" style={{ justifyContent:"center" }}>The Growth Track</span>
          <h2 className="s-heading">Developer → Senior → Lead → Architect</h2>
          <p className="s-sub" style={{ maxWidth:"500px", margin:"0.875rem auto 0" }}>
            Most platforms stop at the first job. Keka Store maps your entire career — every promotion, every transition, every level.
          </p>
        </div>

        {/* Desktop horizontal track */}
        <div style={{ position:"relative", padding:"2rem 0" }} className="hidden md:block">
          {/* Spine line */}
          <div style={{ position:"absolute", top:"50%", left:"8%", right:"8%", height:"2px",
            background:"linear-gradient(90deg,#00E5B0,#FFB84D,#a78bfa,#FF5E7E)", opacity:0.25,
            transform:"translateY(-50%)", zIndex:0 }}/>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", position:"relative", zIndex:1 }}>
            {track.map((t) => (
              <div key={t.title} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                {/* Node */}
                <div style={{ width:"64px", height:"64px", borderRadius:"50%", marginBottom:"1.25rem",
                  background:`${t.color}12`, border:`2px solid ${t.color}45`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow:`0 0 24px ${t.color}20`,
                  transition:"transform 0.22s, box-shadow 0.22s", cursor:"default",
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.1)"; e.currentTarget.style.boxShadow=`0 0 36px ${t.color}40`; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow=`0 0 24px ${t.color}20`; }}
                >
                  <span className="font-display" style={{ color:t.color, fontWeight:700, fontSize:"0.78rem" }}>{t.n}</span>
                </div>
                <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.95rem", marginBottom:"0.4rem", whiteSpace:"pre-line" }}>{t.title}</p>
                <p style={{ color:"var(--desc)", fontSize:"0.8rem", lineHeight:1.7 }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden" style={{ display:"flex", flexDirection:"column", gap:"0" }}>
          {track.map((t,i) => (
            <div key={t.title}>
              <div style={{ display:"flex", gap:"1rem", padding:"1.25rem 0", alignItems:"flex-start" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", flexShrink:0,
                  background:`${t.color}12`, border:`2px solid ${t.color}40`,
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span className="font-display" style={{ color:t.color, fontWeight:700, fontSize:"0.72rem" }}>{t.n}</span>
                </div>
                <div>
                  <p className="font-display" style={{ color:"#F8F7FF", fontWeight:700, fontSize:"0.9rem", marginBottom:"0.3rem" }}>{t.title.replace("\n"," / ")}</p>
                  <p style={{ color:"var(--desc)", fontSize:"0.8rem", lineHeight:1.7 }}>{t.sub}</p>
                </div>
              </div>
              {i < track.length-1 && (
                <div style={{ marginLeft:"22px", width:"2px", height:"24px",
                  background:`linear-gradient(to bottom,${track[i].color}40,${track[i+1].color}40)` }}/>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign:"center", marginTop:"3rem" }}>
          <Link to="/roadmaps" className="btn btn-teal">Map My Growth Path →</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   8 · FINAL CTA
───────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1, paddingBottom:"5rem" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{
          position:"relative", overflow:"hidden", borderRadius:"24px",
          padding:"clamp(3rem,7vw,6rem) clamp(2rem,5vw,5rem)",
          textAlign:"center",
          background:"#0C0A1E",
          border:"1px solid rgba(0,229,176,0.1)",
        }}>
          {/* Radial glows */}
          <div style={{ position:"absolute", width:"500px", height:"500px", borderRadius:"50%", top:"-150px", left:"-100px",
            background:"radial-gradient(circle,rgba(0,229,176,0.07) 0%,transparent 65%)", pointerEvents:"none" }}/>
          <div style={{ position:"absolute", width:"400px", height:"400px", borderRadius:"50%", bottom:"-120px", right:"-80px",
            background:"radial-gradient(circle,rgba(255,184,77,0.06) 0%,transparent 65%)", pointerEvents:"none" }}/>
          {/* Dot texture */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)",
            backgroundSize:"30px 30px",
            maskImage:"radial-gradient(ellipse 55% 55% at 50% 50%,black 0%,transparent 100%)" }}/>

          <div style={{ position:"relative", zIndex:1 }}>
            {/* Decoration */}
            <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>🧭</div>

            <h2 className="font-display" style={{
              fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:700,
              color:"#F8F7FF", lineHeight:1.12, letterSpacing:"-0.03em",
              marginBottom:"1.25rem",
            }}>
              Get clarity.<br/>
              <span className="g-teal">Choose your path.</span><br/>
              Start growing.
            </h2>

            <p style={{ color:"var(--desc)", fontSize:"1.05rem", maxWidth:"440px", margin:"0 auto 2.75rem", lineHeight:1.85 }}>
              Stop wondering what to learn next. Start following a roadmap built for exactly where you are.
            </p>

            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link to="/career-paths" className="btn btn-teal" style={{ fontSize:"1rem", padding:"0.9rem 2.25rem" }}>
                Find My Path →
              </Link>
              <Link to="/roadmaps" className="btn btn-outline" style={{ fontSize:"1rem", padding:"0.9rem 2.25rem" }}>
                Explore Roadmaps
              </Link>
            </div>

            <p style={{ color:"var(--t4)", fontSize:"0.72rem", marginTop:"2rem", letterSpacing:"0.06em", textTransform:"uppercase" }}>
              Free · No Login · No Paywall · Always Updated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ position:"relative" }}>
      <PageBg/>
      <Hero/>
      <WhyKekaStore/>
      <FounderNote/>
      <FindMyPath/>
      <PopularRoadmaps/>
      <RoadmapIncludes/>
      <GrowthPath/>
      <FinalCTA/>
    </div>
  );
}
