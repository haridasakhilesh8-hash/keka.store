import { Link } from "react-router-dom";

/* ── tokens ───────────────────────────────────────────────── */
const C = {
  bg:"#070711", bg2:"#0C0A1E", surface:"#131128",
  border:"rgba(255,255,255,0.07)", borderT:"rgba(0,229,176,0.18)",
  teal:"#00E5B0", amber:"#FFB84D", rose:"#FF5E7E",
  t1:"#F8F7FF", t2:"#B8B6CC", desc:"#9D9AB8", muted:"#3A3850",
};

/* ── data ─────────────────────────────────────────────────── */
const WHO = [
  { icon:"🎓", label:"Student",            sub:"Choosing a tech career direction",  accent:"#00E5B0", slug:"student" },
  { icon:"🌱", label:"Graduate / Fresher", sub:"Landing your first developer role", accent:"#00c4ff", slug:"graduate-fresher" },
  { icon:"💻", label:"Junior Developer",   sub:"Growing from 0–2 years",            accent:"#60a5fa", slug:"junior-developer" },
  { icon:"✅", label:"Tester / QA",        sub:"Moving into automation & quality",   accent:"#34d399", slug:"tester-qa" },
  { icon:"⚡", label:"Working Developer",  sub:"Levelling up at 3–5 years",         accent:"#FFB84D", slug:"working-developer" },
  { icon:"🏆", label:"Senior Developer",   sub:"Moving toward leadership",           accent:"#a78bfa", slug:"senior-developer" },
  { icon:"🎯", label:"Tech Lead",          sub:"Architecture & people leadership",   accent:"#FF5E7E", slug:"tech-lead" },
  { icon:"🔄", label:"Career Switcher",    sub:"Entering tech from another field",   accent:"#f59e0b", slug:"career-switcher" },
];

const DIRECTIONS = [
  { icon:"🎨", label:"Frontend",          accent:"#FFB84D", to:"/roadmaps/frontend-developer"      },
  { icon:"⚙️", label:"Backend",           accent:"#00E5B0", to:"/roadmaps/backend-developer"       },
  { icon:"🔗", label:"Full Stack",        accent:"#00c4ff", to:"/roadmaps/full-stack-developer"    },
  { icon:"☁️", label:"Cloud / DevOps",    accent:"#34d399", to:"/roadmaps/devops-engineer"         },
  { icon:"🧠", label:"AI",                accent:"#a78bfa", to:"/roadmaps/ai-engineer"             },
  { icon:"✅", label:"Testing",           accent:"#10b981", to:"/roadmaps/qa-automation-engineer"  },
  { icon:"📄", label:"CMS / Enterprise",  accent:"#c084fc", to:"/roadmaps/technology/aem"          },
  { icon:"🎯", label:"Leadership",        accent:"#FF5E7E", to:"/roadmaps/tech-lead"               },
];

const STEPS = [
  { n:"01", label:"Choose your stage",    sub:"Tell us where you are right now.",                color:"#00E5B0" },
  { n:"02", label:"Pick your interest",   sub:"Select the direction that draws you in.",          color:"#FFB84D" },
  { n:"03", label:"Follow the roadmap",   sub:"A clear step-by-step path, built for your role.", color:"#a78bfa" },
  { n:"04", label:"Grow to the next level",sub:"Level up with purpose, not guesswork.",           color:"#FF5E7E" },
];

