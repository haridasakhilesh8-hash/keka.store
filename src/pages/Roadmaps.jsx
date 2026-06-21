import { Link } from "react-router-dom";

/* ── design tokens ─────────────────────────────────────────── */
const C = {
  bg:      "#070711",
  bg2:     "#0C0A1E",
  surface: "#0F0D20",
  border:  "rgba(255,255,255,0.08)",
  teal:    "#00E5B0",
  t1:      "#F8F7FF",
  t2:      "#B8B6CC",
  muted:   "#4A4868",
  dim:     "#2A2840",
};

/* ── DATA ──────────────────────────────────────────────────── */
const stageRoadmaps = [
  { label:"Student",            slug:"student",           icon:"🎓", meta:"Best for: School / College" },
  { label:"Graduate / Fresher", slug:"graduate-fresher",  icon:"🌱", meta:"Best for: 0–1 year experience" },
  { label:"Junior Developer",   slug:"junior-developer",  icon:"💻", meta:"Best for: 0–2 years" },
  { label:"Tester / QA",        slug:"tester-qa",         icon:"✅", meta:"Best for: Manual testers" },
  { label:"Working Developer",  slug:"working-developer", icon:"⚡", meta:"Best for: 2–5 years" },
  { label:"Senior Developer",   slug:"senior-developer",  icon:"🏆", meta:"Best for: 5+ years" },
  { label:"Tech Lead",          slug:"tech-lead",         icon:"🎯", meta:"Best for: Team leads" },
  { label:"Career Switcher",    slug:"career-switcher",   icon:"🔄", meta:"Best for: Non-tech background" },
];

const roleBasedRoadmaps = [
  { label:"Frontend Developer",        slug:"frontend-developer",          icon:"🎨", meta:"Best for: Fresher / Switcher" },
  { label:"Backend Developer",         slug:"backend-developer",           icon:"⚙️", meta:"Best for: Fresher / Junior" },
  { label:"Full Stack Developer",      slug:"full-stack-developer",        icon:"🔗", meta:"Best for: Junior / Mid-Level" },
  { label:"Java Full Stack Developer", slug:"java-full-stack-developer",   icon:"☕", meta:"Best for: Fresher / Junior" },
  { label:"AEM Developer",             slug:"aem-developer",               icon:"📄", meta:"Best for: Mid-Level Java Dev" },
  { label:"Contentful Developer",      slug:"contentful-developer",        icon:"📦", meta:"Best for: Mid-Level Dev" },
  { label:"Sitecore Developer",        slug:"sitecore-developer",          icon:"🌐", meta:"Best for: .NET / Mid-Level" },
  { label:"QA Automation Engineer",    slug:"qa-automation-engineer",      icon:"✅", meta:"Best for: Manual Tester" },
  { label:"DevOps Engineer",           slug:"devops-engineer",             icon:"🔧", meta:"Best for: Developer / Junior" },
  { label:"Cloud Engineer",            slug:"cloud-engineer",              icon:"☁️", meta:"Best for: Mid-Level Dev" },
  { label:"AI Engineer",               slug:"ai-engineer",                 icon:"🧠", meta:"Best for: Developer / Mid" },
  { label:"Data Analyst",              slug:"data-analyst",                icon:"📊", meta:"Best for: Fresher / Switcher" },
  { label:"Product Manager",           slug:"product-manager",             icon:"🎯", meta:"Best for: Switcher / Junior PM" },
  { label:"Tech Lead",                 slug:"tech-lead",                   icon:"🏆", meta:"Best for: Senior Developer" },
  { label:"Solution Architect",        slug:"solution-architect",          icon:"🏛️", meta:"Best for: Senior / Tech Lead" },
  { label:"Engineering Manager",       slug:"engineering-manager",         icon:"👥", meta:"Best for: Tech Lead" },
  { label:"Career Switcher",           slug:"career-switcher",             icon:"🔄", meta:"Best for: Non-tech background" },
  { label:"Fresher to Software Developer", slug:"fresher-to-software-developer", icon:"🌱", meta:"Best for: Student / Graduate" },
];

