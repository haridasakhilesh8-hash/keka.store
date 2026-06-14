export const stages = [
  { id:1,  icon:"🎓", title:"Student",              tag:"Pre-career",   accent:"#00E5B0", desc:"Still in college or university. Exploring what tech careers exist and where to start." },
  { id:2,  icon:"📋", title:"Graduate / Job Seeker", tag:"Seeking",     accent:"#00c4ff", desc:"Degree done. Now navigating the job market and figuring out which role fits you." },
  { id:3,  icon:"🌱", title:"Fresher",               tag:"Entry",       accent:"#FFB84D", desc:"Just starting your first role. Building real skills and professional habits." },
  { id:4,  icon:"💻", title:"Junior Developer",       tag:"0–2 yrs",    accent:"#a78bfa", desc:"Writing code daily, growing fast, and learning how teams ship real products." },
  { id:5,  icon:"⚡", title:"Mid-Level Developer",    tag:"3–5 yrs",    accent:"#FF5E7E", desc:"Owning features end-to-end and making decisions that affect the product." },
  { id:6,  icon:"🏆", title:"Senior Developer",       tag:"5–8 yrs",    accent:"#34d399", desc:"Designing systems, setting standards, and leading technical direction for your team." },
  { id:7,  icon:"🎯", title:"Tech Lead",              tag:"Leadership",  accent:"#f59e0b", desc:"Running cross-team architecture, mentoring engineers, and aligning tech with business goals." },
  { id:8,  icon:"🔄", title:"Career Switcher",        tag:"Transition",  accent:"#c084fc", desc:"Coming from another field. You have context — now you need a structured fast-track into tech." },
];

export const interests = [
  { id:1,  icon:"🎨", title:"Design",      desc:"UI, UX, product design, and visual systems.",        accent:"#FFB84D", paths:["UI/UX","Product Design","Frontend"] },
  { id:2,  icon:"💻", title:"Coding",      desc:"Building software, APIs, and applications.",         accent:"#00E5B0", paths:["Frontend","Backend","Full Stack"] },
  { id:3,  icon:"🤖", title:"AI",          desc:"Machine learning, LLMs, and intelligent systems.",   accent:"#a78bfa", paths:["AI Engineer","Data Science","ML Ops"] },
  { id:4,  icon:"📊", title:"Data",        desc:"Analysis, visualization, and data-driven decisions.",accent:"#00c4ff", paths:["Data Analyst","Data Engineer","BI"] },
  { id:5,  icon:"✅", title:"Testing",     desc:"Quality, automation, and reliability engineering.",  accent:"#34d399", paths:["QA Automation","SDET","Test Architect"] },
  { id:6,  icon:"☁️", title:"Cloud",       desc:"Infrastructure, DevOps, and platform engineering.",  accent:"#60a5fa", paths:["DevOps","Cloud Engineer","SRE"] },
  { id:7,  icon:"📦", title:"Product",     desc:"Strategy, roadmaps, and product ownership.",         accent:"#FF5E7E", paths:["Product Manager","Business Analyst"] },
  { id:8,  icon:"👥", title:"Leadership",  desc:"Tech lead, architect, manager, and beyond.",         accent:"#f59e0b", paths:["Tech Lead","Architect","Engineering Manager"] },
];

export const careerPaths = [
  { id:1,  icon:"🎨", title:"Frontend",        accent:"#FFB84D", skills:["HTML/CSS","JavaScript","React","Tailwind"],       desc:"Build interfaces people love to use." },
  { id:2,  icon:"⚙️", title:"Backend",         accent:"#00E5B0", skills:["Node.js","Python","PostgreSQL","REST APIs"],      desc:"Power applications with robust APIs." },
  { id:3,  icon:"🔗", title:"Full Stack",       accent:"#00c4ff", skills:["React","Node.js","Databases","Deployment"],      desc:"Own the full product end-to-end." },
  { id:4,  icon:"☕", title:"Java",             accent:"#FF5E7E", skills:["Java","Spring Boot","Microservices","Maven"],    desc:"Enterprise-grade backend engineering." },
  { id:5,  icon:"⚛️", title:"React",            accent:"#a78bfa", skills:["Hooks","Redux","Next.js","Testing"],             desc:"Deep-dive the React ecosystem." },
  { id:6,  icon:"📄", title:"AEM / CMS",        accent:"#c084fc", skills:["AEM","Sling","JCR","HTL"],                      desc:"Enterprise content platforms." },
  { id:7,  icon:"🔧", title:"DevOps",           accent:"#f59e0b", skills:["Docker","Kubernetes","CI/CD","Terraform"],      desc:"Ship faster with automated pipelines." },
  { id:8,  icon:"☁️", title:"Cloud",            accent:"#60a5fa", skills:["AWS","Azure","Serverless","IaC"],               desc:"Build scalable cloud infrastructure." },
  { id:9,  icon:"🧠", title:"AI Engineer",      accent:"#a78bfa", skills:["Python","TensorFlow","LangChain","MLOps"],      desc:"Build with LLMs and ML models." },
  { id:10, icon:"✅", title:"QA Automation",    accent:"#34d399", skills:["Selenium","Cypress","Jest","API Testing"],      desc:"Make quality everyone's business." },
  { id:11, icon:"📊", title:"Data Analyst",     accent:"#FFB84D", skills:["SQL","Python","Tableau","Excel"],               desc:"Turn raw data into clear decisions." },
  { id:12, icon:"🎯", title:"Product Manager",  accent:"#FF5E7E", skills:["Strategy","OKRs","Analytics","Agile"],          desc:"Define what gets built and why." },
];