const ROADMAPS = [
  { id:"fresher-to-developer",   to:"/roadmaps/fresher-to-software-developer", icon:"🌱", title:"Fresher to Software Developer", bestFor:"Students & Graduates", level:"Beginner",        growth:"→ Junior Developer",   accent:"#00E5B0" },
  { id:"frontend-developer",     to:"/roadmaps/frontend-developer",            icon:"🎨", title:"Frontend Developer",            bestFor:"Freshers & Switchers",  level:"Beginner → Mid",  growth:"→ Senior → Lead",      accent:"#FFB84D" },
  { id:"java-full-stack",        to:"/roadmaps/java-full-stack-developer",     icon:"☕", title:"Java Full Stack Developer",     bestFor:"Freshers, Juniors",     level:"Beginner → Mid",  growth:"→ Senior → Architect", accent:"#FF5E7E" },
  { id:"aem-cms-developer",      to:"/roadmaps/technology/aem",                icon:"📄", title:"AEM / CMS Developer",          bestFor:"Mid-Level Java Devs",   level:"Mid → Senior",    growth:"→ Architect",          accent:"#a78bfa" },
  { id:"qa-automation-engineer", to:"/roadmaps/qa-automation-engineer",        icon:"✅", title:"QA to Automation Engineer",    bestFor:"Testers, Manual QA",    level:"Mid",             growth:"→ SDET → Arch",        accent:"#34d399" },
  { id:"devops-engineer",        to:"/roadmaps/devops-engineer",               icon:"🔧", title:"DevOps Engineer",              bestFor:"Developers",            level:"Mid → Senior",    growth:"→ SRE → Platform Lead", accent:"#f59e0b" },
  { id:"ai-engineer",            to:"/roadmaps/ai-engineer",                   icon:"🧠", title:"AI Engineer",                  bestFor:"Developers, Data Fans", level:"Mid → Senior",    growth:"→ ML Lead → Architect", accent:"#c084fc" },
  { id:"developer-to-tech-lead", to:"/roadmaps/tech-lead",                    icon:"🎯", title:"Developer to Tech Lead",       bestFor:"Senior Devs, 5+ yrs",   level:"Senior → Lead",   growth:"→ Architect → Manager", accent:"#60a5fa" },
];

/* ════════════════════════════════════════════════════════════
   BACKGROUND
════════════════════════════════════════════════════════════ */
function PageBg() {
  return (
    <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0,
        background:"linear-gradient(160deg,#070711 0%,#0C0A1E 55%,#070B18 100%)" }}/>
      <div style={{ position:"absolute", inset:0,
        backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.065) 1px,transparent 1px)",
        backgroundSize:"38px 38px",
        maskImage:"radial-gradient(ellipse 90% 70% at 50% 5%,black 0%,transparent 78%)" }}/>
      <div style={{ position:"absolute", width:"700px", height:"700px", borderRadius:"50%",
        top:"-220px", left:"-180px",
        background:"radial-gradient(circle,rgba(0,229,176,0.07) 0%,transparent 65%)" }}/>
      <div style={{ position:"absolute", width:"500px", height:"500px", borderRadius:"50%",
        bottom:"-100px", right:"-100px",
        background:"radial-gradient(circle,rgba(255,184,77,0.05) 0%,transparent 65%)" }}/>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   1 · HERO
════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div style={{ maxWidth:"680px" }}>

          {/* Pulse badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem",
            background:"rgba(0,229,176,0.07)", border:"1px solid rgba(0,229,176,0.18)",
            borderRadius:"999px", padding:"0.4rem 1rem", marginBottom:"2rem" }}>
            <span style={{ width:"6px", height:"6px", borderRadius:"50%",
              background:C.teal, boxShadow:`0 0 8px ${C.teal}`, display:"block", flexShrink:0 }}/>
            <span style={{ color:C.teal, fontSize:"0.72rem", fontWeight:700,
              letterSpacing:"0.08em", textTransform:"uppercase" }}>
              Tech Career Navigation Platform
            </span>
          </div>

          <h1 className="font-display" style={{
            fontSize:"clamp(2.6rem,6vw,4.25rem)", fontWeight:700,
            lineHeight:1.08, letterSpacing:"-0.035em", color:C.t1,
            marginBottom:"1.375rem",
          }}>
            Confused About<br/>
            Your Tech<br/>
            <span className="g-teal">Career Path?</span>
          </h1>

          <p style={{ color:C.desc, fontSize:"1.1rem", lineHeight:1.85, maxWidth:"520px", marginBottom:"2.5rem" }}>
            Keka Store helps students, freshers, developers, testers, leads, and career switchers
            find the right technology roadmap and know what to do next.
          </p>

          <div style={{ display:"flex", gap:"0.875rem", flexWrap:"wrap" }}>
            <Link to="/roadmaps" className="btn btn-teal">Find My Path →</Link>
            <Link to="/roadmaps" className="btn btn-outline">Explore Roadmaps</Link>
          </div>

          {/* Minimal trust line */}
          <p style={{ color:C.muted, fontSize:"0.78rem", marginTop:"1.75rem",
            letterSpacing:"0.04em", textTransform:"uppercase" }}>
            Free · No login · No paywall
          </p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   2 · WHO ARE YOU TODAY?
