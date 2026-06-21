/* ────────────────────────────────────────────────────────────────
   stageRoadmapsData.js  —  8 career-stage roadmaps
──────────────────────────────────────────────────────────────── */

function mkT() {
  let ni = 0, pi = 0;
  return {
    n:  (title, type = "required") => ({ id: `n${++ni}`, title, type }),
    p:  (title, nodes)             => ({ id: `p${++pi}`, title, nodes }),
    lv: (id, label, goal, phases)  => ({ id, label, goal, phases }),
  };
}

/* ── STUDENT ─────────────────────────────────────────────────── */
const studentData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "student", title: "Student Roadmap",
    subtitle: "Your starting guide from curiosity to code — explore, build, and get hired.",
    category: "Stage", accent: "#00E5B0", icon: "🎓",
    bestFor: "School / College students exploring tech",
    defaultLevel: "explore",
    levels: [
      lv("explore", "Explore Software", "Understand what software development is and what role fits you.", [
        p("What is Software?",  [n("Apps vs Websites vs Systems"), n("Frontend vs Backend"), n("How apps are built")]),
        p("Types of Roles",     [n("Developer"), n("Designer"), n("QA / Tester"), n("DevOps"), n("Data / AI")]),
        p("Career Paths",       [n("Web Development"), n("Mobile Apps"), n("Data Science"), n("Cloud / DevOps")]),
        p("Explore Tools",      [n("VS Code"), n("Browser DevTools"), n("GitHub"), n("ChatGPT for learning", "optional")]),
        p("Milestone",          [n("Know your target role", "milestone")]),
      ]),
      lv("foundation", "Build Foundation", "Learn the basics of programming and the web.", [
        p("Computer Basics",    [n("How computers work"), n("File system"), n("CLI basics"), n("Keyboard shortcuts")]),
        p("Internet Basics",    [n("How websites work"), n("HTTP basics"), n("DNS"), n("Browser rendering")]),
        p("Programming Basics", [n("Python or JavaScript"), n("Variables & loops"), n("Functions"), n("Logic & conditions")]),
        p("Git Basics",         [n("git init / add / commit"), n("GitHub repo"), n("Push & pull"), n("Branching basics")]),
        p("Milestone",          [n("First Mini Project on GitHub", "milestone")]),
      ]),
      lv("direction", "Choose Direction", "Pick one path and commit to it for 3 months.", [
        p("Frontend Path",   [n("HTML / CSS / JS"), n("React basics"), n("Portfolio website"), n("UI basics")]),
        p("Backend Path",    [n("Python or Java"), n("REST APIs"), n("Databases basics"), n("Server logic")]),
        p("Data / AI Path",  [n("Python fundamentals"), n("pandas / numpy"), n("Jupyter notebooks"), n("ML basics", "optional")]),
        p("DevOps Path",     [n("Linux basics"), n("Docker intro"), n("Cloud intro"), n("CI/CD basics", "optional")]),
        p("Milestone",       [n("Chose and started one path", "milestone")]),
      ]),
      lv("projects", "First Projects", "Build real projects that showcase your skills.", [
        p("Clone a Site",    [n("Pick a simple website"), n("HTML + CSS clone"), n("Make it responsive"), n("Deploy free")]),
        p("To-Do App",       [n("Add / Edit / Delete"), n("Local storage"), n("Clean UI"), n("Deploy on GitHub Pages")]),
        p("API Project",     [n("Pick a free API"), n("Fetch & display data"), n("Search / filter"), n("Error handling")]),
        p("Portfolio Page",  [n("About me"), n("Projects section"), n("Contact form"), n("GitHub link")]),
        p("Milestone",       [n("3 projects deployed online", "milestone")]),
      ]),
      lv("jobready", "Job Ready", "Prepare your profile and start applying for internships.", [
        p("Resume",          [n("1-page resume"), n("Projects listed"), n("Skills section"), n("ATS-friendly format")]),
        p("GitHub Profile",  [n("README profile"), n("Pinned repos"), n("Consistent commits"), n("Good README files")]),
        p("LinkedIn",        [n("Complete profile"), n("Student headline"), n("Connections"), n("Post about learning")]),
        p("Apply",           [n("Internship search"), n("Campus placements"), n("Referrals"), n("Follow-ups")]),
        p("Milestone",       [n("First internship / campus placement", "milestone")]),
      ]),
    ],
  };
})();

