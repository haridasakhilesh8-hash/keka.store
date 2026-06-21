/* ────────────────────────────────────────────────────────────────
   growthRoadmapsData.js  —  11 growth / transition roadmaps
   Fixed tabs: Start Point | Skill Gap | Transition Path | Milestones | Destination
──────────────────────────────────────────────────────────────── */

function mkT() {
  let ni = 0, pi = 0;
  return {
    n:  (title, type = "required") => ({ id: `n${++ni}`, title, type }),
    p:  (title, nodes)             => ({ id: `p${++pi}`, title, nodes }),
    lv: (id, label, goal, phases)  => ({ id, label, goal, phases }),
  };
}

/* ── STUDENT → SOFTWARE DEVELOPER ───────────────────────────── */
const studentToDeveloper = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "student-to-developer", title: "Student → Software Developer",
    subtitle: "The roadmap from college student to landing your first software developer job.",
    category: "Growth", accent: "#00E5B0", icon: "🎓",
    bestFor: "Students in school / college with 0 experience",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are right now — what you know and don't know.", [
        p("Current State",    [n("Studying CS / non-CS"), n("Some programming basics"), n("No real projects"), n("No job experience")]),
        p("Resources",        [n("Internet & YouTube"), n("College courses"), n("Laptop available"), n("Time to learn")]),
        p("Motivations",      [n("Want a job in tech"), n("Drawn to building things"), n("Good earning potential"), n("Flexibility")]),
        p("Challenges",       [n("Not sure what to learn first"), n("Overwhelmed by options"), n("No portfolio"), n("No network")]),
      ]),
      lv("gap", "Skill Gap", "The skills you need to acquire to become a junior developer.", [
        p("Hard Skills",      [n("Programming language"), n("A framework"), n("Git & GitHub"), n("HTML/CSS/SQL basics")]),
        p("Project Skills",   [n("Build from scratch"), n("Debug independently"), n("Deploy online"), n("Write readable code")]),
        p("Soft Skills",      [n("Problem solving"), n("Written communication"), n("Research ability"), n("Taking feedback")]),
        p("Interview Skills", [n("DSA basics"), n("Explain your project"), n("Behavioral answers"), n("Technical Q&A")]),
      ]),
      lv("path", "Transition Path", "The exact steps to go from student to job-ready developer.", [
        p("Month 1–2",        [n("Pick JS or Python"), n("Core syntax mastered"), n("Build a mini project"), n("GitHub set up")]),
        p("Month 3–4",        [n("Pick a framework"), n("Build a full app"), n("Deploy online"), n("Write a README")]),
        p("Month 5–6",        [n("Build portfolio site"), n("3 projects live"), n("Resume written"), n("LinkedIn complete")]),
        p("Month 7+",         [n("Start applying"), n("Interview prep"), n("Mock interviews"), n("Network online")]),
      ]),
      lv("milestones", "Milestones", "The checkpoints that prove you're ready to move forward.", [
        p("Code Milestones",     [n("First program runs", "milestone"), n("First full app built", "milestone"), n("First project deployed", "milestone")]),
        p("Profile Milestones",  [n("GitHub with 3+ repos", "milestone"), n("Portfolio live online", "milestone"), n("Resume version 1 done", "milestone")]),
        p("Social Milestones",   [n("First LinkedIn post", "milestone"), n("First community joined", "milestone"), n("First cold message sent", "milestone")]),
        p("Job Milestones",      [n("First application sent", "milestone"), n("First interview booked", "milestone"), n("First offer received", "milestone")]),
      ]),
      lv("destination", "Destination", "What success looks like when you've completed the transition.", [
        p("Junior Dev Role",   [n("Entry-level job title"), n("₹3–6 LPA range"), n("Learning-first team"), n("Mentorship available")]),
        p("Day 1 Readiness",   [n("Can use Git daily"), n("Can read existing code"), n("Can pick up tasks"), n("Asks good questions")]),
        p("First 90 Days",     [n("Shipped first task"), n("Learned the stack"), n("Joined code reviews"), n("Set up dev environment")]),
        p("Growth From Here",  [n("Junior → Mid in 2 years"), n("Specialize in one area"), n("Build side projects"), n("Mentor others later")]),
      ]),
    ],
  };
})();