════════════════════════════════════════════════════════════ */
function WhoAreYou() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1, paddingTop:"4rem", paddingBottom:"4rem" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{ marginBottom:"2.5rem" }}>
          <span className="s-eyebrow">Step 1</span>
          <h2 className="s-heading">Who are you today?</h2>
          <p className="s-sub" style={{ maxWidth:"480px" }}>
            Pick your current stage. Every card leads to a roadmap built for where you are right now.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"0.875rem" }}>
          {WHO.map(w => (
            <Link key={w.label} to={`/roadmaps/stage/${w.slug}`} style={{ textDecoration:"none" }}>
              <div style={{
                background:C.surface, border:`1px solid ${C.border}`, borderRadius:"14px",
                padding:"1.375rem 1.25rem", cursor:"pointer",
                transition:"all 0.22s ease", position:"relative", overflow:"hidden",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${w.accent}35`;
                  e.currentTarget.style.background = "#1A1730";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = C.surface;
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Left accent stripe */}
                <div style={{ position:"absolute", left:0, top:"1rem", bottom:"1rem", width:"3px",
                  background:`linear-gradient(to bottom,${w.accent},transparent)`, borderRadius:"0 2px 2px 0" }}/>

                <span style={{ fontSize:"1.5rem", display:"block", marginBottom:"0.75rem" }}>{w.icon}</span>
                <p className="font-display" style={{ color:C.t1, fontWeight:700, fontSize:"0.95rem", marginBottom:"0.3rem" }}>{w.label}</p>
                <p style={{ color:C.desc, fontSize:"0.8rem", lineHeight:1.6 }}>{w.sub}</p>
                <p style={{ color:w.accent, fontSize:"0.7rem", fontWeight:700, marginTop:"0.875rem", letterSpacing:"0.04em" }}>
                  VIEW ROADMAP →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   3 · CHOOSE YOUR DIRECTION
════════════════════════════════════════════════════════════ */
function ChooseDirection() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1,
      paddingTop:"4rem", paddingBottom:"4rem",
      background:"rgba(12,10,30,0.6)" }}>
      <div className="line-a"/>
      <div className="container">
        <div style={{ marginBottom:"2.5rem" }}>
          <span className="s-eyebrow s-eyebrow-a">Step 2</span>
          <h2 className="s-heading">Choose your direction</h2>
          <p className="s-sub" style={{ maxWidth:"440px" }}>
            Which area of tech draws you in? Pick one and follow a path built for that role.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:"0.75rem" }}>
          {DIRECTIONS.map(d => (
            <Link key={d.label} to={d.to} style={{ textDecoration:"none" }}>
              <div style={{
                background:C.bg2, border:`1px solid ${C.border}`, borderRadius:"14px",
                padding:"1.25rem 1rem", cursor:"pointer",
                transition:"all 0.2s ease", textAlign:"center",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = C.surface;
                  e.currentTarget.style.borderColor = `${d.accent}40`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 6px 24px ${d.accent}12`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = C.bg2;
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Accent dot */}
                <div style={{ width:"6px", height:"6px", borderRadius:"50%",
                  background:d.accent, boxShadow:`0 0 8px ${d.accent}`,
                  margin:"0 auto 0.875rem", opacity:0.75 }}/>
                <span style={{ fontSize:"1.75rem", display:"block", marginBottom:"0.6rem" }}>{d.icon}</span>
                <p className="font-display" style={{ color:C.t1, fontWeight:700, fontSize:"0.875rem" }}>{d.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   4 · HOW KEKA STORE HELPS — 4-step path
════════════════════════════════════════════════════════════ */
function HowItHelps() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1, paddingTop:"4rem", paddingBottom:"4rem" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <span className="s-eyebrow" style={{ justifyContent:"center" }}>How It Works</span>
          <h2 className="s-heading">Four steps to career clarity</h2>
          <p className="s-sub" style={{ maxWidth:"460px", margin:"0.875rem auto 0" }}>
            No confusion. No wasted time. Just a clear path from where you are to where you want to be.
          </p>
        </div>

        {/* Desktop: horizontal connected steps */}
        <div style={{ position:"relative" }}>
          {/* Connecting line — desktop only */}
          <div className="hidden md:block" style={{
            position:"absolute", top:"32px",
            left:"calc(12.5% + 16px)", right:"calc(12.5% + 16px)",
            height:"2px", zIndex:0,
            background:"linear-gradient(90deg,#00E5B0,#FFB84D,#a78bfa,#FF5E7E)", opacity:0.22,
          }}/>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1rem", position:"relative", zIndex:1 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"0 0.5rem" }}>
                {/* Node */}
                <div style={{
                  width:"64px", height:"64px", borderRadius:"50%", marginBottom:"1.25rem",
                  background:`${s.color}12`, border:`2px solid ${s.color}45`,
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                  boxShadow:`0 0 20px ${s.color}18`,
                }}>
                  <span className="font-display" style={{ color:s.color, fontWeight:700, fontSize:"0.85rem" }}>{s.n}</span>
                </div>
                <p className="font-display" style={{ color:C.t1, fontWeight:700, fontSize:"0.95rem", marginBottom:"0.4rem" }}>{s.label}</p>
                <p style={{ color:C.desc, fontSize:"0.82rem", lineHeight:1.65 }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   5 · POPULAR ROADMAPS
════════════════════════════════════════════════════════════ */
function PopularRoadmaps() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1,
      paddingTop:"4rem", paddingBottom:"4rem",
      background:"rgba(12,10,30,0.5)" }}>
      <div className="line-r"/>
      <div className="container">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end",
          flexWrap:"wrap", gap:"1rem", marginBottom:"2.5rem" }}>
          <div>
            <span className="s-eyebrow s-eyebrow-r">Roadmaps</span>
            <h2 className="s-heading">Popular roadmaps</h2>
            <p className="s-sub" style={{ maxWidth:"420px" }}>
              Role-specific paths — from your first job to leadership.
            </p>
          </div>
          <Link to="/roadmaps" className="btn btn-outline" style={{ fontSize:"0.875rem", flexShrink:0 }}>
            All Roadmaps →
          </Link>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1rem" }}>
          {ROADMAPS.map(r => (
            <Link key={r.id} to={r.to} style={{ textDecoration:"none" }}>
              <div style={{
                background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px",
                padding:"1.5rem", cursor:"pointer", height:"100%", position:"relative", overflow:"hidden",
                transition:"all 0.22s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${r.accent}35`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 10px 36px ${r.accent}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Accent top line */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px",
                  background:`linear-gradient(90deg,${r.accent},transparent)`, opacity:0.6 }}/>

                {/* Header */}
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1rem" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"10px", flexShrink:0,
                    background:`${r.accent}14`, border:`1px solid ${r.accent}28`,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem" }}>
                    {r.icon}
                  </div>
                  <p className="font-display" style={{ color:C.t1, fontWeight:700, fontSize:"0.95rem", lineHeight:1.25 }}>{r.title}</p>
                </div>

                {/* Meta — minimal 3 lines */}
                <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem", marginBottom:"1.25rem" }}>
                  <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                    <span style={{ color:C.muted, fontSize:"0.7rem", textTransform:"uppercase", letterSpacing:"0.04em", minWidth:"56px" }}>For</span>
                    <span style={{ color:C.desc, fontSize:"0.82rem" }}>{r.bestFor}</span>
                  </div>
                  <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                    <span style={{ color:C.muted, fontSize:"0.7rem", textTransform:"uppercase", letterSpacing:"0.04em", minWidth:"56px" }}>Level</span>
                    <span style={{ fontSize:"0.75rem", fontWeight:600, color:r.accent,
                      background:`${r.accent}10`, border:`1px solid ${r.accent}22`,
                      borderRadius:"5px", padding:"0.15rem 0.55rem" }}>{r.level}</span>
                  </div>
                  <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                    <span style={{ color:C.muted, fontSize:"0.7rem", textTransform:"uppercase", letterSpacing:"0.04em", minWidth:"56px" }}>Next</span>
                    <span style={{ color:r.accent, fontSize:"0.82rem", fontWeight:600 }}>{r.growth}</span>
                  </div>
                </div>

                <div style={{ paddingTop:"1rem", borderTop:`1px solid ${C.border}` }}>
                  <span style={{ color:r.accent, fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.03em" }}>
                    View Roadmap →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   6 · FOUNDER PURPOSE — short
════════════════════════════════════════════════════════════ */
function FounderPurpose() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1, paddingTop:"4rem", paddingBottom:"4rem" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{ maxWidth:"680px", margin:"0 auto", textAlign:"center" }}>
          {/* Avatar */}
          <div style={{
            width:"52px", height:"52px", borderRadius:"50%", margin:"0 auto 1.5rem",
            background:"linear-gradient(135deg,#00E5B0,#00c4ff)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:"1.3rem", fontWeight:700, color:"#070711",
            fontFamily:"Space Grotesk,sans-serif",
          }}>K</div>

          <p style={{ color:C.t2, fontSize:"1.15rem", lineHeight:1.85,
            fontStyle:"italic", marginBottom:"1.75rem" }}>
            "I faced career confusion after engineering. Keka Store is built so others
            can find their path faster and avoid wasting time."
          </p>

          <Link to="/about" style={{
            color:C.teal, fontSize:"0.85rem", fontWeight:700,
            textDecoration:"none", letterSpacing:"0.02em",
          }}>
            Read Why I Built This →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   7 · FINAL CTA
════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="section" style={{ position:"relative", zIndex:1,
      paddingTop:"4rem", paddingBottom:"6rem" }}>
      <div className="line-t"/>
      <div className="container">
        <div style={{
          position:"relative", overflow:"hidden", borderRadius:"24px",
          padding:"clamp(3rem,7vw,5rem) clamp(2rem,5vw,4rem)",
          textAlign:"center",
          background:C.bg2, border:"1px solid rgba(0,229,176,0.12)",
        }}>
          {/* Glows */}
          <div style={{ position:"absolute", width:"400px", height:"400px", borderRadius:"50%",
            top:"-120px", left:"-80px", pointerEvents:"none",
            background:"radial-gradient(circle,rgba(0,229,176,0.08) 0%,transparent 65%)" }}/>
          <div style={{ position:"absolute", width:"360px", height:"360px", borderRadius:"50%",
            bottom:"-100px", right:"-70px", pointerEvents:"none",
            background:"radial-gradient(circle,rgba(255,184,77,0.06) 0%,transparent 65%)" }}/>
          {/* Texture */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)",
            backgroundSize:"28px 28px",
            maskImage:"radial-gradient(ellipse 60% 60% at 50% 50%,black 0%,transparent 100%)" }}/>

          <div style={{ position:"relative", zIndex:1 }}>
            <h2 className="font-display" style={{
              fontSize:"clamp(2rem,4.5vw,3.25rem)", fontWeight:700,
              color:C.t1, lineHeight:1.12, letterSpacing:"-0.03em", marginBottom:"1rem",
            }}>
              Your career should<br/>
              <span className="g-teal">not feel random.</span>
            </h2>

            <p style={{ color:C.desc, fontSize:"1.05rem", maxWidth:"400px",
              margin:"0 auto 2.5rem", lineHeight:1.85 }}>
              Start with the right roadmap and grow step by step.
            </p>

            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link to="/roadmaps" className="btn btn-teal" style={{ fontSize:"1rem", padding:"0.9rem 2.25rem" }}>
                Find My Path →
              </Link>
              <Link to="/roadmaps" className="btn btn-outline" style={{ fontSize:"1rem", padding:"0.9rem 2.25rem" }}>
                Explore Roadmaps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div style={{ position:"relative" }}>
      <PageBg/>
      <Hero/>
      <WhoAreYou/>
      <ChooseDirection/>
      <HowItHelps/>
      <PopularRoadmaps/>
      <FounderPurpose/>
      <FinalCTA/>
    </div>
  );
}