/* ── GRADUATE / FRESHER ──────────────────────────────────────── */
const graduateFresherData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "graduate-fresher", title: "Graduate / Fresher Roadmap",
    subtitle: "From degree in hand to first tech job — the complete fresher playbook.",
    category: "Stage", accent: "#34d399", icon: "🌱",
    bestFor: "Recent graduates with 0–1 year experience",
    defaultLevel: "roles",
    levels: [
      lv("roles", "Understand Roles", "Know what different developer roles expect before you commit.", [
        p("Frontend Roles",   [n("HTML / CSS / JS"), n("React / Angular / Vue"), n("UI / UX awareness"), n("Browser APIs")]),
        p("Backend Roles",    [n("Java / Python / Node"), n("REST APIs"), n("Databases"), n("Server logic")]),
        p("Full-Stack Roles", [n("Both frontend + backend"), n("Higher expectation"), n("More to learn"), n("Common in startups")]),
        p("Other Paths",      [n("QA / Testing"), n("DevOps / Cloud"), n("Data Analyst"), n("Product Manager", "optional")]),
        p("Milestone",        [n("Picked one role type", "milestone")]),
      ]),
      lv("path", "Choose Path", "Select one language, one framework, and commit for 90 days.", [
        p("Pick a Language",   [n("JavaScript (web)"), n("Java (enterprise)"), n("Python (AI / data)"), n("C# (.NET / Sitecore)")]),
        p("Pick a Framework",  [n("React / Next.js"), n("Spring Boot"), n("Django / FastAPI"), n("Node + Express")]),
        p("Set Your Goal",     [n("90-day skill plan"), n("One project target"), n("Daily practice"), n("Track progress")]),
        p("Milestone",         [n("Day 1 of focused learning", "milestone")]),
      ]),
      lv("skills", "Build Skills", "Develop the core skills every company expects from a fresher.", [
        p("Language Depth",   [n("Functions & OOP"), n("Collections"), n("Error handling"), n("Async basics")]),
        p("Framework Basics", [n("Routing"), n("Components / Controllers"), n("API integration"), n("Basic CRUD")]),
        p("Dev Workflow",     [n("Git daily practice"), n("PR workflow"), n("Code review basics"), n("Debugging")]),
        p("Problem Solving",  [n("Array / string problems"), n("Loops & recursion"), n("LeetCode Easy"), n("Logic building")]),
        p("Milestone",        [n("Basic CRUD app built", "milestone")]),
      ]),
      lv("buildprojects", "Build Projects", "2–3 solid projects matter more than 20 incomplete ones.", [
        p("Project 1 — Solo",      [n("Pick a real problem"), n("Design the UI"), n("Build frontend"), n("Deploy online")]),
        p("Project 2 — API",       [n("REST API backend"), n("Database"), n("Auth basics"), n("Connect frontend")]),
        p("Project 3 — Full Stack",[n("End-to-end feature"), n("Login / Signup"), n("Deploy on cloud"), n("Write README")]),
        p("Bonus",                 [n("Contribute to OSS", "optional"), n("Freelance task", "optional")]),
        p("Milestone",             [n("3 deployed projects in portfolio", "milestone")]),
      ]),
      lv("apply", "Apply Jobs", "Prepare your profile, apply actively, and crack interviews.", [
        p("Resume",       [n("1-page format"), n("STAR-style bullets"), n("Projects section"), n("Skills list")]),
        p("Profile",      [n("LinkedIn optimization"), n("GitHub cleanup"), n("Portfolio site"), n("Certifications")]),
        p("Apply",        [n("50+ applications"), n("LinkedIn Easy Apply"), n("Company career pages"), n("Referrals")]),
        p("Interviews",   [n("DSA basics"), n("HR round prep"), n("Project walkthrough"), n("Mock interviews")]),
        p("Milestone",    [n("First Job Offer", "milestone")]),
      ]),
    ],
  };
})();