/* ── GRADUATE → FIRST JOB ────────────────────────────────────── */
const graduateToFirstJob = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "graduate-to-first-job", title: "Graduate → First Job",
    subtitle: "Turn your degree into your first professional software job.",
    category: "Growth", accent: "#34d399", icon: "🌱",
    bestFor: "Recent graduates with CS or non-CS degrees",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are: degree in hand, job market ahead.", [
        p("Current State",    [n("Degree completed"), n("Some coding exposure"), n("No job yet"), n("Nervous about hiring")]),
        p("What You Have",    [n("Degree certificate"), n("Some academic projects"), n("Basic programming"), n("A little time")]),
        p("What's Missing",   [n("Real project portfolio"), n("Interview experience"), n("Industry tools"), n("Professional network")]),
        p("Market Reality",   [n("Competitive market"), n("10–100 applicants per role"), n("ATS filters"), n("Skills > Degree")]),
      ]),
      lv("gap", "Skill Gap", "The exact gaps between your academic skills and job-market expectations.", [
        p("Technical Gaps",   [n("Framework knowledge"), n("Git / PR workflow"), n("Deployment skills"), n("Code quality habits")]),
        p("Project Gaps",     [n("No industry-level project"), n("No deployed app"), n("No team project"), n("No GitHub history")]),
        p("Profile Gaps",     [n("No LinkedIn presence"), n("Weak resume"), n("No portfolio site"), n("No references")]),
        p("Interview Gaps",   [n("DSA unfamiliar"), n("Can't explain projects"), n("No mock practice"), n("HR round unprepared")]),
      ]),
      lv("path", "Transition Path", "Close the gaps with a focused 3–4 month plan.", [
        p("Month 1",          [n("Choose target role"), n("Learn core framework"), n("Build project 1"), n("Start GitHub activity")]),
        p("Month 2",          [n("Complete project 2"), n("Deploy both projects"), n("Write README files"), n("Polish resume")]),
        p("Month 3",          [n("Build portfolio site"), n("Start DSA basics"), n("Mock interviews × 5"), n("Apply daily")]),
        p("Month 4",          [n("50 apps sent"), n("Follow up on leads"), n("Referrals asked"), n("Stay consistent")]),
      ]),
      lv("milestones", "Milestones", "Checkpoints on the way from graduate to first offer.", [
        p("Skill",           [n("Framework fundamentals done", "milestone"), n("First solo project deployed", "milestone")]),
        p("Profile",         [n("Resume reviewed by 2 people", "milestone"), n("LinkedIn 100+ connections", "milestone"), n("Portfolio live", "milestone")]),
        p("Applications",    [n("First 10 applications sent", "milestone"), n("First interview call received", "milestone")]),
        p("Offer",           [n("First technical round cleared", "milestone"), n("Offer letter received", "milestone")]),
      ]),
      lv("destination", "Destination", "You've landed your first software job — what to expect.", [
        p("First Role",       [n("Junior title"), n("Startup or service company"), n("₹3.5–7 LPA"), n("1-year commitment plan")]),
        p("First Month",      [n("Set up dev environment"), n("Shadow senior devs"), n("Read existing codebase"), n("Ask questions freely")]),
        p("First Quarter",    [n("Delivered first ticket"), n("Join code reviews"), n("Stand-ups habit built"), n("Trust established")]),
        p("First Year",       [n("Stack proficiency gained"), n("1–2 features owned"), n("Raise or role change discussion"), n("Job-hop plan formed")]),
      ]),
    ],
  };
})();

/* ── FRESHER → DEVELOPER ─────────────────────────────────────── */
const fresherToDeveloper = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "fresher-to-developer", title: "Fresher → Developer",
    subtitle: "Move from zero experience to your first developer job with a structured plan.",
    category: "Growth", accent: "#60a5fa", icon: "💻",
    bestFor: "Anyone with 0 professional experience targeting a dev role",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "You're starting from scratch — that's fine, it's the most honest place.", [
        p("Current Reality",  [n("No job experience"), n("Self-taught or bootcamp"), n("Motivated but unclear"), n("Limited network")]),
        p("What You Know",    [n("Basic programming"), n("Maybe 1 tutorial project"), n("HTML or Python intro"), n("Git very basics")]),
        p("Mindset",          [n("Progress over perfection"), n("Consistency is key"), n("Job takes 3–9 months"), n("Rejection is normal")]),
        p("Target",           [n("First developer title"), n("Any company size"), n("Any domain"), n("Learning environment")]),
      ]),
      lv("gap", "Skill Gap", "What separates you from 'hired fresher' right now.", [
        p("Code Gaps",         [n("Language depth"), n("Framework basics"), n("CRUD app experience"), n("API integration")]),
        p("Workflow Gaps",     [n("Git branches & PRs"), n("Code review basics"), n("Debugging habits"), n("Reading docs")]),
        p("Profile Gaps",      [n("No portfolio"), n("No GitHub history"), n("No resume"), n("No LinkedIn")]),
        p("Interview Gaps",    [n("Can't explain projects"), n("DSA zero practice"), n("HR prep missing"), n("Mock interview fear")]),
      ]),
      lv("path", "Transition Path", "90-day plan to get job-ready as a fresher.", [
        p("Days 1–30",         [n("Pick JavaScript or Python"), n("Core syntax daily"), n("LeetCode Easy × 10"), n("First mini project")]),
        p("Days 31–60",        [n("Pick React or Node"), n("Build full CRUD app"), n("Deploy on free tier"), n("GitHub daily commits")]),
        p("Days 61–90",        [n("Portfolio website"), n("2 more projects"), n("Resume + LinkedIn"), n("Apply + mock interviews")]),
        p("Ongoing",           [n("50 apps minimum"), n("Follow up weekly"), n("Refine from rejections"), n("Community networking")]),
      ]),
      lv("milestones", "Milestones", "The proof points that say you're ready.", [
        p("Code",              [n("Completed language basics", "milestone"), n("Built & deployed CRUD app", "milestone")]),
        p("Profile",           [n("Portfolio with 2+ projects live", "milestone"), n("Resume + LinkedIn done", "milestone")]),
        p("Applications",      [n("25 applications sent", "milestone"), n("First callback received", "milestone")]),
        p("Interviews",        [n("First technical round", "milestone"), n("Offer letter received", "milestone")]),
      ]),
      lv("destination", "Destination", "Fresher job secured — what now?", [
        p("Fresher Role",      [n("Junior / Trainee title"), n("₹2.5–5 LPA range"), n("Service / startup"), n("Probation period")]),
        p("First Week",        [n("Intro to codebase"), n("Set up environment"), n("Meet the team"), n("Shadow a senior dev")]),
        p("First 3 Months",    [n("First bug fixed"), n("First PR merged"), n("First code review given"), n("First feature owned")]),
        p("Year 1 Goal",       [n("Settled into the team"), n("Tech stack confident"), n("Ready for mid-level conversation")]),
      ]),
    ],
  };
})();