const technologyRoadmaps = [
  { label:"React",               slug:"react",             icon:"⚛️", meta:"Direction: UI development" },
  { label:"Next.js",             slug:"nextjs",            icon:"▲",  meta:"Direction: Full stack React" },
  { label:"Core Java",           slug:"core-java",         icon:"☕", meta:"Direction: Enterprise backend" },
  { label:"Spring Boot",         slug:"spring-boot",       icon:"🍃", meta:"Direction: Java APIs" },
  { label:"JavaScript",          slug:"javascript",        icon:"📜", meta:"Direction: Web foundation" },
  { label:"TypeScript",          slug:"typescript",        icon:"🔷", meta:"Direction: Typed JS apps" },
  { label:"Node.js",             slug:"nodejs",            icon:"🟢", meta:"Direction: Backend JS" },
  { label:"Python",              slug:"python",            icon:"🐍", meta:"Direction: AI / scripting" },
  { label:"AEM",                 slug:"aem",               icon:"📄", meta:"Direction: Enterprise CMS" },
  { label:"Contentful",          slug:"contentful",        icon:"📦", meta:"Direction: Headless CMS" },
  { label:"Sitecore",            slug:"sitecore",          icon:"🌐", meta:"Direction: Enterprise CMS" },
  { label:"AWS",                 slug:"aws",               icon:"☁️", meta:"Direction: Cloud platform" },
  { label:"Azure",               slug:"azure",             icon:"🔵", meta:"Direction: Cloud platform" },
  { label:"Docker",              slug:"docker",            icon:"🐳", meta:"Direction: Containerisation" },
  { label:"Kubernetes",          slug:"kubernetes",        icon:"⎈",  meta:"Direction: Container orchestration" },
  { label:"Git and GitHub",      slug:"git-github",        icon:"🐙", meta:"Direction: Version control" },
  { label:"System Design",       slug:"system-design",     icon:"📐", meta:"Direction: Architect thinking" },
  { label:"AI / LLM Engineering",slug:"ai-llm-engineering",icon:"🤖", meta:"Direction: AI product building" },
];

const growthRoadmaps = [
  { label:"Student to Software Developer", slug:"student-to-developer",   icon:"🎓", meta:"Growth: Student → Junior Dev" },
  { label:"Graduate to First Job",         slug:"graduate-to-first-job",  icon:"🌱", meta:"Growth: Graduate → Employed" },
  { label:"Fresher to Developer",          slug:"fresher-to-developer",   icon:"💻", meta:"Growth: Fresher → Junior Dev" },
  { label:"Junior Developer to Mid-Level", slug:"junior-to-mid-level",    icon:"⚡", meta:"Growth: Junior → Mid-Level" },
  { label:"Mid-Level to Senior Developer", slug:"mid-to-senior",          icon:"🏆", meta:"Growth: Mid → Senior Dev" },
  { label:"Senior Developer to Tech Lead", slug:"senior-to-tech-lead",    icon:"🎯", meta:"Growth: Senior → Tech Lead" },
  { label:"Tech Lead to Architect",        slug:"tech-lead-to-architect", icon:"🏛️", meta:"Growth: Lead → Architect" },
  { label:"Tech Lead to Manager",          slug:"tech-lead-to-manager",   icon:"👥", meta:"Growth: Lead → Eng Manager" },
  { label:"Tester to Automation Engineer", slug:"tester-to-automation",   icon:"✅", meta:"Growth: Manual QA → SDET" },
  { label:"Developer to Cloud Engineer",   slug:"developer-to-cloud",     icon:"☁️", meta:"Growth: Dev → Cloud Eng" },
  { label:"Developer to AI Engineer",      slug:"developer-to-ai",        icon:"🧠", meta:"Growth: Dev → AI Eng" },
];

/* ── REUSABLE CARD ─────────────────────────────────────────── */
function RoadmapLinkCard({ label, slug, icon, meta, basePath = "/roadmaps" }) {
  return (
    <Link to={`${basePath}/${slug}`} style={{ textDecoration:"none" }}>
      <div
        style={{
          display:"flex", alignItems:"flex-start", gap:"0.625rem",
          padding:"0.75rem 0.875rem",
          background:C.surface,
          border:`1px solid ${C.border}`,
          borderRadius:"10px",
          cursor:"pointer",
          transition:"background 0.15s, border-color 0.15s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#161330";
          e.currentTarget.style.borderColor = "rgba(0,229,176,0.28)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = C.surface;
          e.currentTarget.style.borderColor = C.border;
        }}
      >
        <span style={{ fontSize:"1rem", flexShrink:0, lineHeight:1, marginTop:"2px" }}>{icon}</span>
        <div style={{ flex:1, minWidth:0 }}>
          <span style={{ color:C.t2, fontSize:"0.85rem", fontWeight:500, lineHeight:1.3, display:"block" }}>
            {label}
          </span>
          {meta && (
            <span style={{ color:C.muted, fontSize:"0.72rem", lineHeight:1.4, display:"block", marginTop:"3px" }}>
              {meta}
            </span>
          )}
        </div>
        <span style={{ color:C.muted, fontSize:"0.75rem", flexShrink:0, marginTop:"2px" }}>→</span>
      </div>
    </Link>
  );
}