/* ── JUNIOR DEVELOPER ────────────────────────────────────────── */
const juniorDeveloperData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "junior-developer", title: "Junior Developer Roadmap",
    subtitle: "Grow from writing features to owning them — the path from junior to mid-level.",
    category: "Stage", accent: "#60a5fa", icon: "💻",
    bestFor: "Developers with 0–2 years of professional experience",
    defaultLevel: "basics",
    levels: [
      lv("basics", "Strengthen Basics", "Fill the gaps in your foundation before going deeper.", [
        p("Language Core",    [n("Functions & closures"), n("OOP concepts"), n("Error handling"), n("Modules & imports")]),
        p("Data Structures",  [n("Arrays & objects"), n("Map / Set"), n("Stack / Queue basics"), n("When to use what")]),
        p("Problem Solving",  [n("LeetCode Easy"), n("Logic building"), n("Readable solutions"), n("Time complexity basics")]),
        p("Git Workflow",     [n("Branching"), n("PR creation"), n("Rebase basics"), n("Commit conventions")]),
        p("Milestone",        [n("Confident in language fundamentals", "milestone")]),
      ]),
      lv("realskills", "Real Project Skills", "Learn the skills that matter on the job — not just tutorials.", [
        p("REST APIs",        [n("Read API docs"), n("Fetch / Axios"), n("Request / Response"), n("Error handling")]),
        p("Authentication",   [n("JWT basics"), n("Session vs token"), n("Login flow"), n("Protecting routes")]),
        p("Database",         [n("SQL basics"), n("ORM usage"), n("CRUD queries"), n("Relations basics")]),
        p("Debugging",        [n("Console / DevTools"), n("Breakpoints"), n("Network tab"), n("Reading stack traces")]),
        p("Milestone",        [n("Shipped a real feature in production", "milestone")]),
      ]),
      lv("specialize", "Specialize", "Pick one direction and go deeper.", [
        p("Frontend Track",   [n("React / Next.js"), n("State management"), n("Component design"), n("Performance basics")]),
        p("Backend Track",    [n("Spring Boot / Node.js"), n("REST architecture"), n("DB design"), n("API versioning")]),
        p("DevOps Track",     [n("Docker basics"), n("CI/CD pipelines"), n("Cloud intro"), n("Linux basics")]),
        p("Commit",           [n("Build one deep project in chosen area"), n("Mentorship / community"), n("Side project")]),
        p("Milestone",        [n("Specialist project shipped", "milestone")]),
      ]),
      lv("quality", "Improve Code Quality", "Write code that your team actually enjoys reviewing.", [
        p("Clean Code",       [n("Naming conventions"), n("Small functions"), n("No magic numbers"), n("SOLID basics")]),
        p("Code Review",      [n("Give good reviews"), n("Accept feedback well"), n("Inline comments"), n("PR descriptions")]),
        p("Testing",          [n("Unit tests basics"), n("What to test"), n("Jest / JUnit"), n("Coverage basics")]),
        p("Documentation",    [n("README writing"), n("Inline comments"), n("API docs"), n("Decision notes", "optional")]),
        p("Milestone",        [n("PR accepted with zero review comments", "milestone")]),
      ]),
      lv("nextrole", "Next Role", "Prepare yourself to be recognized as mid-level.", [
        p("Mid-Level Skills", [n("System thinking"), n("Owns a feature"), n("Handles complexity"), n("Mentors others")]),
        p("Portfolio",        [n("Updated projects"), n("New tech added"), n("Open source contribution", "optional")]),
        p("Role Prep",        [n("Mid-level JD checklist"), n("System design basics"), n("Behavioral interview"), n("Salary research")]),
        p("Milestone",        [n("Mid-Level Developer title", "milestone")]),
      ]),
    ],
  };
})();