/* ── JUNIOR → MID-LEVEL ──────────────────────────────────────── */
const juniorToMidLevel = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "junior-to-mid-level", title: "Junior → Mid-Level Developer",
    subtitle: "Stop being hand-held and start owning your work — the transition from junior to mid.",
    category: "Growth", accent: "#a78bfa", icon: "⚡",
    bestFor: "Junior developers with 1–2 years experience",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are as a junior developer.", [
        p("Current Role",     [n("1–2 years experience"), n("Works on assigned tasks"), n("Needs frequent guidance"), n("PR reviews needed")]),
        p("Strengths",        [n("Knows the stack basics"), n("Can follow patterns"), n("Quick learner"), n("Team player")]),
        p("Limitations",      [n("Can't break down large tasks"), n("Unsure about trade-offs"), n("Limited testing habits"), n("Avoids complex code")]),
        p("Perception",       [n("Seen as learner"), n("Protected from hard tasks"), n("Needs direction"), n("Potential recognized")]),
      ]),
      lv("gap", "Skill Gap", "What distinguishes a mid-level developer from a junior.", [
        p("Technical Gap",    [n("Deep framework knowledge"), n("TypeScript / types"), n("Testing habits"), n("Performance awareness")]),
        p("Ownership Gap",    [n("Can't estimate well"), n("Needs task handholding"), n("Can't debug complex issues"), n("Low confidence in design")]),
        p("Delivery Gap",     [n("Works slow on unfamiliar"), n("Doesn't refactor"), n("Skips documentation"), n("Avoids code review")]),
        p("Mindset Gap",      [n("Waits for tasks"), n("Doesn't question scope"), n("Doesn't mentor anyone"), n("Doesn't flag risks")]),
      ]),
      lv("path", "Transition Path", "How to grow from junior to mid-level in 12–18 months.", [
        p("Quarter 1",        [n("TypeScript adoption"), n("Unit testing habit"), n("Deeper framework study"), n("Code review participation")]),
        p("Quarter 2",        [n("Own a full feature end-to-end"), n("Estimate more accurately"), n("Identify tech debt"), n("Help a junior")]),
        p("Quarter 3",        [n("System design basics"), n("Architecture discussion"), n("Write documentation"), n("Take on incidents")]),
        p("Quarter 4",        [n("Mid-level JD comparison"), n("Role conversation with manager"), n("Portfolio update"), n("Next company research")]),
      ]),
      lv("milestones", "Milestones", "You're mid-level when you've hit these.", [
        p("Technical",        [n("TypeScript in daily code", "milestone"), n("Own the test suite for a module", "milestone")]),
        p("Delivery",         [n("Feature owned start to finish", "milestone"), n("Estimate accepted without changes", "milestone")]),
        p("Team",             [n("Junior improved with your help", "milestone"), n("PR approved without edits", "milestone")]),
        p("Role",             [n("Mid-level title confirmed", "milestone"), n("Salary updated", "milestone")]),
      ]),
      lv("destination", "Destination", "What life as a mid-level developer looks like.", [
        p("Role Profile",     [n("Mid-Level / SDE 2 title"), n("₹8–18 LPA range"), n("Owns features"), n("Trusted team member")]),
        p("Day-to-Day",       [n("Works independently"), n("Helps juniors"), n("Attends design reviews"), n("Proactively flags issues")]),
        p("Next Goal",        [n("Senior Developer path"), n("Specialization depth"), n("Leadership skills begin"), n("3–5 year plan")]),
      ]),
    ],
  };
})();