/* ── SECTION BLOCK ─────────────────────────────────────────── */
function Section({ title, items, accentColor = C.teal, basePath = "/roadmaps" }) {
  return (
    <div style={{ marginBottom:"2.75rem" }}>
      <div style={{
        display:"flex", alignItems:"center", gap:"0.75rem",
        marginBottom:"1rem", paddingBottom:"0.75rem",
        borderBottom:`1px solid ${C.border}`,
      }}>
        <div style={{ width:"3px", height:"18px", borderRadius:"2px", background:accentColor, flexShrink:0 }}/>
        <h2 style={{
          fontFamily:"Space Grotesk,sans-serif", fontWeight:700,
          fontSize:"1rem", color:C.t1, letterSpacing:"-0.01em",
        }}>{title}</h2>
        <span style={{ marginLeft:"auto", fontSize:"0.72rem", color:C.muted, fontWeight:500 }}>
          {items.length} paths
        </span>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(210px, 1fr))", gap:"0.5rem" }}>
        {items.map(item => (
          <RoadmapLinkCard key={item.slug + item.label} {...item} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────────────────── */
export default function Roadmaps() {
  return (
    <div style={{ background:C.bg, minHeight:"100vh" }}>

      {/* Hero */}
      <div style={{
        borderBottom:`1px solid ${C.border}`,
        background:C.bg2,
        paddingTop:"5.5rem",
        paddingBottom:"2.25rem",
      }}>
        <div className="container">
          <p style={{
            fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.1em",
            textTransform:"uppercase", color:C.teal, marginBottom:"0.75rem",
          }}>Keka Store</p>
          <h1 style={{
            fontFamily:"Space Grotesk,sans-serif", fontWeight:700,
            fontSize:"clamp(1.75rem, 3.5vw, 2.5rem)",
            color:C.t1, lineHeight:1.2, letterSpacing:"-0.025em", marginBottom:"0.875rem",
          }}>
            Keka Career Roadmaps
          </h1>
          <p style={{ color:"#8B88A6", fontSize:"0.975rem", lineHeight:1.75, maxWidth:"600px" }}>
            Clear roadmap paths for students, freshers, developers, testers, career switchers,
            and professionals who want to grow in software careers.
          </p>
        </div>
      </div>

      {/* Directory content */}
      <div className="container" style={{ paddingTop:"2.5rem", paddingBottom:"4rem" }}>

        {/* Quick-jump nav */}
        <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.75rem" }}>
          {[
            { label:"By Stage",      href:"#by-stage"     },
            { label:"By Role",       href:"#role-based"   },
            { label:"By Technology", href:"#technology"   },
            { label:"Growth Paths",  href:"#growth-paths" },
          ].map(({ label, href }) => (
            <a key={href} href={href} style={{
              fontSize:"0.78rem", fontWeight:500, padding:"0.35rem 0.875rem",
              borderRadius:"999px", textDecoration:"none",
              background:"rgba(255,255,255,0.04)",
              border:`1px solid ${C.border}`,
              color:C.muted, transition:"all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(0,229,176,0.3)"; e.currentTarget.style.color=C.teal; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.color=C.muted; }}
            >{label}</a>
          ))}
        </div>

        <div id="by-stage"    style={{ scrollMarginTop:"80px" }}>
          <Section title="Start Based on Your Stage" items={stageRoadmaps}     accentColor="#00E5B0" basePath="/roadmaps/stage" />
        </div>
        <div id="role-based"  style={{ scrollMarginTop:"80px" }}>
          <Section title="Role-Based Roadmaps"       items={roleBasedRoadmaps} accentColor="#60a5fa" />
        </div>
        <div id="technology"  style={{ scrollMarginTop:"80px" }}>
          <Section title="Technology Roadmaps"       items={technologyRoadmaps} accentColor="#FFB84D" basePath="/roadmaps/technology" />
        </div>
        <div id="growth-paths" style={{ scrollMarginTop:"80px" }}>
          <Section title="Growth Roadmaps"           items={growthRoadmaps}    accentColor="#a78bfa" basePath="/roadmaps/growth" />
        </div>

      </div>
    </div>
  );
}