/* ── TESTER / QA ─────────────────────────────────────────────── */
const testerQaData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "tester-qa", title: "Tester / QA Roadmap",
    subtitle: "From manual testing to automation engineering — the complete QA growth path.",
    category: "Stage", accent: "#FFB84D", icon: "✅",
    bestFor: "Manual testers looking to level up to automation",
    defaultLevel: "foundation",
    levels: [
      lv("foundation", "QA Foundation", "Master the core skills every QA professional needs.", [
        p("Test Planning",    [n("Test strategy"), n("Test plan writing"), n("Scope & coverage"), n("Risk-based testing")]),
        p("Test Cases",       [n("Test case design"), n("Boundary value"), n("Equivalence partition"), n("Negative testing")]),
        p("Bug Reporting",    [n("Bug lifecycle"), n("Severity vs Priority"), n("JIRA basics"), n("Reproducible reports")]),
        p("Regression",       [n("Regression scope"), n("Smoke testing"), n("Sanity testing"), n("Test cycles")]),
        p("Milestone",        [n("Complete test plan written", "milestone")]),
      ]),
      lv("automation", "Automation Basics", "Learn programming basics and your first automation tool.", [
        p("Programming",      [n("JavaScript or Java basics"), n("Variables & functions"), n("Loops & conditions"), n("OOP concepts")]),
        p("Automation Intro", [n("What is automation"), n("When to automate"), n("Locators (CSS / XPath)"), n("First script")]),
        p("Selenium",         [n("Selenium setup"), n("WebDriver basics"), n("Find element"), n("Click & type")]),
        p("Test Runner",      [n("TestNG / JUnit"), n("Mocha / Jest"), n("Test structure"), n("Assertions")]),
        p("Milestone",        [n("First automated test running", "milestone")]),
      ]),
      lv("sdet", "SDET Path", "Level up to SDET with API testing and CI integration.", [
        p("API Testing",      [n("Postman basics"), n("REST API testing"), n("Status code checks"), n("Schema validation")]),
        p("Playwright/Cypress",[n("Modern test tools"), n("Auto-wait"), n("Network intercept"), n("Visual testing")]),
        p("BDD",              [n("Cucumber / Gherkin"), n("Feature files"), n("Step definitions"), n("Reporting")]),
        p("CI/CD",            [n("GitHub Actions"), n("Run tests in pipeline"), n("Test reports"), n("Fail gates")]),
        p("Milestone",        [n("API + UI tests in CI pipeline", "milestone")]),
      ]),
      lv("tools", "Tools & Frameworks", "Build your automation toolkit across different test layers.", [
        p("UI Testing",       [n("Selenium / Playwright"), n("Page Object Model"), n("Cross-browser"), n("Mobile web")]),
        p("API Testing",      [n("RestAssured"), n("Supertest"), n("Newman (CLI)"), n("Contract testing")]),
        p("Performance",      [n("JMeter basics"), n("k6 basics", "optional"), n("Load test setup"), n("Reading reports")]),
        p("Security Basics",  [n("OWASP basics", "optional"), n("ZAP scanner", "optional"), n("Security test cases")]),
        p("Milestone",        [n("Full test framework built", "milestone")]),
      ]),
      lv("growth", "Growth Options", "Choose your next career direction in QA.", [
        p("QA Lead Path",     [n("Lead test planning"), n("Mentor QA team"), n("Align with product"), n("Quality metrics")]),
        p("SDET Path",        [n("Framework ownership"), n("Cross-team integration"), n("Platform test tools"), n("Code review in test code")]),
        p("Performance",      [n("Performance engineer"), n("Load test architecture"), n("SLA testing"), n("Monitoring")]),
        p("Milestone",        [n("Chose growth direction", "milestone")]),
      ]),
    ],
  };
})();