/* ── MID-LEVEL → SENIOR ──────────────────────────────────────── */
const midToSenior = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "mid-to-senior", title: "Mid-Level → Senior Developer",
    subtitle: "From feature-owner to technical leader — how to earn the senior title.",
    category: "Growth", accent: "#FF5E7E", icon: "🏆",
    bestFor: "Mid-level developers with 3–5 years experience",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are as a mid-level developer right now.", [
        p("Current Role",     [n("2–5 years experience"), n("Owns features"), n("Reviewed regularly"), n("Comfortable with stack")]),
        p("Strengths",        [n("Independent worker"), n("Reliable delivery"), n("Knows the codebase"), n("Good team member")]),
        p("Limitations",      [n("Limited architecture scope"), n("Doesn't influence tech direction"), n("Mentors less than ideal"), n("Reactive not proactive")]),
        p("Ceiling",          [n("Promotions stalled"), n("No new challenges"), n("Seen as 'comfortable' not 'growing'")]),
      ]),
      lv("gap", "Skill Gap", "The visible difference between mid-level and senior.", [
        p("Architecture",     [n("System design from scratch"), n("Trade-off documentation"), n("Multi-service thinking"), n("Data modeling depth")]),
        p("Impact",           [n("Cross-team influence"), n("Tech debt leadership"), n("Strategic refactoring"), n("Platform thinking")]),
        p("Mentoring",        [n("Growing junior devs"), n("Running tech talks"), n("Writing design docs"), n("Code review culture")]),
        p("Communication",    [n("Stakeholder updates"), n("Risk flagging"), n("Decision documentation"), n("Cross-functional clarity")]),
      ]),
      lv("path", "Transition Path", "The 12–24 month path from mid to senior.", [
        p("Month 1–3",        [n("System design study"), n("Write first ADR"), n("Volunteer for complex task"), n("Lead a code review session")]),
        p("Month 4–6",        [n("Own a system-level change"), n("Mentor one junior"), n("Present in team demo"), n("Map a tech debt area")]),
        p("Month 7–12",       [n("Lead a cross-team feature"), n("Drive a refactoring effort"), n("Incident ownership"), n("Write runbook")]),
        p("Month 13–24",      [n("Senior title conversation"), n("Industry comparison"), n("Portfolio update"), n("Impact story ready")]),
      ]),
      lv("milestones", "Milestones", "These prove you've arrived at senior level.", [
        p("Technical",        [n("System designed independently", "milestone"), n("Architecture review led", "milestone")]),
        p("Team",             [n("Junior promoted with your help", "milestone"), n("Knowledge session delivered", "milestone")]),
        p("Delivery",         [n("Cross-team feature shipped", "milestone"), n("Incident handled independently", "milestone")]),
        p("Title",            [n("Senior title confirmed", "milestone"), n("₹18–35 LPA range reached", "milestone")]),
      ]),
      lv("destination", "Destination", "Life as a senior developer and what comes next.", [
        p("Senior Role",      [n("SDE 3 / Senior title"), n("₹18–35 LPA"), n("Architecture participation"), n("Mentoring expected")]),
        p("Responsibilities", [n("System design ownership"), n("Code quality culture"), n("Risk identification"), n("Delivery confidence")]),
        p("Next Choices",     [n("Tech Lead path"), n("Staff / Principal Engineer"), n("Engineering Manager"), n("Domain specialist")]),
      ]),
    ],
  };
})();

/* ── SENIOR → TECH LEAD ──────────────────────────────────────── */
const seniorToTechLead = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "senior-to-tech-lead", title: "Senior Developer → Tech Lead",
    subtitle: "From deep technical expert to team delivery leader — the Tech Lead transition.",
    category: "Growth", accent: "#f59e0b", icon: "🎯",
    bestFor: "Senior developers targeting team leadership",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are as a senior developer.", [
        p("Current Role",     [n("Senior / SDE 3 title"), n("5+ years experience"), n("Technical authority"), n("Individual contributor")]),
        p("Strengths",        [n("Deep technical skills"), n("Trusted by team"), n("System design capable"), n("Reliable delivery")]),
        p("What's Next",      [n("Tech Lead opportunity"), n("Team ownership"), n("Delivery accountability"), n("Stakeholder visibility")]),
        p("Concerns",         [n("Less coding time"), n("People management stress"), n("New accountability type"), n("Manager vs maker dilemma")]),
      ]),
      lv("gap", "Skill Gap", "What you need to add beyond your technical skills.", [
        p("Delivery Skills",  [n("Sprint planning"), n("Estimation"), n("Risk management"), n("Release coordination")]),
        p("People Skills",    [n("1-on-1 conversations"), n("Conflict resolution"), n("Feedback delivery"), n("Team motivation")]),
        p("Communication",    [n("Stakeholder reporting"), n("Scope negotiation"), n("Executive summaries"), n("Cross-team alignment")]),
        p("Process Skills",   [n("Agile facilitation"), n("Tech debt strategy"), n("Hiring involvement"), n("Incident leadership")]),
      ]),
      lv("path", "Transition Path", "How to grow into the Tech Lead role over 6–12 months.", [
        p("Month 1–2",        [n("Shadow current lead"), n("Run one stand-up"), n("Volunteer for planning"), n("Stakeholder intro")]),
        p("Month 3–4",        [n("Lead one sprint end-to-end"), n("Write sprint report"), n("Unblock a teammate"), n("1-on-1 with junior")]),
        p("Month 5–6",        [n("Own a feature delivery"), n("Stakeholder status update"), n("Risk flag proactively"), n("Team retrospective")]),
        p("Month 7–12",       [n("Full sprint ownership"), n("Team growth plan"), n("Tech direction input"), n("Title conversation")]),
      ]),
      lv("milestones", "Milestones", "The visible achievements that prove you're Tech Lead ready.", [
        p("Delivery",         [n("Sprint delivered on time", "milestone"), n("Feature shipped end-to-end", "milestone")]),
        p("People",           [n("Junior mentored actively", "milestone"), n("Conflict navigated successfully", "milestone")]),
        p("Communication",    [n("Stakeholder report accepted", "milestone"), n("Scope negotiation won", "milestone")]),
        p("Title",            [n("Tech Lead title official", "milestone"), n("₹25–45 LPA range", "milestone")]),
      ]),
      lv("destination", "Destination", "What Tech Lead life looks like — and what's next.", [
        p("Tech Lead Role",   [n("Tech Lead / Engineering Lead"), n("₹25–45 LPA"), n("Delivery accountability"), n("Team size: 3–8")]),
        p("Daily Work",       [n("40% coding, 60% team"), n("Meetings: planning + review"), n("Async communication"), n("Stakeholder updates")]),
        p("Next Paths",       [n("Engineering Manager"), n("Solution Architect"), n("Principal Engineer"), n("CTO path")]),
      ]),
    ],
  };
})();