export const popularRoadmaps = [
  { title:"Frontend Developer",    stage:"Fresher → Mid",    weeks:16, icon:"🎨", accent:"#FFB84D" },
  { title:"Backend with Node.js",  stage:"Fresher → Mid",    weeks:18, icon:"⚙️", accent:"#00E5B0" },
  { title:"Full Stack in 6 Months",stage:"Graduate → Junior", weeks:24, icon:"🔗", accent:"#00c4ff" },
  { title:"AI Engineer",           stage:"Mid → Senior",      weeks:20, icon:"🧠", accent:"#a78bfa" },
  { title:"DevOps Fast Track",     stage:"Junior → Mid",      weeks:14, icon:"🔧", accent:"#f59e0b" },
  { title:"Career Switch to Tech", stage:"Non-tech → Junior", weeks:26, icon:"🔄", accent:"#FF5E7E" },
];

export const roadmapIncludes = [
  { icon:"🛠️", title:"Skills",            desc:"Core and advanced skills mapped to your target role and experience level.",        accent:"#00E5B0" },
  { icon:"🔨", title:"Tools",             desc:"Exact tools, frameworks, and platforms used in the industry right now.",            accent:"#00c4ff" },
  { icon:"🏗️", title:"Projects",          desc:"Real-world project ideas that build your portfolio and prove job-readiness.",       accent:"#FFB84D" },
  { icon:"📜", title:"Certifications",    desc:"Which certifications actually matter and which ones to skip for your role.",        accent:"#a78bfa" },
  { icon:"🎤", title:"Interview Topics",  desc:"Role-specific DSA, system design, and behavioral question guides.",                 accent:"#FF5E7E" },
  { icon:"📝", title:"Resume Keywords",   desc:"ATS-optimized keywords and phrases that match real job descriptions.",              accent:"#34d399" },
  { icon:"📈", title:"Growth Path",       desc:"Clear next steps after this role — how to level up, earn more, and lead.",         accent:"#f59e0b" },
];

export const roadmapSteps = [
  { step:1, title:"Learn Basics",    desc:"Core fundamentals — language, tools, and how the web works.", icon:"📖" },
  { step:2, title:"Pick a Path",     desc:"Choose your direction based on interest and market demand.",  icon:"🗺️" },
  { step:3, title:"Learn Skills",    desc:"Role-specific skills with curated resources and milestones.", icon:"🎓" },
  { step:4, title:"Build Projects",  desc:"Portfolio projects built for what hiring managers look for.", icon:"🏗️" },
  { step:5, title:"Polish Resume",   desc:"Role-specific resume with the keywords that get interviews.", icon:"📝" },
  { step:6, title:"Interview Prep",  desc:"DSA, system design, and behavioral prep by experience level.",icon:"🎯" },
  { step:7, title:"Apply for Jobs",  desc:"Smart targeting — right roles, right companies, right time.", icon:"🚀" },
  { step:8, title:"Grow",            desc:"Level up from this role into the next one, already mapped.",  icon:"📈" },
];

export const blogPosts = [
  { id:1, title:"How to Go from Fresher to Hired in 6 Months", desc:"A no-fluff guide to landing your first tech job with a structured plan.", tag:"Career", date:"June 5, 2025", readTime:"7 min", color:"#00E5B0" },
  { id:2, title:"Frontend vs Backend: Which Path Suits You?",  desc:"Breaking down differences, demand, salary, and which fits your strengths.", tag:"Paths",  date:"May 28, 2025", readTime:"5 min", color:"#FFB84D" },
  { id:3, title:"The 2025 Developer Roadmap You Actually Need", desc:"What the industry uses now and what to learn first.",                      tag:"Roadmap",date:"May 20, 2025", readTime:"9 min", color:"#a78bfa" },
];

export const stats = [
  { value:"12+",  label:"Career Paths" },
  { value:"8",    label:"Growth Stages" },
  { value:"100%", label:"Free, Always" },
  { value:"50+",  label:"Roadmaps" },
];