/* ── WORKING DEVELOPER ───────────────────────────────────────── */
const workingDeveloperData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "working-developer", title: "Working Developer Roadmap",
    subtitle: "From comfortable developer to senior — break through the mid-level plateau.",
    category: "Stage", accent: "#a78bfa", icon: "⚡",
    bestFor: "Developers with 2–5 years professional experience",
    defaultLevel: "current",
    levels: [
      lv("current", "Current Skills", "Honestly assess where you are before planning where to go.", [
        p("Technical Skills",  [n("Language proficiency"), n("Framework depth"), n("Testing habits"), n("Code quality")]),
        p("Delivery Skills",   [n("Feature ownership"), n("Estimation accuracy"), n("Documentation"), n("PR quality")]),
        p("Team Skills",       [n("Code review participation"), n("Collaboration"), n("Async communication"), n("Reliability")]),
        p("Gaps",              [n("Identify skill gaps"), n("Compare to senior JD"), n("Set 6-month plan")]),
        p("Milestone",         [n("Honest skills assessment done", "milestone")]),
      ]),
      lv("upgrade", "Upgrade Path", "Add the skills that differentiate mid-level from senior.", [
        p("TypeScript",        [n("Types & interfaces"), n("Generics"), n("Strict mode"), n("Type-safe patterns")]),
        p("System Design",     [n("System design basics"), n("Data modeling"), n("API design"), n("Scalability thinking")]),
        p("Design Patterns",   [n("SOLID principles"), n("Common patterns"), n("Refactoring habits"), n("Architecture basics")]),
        p("Performance",       [n("Profiling basics"), n("Caching strategy"), n("DB query optimization"), n("Bundle size")]),
        p("Milestone",         [n("Applied new skill in production", "milestone")]),
      ]),
      lv("specialize", "Specialization", "Go deep in one area to become the expert.", [
        p("Frontend Platform", [n("React / Next.js depth"), n("Design systems"), n("Performance optimization"), n("Testing strategy")]),
        p("Backend Services",  [n("Microservices basics"), n("API gateway"), n("Async patterns"), n("Service contracts")]),
        p("Cloud / DevOps",    [n("AWS / Azure basics"), n("Docker + K8s intro"), n("CI/CD advanced"), n("IaC basics")]),
        p("Data Engineering",  [n("Data pipelines"), n("ETL basics"), n("Big data intro"), n("Analytics integration")]),
        p("Milestone",         [n("Recognized as the go-to person in one area", "milestone")]),
      ]),
      lv("senior", "Senior Developer Path", "Develop the mindset and habits of a senior engineer.", [
        p("Technical Depth",   [n("Architecture participation"), n("Code review leadership"), n("Tech debt ownership"), n("Cross-team impact")]),
        p("Mentoring",         [n("Help junior developers"), n("Knowledge sharing sessions"), n("Pair programming"), n("Documentation habits")]),
        p("Ownership",         [n("Full feature delivery"), n("Incident response"), n("Proactive risk flags"), n("Release ownership")]),
        p("Milestone",         [n("Led a feature end-to-end", "milestone")]),
      ]),
      lv("leadership", "Leadership Options", "Choose your next growth vector.", [
        p("Tech Lead Track",   [n("Delivery ownership"), n("Sprint planning"), n("Stakeholder communication"), n("Team growth focus")]),
        p("Architect Track",   [n("System design depth"), n("Enterprise patterns"), n("Architecture reviews"), n("Multi-team scope")]),
        p("EM Track",          [n("People management"), n("Career conversations"), n("Hiring"), n("OKR alignment", "optional")]),
        p("Milestone",         [n("Chose leadership direction", "milestone")]),
      ]),
    ],
  };
})();