/* ── TECH LEAD → ARCHITECT ───────────────────────────────────── */
const techLeadToArchitect = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "tech-lead-to-architect", title: "Tech Lead → Solution Architect",
    subtitle: "From team-level technical leader to cross-organization architecture decision maker.",
    category: "Growth", accent: "#FF5E7E", icon: "🏛️",
    bestFor: "Tech Leads with 8+ years targeting architect roles",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "You're a Tech Lead — strong delivery, technical respect, team ownership.", [
        p("Current Level",    [n("Tech Lead role"), n("Team scope"), n("System-level decisions"), n("Sprint ownership")]),
        p("Strengths",        [n("Deep technical judgment"), n("Delivery track record"), n("Team trust"), n("System thinking")]),
        p("Scope Limitation", [n("One team / one system"), n("Limited cross-org impact"), n("Not yet in enterprise design"), n("Missing vendor evaluation")]),
        p("What Architect Means",[n("Multi-team scope"), n("Technology strategy"), n("Enterprise pattern selection"), n("Business alignment")]),
      ]),
      lv("gap", "Skill Gap", "The capability expansion needed to move from lead to architect.", [
        p("Enterprise Architecture",[n("Enterprise integration patterns"), n("Event-driven architecture"), n("SOA / microservices depth"), n("Legacy modernization")]),
        p("Business Alignment",   [n("Cost / ROI of tech choices"), n("Business domain understanding"), n("Non-functional requirements"), n("Compliance considerations")]),
        p("Communication",        [n("Architecture diagrams (C4)"), n("ADR writing"), n("Executive presentations"), n("Vendor negotiations")]),
        p("Tools",                [n("AWS / Azure solution design"), n("IaC tools"), n("API management"), n("Observability patterns")]),
      ]),
      lv("path", "Transition Path", "The 12–24 month path from Tech Lead to Architect.", [
        p("Phase 1: Expand Scope", [n("Join cross-team design reviews"), n("Write architecture proposals"), n("Lead RFC discussions"), n("Learn C4 diagramming")]),
        p("Phase 2: Business Lens",[n("Attend product planning"), n("Learn cost modeling"), n("Understand SLA requirements"), n("Present to stakeholders")]),
        p("Phase 3: Enterprise",   [n("Enterprise pattern study"), n("Cloud certification"), n("Evaluate vendors"), n("Write org-level ADRs")]),
        p("Phase 4: Role",         [n("Architect title discussion"), n("Portfolio of decisions"), n("Industry peer network"), n("Thought leadership")]),
      ]),
      lv("milestones", "Milestones", "The moments that mark your architect-level credibility.", [
        p("Architecture",     [n("Cross-team design owned", "milestone"), n("Enterprise ADR published", "milestone")]),
        p("Business",         [n("Cost analysis delivered", "milestone"), n("Stakeholder decision influenced", "milestone")]),
        p("Knowledge",        [n("Cloud certification", "milestone"), n("Architecture presentation given", "milestone")]),
        p("Title",            [n("Solution Architect title", "milestone"), n("₹40–80 LPA range", "milestone")]),
      ]),
      lv("destination", "Destination", "Architect life and the impact you'll have.", [
        p("Architect Role",   [n("Solution / Enterprise Architect"), n("₹40–80 LPA"), n("Multi-team / org scope"), n("Strategic tech decisions")]),
        p("Day-to-Day",       [n("Architecture reviews"), n("Design sessions"), n("Stakeholder meetings"), n("Vendor evaluations")]),
        p("Next Level",       [n("CTO / VP Engineering"), n("Enterprise Architect"), n("Distinguished Engineer"), n("Consulting / advisory")]),
      ]),
    ],
  };
})();

