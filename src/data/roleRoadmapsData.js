import { node, phase, level } from "./roadmapBuilders";

/**
 * roleRoadmapsData
 * One entry per role-based roadmap. Fully data-driven —
 * RoleRoadmapDetailPage renders any of these without role-specific code.
 *
 * Shape:
 *  {
 *    slug, title, subtitle, bestFor, defaultLevel,
 *    levels: [{ id, label, goal, phases: [{id,title,nodes:[{id,title,type}]}] }]
 *  }
 */
const roleRoadmapsData = [

  /* ────────────────────────────────────────────────────────
     1. FRONTEND DEVELOPER
  ──────────────────────────────────────────────────────── */
  {
    slug: "frontend-developer",
    title: "Frontend Developer Roadmap",
    subtitle: "A complete path from beginner to frontend architect — pick your level to see what's next.",
    bestFor: "Students / Freshers / Career Switchers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Become job-ready for a basic frontend developer role.", [
        phase("Web Foundation", [node("Web Basics"), node("Dev Setup")]),
        phase("HTML & CSS", [node("HTML"), node("CSS"), node("Responsive Design")]),
        phase("JavaScript Basics", [node("JavaScript"), node("DOM")]),
        phase("Git & Browser Tools", [node("GitHub"), node("DevTools", "optional")]),
        phase("React Basics", [node("React")]),
        phase("Beginner Projects", [node("Portfolio", "milestone"), node("API App")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior", "Junior Developer", "Become confident in real project work.", [
        phase("Code Quality", [node("Component Structure"), node("Props")]),
        phase("React Practice", [node("State"), node("Hooks")]),
        phase("API Integration", [node("API Calls"), node("Error Handling")]),
        phase("Debugging", [node("Git Workflow"), node("Debugging")]),
        phase("Testing Basics", [node("Unit Testing", "optional")]),
        phase("Team Workflow", [node("Agile Basics", "optional")]),
        phase("Deployment", [node("Deployment", "milestone")]),
      ]),
      level("mid", "Mid-Level Developer", "Own frontend features independently.", [
        phase("Advanced React", [node("Advanced Hooks"), node("Context")]),
        phase("State Management", [node("Zustand/Redux")]),
        phase("Performance", [node("Performance"), node("Lazy Loading")]),
        phase("Testing", [node("Component Testing"), node("Accessibility", "optional")]),
        phase("Design System Usage", [node("Design Systems")]),
        phase("Feature Ownership", [node("Code Review", "milestone")]),
        phase("Production Thinking", [node("Production Bugs")]),
      ]),
      level("senior", "Senior Developer", "Design scalable frontend solutions and mentor others.", [
        phase("Frontend Architecture", [node("Architecture Decisions"), node("Component Patterns")]),
        phase("Scalable Components", [node("Monorepo Basics", "optional")]),
        phase("Performance Strategy", [node("Performance Budget")]),
        phase("Testing Strategy", [node("Testing Strategy")]),
        phase("Mentoring", [node("Design System Contribution", "optional"), node("Mentoring", "milestone")]),
        phase("Cross-Team Collaboration", [node("Technical Planning")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("tech-lead", "Tech Lead", "Lead frontend delivery and guide team execution.", [
        phase("Planning", [node("Task Breakdown"), node("Estimation")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Code Review", [node("Pull Request Standards")]),
        phase("Delivery Ownership", [node("Sprint Planning"), node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
        phase("Risk Management", [node("Conflict Resolution", "optional")]),
      ]),
      level("architect", "Frontend Architect", "Define frontend platform, standards, and long-term technical direction.", [
        phase("Platform Thinking", [node("Microfrontends"), node("Frontend Platform")]),
        phase("System Design", [node("Build Strategy")]),
        phase("Frontend Standards", [node("Design System Architecture")]),
        phase("Design Systems", [node("Accessibility Standards", "optional")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Scalability", [node("Security Basics", "optional")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     2. BACKEND DEVELOPER
  ──────────────────────────────────────────────────────── */
  {
    slug: "backend-developer",
    title: "Backend Developer Roadmap",
    subtitle: "From server basics to backend architecture — build APIs and systems that scale.",
    bestFor: "Freshers / Junior Developers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Become job-ready for a basic backend developer role.", [
        phase("Programming Foundation", [node("Language Basics"), node("Data Structures")]),
        phase("Web Fundamentals", [node("HTTP Basics"), node("REST Concepts")]),
        phase("Databases", [node("SQL Basics"), node("Database Design")]),
        phase("Server Basics", [node("Node.js / Express", "required")]),
        phase("Version Control", [node("Git & GitHub")]),
        phase("Beginner Projects", [node("CRUD API", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-backend", "Junior Backend Developer", "Build and maintain real backend services.", [
        phase("API Development", [node("REST API Design"), node("Validation")]),
        phase("Database Practice", [node("Joins & Queries"), node("ORM Basics")]),
        phase("Auth Basics", [node("Authentication"), node("Authorization")]),
        phase("Error Handling", [node("Error Handling"), node("Logging")]),
        phase("Testing Basics", [node("API Testing", "optional")]),
        phase("Team Workflow", [node("Code Reviews")]),
        phase("Deployment", [node("Basic Deployment", "milestone")]),
      ]),
      level("mid-backend", "Mid-Level Backend Developer", "Own backend services and their reliability.", [
        phase("Service Design", [node("Service Architecture"), node("Caching")]),
        phase("Performance", [node("Query Optimization"), node("Load Handling")]),
        phase("Security", [node("Security Basics"), node("Rate Limiting", "optional")]),
        phase("Testing", [node("Integration Testing")]),
        phase("Messaging", [node("Queues / Pub-Sub", "optional")]),
        phase("Ownership", [node("Service Ownership", "milestone")]),
        phase("Production Thinking", [node("Monitoring & Alerts")]),
      ]),
      level("senior-backend", "Senior Backend Developer", "Design scalable, reliable backend systems.", [
        phase("System Design", [node("Distributed Systems"), node("Scalability Patterns")]),
        phase("Data Strategy", [node("Database Scaling")]),
        phase("Reliability", [node("Fault Tolerance"), node("SLA Thinking", "optional")]),
        phase("Testing Strategy", [node("Testing Strategy")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Cross-Team Collaboration", [node("Technical Planning")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("tech-lead", "Tech Lead", "Lead backend delivery and guide team execution.", [
        phase("Planning", [node("Task Breakdown"), node("Estimation")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Code Review", [node("Pull Request Standards")]),
        phase("Delivery Ownership", [node("Sprint Planning"), node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
        phase("Risk Management", [node("Conflict Resolution", "optional")]),
      ]),
      level("backend-architect", "Backend Architect", "Define backend platform, standards, and long-term direction.", [
        phase("Platform Thinking", [node("Microservices Strategy"), node("Backend Platform")]),
        phase("System Design", [node("Infrastructure Strategy")]),
        phase("Standards", [node("API Standards")]),
        phase("Data Architecture", [node("Data Architecture", "optional")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Scalability", [node("Security Architecture", "optional")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     3. FULL STACK DEVELOPER
  ──────────────────────────────────────────────────────── */
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer Roadmap",
    subtitle: "Own the entire product — frontend, backend, and everything in between.",
    bestFor: "Junior / Mid-Level Developers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Build complete, simple applications end-to-end.", [
        phase("Web Foundation", [node("HTML/CSS/JS"), node("Dev Setup")]),
        phase("Frontend Basics", [node("React Basics")]),
        phase("Backend Basics", [node("Node.js / Express")]),
        phase("Databases", [node("SQL Basics")]),
        phase("Connecting Layers", [node("REST API Integration")]),
        phase("Beginner Projects", [node("Full Stack App", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-fullstack", "Junior Full Stack Developer", "Ship complete features across the stack.", [
        phase("Frontend Practice", [node("State Management Basics")]),
        phase("Backend Practice", [node("API Design")]),
        phase("Database Practice", [node("ORM Basics")]),
        phase("Auth", [node("Authentication")]),
        phase("Testing Basics", [node("Basic Testing", "optional")]),
        phase("Team Workflow", [node("Git Workflow")]),
        phase("Deployment", [node("Deployment", "milestone")]),
      ]),
      level("mid-fullstack", "Mid-Level Full Stack Developer", "Own features independently across the stack.", [
        phase("Advanced Frontend", [node("Advanced React")]),
        phase("Advanced Backend", [node("Service Design")]),
        phase("Performance", [node("Performance (FE + BE)")]),
        phase("Testing", [node("Integration Testing")]),
        phase("CI/CD Basics", [node("CI/CD Pipelines", "optional")]),
        phase("Feature Ownership", [node("Code Review", "milestone")]),
        phase("Production Thinking", [node("Production Bugs")]),
      ]),
      level("senior-fullstack", "Senior Full Stack Developer", "Design scalable systems end-to-end.", [
        phase("System Architecture", [node("Full Stack Architecture")]),
        phase("Scalability", [node("Scalability Patterns")]),
        phase("Security", [node("Security Basics", "optional")]),
        phase("Testing Strategy", [node("Testing Strategy")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Cross-Team Collaboration", [node("Technical Planning")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("tech-lead", "Tech Lead", "Lead full stack delivery and guide team execution.", [
        phase("Planning", [node("Task Breakdown"), node("Estimation")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Code Review", [node("Pull Request Standards")]),
        phase("Delivery Ownership", [node("Sprint Planning"), node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
        phase("Risk Management", [node("Conflict Resolution", "optional")]),
      ]),
      level("solution-architect", "Solution Architect", "Define end-to-end technical direction for products.", [
        phase("Platform Thinking", [node("Solution Design"), node("Tech Stack Strategy")]),
        phase("System Design", [node("Integration Strategy")]),
        phase("Standards", [node("Engineering Standards")]),
        phase("Data & Infra", [node("Infra Strategy", "optional")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Scalability", [node("Security Architecture", "optional")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     4. JAVA FULL STACK DEVELOPER
  ──────────────────────────────────────────────────────── */
  {
    slug: "java-full-stack-developer",
    title: "Java Full Stack Developer Roadmap",
    subtitle: "From Java basics to enterprise architecture — frontend and backend with the Java ecosystem.",
    bestFor: "Freshers / Junior Developers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Build simple Java-based full stack applications.", [
        phase("Java Foundation", [node("Java Syntax"), node("OOP Basics")]),
        phase("Frontend Basics", [node("HTML/CSS/JS")]),
        phase("Spring Basics", [node("Spring Boot Basics")]),
        phase("Databases", [node("SQL Basics")]),
        phase("Tools", [node("Maven/Gradle"), node("Git")]),
        phase("Beginner Projects", [node("CRUD App", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-java", "Junior Java Developer", "Build real features with Spring Boot and React.", [
        phase("Spring Practice", [node("REST Controllers"), node("Spring Data JPA")]),
        phase("Frontend Practice", [node("React Basics")]),
        phase("Database Practice", [node("Entity Relationships")]),
        phase("Auth", [node("Spring Security Basics")]),
        phase("Testing Basics", [node("JUnit Basics", "optional")]),
        phase("Team Workflow", [node("Git Workflow")]),
        phase("Deployment", [node("Deployment", "milestone")]),
      ]),
      level("mid-java", "Mid-Level Java Developer", "Own Java backend services and integrations.", [
        phase("Advanced Spring", [node("Spring Boot Advanced"), node("Microservices Basics")]),
        phase("Performance", [node("Query Optimization")]),
        phase("Security", [node("Security Hardening", "optional")]),
        phase("Testing", [node("Integration Testing")]),
        phase("Messaging", [node("Kafka/RabbitMQ Basics", "optional")]),
        phase("Ownership", [node("Service Ownership", "milestone")]),
        phase("Production Thinking", [node("Monitoring & Logging")]),
      ]),
      level("senior-java", "Senior Java Developer", "Design scalable Java-based systems.", [
        phase("System Design", [node("Microservices Architecture")]),
        phase("Scalability", [node("Distributed Systems")]),
        phase("Reliability", [node("Resilience Patterns", "optional")]),
        phase("Testing Strategy", [node("Testing Strategy")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Cross-Team Collaboration", [node("Technical Planning")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("tech-lead", "Tech Lead", "Lead Java team delivery and execution.", [
        phase("Planning", [node("Task Breakdown"), node("Estimation")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Code Review", [node("Pull Request Standards")]),
        phase("Delivery Ownership", [node("Sprint Planning"), node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
        phase("Risk Management", [node("Conflict Resolution", "optional")]),
      ]),
      level("java-architect", "Java Architect", "Define enterprise Java platform and standards.", [
        phase("Platform Thinking", [node("Enterprise Architecture"), node("Microservices Strategy")]),
        phase("System Design", [node("Integration Strategy")]),
        phase("Standards", [node("Coding Standards")]),
        phase("Data Architecture", [node("Data Architecture", "optional")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Scalability", [node("Security Architecture", "optional")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     5–7. CMS DEVELOPERS — AEM / Contentful / Sitecore
     (shared level structure, different titles/subtitles)
  ──────────────────────────────────────────────────────── */
  ...["aem-developer", "contentful-developer", "sitecore-developer"].map((slug) => {
    const meta = {
      "aem-developer": {
        title: "AEM Developer Roadmap",
        subtitle: "From Java basics to AEM enterprise architecture — build on Adobe Experience Manager.",
        bestFor: "Mid-Level Java Developers",
        platform: "AEM",
      },
      "contentful-developer": {
        title: "Contentful Developer Roadmap",
        subtitle: "From web basics to headless CMS architecture — build with Contentful.",
        bestFor: "Mid-Level Developers",
        platform: "Contentful",
      },
      "sitecore-developer": {
        title: "Sitecore Developer Roadmap",
        subtitle: "From .NET basics to Sitecore enterprise architecture — build on Sitecore.",
        bestFor: ".NET / Mid-Level Developers",
        platform: "Sitecore",
      },
    }[slug];

    return {
      slug,
      title: meta.title,
      subtitle: meta.subtitle,
      bestFor: meta.bestFor,
      defaultLevel: "beginner",
      levels: [
        level("beginner", "Beginner", `Learn the fundamentals needed before working with ${meta.platform}.`, [
          phase("Web Foundation", [node("HTML/CSS/JS")]),
          phase("Language Basics", [node(slug === "sitecore-developer" ? "C# Basics" : "Java Basics")]),
          phase("CMS Concepts", [node("CMS Fundamentals")]),
          phase("Tools", [node("Git"), node("IDE Setup")]),
          phase("Beginner Projects", [node("Sample Page Build", "milestone")]),
          phase("Job Ready Basics", [node("Resume", "milestone")]),
        ]),
        level("cms-developer", `${meta.platform} Developer`, `Build components and templates in ${meta.platform}.`, [
          phase("Component Development", [node("Components"), node("Templates")]),
          phase("Content Modeling", [node("Content Types")]),
          phase("Integration Basics", [node("API Integration")]),
          phase("Authoring Tools", [node("Author Experience", "optional")]),
          phase("Team Workflow", [node("Git Workflow")]),
          phase("Deployment", [node("Deployment", "milestone")]),
        ]),
        level("mid-cms", `Mid-Level ${meta.platform} Developer`, `Own ${meta.platform} features and integrations independently.`, [
          phase("Advanced Components", [node("Reusable Components")]),
          phase("Headless / Multi-site", [node("Headless Delivery", "optional")]),
          phase("Performance", [node("Caching & Performance")]),
          phase("Testing", [node("Component Testing")]),
          phase("Ownership", [node("Feature Ownership", "milestone")]),
          phase("Production Thinking", [node("Production Support")]),
        ]),
        level("senior-cms", `Senior ${meta.platform} Developer`, `Design scalable ${meta.platform} solutions.`, [
          phase("Architecture Basics", [node("Solution Patterns")]),
          phase("Multi-site Strategy", [node("Multi-site Architecture", "optional")]),
          phase("Performance Strategy", [node("Performance Strategy")]),
          phase("Testing Strategy", [node("Testing Strategy")]),
          phase("Mentoring", [node("Mentoring", "milestone")]),
          phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
        ]),
        level("cms-lead", `${meta.platform} Lead`, `Lead ${meta.platform} delivery and guide the team.`, [
          phase("Planning", [node("Task Breakdown"), node("Estimation")]),
          phase("Technical Decisions", [node("Architecture Review")]),
          phase("Team Guidance", [node("Team Mentoring")]),
          phase("Delivery Ownership", [node("Delivery Tracking", "milestone")]),
          phase("Stakeholder Communication", [node("Business Alignment")]),
        ]),
        level("solution-architect", "Solution Architect", `Define the long-term ${meta.platform} platform strategy.`, [
          phase("Platform Thinking", [node("Platform Strategy")]),
          phase("System Design", [node("Integration Strategy")]),
          phase("Standards", [node("Engineering Standards")]),
          phase("Performance Governance", [node("Performance Governance")]),
          phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
        ]),
      ],
    };
  }),

  /* ────────────────────────────────────────────────────────
     8. QA AUTOMATION ENGINEER
  ──────────────────────────────────────────────────────── */
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer Roadmap",
    subtitle: "From manual testing to SDET leadership — build automated quality into every release.",
    bestFor: "Manual Testers / QA Engineers",
    defaultLevel: "manual-qa",
    levels: [
      level("manual-qa", "Manual QA", "Build a strong testing foundation before automating.", [
        phase("Testing Foundation", [node("Testing Fundamentals"), node("Test Case Design")]),
        phase("Bug Tracking", [node("Bug Reporting"), node("Jira/Zephyr")]),
        phase("Web Basics", [node("HTML/CSS Basics", "optional")]),
        phase("Beginner Projects", [node("Manual Test Plan", "milestone")]),
      ]),
      level("automation-beginner", "Automation Beginner", "Learn the basics of test automation.", [
        phase("Programming Basics", [node("Java or Python Basics")]),
        phase("Automation Tools", [node("Selenium Basics")]),
        phase("Version Control", [node("Git & GitHub")]),
        phase("Beginner Projects", [node("First Automated Test", "milestone")]),
      ]),
      level("junior-sdet", "Junior SDET", "Build and maintain automated test suites.", [
        phase("Framework Basics", [node("Page Object Model")]),
        phase("API Testing", [node("REST Assured / Postman")]),
        phase("Test Frameworks", [node("TestNG/JUnit")]),
        phase("CI Basics", [node("CI Integration", "optional")]),
        phase("Team Workflow", [node("Git Workflow")]),
        phase("Deployment", [node("Pipeline Integration", "milestone")]),
      ]),
      level("mid-sdet", "Mid-Level SDET", "Own automation strategy for a product area.", [
        phase("Framework Design", [node("Custom Framework Design")]),
        phase("Advanced API Testing", [node("Contract Testing", "optional")]),
        phase("Performance Testing", [node("Performance Testing Basics")]),
        phase("Reporting", [node("Test Reporting & Metrics")]),
        phase("Ownership", [node("Automation Ownership", "milestone")]),
      ]),
      level("senior-sdet", "Senior SDET", "Design test architecture across the organisation.", [
        phase("Test Architecture", [node("Test Architecture Design")]),
        phase("Quality Strategy", [node("Quality Gates")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Cross-Team Collaboration", [node("Technical Planning")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("qa-lead", "QA Lead", "Lead quality strategy and the QA team.", [
        phase("Planning", [node("Test Planning"), node("Estimation")]),
        phase("Strategy", [node("Quality Strategy")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Delivery Ownership", [node("Release Quality Ownership", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     9. DEVOPS ENGINEER
  ──────────────────────────────────────────────────────── */
  {
    slug: "devops-engineer",
    title: "DevOps Engineer Roadmap",
    subtitle: "From Linux basics to platform architecture — automate, deploy, and scale with confidence.",
    bestFor: "Developers / Junior Engineers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Build the foundation for a DevOps career.", [
        phase("Linux Foundation", [node("Linux Basics"), node("Bash Scripting")]),
        phase("Networking Basics", [node("Networking Fundamentals")]),
        phase("Version Control", [node("Git & GitHub")]),
        phase("Beginner Projects", [node("Simple CI Pipeline", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-devops", "Junior DevOps", "Build and maintain CI/CD pipelines.", [
        phase("Containers", [node("Docker Basics")]),
        phase("CI/CD", [node("GitHub Actions / Jenkins")]),
        phase("Cloud Basics", [node("AWS/Azure Basics")]),
        phase("Monitoring Basics", [node("Logging Basics", "optional")]),
        phase("Team Workflow", [node("Git Workflow")]),
        phase("Deployment", [node("Automated Deployment", "milestone")]),
      ]),
      level("mid-devops", "Mid-Level DevOps", "Own infrastructure and deployment pipelines.", [
        phase("Orchestration", [node("Kubernetes Basics")]),
        phase("Infra as Code", [node("Terraform")]),
        phase("Monitoring", [node("Prometheus/Grafana")]),
        phase("Security Basics", [node("Security Basics", "optional")]),
        phase("Ownership", [node("Pipeline Ownership", "milestone")]),
      ]),
      level("senior-devops", "Senior DevOps", "Design resilient infrastructure at scale.", [
        phase("Architecture", [node("Infra Architecture")]),
        phase("Scalability", [node("Auto-scaling Strategy")]),
        phase("Reliability", [node("Incident Response", "optional")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("devops-lead", "DevOps Lead", "Lead DevOps strategy and team execution.", [
        phase("Planning", [node("Roadmap Planning")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Delivery Ownership", [node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
      ]),
      level("platform-architect", "Platform Architect", "Define platform engineering strategy long-term.", [
        phase("Platform Thinking", [node("Platform Strategy")]),
        phase("System Design", [node("Multi-cloud Strategy", "optional")]),
        phase("Standards", [node("Engineering Standards")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     10. CLOUD ENGINEER
  ──────────────────────────────────────────────────────── */
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer Roadmap",
    subtitle: "From cloud fundamentals to cloud architecture — design and run infrastructure that scales.",
    bestFor: "Mid-Level Developers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Learn cloud computing fundamentals.", [
        phase("Cloud Foundation", [node("Cloud Concepts"), node("Networking Basics")]),
        phase("Core Services", [node("Compute & Storage Basics")]),
        phase("Tools", [node("CLI Basics"), node("Git")]),
        phase("Beginner Projects", [node("Deploy a Simple App", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-cloud", "Junior Cloud Engineer", "Work with core cloud services confidently.", [
        phase("Compute", [node("EC2/VMs")]),
        phase("Storage & DB", [node("S3/Blob Storage"), node("Managed Databases")]),
        phase("IAM Basics", [node("IAM & Permissions")]),
        phase("Automation Basics", [node("Infra as Code Basics", "optional")]),
        phase("Deployment", [node("Cloud Deployment", "milestone")]),
      ]),
      level("mid-cloud", "Mid-Level Cloud Engineer", "Own cloud infrastructure for a product area.", [
        phase("Infra as Code", [node("Terraform/CloudFormation")]),
        phase("Networking", [node("VPC Design")]),
        phase("Monitoring", [node("Cloud Monitoring")]),
        phase("Cost Management", [node("Cost Optimization", "optional")]),
        phase("Ownership", [node("Infra Ownership", "milestone")]),
      ]),
      level("senior-cloud", "Senior Cloud Engineer", "Design scalable, resilient cloud systems.", [
        phase("Architecture", [node("Cloud Architecture Patterns")]),
        phase("Multi-region", [node("Multi-region Design", "optional")]),
        phase("Reliability", [node("Disaster Recovery")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("cloud-lead", "Cloud Lead", "Lead cloud strategy and team execution.", [
        phase("Planning", [node("Roadmap Planning")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Delivery Ownership", [node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
      ]),
      level("cloud-architect", "Cloud Architect", "Define long-term cloud platform strategy.", [
        phase("Platform Thinking", [node("Cloud Platform Strategy")]),
        phase("System Design", [node("Multi-cloud Strategy", "optional")]),
        phase("Standards", [node("Cloud Governance")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     11. AI ENGINEER
  ──────────────────────────────────────────────────────── */
  {
    slug: "ai-engineer",
    title: "AI Engineer Roadmap",
    subtitle: "From Python basics to AI architecture — build, ship, and scale intelligent systems.",
    bestFor: "Developers / Mid-Level Engineers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Build the foundation for an AI engineering career.", [
        phase("Programming Foundation", [node("Python Basics"), node("Data Structures")]),
        phase("Math Foundation", [node("Linear Algebra Basics", "optional")]),
        phase("ML Basics", [node("ML Fundamentals")]),
        phase("Beginner Projects", [node("Simple ML Model", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-ai", "Junior AI Engineer", "Build and integrate basic AI features.", [
        phase("Model Training", [node("Model Training Basics")]),
        phase("LLM Basics", [node("Prompt Engineering")]),
        phase("APIs", [node("AI API Integration")]),
        phase("Tools", [node("LangChain Basics", "optional")]),
        phase("Deployment", [node("Model Deployment", "milestone")]),
      ]),
      level("mid-ai", "Mid-Level AI Engineer", "Own AI features and pipelines independently.", [
        phase("RAG Systems", [node("RAG Architecture")]),
        phase("Fine-tuning", [node("Fine-tuning Basics", "optional")]),
        phase("Vector Databases", [node("Embeddings & Vector DBs")]),
        phase("Evaluation", [node("Model Evaluation")]),
        phase("Ownership", [node("AI Feature Ownership", "milestone")]),
      ]),
      level("senior-ai", "Senior AI Engineer", "Design scalable AI systems and mentor others.", [
        phase("System Design", [node("AI System Architecture")]),
        phase("MLOps", [node("MLOps Pipelines")]),
        phase("Multi-agent Systems", [node("Multi-agent Design", "optional")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("ai-lead", "AI Lead", "Lead AI strategy and team execution.", [
        phase("Planning", [node("Roadmap Planning")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Delivery Ownership", [node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
      ]),
      level("ai-architect", "AI Architect", "Define long-term AI platform and product strategy.", [
        phase("Platform Thinking", [node("AI Platform Strategy")]),
        phase("System Design", [node("Multi-model Strategy", "optional")]),
        phase("Standards", [node("Responsible AI Standards")]),
        phase("Performance Governance", [node("Performance Governance")]),
        phase("Architecture Strategy", [node("Technical Roadmaps"), node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     12. DATA ANALYST
  ──────────────────────────────────────────────────────── */
  {
    slug: "data-analyst",
    title: "Data Analyst Roadmap",
    subtitle: "From spreadsheets to analytics leadership — turn raw data into clear decisions.",
    bestFor: "Freshers / Career Switchers",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Build the foundation for a data analytics career.", [
        phase("Spreadsheet Skills", [node("Excel/Sheets Basics")]),
        phase("SQL Basics", [node("SQL Fundamentals")]),
        phase("Visualization Basics", [node("Charts & Dashboards")]),
        phase("Beginner Projects", [node("First Dashboard", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("junior-analyst", "Junior Data Analyst", "Work with real datasets and reporting tools.", [
        phase("SQL Practice", [node("Joins & Aggregations")]),
        phase("BI Tools", [node("Tableau / Power BI")]),
        phase("Python Basics", [node("Python for Data", "optional")]),
        phase("Reporting", [node("Stakeholder Reporting")]),
        phase("Delivery", [node("Recurring Reports", "milestone")]),
      ]),
      level("mid-analyst", "Mid-Level Data Analyst", "Own analysis for a business area.", [
        phase("Advanced SQL", [node("Window Functions")]),
        phase("Statistics", [node("Statistical Analysis")]),
        phase("Automation", [node("Report Automation", "optional")]),
        phase("Storytelling", [node("Data Storytelling")]),
        phase("Ownership", [node("Domain Ownership", "milestone")]),
      ]),
      level("senior-analyst", "Senior Data Analyst", "Lead analysis strategy and mentor others.", [
        phase("Advanced Analytics", [node("Predictive Analysis", "optional")]),
        phase("Data Strategy", [node("Metrics Framework Design")]),
        phase("Cross-Team Collaboration", [node("Stakeholder Alignment")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Technical Ownership", [node("Technical Ownership", "milestone")]),
      ]),
      level("analytics-lead", "Analytics Lead", "Lead the analytics function and strategy.", [
        phase("Planning", [node("Roadmap Planning")]),
        phase("Strategy", [node("Analytics Strategy")]),
        phase("Team Guidance", [node("Team Mentoring")]),
        phase("Delivery Ownership", [node("Delivery Tracking", "milestone")]),
        phase("Stakeholder Communication", [node("Business Alignment")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     13. PRODUCT MANAGER
  ──────────────────────────────────────────────────────── */
  {
    slug: "product-manager",
    title: "Product Manager Roadmap",
    subtitle: "From associate PM to product leadership — define what gets built and why.",
    bestFor: "Career Switchers / Junior PMs",
    defaultLevel: "beginner",
    levels: [
      level("beginner", "Beginner", "Understand product fundamentals and the PM role.", [
        phase("Product Foundation", [node("Product Thinking"), node("User Research Basics")]),
        phase("Tools", [node("Jira / Notion Basics")]),
        phase("Beginner Projects", [node("Mock PRD", "milestone")]),
        phase("Job Ready Basics", [node("Resume", "milestone")]),
      ]),
      level("associate-pm", "Associate PM", "Support product execution under guidance.", [
        phase("Requirements", [node("Writing PRDs")]),
        phase("Execution", [node("Backlog Management")]),
        phase("Collaboration", [node("Working with Engineering")]),
        phase("Metrics Basics", [node("Basic Product Metrics", "optional")]),
        phase("Delivery", [node("Feature Launch", "milestone")]),
      ]),
      level("product-manager", "Product Manager", "Own a product area end-to-end.", [
        phase("Strategy Basics", [node("Roadmapping")]),
        phase("Discovery", [node("User Interviews")]),
        phase("Metrics", [node("Analytics & KPIs")]),
        phase("Stakeholder Management", [node("Cross-functional Alignment")]),
        phase("Ownership", [node("Product Area Ownership", "milestone")]),
      ]),
      level("senior-pm", "Senior Product Manager", "Drive strategy across multiple product areas.", [
        phase("Strategy", [node("Product Strategy")]),
        phase("Prioritization", [node("Advanced Prioritization Frameworks", "optional")]),
        phase("Influence", [node("Executive Communication")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
        phase("Technical Ownership", [node("Vision Ownership", "milestone")]),
      ]),
      level("lead-pm", "Lead Product Manager", "Lead product strategy and a team of PMs.", [
        phase("Planning", [node("Product Roadmap Planning")]),
        phase("Strategy", [node("Org-wide Strategy")]),
        phase("Team Guidance", [node("Mentoring PMs")]),
        phase("Delivery Ownership", [node("Portfolio Ownership", "milestone")]),
        phase("Stakeholder Communication", [node("Executive Alignment")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     14. TECH LEAD
  ──────────────────────────────────────────────────────── */
  {
    slug: "tech-lead",
    title: "Tech Lead Roadmap",
    subtitle: "From aspiring lead to engineering manager track — lead people and technical direction.",
    bestFor: "Senior Developers",
    defaultLevel: "aspiring",
    levels: [
      level("aspiring", "Aspiring Tech Lead", "Build the foundation skills needed before stepping into the role.", [
        phase("Technical Depth", [node("System Design Basics")]),
        phase("Communication", [node("Communication Skills")]),
        phase("Mentoring Basics", [node("Mentoring Juniors", "optional")]),
        phase("Readiness", [node("Lead a Small Initiative", "milestone")]),
      ]),
      level("new-lead", "New Tech Lead", "Get comfortable with the day-to-day of leading a team.", [
        phase("Planning", [node("Task Breakdown"), node("Estimation")]),
        phase("Technical Decisions", [node("Architecture Review")]),
        phase("Team Guidance", [node("1:1s & Mentoring")]),
        phase("Code Review", [node("Pull Request Standards")]),
        phase("Delivery", [node("First Sprint Delivery", "milestone")]),
      ]),
      level("experienced-lead", "Experienced Tech Lead", "Lead consistently across multiple projects.", [
        phase("Technical Strategy", [node("Technical Roadmaps")]),
        phase("Team Development", [node("Growing the Team")]),
        phase("Cross-Team Collaboration", [node("Stakeholder Alignment")]),
        phase("Risk Management", [node("Risk & Dependency Management", "optional")]),
        phase("Ownership", [node("Delivery Ownership", "milestone")]),
      ]),
      level("delivery-lead", "Delivery Lead", "Own delivery outcomes across teams.", [
        phase("Planning", [node("Multi-team Planning")]),
        phase("Execution", [node("Delivery Tracking")]),
        phase("Communication", [node("Business Alignment")]),
        phase("Risk Management", [node("Escalation Management", "optional")]),
        phase("Ownership", [node("Program Ownership", "milestone")]),
      ]),
      level("em-path", "Engineering Manager Path", "Transition technical leadership into people management.", [
        phase("People Management", [node("Performance Reviews")]),
        phase("Org Design", [node("Team Structure", "optional")]),
        phase("Strategy", [node("Engineering Strategy")]),
        phase("Hiring", [node("Hiring & Growing Teams")]),
        phase("Ownership", [node("Manager Readiness", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     15. SOLUTION ARCHITECT
  ──────────────────────────────────────────────────────── */
  {
    slug: "solution-architect",
    title: "Solution Architect Roadmap",
    subtitle: "From aspiring architect to enterprise architecture — design systems that scale across teams.",
    bestFor: "Senior Developers / Tech Leads",
    defaultLevel: "aspiring",
    levels: [
      level("aspiring", "Aspiring Architect", "Build the technical breadth needed before architecting systems.", [
        phase("Technical Breadth", [node("Cross-stack Knowledge")]),
        phase("System Design", [node("System Design Practice")]),
        phase("Readiness", [node("Design a Small System", "milestone")]),
      ]),
      level("junior-architect", "Junior Architect", "Support architecture decisions under guidance.", [
        phase("Design Patterns", [node("Architecture Patterns")]),
        phase("Documentation", [node("ADRs & Diagrams")]),
        phase("Collaboration", [node("Working with Tech Leads")]),
        phase("Delivery", [node("First Architecture Doc", "milestone")]),
      ]),
      level("solution-architect-mid", "Solution Architect", "Own architecture for a product or domain.", [
        phase("System Design", [node("End-to-end Solution Design")]),
        phase("Integration Strategy", [node("Integration Patterns")]),
        phase("Standards", [node("Engineering Standards")]),
        phase("Ownership", [node("Solution Ownership", "milestone")]),
      ]),
      level("senior-architect", "Senior Architect", "Design systems across multiple domains.", [
        phase("Platform Thinking", [node("Platform Architecture")]),
        phase("Scalability", [node("Scalability Strategy")]),
        phase("Governance", [node("Architecture Governance", "optional")]),
        phase("Mentoring", [node("Mentoring", "milestone")]),
      ]),
      level("enterprise-architect", "Enterprise Architect", "Define technical strategy across the organisation.", [
        phase("Enterprise Strategy", [node("Enterprise Roadmaps")]),
        phase("Standards", [node("Org-wide Standards")]),
        phase("Governance", [node("Technology Governance")]),
        phase("Ownership", [node("Long-Term Architecture", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     16. ENGINEERING MANAGER
  ──────────────────────────────────────────────────────── */
  {
    slug: "engineering-manager",
    title: "Engineering Manager Roadmap",
    subtitle: "From aspiring manager to director track — lead people, delivery, and strategy.",
    bestFor: "Tech Leads",
    defaultLevel: "aspiring",
    levels: [
      level("aspiring", "Aspiring Manager", "Build the foundation skills before moving into management.", [
        phase("People Skills", [node("Communication & Empathy")]),
        phase("Technical Leadership", [node("Technical Credibility")]),
        phase("Readiness", [node("Mentor a Teammate", "milestone")]),
      ]),
      level("new-manager", "New Manager", "Learn the fundamentals of managing a team.", [
        phase("1:1s", [node("Running Effective 1:1s")]),
        phase("Performance", [node("Feedback & Reviews")]),
        phase("Delivery", [node("Sprint Oversight")]),
        phase("Ownership", [node("First Team Delivery", "milestone")]),
      ]),
      level("team-manager", "Team Manager", "Own a team's output and growth.", [
        phase("Team Development", [node("Career Growth Plans")]),
        phase("Hiring", [node("Hiring & Interviewing")]),
        phase("Strategy", [node("Team Roadmap Planning")]),
        phase("Ownership", [node("Team Ownership", "milestone")]),
      ]),
      level("senior-manager", "Senior Manager", "Manage managers and broader org outcomes.", [
        phase("Org Leadership", [node("Managing Managers", "optional")]),
        phase("Strategy", [node("Org Strategy")]),
        phase("Cross-Team Collaboration", [node("Stakeholder Alignment")]),
        phase("Ownership", [node("Org Ownership", "milestone")]),
      ]),
      level("director-path", "Director Path", "Prepare for org-wide engineering leadership.", [
        phase("Vision", [node("Engineering Vision")]),
        phase("Executive Communication", [node("Executive Alignment")]),
        phase("Org Design", [node("Org Design", "optional")]),
        phase("Ownership", [node("Director Readiness", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     17. CAREER SWITCHER
  ──────────────────────────────────────────────────────── */
  {
    slug: "career-switcher",
    title: "Career Switcher Roadmap",
    subtitle: "From exploring tech to landing your first developer role — a structured path for non-tech backgrounds.",
    bestFor: "Non-Tech Background Professionals",
    defaultLevel: "explore",
    levels: [
      level("explore", "Explore", "Understand what tech careers exist and which fits you.", [
        phase("Self Assessment", [node("Interest Mapping")]),
        phase("Role Research", [node("Explore Tech Roles")]),
        phase("Readiness", [node("Pick a Direction", "milestone")]),
      ]),
      level("foundation", "Foundation", "Build the foundational skills for your chosen path.", [
        phase("Programming Basics", [node("Language Basics")]),
        phase("Web Foundation", [node("HTML/CSS/JS", "optional")]),
        phase("Tools", [node("Git Basics")]),
        phase("Readiness", [node("Complete a Course", "milestone")]),
      ]),
      level("skill-building", "Skill Building", "Go deeper into role-specific skills.", [
        phase("Core Skills", [node("Role-specific Skills")]),
        phase("Practice", [node("Coding Practice")]),
        phase("Community", [node("Join Dev Communities", "optional")]),
        phase("Readiness", [node("Skill Milestone", "milestone")]),
      ]),
      level("projects", "Projects", "Build real projects that prove your new skills.", [
        phase("Portfolio Projects", [node("Build 2-3 Projects")]),
        phase("Open Source", [node("Open Source Contribution", "optional")]),
        phase("Documentation", [node("Project Write-ups")]),
        phase("Readiness", [node("Portfolio Complete", "milestone")]),
      ]),
      level("job-ready", "Job Ready", "Prepare your materials and start applying.", [
        phase("Resume & Profile", [node("Resume"), node("LinkedIn / GitHub")]),
        phase("Interview Prep", [node("Mock Interviews", "optional")]),
        phase("Applications", [node("Targeted Applications")]),
        phase("Outcome", [node("First Offer", "milestone")]),
      ]),
    ],
  },

  /* ────────────────────────────────────────────────────────
     18. FRESHER TO SOFTWARE DEVELOPER
  ──────────────────────────────────────────────────────── */
  {
    slug: "fresher-to-software-developer",
    title: "Fresher to Software Developer Roadmap",
    subtitle: "From student to first developer role — a clear path through every stage.",
    bestFor: "Students / Graduates / Freshers",
    defaultLevel: "student",
    levels: [
      level("student", "Student", "Build programming fundamentals while still studying.", [
        phase("Programming Foundation", [node("Language Basics"), node("Data Structures")]),
        phase("Web Basics", [node("HTML/CSS/JS", "optional")]),
        phase("Readiness", [node("First Small Project", "milestone")]),
      ]),
      level("graduate", "Graduate", "Sharpen skills and start building a portfolio.", [
        phase("Core Skills", [node("DSA Practice")]),
        phase("Tools", [node("Git & GitHub")]),
        phase("Portfolio Start", [node("Start a Portfolio Project")]),
        phase("Readiness", [node("Portfolio Project 1", "milestone")]),
      ]),
      level("fresher", "Fresher", "Get fully job-ready with real projects and prep.", [
        phase("Frameworks", [node("Pick a Framework (React/Node)")]),
        phase("Projects", [node("Build 2-3 Projects")]),
        phase("Interview Basics", [node("DSA Interview Prep", "optional")]),
        phase("Readiness", [node("Portfolio Complete", "milestone")]),
      ]),
      level("job-ready", "Job Ready", "Prepare resume, profile, and interview skills.", [
        phase("Resume & Profile", [node("Resume"), node("LinkedIn / GitHub")]),
        phase("Interview Prep", [node("Mock Interviews")]),
        phase("Applications", [node("Targeted Applications")]),
        phase("Readiness", [node("Interview Ready", "milestone")]),
      ]),
      level("first-role", "First Developer Role", "Succeed in your first 90 days on the job.", [
        phase("Onboarding", [node("Codebase Familiarity")]),
        phase("Team Workflow", [node("Git Workflow & Code Reviews")]),
        phase("First Contributions", [node("Ship First Feature", "milestone")]),
        phase("Growth", [node("Seek Feedback")]),
      ]),
    ],
  },
];

export default roleRoadmapsData;