/* ── SENIOR DEVELOPER ────────────────────────────────────────── */
const seniorDeveloperData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "senior-developer", title: "Senior Developer Roadmap",
    subtitle: "From senior individual contributor to technical leader — your next level playbook.",
    category: "Stage", accent: "#FF5E7E", icon: "🏆",
    bestFor: "Developers with 5+ years targeting lead or architect roles",
    defaultLevel: "depth",
    levels: [
      lv("depth", "Technical Depth", "Solidify the deep technical skills that define senior engineers.", [
        p("System Design",     [n("Distributed systems"), n("CAP theorem"), n("Database scaling"), n("API design patterns")]),
        p("Performance",       [n("Profiling tools"), n("Bottleneck identification"), n("Caching strategies"), n("Query optimization")]),
        p("Security",          [n("OWASP basics"), n("Auth patterns"), n("Secret management"), n("Dependency audits")]),
        p("Reliability",       [n("Error budgets"), n("SLI / SLO / SLA"), n("Circuit breakers"), n("Graceful degradation")]),
        p("Milestone",         [n("Deep expertise in 2+ areas", "milestone")]),
      ]),
      lv("architecture", "Architecture Thinking", "Start thinking beyond features toward system-level design.", [
        p("Patterns",          [n("Microservices"), n("Event-driven"), n("CQRS / Event sourcing"), n("Hexagonal arch")]),
        p("Trade-offs",        [n("Build vs buy"), n("SQL vs NoSQL"), n("Sync vs async"), n("Monolith vs micro")]),
        p("Reviews",           [n("Design review participation"), n("Architecture decision records"), n("RFC writing"), n("Tech debt tracking")]),
        p("Docs",              [n("Architecture diagrams"), n("C4 model basics"), n("Runbooks"), n("System documentation")]),
        p("Milestone",         [n("Led architecture discussion", "milestone")]),
      ]),
      lv("mentoring", "Mentoring", "Grow your impact by growing others.", [
        p("Code Reviews",      [n("Constructive feedback"), n("Teaching moments"), n("Review standards"), n("PR culture")]),
        p("Knowledge Sharing", [n("Tech talks"), n("Internal blog posts"), n("Pair programming"), n("Design walkthroughs")]),
        p("Onboarding",        [n("Onboarding docs"), n("First-week plans"), n("Buddy system"), n("Feedback collection")]),
        p("Team Docs",         [n("Decision records"), n("Runbook ownership"), n("Architecture diagrams"), n("Wiki contributions")]),
        p("Milestone",         [n("Junior promoted due to your mentorship", "milestone")]),
      ]),
      lv("techlead", "Tech Lead Path", "Take on delivery and team leadership responsibilities.", [
        p("Ownership",         [n("Feature delivery ownership"), n("Sprint planning"), n("Risk identification"), n("Release ownership")]),
        p("Team Alignment",    [n("Stand-ups leadership"), n("Technical decisions"), n("Unblocking team"), n("Cross-team coordination")]),
        p("Stakeholders",      [n("Status updates"), n("Expectation setting"), n("Timeline estimates"), n("Escalation handling")]),
        p("Engineering Ops",   [n("On-call rotation"), n("Incident response"), n("Post-mortems"), n("Process improvements")]),
        p("Milestone",         [n("Tech Lead responsibilities held", "milestone")]),
      ]),
      lv("nextlevel", "Architect / Manager Path", "Choose your long-term growth vector.", [
        p("Architect Track",   [n("Enterprise architecture"), n("Multi-system design"), n("Platform ownership"), n("Tech org influence")]),
        p("Manager Track",     [n("People management"), n("Hiring"), n("Performance reviews"), n("Budget ownership")]),
        p("Staff Engineer",    [n("Cross-org technical leadership"), n("Strategy & vision"), n("Principal-level scope"), n("Industry contribution")]),
        p("Milestone",         [n("Chose and started next level path", "milestone")]),
      ]),
    ],
  };
})();