/* ── TECH LEAD → MANAGER ─────────────────────────────────────── */
const techLeadToManager = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "tech-lead-to-manager", title: "Tech Lead → Engineering Manager",
    subtitle: "Transition from building systems to building people — the EM career path.",
    category: "Growth", accent: "#a78bfa", icon: "👥",
    bestFor: "Tech Leads considering the people management path",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "You lead a team technically — now you want to lead them humanly.", [
        p("Current Role",     [n("Tech Lead title"), n("Delivery accountability"), n("Technical decisions"), n("Team mentoring")]),
        p("Motivations",      [n("Love growing people"), n("Organizational impact"), n("Hiring decisions"), n("Higher comp ceiling")]),
        p("Concerns",         [n("Less coding"), n("Hard performance conversations"), n("Politics & org dynamics"), n("Metrics shift from code")]),
        p("Decision Check",   [n("IC path vs EM path"), n("Can return to IC?"), n("Org support?"), n("Risk assessment")]),
      ]),
      lv("gap", "Skill Gap", "What EMs do that Tech Leads typically don't.", [
        p("People Management", [n("Performance reviews"), n("Promotion decisions"), n("PIP / underperformance"), n("Career mapping")]),
        p("Org Design",        [n("Team structure"), n("Hiring strategy"), n("Role clarity"), n("Culture building")]),
        p("Strategy",          [n("OKR writing"), n("Headcount planning"), n("Budget awareness"), n("Roadmap alignment")]),
        p("Exec Communication",[n("Quarterly reviews"), n("Risk escalation"), n("Team health reporting"), n("Influence without authority")]),
      ]),
      lv("path", "Transition Path", "How to move into the EM role in 6–18 months.", [
        p("Phase 1: Prep",     [n("Management book study"), n("Shadow current EM"), n("Take extra 1-on-1s"), n("Feedback model practice")]),
        p("Phase 2: Pilot",    [n("Manage 1–2 people formally"), n("Run performance cycle"), n("Lead hiring loop"), n("Write team goals")]),
        p("Phase 3: Role",     [n("EM title discussion"), n("Full team ownership"), n("Deliver 360 reviews"), n("OKR authorship")]),
        p("Phase 4: Growth",   [n("Build team process"), n("Grow team from 4 to 8"), n("Cross-team influence"), n("EM community join")]),
      ]),
      lv("milestones", "Milestones", "Key achievements that prove your EM readiness.", [
        p("People",            [n("First 1-on-1 structure built", "milestone"), n("First performance review delivered", "milestone")]),
        p("Hiring",            [n("First hire completed", "milestone"), n("Interview process designed", "milestone")]),
        p("Org",               [n("OKR for team written", "milestone"), n("Team structure change led", "milestone")]),
        p("Title",             [n("Engineering Manager title", "milestone"), n("₹35–70 LPA range", "milestone")]),
      ]),
      lv("destination", "Destination", "What Engineering Manager life looks like.", [
        p("EM Role",           [n("Engineering Manager title"), n("₹35–70 LPA"), n("6–12 direct reports"), n("Delivery + people scope")]),
        p("Weekly Cadence",    [n("1-on-1s with each report"), n("Sprint planning"), n("Stakeholder sync"), n("Hiring pipeline review")]),
        p("Next Level",        [n("Senior EM / Director"), n("VP Engineering"), n("CTO track"), n("Entrepreneur path")]),
      ]),
    ],
  };
})();