/* ── TECH LEAD ───────────────────────────────────────────────── */
const techLeadData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "tech-lead", title: "Tech Lead Roadmap",
    subtitle: "From team-level delivery to organizational impact — the Tech Lead growth path.",
    category: "Stage", accent: "#f59e0b", icon: "🎯",
    bestFor: "Tech Leads and senior developers leading teams",
    defaultLevel: "delivery",
    levels: [
      lv("delivery", "Delivery Ownership", "Own the end-to-end delivery of your team's commitments.", [
        p("Sprint Ownership",  [n("Sprint planning"), n("Story breakdown"), n("Capacity planning"), n("Velocity tracking")]),
        p("Risk Management",   [n("Risk identification"), n("Dependency tracking"), n("Escalation timing"), n("Buffer planning")]),
        p("Release",           [n("Release coordination"), n("Rollback plan"), n("Feature flags"), n("Post-release review")]),
        p("Metrics",           [n("DORA metrics"), n("Lead time"), n("Change failure rate"), n("Deployment frequency")]),
        p("Milestone",         [n("Zero-delay sprint delivery", "milestone")]),
      ]),
      lv("team", "Team Guidance", "Build and grow your engineering team's capability.", [
        p("Code Review",       [n("Review standards"), n("PR culture"), n("Teaching via review"), n("Automated gates")]),
        p("Mentoring",         [n("1-on-1s"), n("Growth plans"), n("Skill gap identification"), n("Career conversations")]),
        p("Team Rituals",      [n("Retrospectives"), n("Tech debt sessions"), n("Knowledge sharing"), n("Team demos")]),
        p("Conflict",          [n("Technical disagreements"), n("Personality conflicts"), n("Escalation"), n("Mediation")]),
        p("Milestone",         [n("Junior developer promoted", "milestone")]),
      ]),
      lv("architecture", "Architecture Decisions", "Drive technical direction at the team and system level.", [
        p("Technical Vision",  [n("Team tech radar"), n("Language / framework choices"), n("Library standards"), n("Versioning policy")]),
        p("System Design",     [n("Design reviews"), n("Architecture walkthroughs"), n("ADR writing"), n("Trade-off docs")]),
        p("Refactoring",       [n("Tech debt strategy"), n("Refactoring roadmap"), n("Strangler fig pattern"), n("Incremental migration")]),
        p("Build vs Buy",      [n("Vendor evaluation"), n("Make vs buy analysis"), n("Integration cost"), n("Long-term TCO")]),
        p("Milestone",         [n("Major technical decision led", "milestone")]),
      ]),
      lv("stakeholders", "Stakeholder Management", "Communicate up, across, and outside your team.", [
        p("Status Reporting",  [n("Weekly updates"), n("Executive summaries"), n("Traffic light status"), n("Risk escalation")]),
        p("Expectation",       [n("Scope negotiation"), n("Timeline pushback"), n("Trade-off communication"), n("Over-communicate")]),
        p("Cross-team",        [n("API contracts"), n("Dependency negotiation"), n("Shared roadmaps"), n("Joint planning")]),
        p("Stakeholder Map",   [n("Identify decision makers"), n("Influence map"), n("Communication cadence"), n("Trust building")]),
        p("Milestone",         [n("Delivered under pressure with stakeholder confidence", "milestone")]),
      ]),
      lv("nextlevel", "Manager / Architect Path", "Choose your next growth vector beyond Tech Lead.", [
        p("EM Track",          [n("People org design"), n("Hiring pipeline"), n("Performance reviews"), n("Budget ownership")]),
        p("Architect Track",   [n("Cross-team architecture"), n("Platform strategy"), n("Enterprise patterns"), n("CTO alignment")]),
        p("Staff / Principal", [n("Org-wide technical leadership"), n("Strategy writing"), n("Cross-org influence"), n("Public visibility")]),
        p("Milestone",         [n("Chose growth path and started", "milestone")]),
      ]),
    ],
  };
})();