/* ── TESTER → AUTOMATION ENGINEER ───────────────────────────── */
const testerToAutomation = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "tester-to-automation", title: "Tester → Automation Engineer",
    subtitle: "Evolve from manual quality gatekeeper to automation engineering specialist.",
    category: "Growth", accent: "#FFB84D", icon: "✅",
    bestFor: "Manual QA testers with 1–3 years of experience",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "Where you are as a manual tester.", [
        p("Current Skills",   [n("Test case design"), n("Bug reporting"), n("Manual regression"), n("Exploratory testing")]),
        p("Tools You Use",    [n("JIRA / TestRail"), n("Browsers + DevTools"), n("Postman maybe"), n("Excel test plans")]),
        p("Frustrations",     [n("Repetitive regression cycles"), n("Slow feedback loops"), n("Career ceiling fear"), n("Automation seems hard")]),
        p("Opportunity",      [n("Automation = 2–3x salary"), n("SDET market growing"), n("Skills transfer well"), n("Code not as hard as feared")]),
      ]),
      lv("gap", "Skill Gap", "What separates a manual tester from an automation engineer.", [
        p("Programming",      [n("Java or JavaScript basics"), n("OOP for test code"), n("Functions & classes"), n("File / string handling")]),
        p("Framework",        [n("Selenium or Playwright"), n("Page Object Model"), n("Test runner setup"), n("Assertion library")]),
        p("CI/CD",            [n("GitHub Actions basics"), n("Running tests in pipeline"), n("Reports & notifications"), n("Fail-gate logic")]),
        p("API Testing",      [n("HTTP concepts"), n("Rest Assured or Supertest"), n("JSON validation"), n("Authentication testing")]),
      ]),
      lv("path", "Transition Path", "6-month plan to become an automation engineer.", [
        p("Month 1–2",        [n("Java or JS core syntax"), n("OOP basics"), n("Selenium setup"), n("First automated test")]),
        p("Month 3",          [n("Page Object Model"), n("Multiple test cases"), n("TestNG / Jest runner"), n("Basic CI setup")]),
        p("Month 4",          [n("API test suite"), n("Postman → code migration"), n("Schema validation"), n("Test data management")]),
        p("Month 5–6",        [n("Full framework built"), n("CI/CD pipeline live"), n("BDD layer added"), n("SDET job applications")]),
      ]),
      lv("milestones", "Milestones", "Proof you've transitioned to automation.", [
        p("Code",             [n("First test script passing", "milestone"), n("10+ tests in Page Object Model", "milestone")]),
        p("Framework",        [n("Full UI test suite built", "milestone"), n("API suite added", "milestone")]),
        p("CI",               [n("Tests running in pipeline", "milestone"), n("Test report generated", "milestone")]),
        p("Job",              [n("SDET interview given", "milestone"), n("SDET offer received", "milestone")]),
      ]),
      lv("destination", "Destination", "What your career looks like as an Automation / SDET engineer.", [
        p("SDET Role",        [n("SDET / QA Automation title"), n("₹8–20 LPA range"), n("Dev + test skills"), n("CI pipeline owner")]),
        p("Day-to-Day",       [n("Write test code daily"), n("Review PRs for testability"), n("Maintain CI suite"), n("Collaborate with devs")]),
        p("Next Growth",      [n("QA Lead / Manager"), n("Performance engineer"), n("Security testing"), n("Platform QA / Developer Productivity")]),
      ]),
    ],
  };
})();

/* ── DEVELOPER → CLOUD ENGINEER ──────────────────────────────── */
const developerToCloud = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "developer-to-cloud", title: "Developer → Cloud Engineer",
    subtitle: "Move from application code to cloud infrastructure — the cloud engineering path.",
    category: "Growth", accent: "#34d399", icon: "☁️",
    bestFor: "Software developers with 2+ years looking to move into cloud",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "You write application code — now you want to own the infrastructure.", [
        p("Current Skills",   [n("Language + framework proficiency"), n("Git & CI/CD basics"), n("API development"), n("Some database experience")]),
        p("Why Cloud",        [n("High demand market"), n("₹15–50 LPA potential"), n("Infrastructure is now code"), n("Scaling problems are interesting")]),
        p("Current Gaps",     [n("No cloud console experience"), n("No IaC knowledge"), n("No networking depth"), n("No cost/security mindset")]),
        p("Choose Platform",  [n("AWS (most demand)"), n("Azure (enterprise heavy)"), n("GCP (data / AI strong)"), n("Multi-cloud later")]),
      ]),
      lv("gap", "Skill Gap", "What a cloud engineer knows that an app developer doesn't.", [
        p("Cloud Fundamentals",[n("Compute: EC2 / VM"), n("Storage: S3 / Blob"), n("Networking: VPC / VNet"), n("IAM & security")]),
        p("IaC",              [n("Terraform basics"), n("AWS CloudFormation"), n("Bicep / ARM templates"), n("State management")]),
        p("DevOps",           [n("Docker fundamentals"), n("Kubernetes basics"), n("CI/CD pipelines"), n("Monitoring / alerts")]),
        p("Security",         [n("IAM roles & policies"), n("Secrets management"), n("Network security groups"), n("Compliance basics")]),
      ]),
      lv("path", "Transition Path", "12-month plan from dev to cloud engineer.", [
        p("Month 1–3",        [n("AWS / Azure free tier setup"), n("EC2 / VMs"), n("S3 / Blob storage"), n("Networking basics")]),
        p("Month 4–6",        [n("Terraform intro"), n("Docker + ECS / ACI"), n("CI/CD with cloud"), n("Associate certification")]),
        p("Month 7–9",        [n("Kubernetes (EKS / AKS)"), n("Observability: CloudWatch / Monitor"), n("Cost optimization"), n("Security hardening")]),
        p("Month 10–12",      [n("Architect level cert"), n("IaC full project"), n("Cloud role applications"), n("Interview prep")]),
      ]),
      lv("milestones", "Milestones", "Proving you've made the shift to cloud engineering.", [
        p("Hands-On",         [n("App deployed on cloud", "milestone"), n("IaC project built", "milestone")]),
        p("Certs",            [n("Associate cert passed", "milestone"), n("Professional / Architect cert started", "milestone")]),
        p("Projects",         [n("Kubernetes cluster deployed", "milestone"), n("Monitoring set up end-to-end", "milestone")]),
        p("Job",              [n("Cloud role interview given", "milestone"), n("Cloud Engineer offer received", "milestone")]),
      ]),
      lv("destination", "Destination", "Life as a Cloud Engineer.", [
        p("Cloud Role",       [n("Cloud / DevOps Engineer title"), n("₹15–50 LPA"), n("Platform ownership"), n("Multi-team support")]),
        p("Day-to-Day",       [n("IaC changes daily"), n("Cost reviews"), n("Incident response"), n("Developer enablement")]),
        p("Next Growth",      [n("Cloud Architect"), n("Platform Engineer"), n("SRE"), n("Cloud security specialist")]),
      ]),
    ],
  };
})();

/* ── DEVELOPER → AI ENGINEER ─────────────────────────────────── */
const developerToAI = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "developer-to-ai", title: "Developer → AI Engineer",
    subtitle: "From general software developer to building AI-powered products and systems.",
    category: "Growth", accent: "#e879f9", icon: "🧠",
    bestFor: "Software developers with 2+ years wanting to work in AI/ML/LLM",
    defaultLevel: "start",
    levels: [
      lv("start", "Start Point", "You build software — now you want to build AI-powered products.", [
        p("Current Skills",   [n("Programming language (Python / JS)"), n("REST APIs"), n("Data handling basics"), n("Git & deployment")]),
        p("Why AI Engineering",[n("Exploding job market"), n("₹20–80 LPA potential"), n("Exciting problem space"), n("LLMs changed the field")]),
        p("Common Paths",     [n("LLM / Prompt Engineering"), n("ML Engineering"), n("AI Product Engineering"), n("Data Science")]),
        p("Current Gaps",     [n("No ML fundamentals"), n("No LLM API experience"), n("No vector DB knowledge"), n("No AI system design")]),
      ]),
      lv("gap", "Skill Gap", "What an AI engineer knows that a regular developer needs to learn.", [
        p("ML Basics",        [n("Supervised / unsupervised learning"), n("Model evaluation metrics"), n("Feature engineering basics"), n("scikit-learn")]),
        p("LLM Skills",       [n("OpenAI / Claude API"), n("Prompt engineering"), n("RAG architecture"), n("Agent frameworks")]),
        p("AI Stack",         [n("Vector databases"), n("Embeddings"), n("LangChain / LlamaIndex"), n("Orchestration patterns")]),
        p("MLOps / Infra",    [n("Model serving"), n("GPU basics", "optional"), n("Monitoring LLM outputs"), n("Evaluation pipelines")]),
      ]),
      lv("path", "Transition Path", "9-month path from developer to AI engineer.", [
        p("Month 1–2",        [n("Python for data"), n("numpy / pandas basics"), n("LLM API first project"), n("Prompt engineering study")]),
        p("Month 3–4",        [n("RAG project built"), n("Vector DB integrated"), n("LangChain / LlamaIndex"), n("Evaluation setup")]),
        p("Month 5–6",        [n("Agent system built"), n("Multi-tool orchestration"), n("Production deployment"), n("Monitoring added")]),
        p("Month 7–9",        [n("AI engineering portfolio"), n("Open-source contribution"), n("Blog / demo video"), n("AI role applications")]),
      ]),
      lv("milestones", "Milestones", "Proving you've made the transition to AI engineering.", [
        p("Foundational",     [n("LLM API project shipped", "milestone"), n("RAG system built", "milestone")]),
        p("Intermediate",     [n("Agent with tools working", "milestone"), n("Vector DB integrated", "milestone")]),
        p("Advanced",         [n("Production AI app deployed", "milestone"), n("Evaluation pipeline built", "milestone")]),
        p("Career",           [n("AI engineer portfolio published", "milestone"), n("AI role offer received", "milestone")]),
      ]),
      lv("destination", "Destination", "What working as an AI Engineer looks like.", [
        p("AI Engineer Role", [n("AI / ML / LLM Engineer title"), n("₹20–80 LPA"), n("Cutting-edge stack"), n("Research + engineering blend")]),
        p("Day-to-Day",       [n("LLM API integration"), n("Prompt optimization"), n("Evaluation runs"), n("Vector store management")]),
        p("Next Growth",      [n("AI Architect"), n("ML Engineering Lead"), n("AI Product Manager"), n("Research Engineer")]),
      ]),
    ],
  };
})();

/* ── EXPORT ─────────────────────────────────────────────────── */
const growthRoadmapsData = [
  studentToDeveloper, graduateToFirstJob, fresherToDeveloper, juniorToMidLevel,
  midToSenior, seniorToTechLead, techLeadToArchitect, techLeadToManager,
  testerToAutomation, developerToCloud, developerToAI,
];

export default growthRoadmapsData;