/* ── CAREER SWITCHER ─────────────────────────────────────────── */
const careerSwitcherData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "career-switcher", title: "Career Switcher Roadmap",
    subtitle: "From a different field to your first tech role — the complete career switch guide.",
    category: "Stage", accent: "#e879f9", icon: "🔄",
    bestFor: "Professionals switching from non-tech backgrounds to software",
    defaultLevel: "explore",
    levels: [
      lv("explore", "Explore Tech", "Understand the tech landscape before making a commitment.", [
        p("Industry Overview",  [n("What developers actually do"), n("Different tech roles"), n("Company types"), n("Salary benchmarks")]),
        p("Day in the Life",    [n("Developer workflows"), n("Agile / Scrum basics"), n("Tools used"), n("Remote vs onsite")]),
        p("Learning Options",   [n("Bootcamp"), n("Self-taught"), n("Degree"), n("Part-time online")]),
        p("Timeline Reality",   [n("6–12 months minimum"), n("Daily commitment"), n("Job market expectations"), n("Starting salary")]),
        p("Milestone",          [n("Decision to switch made", "milestone")]),
      ]),
      lv("transferable", "Transferable Skills", "Find and use what you already know.", [
        p("Analytical Skills",  [n("Data-driven thinking"), n("Problem decomposition"), n("Logical flow"), n("Pattern recognition")]),
        p("Communication",      [n("Client communication"), n("Documentation"), n("Presentations"), n("Stakeholder management")]),
        p("Project Mgmt",       [n("Deadline management"), n("Prioritization"), n("Cross-team coordination"), n("Process design")]),
        p("Domain Expertise",   [n("Finance domain → FinTech"), n("Healthcare → HealthTech"), n("Education → EdTech"), n("Retail → E-commerce")]),
        p("Milestone",          [n("Resume highlights transferable skills", "milestone")]),
      ]),
      lv("choosepath", "Choose New Path", "Pick one tech direction that fits your background and goals.", [
        p("Frontend Dev",       [n("HTML / CSS / JS"), n("React"), n("Visual / creative"), n("Good for designers")]),
        p("Backend Dev",        [n("Python / Java / Node"), n("APIs & logic"), n("Good for analysts"), n("Strong job market")]),
        p("Data / AI",          [n("Python + SQL"), n("Analytics mindset"), n("Good for finance/science"), n("Growing fast")]),
        p("QA / Testing",       [n("Attention to detail"), n("Good for methodical"), n("Low barrier entry"), n("Path to SDET")]),
        p("Milestone",          [n("One path chosen and started", "milestone")]),
      ]),
      lv("buildfoundation", "Build Foundation", "Get the core skills in 3–6 months of focused learning.", [
        p("Learning Plan",      [n("Daily 2-hour commitment"), n("Structured course"), n("Project-based learning"), n("Track daily progress")]),
        p("First Language",     [n("Python or JavaScript"), n("Core syntax"), n("Build mini projects"), n("Code every day")]),
        p("Web Basics",         [n("HTML + CSS"), n("How websites work"), n("Browser tools"), n("Responsive design")]),
        p("First Projects",     [n("Calculator"), n("To-do app"), n("Weather app"), n("Portfolio website")]),
        p("Milestone",          [n("3 projects live on GitHub", "milestone")]),
      ]),
      lv("jobready", "Job Ready", "Put your best foot forward and land your first tech role.", [
        p("Resume",             [n("Tech resume format"), n("Projects as experience"), n("Bootcamp / course listed"), n("ATS keywords")]),
        p("Portfolio",          [n("GitHub profile"), n("Portfolio site"), n("LinkedIn rebranded"), n("Tech headline")]),
        p("Network",            [n("Attend meetups"), n("LinkedIn outreach"), n("Community join"), n("Referrals via network")]),
        p("Applications",       [n("50+ applications"), n("Junior / entry roles"), n("Bootcamp hiring partner"), n("Follow up consistently")]),
        p("Milestone",          [n("First Tech Job Offer", "milestone")]),
      ]),
    ],
  };
})();

/* ── EXPORT ─────────────────────────────────────────────────── */
const stageRoadmapsData = [
  studentData, graduateFresherData, juniorDeveloperData, testerQaData,
  workingDeveloperData, seniorDeveloperData, techLeadData, careerSwitcherData,
];

export default stageRoadmapsData;
