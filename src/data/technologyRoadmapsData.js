/* ────────────────────────────────────────────────────────────────
   technologyRoadmapsData.js  —  18 technology roadmaps
   Each technology uses a fresh ID factory so IDs never collide.
──────────────────────────────────────────────────────────────── */

function mkT() {
  let ni = 0, pi = 0;
  return {
    n:  (title, type = "required") => ({ id: `n${++ni}`, title, type }),
    p:  (title, nodes)             => ({ id: `p${++pi}`, title, nodes }),
    lv: (id, label, goal, phases)  => ({ id, label, goal, phases }),
  };
}

/* ── REACT ──────────────────────────────────────────────────── */
const reactData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "react", title: "React Roadmap",
    subtitle: "From JSX and components to advanced patterns and frontend platform architecture.",
    category: "Frontend", accent: "#00E5B0", icon: "⚛️",
    bestFor: "Web developers building UI-focused applications",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand React fundamentals and build simple interactive UIs.", [
        p("Setup",        [n("Node & npm"), n("Vite / CRA"), n("React Dev Tools")]),
        p("Core",         [n("JSX"), n("Components"), n("Props"), n("State (useState)")]),
        p("Interactions", [n("Event Handling"), n("Conditional Render"), n("Lists & Keys")]),
        p("Forms",        [n("Controlled Inputs"), n("Form Submit"), n("Basic Validation"), n("Uncontrolled", "optional")]),
        p("Milestone",    [n("First Interactive React App", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Build real features using hooks, routing, and data fetching.", [
        p("Hooks",      [n("useState"), n("useEffect"), n("useContext"), n("useRef"), n("Custom Hooks", "advanced")]),
        p("Routing",    [n("React Router v6"), n("Nested Routes"), n("Route Params"), n("Protected Routes")]),
        p("Data",       [n("fetch / Axios"), n("Loading States"), n("Error States"), n("React Query", "optional")]),
        p("State",      [n("Prop Drilling fix"), n("Context API"), n("Zustand intro", "optional")]),
        p("Milestone",  [n("Job-Ready React App", "milestone")]),
      ]),
      lv("production", "Production Ready", "Ship reliable, tested, performant React applications.", [
        p("Quality",    [n("ESLint + Prettier"), n("PropTypes / TS"), n("Error Boundaries"), n("Accessibility")]),
        p("Testing",    [n("Jest basics"), n("React Testing Library"), n("Integration tests"), n("Snapshot tests", "optional")]),
        p("Perf",       [n("React.memo"), n("useMemo / useCallback"), n("Lazy Loading"), n("Code Splitting")]),
        p("Deploy",     [n("Build Optimisation"), n("Env Variables"), n("Vercel / Netlify"), n("CI Pipeline")]),
        p("Milestone",  [n("Deployed & Tested React App", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Master advanced patterns, TypeScript integration, and architecture.", [
        p("TypeScript", [n("Component Types"), n("Generics in React"), n("Type-safe hooks"), n("tsconfig")]),
        p("State",      [n("Redux Toolkit"), n("Zustand advanced"), n("Jotai / Recoil", "optional"), n("Server state sync")]),
        p("Patterns",   [n("Compound Components"), n("Render Props"), n("HOCs"), n("Portals"), n("Suspense")]),
        p("Arch",       [n("Module boundaries"), n("Micro-frontend intro", "optional"), n("Monorepo basics", "optional")]),
        p("Milestone",  [n("Advanced Architecture App", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design scalable frontend platforms and govern component systems.", [
        p("Design System", [n("Token System"), n("Component Library"), n("Storybook"), n("Docs site", "optional")]),
        p("Platform",      [n("Micro-frontends"), n("Module Federation"), n("Multi-team coordination")]),
        p("Governance",    [n("Coding Standards"), n("PR Review Strategy"), n("Deprecation workflow")]),
        p("Performance",   [n("Core Web Vitals"), n("Bundle budgets"), n("Observability")]),
        p("Milestone",     [n("Frontend Platform Vision", "milestone")]),
      ]),
    ],
  };
})();

/* ── NEXT.JS ────────────────────────────────────────────────── */
const nextjsData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "nextjs", title: "Next.js Roadmap",
    subtitle: "From file-based routing to full-stack React with server components and edge capabilities.",
    category: "Frontend", accent: "#00E5B0", icon: "▲",
    bestFor: "React developers moving to full-stack development",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand Next.js basics and build your first multi-page app.", [
        p("Start",    [n("Next.js install"), n("Project structure"), n("Dev server")]),
        p("Routing",  [n("File-based routing"), n("Link component"), n("Image component"), n("_app & _document")]),
        p("SSG",      [n("getStaticProps"), n("getStaticPaths"), n("Static generation")]),
        p("API",      [n("API Routes"), n("Request handling"), n("JSON responses")]),
        p("Milestone",[n("Multi-page Next.js App", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Use App Router, Server Components, and Server Actions.", [
        p("App Router",    [n("app/ directory"), n("Layouts"), n("Loading UI"), n("Error UI")]),
        p("Server Comp",   [n("RSC basics"), n("Client vs Server"), n("use client directive"), n("Streaming")]),
        p("Data Fetching", [n("fetch in RSC"), n("Caching"), n("Revalidation"), n("Server Actions")]),
        p("Middleware",    [n("Middleware basics"), n("Auth redirects"), n("Edge config", "optional")]),
        p("Milestone",     [n("Full-Stack App with DB", "milestone")]),
      ]),
      lv("production", "Production Ready", "Optimise SEO, auth, and deploy Next.js to production.", [
        p("SEO",      [n("Metadata API"), n("Open Graph"), n("Sitemap"), n("robots.txt")]),
        p("Auth",     [n("Auth.js / NextAuth"), n("Session management"), n("Protected pages"), n("Role-based", "optional")]),
        p("Perf",     [n("Image optimisation"), n("Font loading"), n("Bundle analysis"), n("Core Web Vitals")]),
        p("Deploy",   [n("Vercel deploy"), n("Env vars"), n("Custom domains"), n("Preview URLs")]),
        p("Milestone",[n("Production Next.js App", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Integrate CMS, use edge features, and handle large-scale data.", [
        p("CMS",      [n("Contentful / Sanity"), n("Preview mode"), n("On-demand ISR"), n("Draft vs Published")]),
        p("Edge",     [n("Edge Runtime"), n("Geo-routing", "optional"), n("A/B testing at edge"), n("Rate limiting")]),
        p("Auth+",    [n("RBAC"), n("OAuth providers"), n("JWTs"), n("2FA", "optional")]),
        p("TS",       [n("Strict TS config"), n("Type-safe routes"), n("next/types"), n("Zod validation")]),
        p("Milestone",[n("CMS + Auth + Edge App", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design multi-zone Next.js platforms with performance governance.", [
        p("Multi-zone", [n("Zone setup"), n("Shared auth"), n("Asset strategy"), n("Team ownership")]),
        p("Monorepo",   [n("Turborepo"), n("Shared packages"), n("Workspace tooling"), n("Changesets")]),
        p("Perf Gov",   [n("Performance budgets"), n("RUM monitoring"), n("Synthetic tests"), n("SLA targets")]),
        p("Platform",   [n("Infra as code"), n("DX standards"), n("Framework governance")]),
        p("Milestone",  [n("Next.js Platform Blueprint", "milestone")]),
      ]),
    ],
  };
})();

/* ── CORE JAVA ──────────────────────────────────────────────── */
const coreJavaData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "core-java", title: "Core Java Roadmap",
    subtitle: "From Java syntax and OOP to JVM internals, concurrency, and enterprise-grade design.",
    category: "Backend", accent: "#60a5fa", icon: "☕",
    bestFor: "Students and developers targeting Java backend roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Master Java fundamentals and write clean object-oriented code.", [
        p("Syntax",    [n("Variables & Types"), n("Operators"), n("Control Flow"), n("Arrays")]),
        p("OOP",       [n("Classes & Objects"), n("Inheritance"), n("Polymorphism"), n("Encapsulation"), n("Abstraction")]),
        p("Core",      [n("Interfaces"), n("Abstract Classes"), n("Packages"), n("Access Modifiers")]),
        p("Errors",    [n("try/catch/finally"), n("Checked vs Unchecked"), n("Custom exceptions")]),
        p("Milestone", [n("OOP Console App", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Use collections, streams, lambdas, and basic JDBC.", [
        p("Collections", [n("List / Set / Map"), n("ArrayList / HashMap"), n("Iterator"), n("Comparable / Comparator")]),
        p("Generics",    [n("Generic classes"), n("Bounded types"), n("Wildcards"), n("Type safety")]),
        p("Functional",  [n("Lambda Expressions"), n("Streams API"), n("Optional"), n("Method References")]),
        p("I/O",         [n("File I/O"), n("BufferedReader"), n("Thread basics"), n("JDBC basics")]),
        p("Milestone",   [n("JDBC CRUD App", "milestone")]),
      ]),
      lv("production", "Production Ready", "Apply design patterns, testing, and build tools.", [
        p("Patterns",  [n("Singleton"), n("Factory"), n("Builder"), n("Observer"), n("Strategy")]),
        p("Testing",   [n("JUnit 5"), n("Mockito"), n("TDD basics"), n("Test coverage")]),
        p("Build",     [n("Maven"), n("Gradle", "optional"), n("Dependency management"), n("Profiles")]),
        p("Quality",   [n("Clean Code"), n("SonarQube basics"), n("SLF4J logging"), n("Javadoc", "optional")]),
        p("Milestone", [n("Production-Grade Java App", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Understand JVM internals, advanced concurrency, and modern Java.", [
        p("JVM",         [n("JVM architecture"), n("Garbage Collection"), n("Heap / Stack"), n("JVM tuning")]),
        p("Concurrency", [n("ExecutorService"), n("CompletableFuture"), n("Locks & Semaphores"), n("Thread safety")]),
        p("Modern Java", [n("Records"), n("Sealed Classes"), n("Pattern matching"), n("Virtual Threads (Java 21)")]),
        p("Micro",       [n("REST with Java"), n("Docker + Java"), n("API versioning"), n("Service contracts")]),
        p("Milestone",   [n("Concurrent Java Service", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design Java-based enterprise systems with scalable architecture.", [
        p("Enterprise",  [n("Domain-Driven Design"), n("Hexagonal Architecture"), n("CQRS"), n("Event sourcing", "optional")]),
        p("Integration", [n("Kafka with Java"), n("gRPC"), n("GraphQL", "optional"), n("Message brokers")]),
        p("Performance", [n("Profiling"), n("Gatling / JMeter"), n("Redis caching"), n("DB optimisation")]),
        p("Governance",  [n("API contracts"), n("Code standards"), n("Architecture reviews")]),
        p("Milestone",   [n("Java Enterprise Platform Design", "milestone")]),
      ]),
    ],
  };
})();

/* ── SPRING BOOT ────────────────────────────────────────────── */
const springBootData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "spring-boot", title: "Spring Boot Roadmap",
    subtitle: "From REST APIs and JPA to microservices, security, and cloud-native Spring applications.",
    category: "Backend", accent: "#60a5fa", icon: "🍃",
    bestFor: "Java developers building enterprise APIs and microservices",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Build your first REST API with Spring Boot.", [
        p("Setup",     [n("Spring Initializr"), n("Project structure"), n("application.properties"), n("Dev Tools")]),
        p("MVC",       [n("@RestController"), n("@GetMapping / @PostMapping"), n("@RequestBody"), n("@PathVariable")]),
        p("IoC",       [n("@Component / @Service"), n("@Repository"), n("@Autowired"), n("@Bean"), n("@Configuration")]),
        p("Milestone", [n("In-memory CRUD API", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Persist data with JPA, validate inputs, and document APIs.", [
        p("JPA",       [n("Spring Data JPA"), n("@Entity / @Repository"), n("CRUD Repository"), n("JPQL queries")]),
        p("Validation",[n("Bean Validation (@Valid)"), n("@NotNull / @Size"), n("Custom validators", "optional")]),
        p("Errors",    [n("@ControllerAdvice"), n("@ExceptionHandler"), n("Problem Details"), n("Status codes")]),
        p("Docs",      [n("SpringDoc OpenAPI"), n("Swagger UI"), n("DTO pattern"), n("MapStruct", "optional")]),
        p("Milestone", [n("Full REST CRUD with DB", "milestone")]),
      ]),
      lv("production", "Production Ready", "Secure, test, and deploy Spring Boot applications.", [
        p("Security",  [n("Spring Security basics"), n("JWT auth"), n("BCrypt passwords"), n("CORS config")]),
        p("Testing",   [n("@SpringBootTest"), n("MockMvc"), n("@DataJpaTest"), n("TestContainers", "optional")]),
        p("Ops",       [n("Spring Actuator"), n("Health checks"), n("Micrometer metrics"), n("Log levels")]),
        p("Deploy",    [n("Docker + Spring Boot"), n("Profiles (dev/prod)"), n("CI/CD pipeline"), n("Env config")]),
        p("Milestone", [n("Secure Deployed Spring API", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Build microservices with Spring Cloud and integrate messaging.", [
        p("Cloud",     [n("Spring Cloud"), n("Eureka discovery"), n("Config Server"), n("API Gateway")]),
        p("Messaging", [n("Spring Kafka"), n("RabbitMQ", "optional"), n("Async processing"), n("Event-driven basics")]),
        p("Auth+",     [n("OAuth2 / OIDC"), n("Keycloak / Auth Server"), n("Resource Server"), n("Token refresh")]),
        p("Perf",      [n("Redis / Caffeine cache"), n("Lazy loading"), n("Connection pooling"), n("Query optimisation")]),
        p("Milestone", [n("Distributed Spring Boot System", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design scalable Spring platforms for enterprise.", [
        p("Arch",      [n("Hexagonal / Clean Arch"), n("CQRS + Spring"), n("Saga pattern"), n("Event sourcing", "optional")]),
        p("Multi-svc", [n("API contracts (OpenAPI)"), n("Service mesh intro"), n("Distributed tracing"), n("Correlation IDs")]),
        p("Platform",  [n("Multi-module Maven"), n("Shared libraries"), n("Versioning strategy"), n("Deprecation workflow")]),
        p("Gov",       [n("Architecture reviews"), n("Coding standards"), n("SLA & SLO targets")]),
        p("Milestone", [n("Spring Enterprise Blueprint", "milestone")]),
      ]),
    ],
  };
})();

/* ── JAVASCRIPT ─────────────────────────────────────────────── */
const javascriptData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "javascript", title: "JavaScript Roadmap",
    subtitle: "From browser basics to advanced async patterns, modules, and JavaScript architecture.",
    category: "Frontend", accent: "#00E5B0", icon: "📜",
    bestFor: "Anyone starting web development or deepening JS knowledge",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Write your first JavaScript programs with confidence.", [
        p("Syntax",    [n("Variables (var/let/const)"), n("Data types"), n("Operators"), n("Conditionals")]),
        p("Functions", [n("Function declarations"), n("Arrow functions"), n("Scope"), n("Closures")]),
        p("DOM",       [n("querySelector"), n("addEventListener"), n("innerHTML"), n("Class toggle")]),
        p("Milestone", [n("Interactive Web Page", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Use modern JS features, fetch APIs, and async patterns.", [
        p("ES6+",      [n("Destructuring"), n("Spread / Rest"), n("Template literals"), n("Modules (import/export)")]),
        p("Arrays",    [n("map / filter / reduce"), n("Object methods"), n("Cloning"), n("Chaining")]),
        p("Async",     [n("Callbacks"), n("Promises"), n("async/await"), n("Error handling async")]),
        p("Fetch",     [n("fetch()"), n("Response parsing"), n("Loading states"), n("Error fallback")]),
        p("Milestone", [n("Data-Fetching JS App", "milestone")]),
      ]),
      lv("production", "Production Ready", "Bundle, test, and deploy JavaScript applications.", [
        p("Tooling",   [n("Vite / Webpack"), n("npm scripts"), n("ESLint"), n("Prettier")]),
        p("Testing",   [n("Jest basics"), n("DOM testing"), n("Mocking"), n("Coverage reports", "optional")]),
        p("Errors",    [n("try/catch"), n("Global error handler"), n("Sentry intro", "optional")]),
        p("Deploy",    [n("Build process"), n("Env vars"), n("CDN / static hosting"), n("Source maps")]),
        p("Milestone", [n("Production JS App", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Master design patterns, functional programming, and performance.", [
        p("Patterns",  [n("Module pattern"), n("Observer"), n("Factory"), n("Command"), n("Proxy")]),
        p("Functional",[n("Pure functions"), n("Immutability"), n("Currying"), n("Composition"), n("Monads", "optional")]),
        p("Perf",      [n("Event loop deep dive"), n("Memory leaks"), n("Web Workers"), n("Lazy loading")]),
        p("TypeScript",[n("TS basics"), n("Types & Interfaces"), n("tsconfig"), n("Migrating from JS")]),
        p("Milestone", [n("Pattern-Rich JS App", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Lead JavaScript architecture, standards, and team decisions.", [
        p("Arch",      [n("Module boundaries"), n("Dependency inversion"), n("Testability design")]),
        p("Standards", [n("Coding standards"), n("PR review templates"), n("Naming conventions"), n("Bundle budgets")]),
        p("Strategy",  [n("Framework evaluation"), n("Build tool selection"), n("State strategy"), n("Migration planning")]),
        p("Milestone", [n("JS Platform Blueprint", "milestone")]),
      ]),
    ],
  };
})();

/* ── TYPESCRIPT ─────────────────────────────────────────────── */
const typescriptData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "typescript", title: "TypeScript Roadmap",
    subtitle: "From basic types and interfaces to advanced generics, utility types, and type system design.",
    category: "Frontend", accent: "#00E5B0", icon: "🔷",
    bestFor: "JavaScript developers adopting TypeScript in teams or projects",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Add static types to your JavaScript code and catch errors early.", [
        p("Setup",      [n("TS install"), n("tsconfig basics"), n("ts-node"), n("IDE support")]),
        p("Types",      [n("string / number / boolean"), n("Arrays"), n("Tuples"), n("any / unknown / never")]),
        p("Interfaces", [n("Interface definition"), n("Optional props"), n("Readonly"), n("Extending interfaces")]),
        p("Functions",  [n("Typed params"), n("Return types"), n("Void"), n("Optional params")]),
        p("Milestone",  [n("Typed JS Module", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Apply generics, union types, and utility types in real code.", [
        p("Generics",   [n("Generic functions"), n("Generic interfaces"), n("Constraints"), n("Default types")]),
        p("Union",      [n("Union types"), n("Type narrowing"), n("Discriminated unions"), n("Type guards")]),
        p("Utility",    [n("Partial / Required"), n("Pick / Omit"), n("Record"), n("ReturnType / Parameters")]),
        p("Enums",      [n("Const enums"), n("String enums"), n("Enum vs union type")]),
        p("Milestone",  [n("Typed API Client", "milestone")]),
      ]),
      lv("production", "Production Ready", "Configure strict TypeScript for production-grade projects.", [
        p("Strict",     [n("strict mode"), n("noImplicitAny"), n("strictNullChecks"), n("exactOptionalPropertyTypes")]),
        p("Frameworks", [n("React + TS"), n("Node + TS"), n("Next.js types"), n("@types/ packages")]),
        p("Testing",    [n("Jest + TS"), n("Type-safe mocks"), n("ts-jest config"), n("Type coverage")]),
        p("Quality",    [n("ESLint TS rules"), n("No any policy"), n("Deprecation marking"), n("Type docs", "optional")]),
        p("Milestone",  [n("Strict Production TS App", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Use advanced generics, conditional types, and template literal types.", [
        p("Advanced",   [n("infer keyword"), n("Mapped types"), n("Template literal types"), n("Recursive types")]),
        p("Conditional",[n("extends in types"), n("Distributive conditionals"), n("infer in conditions")]),
        p("Decl Files", [n(".d.ts files"), n("Ambient declarations"), n("Module augmentation"), n("Global types")]),
        p("Perf",       [n("Type-level performance"), n("Avoiding type complexity"), n("isolatedModules")]),
        p("Milestone",  [n("Complex Type System", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design scalable type systems and govern TypeScript across teams.", [
        p("Lib Author", [n("Package types"), n("Dual ESM/CJS"), n("Type exports"), n("Versioned APIs")]),
        p("System",     [n("Domain type modelling"), n("Type-safe APIs"), n("Schema-to-type codegen")]),
        p("Governance", [n("Shared tsconfig"), n("TS strict enforcement"), n("Migration strategy"), n("Coverage targets")]),
        p("Milestone",  [n("Enterprise TypeScript Platform", "milestone")]),
      ]),
    ],
  };
})();

/* ── NODE.JS ────────────────────────────────────────────────── */
const nodejsData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "nodejs", title: "Node.js Roadmap",
    subtitle: "From core Node APIs and Express to production-grade microservices and platform architecture.",
    category: "Backend", accent: "#60a5fa", icon: "🟢",
    bestFor: "JavaScript developers building server-side applications",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand Node.js runtime and build your first HTTP server.", [
        p("Runtime",   [n("Node.js install"), n("npm / npx"), n("package.json"), n("CommonJS modules")]),
        p("Core Mods", [n("fs (File System)"), n("path"), n("http module"), n("os / process", "optional")]),
        p("Server",    [n("HTTP server"), n("Routing basics"), n("Sending JSON"), n("Status codes")]),
        p("Tools",     [n("nodemon"), n("dotenv"), n("ESM vs CJS"), n("Debugging basics")]),
        p("Milestone", [n("Node HTTP Server Running", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Build REST APIs with Express, connect databases, and handle auth.", [
        p("Express",   [n("Express setup"), n("Routers"), n("Middleware"), n("Error middleware"), n("Static files")]),
        p("Database",  [n("MongoDB + Mongoose"), n("PostgreSQL + Prisma"), n("CRUD operations"), n("Migrations")]),
        p("Auth",      [n("JWT basics"), n("bcrypt"), n("Login/Register flow"), n("Cookie vs Header")]),
        p("Validation",[n("express-validator"), n("Zod"), n("Error responses"), n("Input sanitisation")]),
        p("Milestone", [n("Authenticated CRUD API", "milestone")]),
      ]),
      lv("production", "Production Ready", "Test, containerise, and deploy Node.js services.", [
        p("Testing",   [n("Jest / Vitest"), n("Supertest"), n("Mocking services"), n("Integration tests")]),
        p("Docker",    [n("Dockerfile for Node"), n("docker-compose"), n("Multi-stage build"), n("Env handling")]),
        p("Ops",       [n("Winston / Pino logging"), n("Morgan HTTP logs"), n("Health check endpoint"), n("Metrics basics")]),
        p("Deploy",    [n("Railway / Render / EC2"), n("Reverse proxy (nginx)"), n("TLS / HTTPS"), n("PM2")]),
        p("Milestone", [n("Production Node API", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Use streams, clustering, TypeScript, and service patterns.", [
        p("Perf",       [n("Cluster module"), n("Worker threads"), n("Event loop awareness"), n("Memory profiling")]),
        p("Streams",    [n("Readable / Writable"), n("Transform streams"), n("Piping"), n("Backpressure")]),
        p("TypeScript", [n("TS + Node setup"), n("ts-node / esbuild"), n("Typed Express"), n("Type-safe config")]),
        p("Micro",      [n("Service discovery"), n("Kafka / Redis pub-sub"), n("gRPC basics", "optional"), n("Circuit breaker")]),
        p("Milestone",  [n("Distributed Node Service", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design Node.js platforms, API gateways, and serverless patterns.", [
        p("Arch",      [n("Hexagonal arch"), n("Clean Architecture"), n("Domain separation"), n("CQRS")]),
        p("Gateway",   [n("API Gateway design"), n("Rate limiting"), n("Request aggregation"), n("Schema-first")]),
        p("Serverless",[n("AWS Lambda + Node"), n("Cold starts"), n("Edge functions"), n("Serverless framework", "optional")]),
        p("Platform",  [n("Monorepo strategy"), n("Shared packages"), n("Standards & templates"), n("Telemetry")]),
        p("Milestone", [n("Node.js Backend Platform", "milestone")]),
      ]),
    ],
  };
})();

/* ── PYTHON ─────────────────────────────────────────────────── */
const pythonData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "python", title: "Python Roadmap",
    subtitle: "From Python basics and web APIs to data science, AI integration, and production systems.",
    category: "Backend", accent: "#60a5fa", icon: "🐍",
    bestFor: "Developers targeting backend APIs, scripting, or AI/data roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Write clean Python scripts and understand core language features.", [
        p("Basics",  [n("Variables & types"), n("Control flow"), n("Functions"), n("Modules & imports")]),
        p("Data",    [n("Lists / Tuples"), n("Dicts / Sets"), n("List comprehensions"), n("Slicing")]),
        p("OOP",     [n("Classes"), n("Inheritance"), n("Magic methods"), n("Dataclasses")]),
        p("Files",   [n("File I/O"), n("Exception handling"), n("Context managers (with)")]),
        p("Milestone",[n("Python CLI Tool", "milestone")]),
      ]),
      lv("practical", "Practical Developer", "Build REST APIs and work with popular Python libraries.", [
        p("Frameworks",[n("FastAPI basics"), n("Django basics", "optional"), n("Routes & views"), n("Request/Response")]),
        p("Database", [n("SQLAlchemy / SQLModel"), n("Alembic migrations"), n("ORM queries"), n("Async DB", "optional")]),
        p("Libraries",[n("requests / httpx"), n("pandas basics"), n("pydantic models"), n("celery basics", "optional")]),
        p("Auth",     [n("JWT with FastAPI"), n("OAuth2 password flow"), n("API key auth"), n("Middleware")]),
        p("Milestone",[n("Deployed Python REST API", "milestone")]),
      ]),
      lv("production", "Production Ready", "Test, containerise, and run Python services reliably.", [
        p("Testing",  [n("pytest"), n("Fixtures"), n("Mocking"), n("Coverage"), n("Async test", "optional")]),
        p("Config",   [n("env vars"), n("pydantic Settings"), n("Secrets management"), n(".env files")]),
        p("Docker",   [n("Python Dockerfile"), n("Multi-stage build"), n("docker-compose"), n("Health checks")]),
        p("Deploy",   [n("Gunicorn / Uvicorn"), n("Railway / AWS ECS"), n("Reverse proxy"), n("structlog")]),
        p("Milestone",[n("Production Python Service", "milestone")]),
      ]),
      lv("advanced", "Advanced", "Use async Python, type hints, and integrate data/AI capabilities.", [
        p("Async",    [n("asyncio"), n("async/await"), n("Concurrent tasks"), n("aiohttp / httpx async")]),
        p("Types",    [n("Type annotations"), n("mypy"), n("Protocol types"), n("Generic types")]),
        p("Data Sci", [n("NumPy"), n("pandas advanced"), n("matplotlib basics"), n("Jupyter", "optional")]),
        p("AI",       [n("OpenAI SDK"), n("LangChain basics"), n("Embeddings"), n("Vector DB", "optional")]),
        p("Milestone",[n("Async AI-Integrated Service", "milestone")]),
      ]),
      lv("architect", "Architect Level", "Design Python platforms for scale, observability, and AI workflows.", [
        p("Arch",     [n("Clean Architecture"), n("Domain events"), n("Microservices pattern"), n("CQRS", "optional")]),
        p("Observ",   [n("OpenTelemetry"), n("Distributed tracing"), n("Prometheus metrics"), n("Alerting")]),
        p("MLOps",    [n("Model serving (FastAPI)"), n("Batch pipelines"), n("Feature stores", "optional"), n("Model monitoring", "optional")]),
        p("Platform", [n("Shared packages (PyPI)"), n("Monorepo structure"), n("Standards"), n("Cost governance")]),
        p("Milestone",[n("Python Backend Platform", "milestone")]),
      ]),
    ],
  };
})();

/* ── AEM ────────────────────────────────────────────────────── */
const aemData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "aem", title: "AEM Roadmap",
    subtitle: "From AEM authoring basics to component architecture, cloud services, and enterprise delivery.",
    category: "CMS", accent: "#FFB84D", icon: "📄",
    bestFor: "Java developers and content engineers targeting AEM roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand AEM as a platform and navigate the authoring environment.", [
        p("Authoring",  [n("AEM console"), n("Page authoring"), n("Component palette"), n("Assets DAM"), n("Publishing")]),
        p("Content",    [n("Pages"), n("Templates"), n("Components"), n("Content Fragments", "optional")]),
        p("Structure",  [n("JCR basics"), n("Sling basics"), n("OSGi overview"), n("AEM project layout")]),
        p("Milestone",  [n("Local AEM Instance Running", "milestone")]),
      ]),
      lv("developer", "Developer", "Build AEM components with HTL, Sling Models, and OSGi.", [
        p("HTL",         [n("HTL syntax"), n("data-sly-use"), n("data-sly-list"), n("data-sly-test"), n("data-sly-resource")]),
        p("Sling Models",[n("@Model annotation"), n("@Inject / @ValueMapValue"), n("Adaptable"), n("Delegating models")]),
        p("Components",  [n("Component definition"), n("Touch UI dialogs"), n("Multi-field"), n("Editable templates")]),
        p("Clientlibs",  [n("CSS / JS clientlibs"), n("Categories"), n("Embedding"), n("Theme management")]),
        p("Milestone",   [n("Custom AEM Component", "milestone")]),
      ]),
      lv("integration", "Integration", "Connect AEM with APIs, assets, workflows, and headless delivery.", [
        p("APIs",        [n("Content Services"), n("Experience Fragments"), n("GraphQL (Headless)"), n("SPA Editor", "optional")]),
        p("Assets",      [n("Asset workflows"), n("DAM pipelines"), n("Renditions"), n("Dynamic Media", "optional")]),
        p("Workflows",   [n("Workflow model"), n("Workflow steps"), n("Workflow launcher"), n("Inbox tasks")]),
        p("Dispatcher",  [n("Dispatcher basics"), n("Cache rules"), n("Flush"), n("Filters")]),
        p("Milestone",   [n("Headless + Workflow Integration", "milestone")]),
      ]),
      lv("senior", "Senior Developer", "Design multi-site architectures and govern AEM implementations.", [
        p("Arch",        [n("Component reusability"), n("MSM / Live copy"), n("Language copy"), n("Multi-site setup")]),
        p("Perf",        [n("Dispatcher caching"), n("Query optimisation"), n("Lazy loading"), n("AEM Analyzer")]),
        p("Advanced Dev",[n("OSGi services"), n("Schedulers / Jobs"), n("Event handlers"), n("Custom workflow steps")]),
        p("Governance",  [n("Code review standards"), n("Component naming"), n("Documentation"), n("Onboarding")]),
        p("Milestone",   [n("Multi-site AEM Implementation", "milestone")]),
      ]),
      lv("architect", "Solution Architect", "Architect enterprise AEM solutions on AEM as a Cloud Service.", [
        p("AEMaaCS",     [n("Cloud Service overview"), n("Cloud Manager"), n("RDE"), n("Migration to CS")]),
        p("Security",    [n("Permissions model"), n("User groups"), n("Replication security"), n("Dispatcher hardening")]),
        p("Integrations",[n("Adobe Target"), n("Adobe Analytics"), n("Launch (DTMM)"), n("Third-party APIs")]),
        p("Enterprise",  [n("Multi-tenant"), n("Shared component library"), n("Release train"), n("SLA planning")]),
        p("Milestone",   [n("AEM Enterprise Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── CONTENTFUL ─────────────────────────────────────────────── */
const contentfulData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "contentful", title: "Contentful Roadmap",
    subtitle: "From space setup and content modelling to enterprise headless CMS architecture.",
    category: "CMS", accent: "#FFB84D", icon: "📦",
    bestFor: "Developers and content engineers building headless CMS solutions",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Set up Contentful and create your first content model and entries.", [
        p("Platform",  [n("Space setup"), n("Environments"), n("Content types"), n("Fields & validations")]),
        p("Content",   [n("Creating entries"), n("Asset management"), n("Publishing workflow"), n("Locales basics")]),
        p("Delivery",  [n("REST API basics"), n("API keys"), n("Fetch content"), n("Preview API")]),
        p("Milestone", [n("Content-Driven Page", "milestone")]),
      ]),
      lv("developer", "Developer", "Build content-driven apps using SDKs, GraphQL, and webhooks.", [
        p("SDKs",       [n("JavaScript SDK"), n("contentful.js"), n("Rich text renderer"), n("TypeScript types")]),
        p("GraphQL",    [n("GraphQL API"), n("Explorer"), n("Queries & fragments"), n("Typed queries")]),
        p("Webhooks",   [n("Webhook setup"), n("Trigger events"), n("Validation / security"), n("Retry logic")]),
        p("App SDK",    [n("Contentful App"), n("UI extensions"), n("App SDK"), n("Custom sidebar")]),
        p("Milestone",  [n("Dynamic Contentful Site", "milestone")]),
      ]),
      lv("integration", "Integration", "Integrate Contentful with Next.js, CI/CD, and localisation.", [
        p("Next.js",    [n("ISR with Contentful"), n("Preview mode"), n("Draft entries"), n("On-demand ISR")]),
        p("CI/CD",      [n("Contentful CLI"), n("Export / Import"), n("Environment migration"), n("Build hooks")]),
        p("i18n",       [n("Multi-locale setup"), n("Translation workflow"), n("Fallback locales"), n("i18n routing")]),
        p("Perf",       [n("CDN caching"), n("Include depth"), n("Link resolution"), n("Response limit tuning")]),
        p("Milestone",  [n("Production CMS Integration", "milestone")]),
      ]),
      lv("senior", "Senior Developer", "Design content models, govern spaces, and manage migrations.", [
        p("Modelling",  [n("Modelling strategy"), n("Nested references"), n("Circular ref avoidance"), n("Validation patterns")]),
        p("Governance", [n("Roles & permissions"), n("Environment strategy"), n("Review workflow"), n("Scheduled publishing")]),
        p("Migrations", [n("Migration scripts"), n("Contentful merge"), n("Schema drift prevention"), n("Rollback strategy")]),
        p("Milestone",  [n("Governed Multi-locale CMS", "milestone")]),
      ]),
      lv("architect", "Solution Architect", "Design composable CMS architecture for enterprise with Contentful.", [
        p("Multi-space",[n("Space per brand"), n("Cross-space references"), n("Shared component space"), n("Hub & spoke")]),
        p("Composable", [n("Composable architecture"), n("Orchestration layer"), n("Microsite federation"), n("DXP patterns")]),
        p("Enterprise", [n("SSO / SAML"), n("Audit trails"), n("Data residency"), n("SLA management")]),
        p("Milestone",  [n("Enterprise Contentful Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── SITECORE ───────────────────────────────────────────────── */
const sitecoreData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "sitecore", title: "Sitecore Roadmap",
    subtitle: "From Sitecore authoring to composable DXP, XM Cloud, and enterprise architecture.",
    category: "CMS", accent: "#FFB84D", icon: "🌐",
    bestFor: ".NET developers and architects targeting Sitecore roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Navigate Sitecore and understand its core content model.", [
        p("Authoring",  [n("Content tree"), n("Template basics"), n("Pages"), n("Experience Editor"), n("Publishing")]),
        p("Structure",  [n("Data templates"), n("Standard values"), n("Branches"), n("Presentation layer")]),
        p("Platform",   [n("Sitecore instance"), n("Sitecore CLI basics"), n("Roles overview"), n("Serialisation")]),
        p("Milestone",  [n("Sitecore Content Page", "milestone")]),
      ]),
      lv("developer", "Developer", "Build renderings, templates, and integrate .NET with Sitecore.", [
        p("Rendering",  [n("MVC Rendering"), n("View Rendering"), n("Controller Rendering"), n("Rendering params")]),
        p(".NET",       [n("Glass.Mapper / models"), n("Item API"), n("Context"), n("Pipelines")]),
        p("SXA",        [n("SXA basics"), n("Page designs"), n("Partial designs"), n("SXA components")]),
        p("Serialise",  [n("Sitecore CLI"), n("Item serialisation"), n("Sync workflow"), n("TDS / Unicorn", "optional")]),
        p("Milestone",  [n("Custom Sitecore Component", "milestone")]),
      ]),
      lv("integration", "Integration", "Use Headless JSS, xConnect, personalisation, and CDP.", [
        p("JSS",        [n("Next.js + JSS"), n("Layout Service"), n("Component props"), n("Editing host"), n("Multisite")]),
        p("xConnect",   [n("xConnect basics"), n("Contact model"), n("Interactions"), n("Channel tracking")]),
        p("Personal",   [n("Rules engine"), n("Conditional rendering"), n("Engagement plans"), n("A/B testing")]),
        p("CDP",        [n("Sitecore CDP basics", "optional"), n("Audience segments"), n("Sitecore Send", "optional")]),
        p("Milestone",  [n("Headless + Personalisation", "milestone")]),
      ]),
      lv("senior", "Senior Developer", "Design scalable Sitecore architecture with multisite and governance.", [
        p("Arch",       [n("Helix principles"), n("Feature / Foundation / Project"), n("Multisite setup"), n("Shared modules")]),
        p("Perf",       [n("HTML cache"), n("Output cache"), n("Prefetch DB"), n("Rendering cache")]),
        p("Security",   [n("User roles"), n("Extranet users"), n("Workflow security"), n("Publishing permissions")]),
        p("Gov",        [n("Branch templates"), n("Dev / QA / Prod environments"), n("Deployment pipeline")]),
        p("Milestone",  [n("Enterprise Helix Sitecore App", "milestone")]),
      ]),
      lv("architect", "Solution Architect", "Architect composable Sitecore DXP solutions on XM Cloud.", [
        p("XM Cloud",   [n("XM Cloud setup"), n("Pages"), n("Vercel deployment"), n("Component library"), n("Edge delivery")]),
        p("Composable", [n("Sitecore CDP"), n("Sitecore Send"), n("Sitecore Search"), n("OrderCloud", "optional"), n("Discover")]),
        p("Cloud",      [n("Hosting options"), n("PaaS vs SaaS"), n("Migration strategy"), n("Cloud SLAs")]),
        p("Enterprise", [n("Multi-brand governance"), n("Shared component strategy"), n("Release governance")]),
        p("Milestone",  [n("Sitecore DXP Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── AWS ────────────────────────────────────────────────────── */
const awsData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "aws", title: "AWS Roadmap",
    subtitle: "From cloud basics and core services to multi-account enterprise cloud architecture.",
    category: "Cloud", accent: "#a78bfa", icon: "☁️",
    bestFor: "Developers and engineers targeting AWS cloud roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand cloud basics and use core AWS services hands-on.", [
        p("Cloud",     [n("What is cloud"), n("Regions & AZs"), n("Pricing model"), n("Free tier")]),
        p("IAM",       [n("Users & Groups"), n("Policies"), n("Roles"), n("MFA"), n("Least privilege")]),
        p("Compute",   [n("EC2 launch"), n("Instance types"), n("Key pairs"), n("Security groups")]),
        p("Storage",   [n("S3 buckets"), n("S3 permissions"), n("Versioning"), n("Lifecycle rules")]),
        p("Network",   [n("VPC basics"), n("Subnets"), n("Internet Gateway"), n("Route tables")]),
        p("Milestone", [n("EC2 Web Server Running", "milestone")]),
      ]),
      lv("core", "Core Services", "Use serverless, databases, and monitoring to build cloud apps.", [
        p("Serverless",[n("Lambda basics"), n("Event triggers"), n("Env vars"), n("Lambda layers", "optional")]),
        p("Database",  [n("RDS setup"), n("Aurora basics", "optional"), n("DynamoDB basics"), n("DB snapshots")]),
        p("API Layer", [n("API Gateway"), n("REST API"), n("Lambda integration"), n("CORS config")]),
        p("Monitoring",[n("CloudWatch Logs"), n("Metrics"), n("Alarms"), n("CloudTrail")]),
        p("Networking",[n("ELB / ALB"), n("Target groups"), n("Health checks"), n("HTTPS listener")]),
        p("Milestone", [n("Serverless API with DB", "milestone")]),
      ]),
      lv("deployment", "Deployment", "Automate builds, containers, and infrastructure as code.", [
        p("CI/CD",     [n("CodeCommit / GitHub"), n("CodeBuild"), n("CodePipeline"), n("CodeDeploy")]),
        p("Containers",[n("ECR"), n("ECS basics"), n("Task definitions"), n("Fargate"), n("EKS basics", "optional")]),
        p("Beanstalk", [n("EB environment"), n("Deploy ZIP / Docker"), n("Auto-scaling"), n("EB CLI")]),
        p("IaC",       [n("CloudFormation basics"), n("Stacks & templates"), n("CDK intro", "optional"), n("Terraform intro", "optional")]),
        p("Milestone", [n("Full CI/CD Pipeline on AWS", "milestone")]),
      ]),
      lv("devops", "DevOps & Security", "Harden security, automate governance, and optimise cost.", [
        p("Security",  [n("WAF"), n("Shield basics"), n("Security Hub"), n("GuardDuty"), n("Inspector")]),
        p("Secrets",   [n("Secrets Manager"), n("Parameter Store"), n("KMS"), n("Certificate Manager")]),
        p("Cost",      [n("Cost Explorer"), n("Budgets & alerts"), n("Reserved instances"), n("Savings plans")]),
        p("Automation",[n("Systems Manager"), n("Config rules"), n("EventBridge"), n("Lambda automation")]),
        p("Milestone", [n("Hardened Secure AWS Environment", "milestone")]),
      ]),
      lv("architect", "Cloud Architect", "Design resilient, scalable multi-account AWS platforms.", [
        p("Well-Arch", [n("5 pillars"), n("Reliability"), n("Performance efficiency"), n("Cost optimisation")]),
        p("Scale",     [n("Auto Scaling groups"), n("ElastiCache"), n("CloudFront CDN"), n("Global Accelerator")]),
        p("Resilience",[n("Multi-AZ"), n("Multi-region"), n("Disaster recovery"), n("RTO / RPO targets")]),
        p("Multi-acc", [n("AWS Organizations"), n("Control Tower"), n("Landing Zone"), n("SCPs")]),
        p("Milestone", [n("Enterprise AWS Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── AZURE ──────────────────────────────────────────────────── */
const azureData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "azure", title: "Azure Roadmap",
    subtitle: "From Azure cloud basics and virtual machines to enterprise-scale cloud architecture.",
    category: "Cloud", accent: "#a78bfa", icon: "🔵",
    bestFor: "Developers and engineers targeting Microsoft Azure roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand Azure fundamentals and use core services hands-on.", [
        p("Basics",    [n("Azure portal"), n("Regions"), n("Resource Groups"), n("Subscriptions"), n("Pricing")]),
        p("Identity",  [n("Azure AD / Entra ID"), n("Users & Groups"), n("RBAC"), n("MFA"), n("Service Principals")]),
        p("Compute",   [n("Virtual Machines"), n("VM sizing"), n("SSH / RDP"), n("VM scale sets")]),
        p("Storage",   [n("Blob Storage"), n("Storage accounts"), n("Access tiers"), n("SAS tokens")]),
        p("Network",   [n("VNet basics"), n("Subnets"), n("NSG"), n("DNS zones", "optional")]),
        p("Milestone", [n("Azure VM Web App Running", "milestone")]),
      ]),
      lv("core", "Core Services", "Build cloud apps with Functions, SQL, API Management, and monitoring.", [
        p("Serverless",[n("Azure Functions"), n("Triggers & bindings"), n("Durable Functions", "optional"), n("Logic Apps", "optional")]),
        p("Database",  [n("Azure SQL"), n("Cosmos DB basics"), n("Flexible Server (PostgreSQL)"), n("Backups")]),
        p("API Layer", [n("API Management"), n("API Gateway"), n("APIM policies"), n("Developer portal")]),
        p("Monitoring",[n("Azure Monitor"), n("Log Analytics"), n("Application Insights"), n("Alerts")]),
        p("Milestone", [n("Serverless API on Azure", "milestone")]),
      ]),
      lv("deployment", "Deployment", "Automate deployments using Azure DevOps, AKS, and Bicep.", [
        p("DevOps",    [n("Repos"), n("Pipelines (CI)"), n("Pipelines (CD)"), n("Artifacts"), n("Boards", "optional")]),
        p("App Svc",   [n("Web App service"), n("Deployment slots"), n("Auto-scale"), n("Custom domains")]),
        p("Containers",[n("ACR"), n("AKS basics"), n("Pods & deployments"), n("Helm charts", "optional")]),
        p("IaC",       [n("ARM templates"), n("Bicep"), n("Terraform for Azure", "optional"), n("Blueprints")]),
        p("Milestone", [n("Full Azure CI/CD Pipeline", "milestone")]),
      ]),
      lv("devops", "DevOps & Security", "Secure, govern, and optimise your Azure environment.", [
        p("Security",  [n("Defender for Cloud"), n("Security Center"), n("Policy initiatives"), n("Secure Score")]),
        p("Secrets",   [n("Key Vault"), n("Managed Identity"), n("Certificate management"), n("Firewall basics")]),
        p("Cost",      [n("Cost Management"), n("Budgets"), n("Advisor"), n("Reserved instances")]),
        p("Governance",[n("Azure Policy"), n("Blueprints"), n("Management groups"), n("Tagging strategy")]),
        p("Milestone", [n("Hardened Azure Environment", "milestone")]),
      ]),
      lv("architect", "Cloud Architect", "Design enterprise-scale Azure landing zones and multi-region platforms.", [
        p("Well-Arch", [n("Azure WAF pillars"), n("Reliability"), n("Security"), n("Cost optimisation")]),
        p("Scale",     [n("CDN / Front Door"), n("Traffic Manager"), n("Redis Cache"), n("Event Hub")]),
        p("Resilience",[n("Availability Zones"), n("Geo-redundancy"), n("BCDR planning"), n("SLA targets")]),
        p("Enterprise",[n("CAF Landing Zone"), n("Hub & spoke topology"), n("Management groups"), n("Policy at scale")]),
        p("Milestone", [n("Enterprise Azure Platform", "milestone")]),
      ]),
    ],
  };
})();

/* ── DOCKER ─────────────────────────────────────────────────── */
const dockerData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "docker", title: "Docker Roadmap",
    subtitle: "From container basics and Dockerfiles to production-grade platforms and DevOps pipelines.",
    category: "DevOps", accent: "#34d399", icon: "🐳",
    bestFor: "Developers and DevOps engineers working with containerised applications",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand containers and run your first Dockerised application.", [
        p("Concepts",  [n("VMs vs Containers"), n("Docker Engine"), n("Images vs Containers"), n("Layers")]),
        p("Commands",  [n("docker pull"), n("docker run"), n("docker ps"), n("docker stop / rm")]),
        p("Dockerfile",[n("FROM / RUN / COPY"), n("WORKDIR / EXPOSE"), n("CMD / ENTRYPOINT"), n("Build & tag")]),
        p("Registry",  [n("Docker Hub"), n("docker push / pull"), n("Image tagging"), n("Private registry intro")]),
        p("Milestone", [n("Dockerised App Running", "milestone")]),
      ]),
      lv("practical", "Practical Usage", "Compose multi-service apps with volumes, networks, and env config.", [
        p("Compose",   [n("docker-compose.yml"), n("Services"), n("depends_on"), n("Compose CLI"), n("Profiles", "optional")]),
        p("Volumes",   [n("Named volumes"), n("Bind mounts"), n("Volume drivers", "optional"), n("Data persistence")]),
        p("Networks",  [n("Bridge network"), n("Service DNS"), n("Host network", "optional"), n("Network isolation")]),
        p("Config",    [n("Environment variables"), n(".env file"), n("Secrets basics"), n("Override files")]),
        p("Milestone", [n("Compose App with DB + API", "milestone")]),
      ]),
      lv("production", "Production Setup", "Optimise images, add health checks, and manage registries.", [
        p("Optimise",  [n("Multi-stage builds"), n("Minimal base images"), n(".dockerignore"), n("Image size audit")]),
        p("Health",    [n("HEALTHCHECK instruction"), n("Restart policies"), n("OOM limits"), n("CPU / memory limits")]),
        p("Registries",[n("ECR / GCR / ACR"), n("Image scanning"), n("Tag strategy"), n("Pull policies")]),
        p("Secrets",   [n("Docker secrets"), n("Vault integration", "optional"), n("Build-time vs runtime secrets")]),
        p("Milestone", [n("Production-Ready Container Setup", "milestone")]),
      ]),
      lv("devops", "DevOps Integration", "Integrate Docker into CI/CD and implement image governance.", [
        p("CI/CD",     [n("GitHub Actions + Docker"), n("Build & push in pipeline"), n("Tag on merge"), n("Matrix builds", "optional")]),
        p("Scanning",  [n("Trivy / Snyk"), n("CVE scanning"), n("Policy gates"), n("SBOM", "optional")]),
        p("Monitoring",[n("Container logs"), n("cAdvisor"), n("Prometheus metrics"), n("Alerting")]),
        p("Gov",       [n("Base image standards"), n("Dockerfile linting (hadolint)"), n("Approved image list"), n("Update cadence")]),
        p("Milestone", [n("Docker in Full CI/CD", "milestone")]),
      ]),
      lv("architect", "Platform Architect", "Design container platforms, registry strategy, and orchestration.", [
        p("Platform",  [n("Orchestration choice (K8s)"), n("Multi-environment"), n("Networking model"), n("Storage strategy")]),
        p("Registry",  [n("Multi-region mirrors"), n("Promotion pipeline"), n("Access control"), n("Retention policy")]),
        p("Security",  [n("Rootless containers"), n("Read-only FS"), n("Seccomp / AppArmor", "optional"), n("Network policies")]),
        p("Gov",       [n("Container standards"), n("Image SLA"), n("Developer guidelines"), n("Runbook")]),
        p("Milestone", [n("Container Platform Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── KUBERNETES ─────────────────────────────────────────────── */
const kubernetesData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "kubernetes", title: "Kubernetes Roadmap",
    subtitle: "From pods and deployments to production clusters, GitOps, and platform engineering.",
    category: "DevOps", accent: "#34d399", icon: "⎈",
    bestFor: "DevOps engineers and platform engineers managing containerised workloads",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand K8s concepts and deploy your first app on a cluster.", [
        p("Concepts",  [n("Why Kubernetes"), n("Cluster architecture"), n("Control plane"), n("Worker nodes")]),
        p("Workloads", [n("Pods"), n("Deployments"), n("ReplicaSets"), n("DaemonSets", "optional")]),
        p("Services",  [n("ClusterIP"), n("NodePort"), n("LoadBalancer"), n("Service discovery")]),
        p("kubectl",   [n("kubectl get / describe"), n("kubectl apply -f"), n("kubectl logs"), n("kubectl exec")]),
        p("Milestone", [n("App Running on K8s", "milestone")]),
      ]),
      lv("practical", "Practical Usage", "Use ConfigMaps, Secrets, Ingress, and resource management.", [
        p("Config",    [n("ConfigMaps"), n("Secrets"), n("Env injection"), n("Volume mounts")]),
        p("Ingress",   [n("Ingress resource"), n("nginx-ingress"), n("TLS termination"), n("Path routing")]),
        p("Namespaces",[n("Namespace isolation"), n("Resource quotas"), n("LimitRanges"), n("Context switching")]),
        p("Resources", [n("CPU / Memory requests"), n("Limits"), n("QoS classes"), n("Node affinity", "optional")]),
        p("Milestone", [n("K8s Multi-service App", "milestone")]),
      ]),
      lv("production", "Production Setup", "Add autoscaling, rolling updates, probes, and RBAC.", [
        p("Updates",   [n("Rolling update strategy"), n("Rollback"), n("Canary deploy basics"), n("Blue/Green intro", "optional")]),
        p("Scaling",   [n("HPA"), n("VPA", "optional"), n("Cluster autoscaler"), n("KEDA", "optional")]),
        p("Probes",    [n("Liveness probe"), n("Readiness probe"), n("Startup probe"), n("Probe tuning")]),
        p("RBAC",      [n("ServiceAccounts"), n("Roles & RoleBindings"), n("ClusterRole"), n("Least privilege")]),
        p("Milestone", [n("Production-Grade K8s App", "milestone")]),
      ]),
      lv("devops", "DevOps Integration", "Use Helm, GitOps, monitoring, and CI pipeline integration.", [
        p("Helm",      [n("Helm charts"), n("values.yaml"), n("Chart templates"), n("Helm releases"), n("ArtifactHub")]),
        p("GitOps",    [n("ArgoCD basics"), n("Flux basics", "optional"), n("App of Apps"), n("Sync strategy")]),
        p("Monitoring",[n("Prometheus"), n("Grafana dashboards"), n("kube-state-metrics"), n("Alertmanager")]),
        p("CI",        [n("Build & push in CI"), n("Deploy via Helm in CD"), n("Environment promotion")]),
        p("Milestone", [n("Full GitOps Deployment", "milestone")]),
      ]),
      lv("architect", "Platform Architect", "Design multi-cluster platforms with service mesh and governance.", [
        p("Multi-cluster",[n("Cluster federation"), n("Cluster API"), n("Multi-region traffic"), n("Failover strategy")]),
        p("Service Mesh", [n("Istio basics"), n("Traffic management"), n("mTLS"), n("Observability with mesh")]),
        p("Networking",   [n("CNI choice (Calico / Cilium)"), n("Network policies"), n("Egress control"), n("eBPF basics", "optional")]),
        p("Cost & Gov",   [n("Kubecost"), n("Namespace budgets"), n("Upgrade strategy"), n("Cluster SLAs")]),
        p("Milestone",    [n("K8s Platform Architecture", "milestone")]),
      ]),
    ],
  };
})();

/* ── GIT & GITHUB ───────────────────────────────────────────── */
const gitGithubData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "git-github", title: "Git & GitHub Roadmap",
    subtitle: "From basic version control to branching strategies, code review, and release automation.",
    category: "Tools", accent: "#f59e0b", icon: "🐙",
    bestFor: "Every developer working in a team or open source project",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Use Git for daily version control and collaborate on GitHub.", [
        p("Git Basics",[n("git init / clone"), n("git add / commit"), n("git status / log"), n("git push / pull")]),
        p("Branches",  [n("git branch"), n("git checkout / switch"), n("git merge"), n("Conflict basics")]),
        p("GitHub",    [n("Creating a repo"), n("README"), n("Issues"), n("Stars & forks"), n(".gitignore")]),
        p("Milestone", [n("GitHub Repo with History", "milestone")]),
      ]),
      lv("team", "Team Workflow", "Collaborate effectively with pull requests and GitHub Projects.", [
        p("Pull Reqs", [n("Creating PRs"), n("PR description"), n("Reviewers"), n("Merge strategies")]),
        p("Forks",     [n("Fork workflow"), n("Sync upstream"), n("Contribute to OSS", "optional")]),
        p("GitHub",    [n("Labels"), n("Milestones"), n("GitHub Projects"), n("Assignees")]),
        p("Automation",[n("Issue templates"), n("PR templates"), n("Auto-assign"), n("Stale bot", "optional")]),
        p("Milestone", [n("Full PR Team Workflow", "milestone")]),
      ]),
      lv("branching", "Branching Strategy", "Design and apply structured branching strategies.", [
        p("Strategies",[n("Git Flow"), n("GitHub Flow"), n("Trunk-based development"), n("Release branches")]),
        p("Rules",     [n("Branch protection"), n("Required reviews"), n("Status checks"), n("Linear history")]),
        p("Merge",     [n("Merge commit"), n("Squash merge"), n("Rebase merge"), n("When to use each")]),
        p("Tagging",   [n("Semantic versioning"), n("git tag"), n("Annotated tags"), n("Tag protection")]),
        p("Milestone", [n("Team Branching Strategy Implemented", "milestone")]),
      ]),
      lv("review", "Code Review", "Set up effective code review processes and standards.", [
        p("Process",   [n("Review checklist"), n("Inline comments"), n("Suggestions"), n("Request changes")]),
        p("CODEOWNERS",[n("CODEOWNERS file"), n("Auto-reviewers"), n("Team ownership"), n("Path rules")]),
        p("GH Actions",[n("CI on PR"), n("Linting checks"), n("Test gate"), n("Coverage gate", "optional")]),
        p("Culture",   [n("Review etiquette"), n("Constructive feedback"), n("Response SLA"), n("Pair review", "optional")]),
        p("Milestone", [n("Team Code Review Standard", "milestone")]),
      ]),
      lv("release", "Release Workflow", "Automate releases, changelogs, and deployment from GitHub.", [
        p("Releases",  [n("GitHub Releases"), n("Release notes"), n("Asset attachments"), n("Pre-releases")]),
        p("Automation",[n("Release Please / semantic-release"), n("CHANGELOG.md"), n("Conventional commits"), n("Auto-tagging")]),
        p("GH Actions",[n("Deploy on tag"), n("Environment gates"), n("Secrets in Actions"), n("OIDC auth")]),
        p("Gov",       [n("Release sign-off"), n("Rollback procedure"), n("Hotfix workflow"), n("Post-release tag")]),
        p("Milestone", [n("Automated Release Pipeline", "milestone")]),
      ]),
    ],
  };
})();

/* ── SYSTEM DESIGN ──────────────────────────────────────────── */
const systemDesignData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "system-design", title: "System Design Roadmap",
    subtitle: "From client-server basics to distributed system patterns and senior architecture thinking.",
    category: "Architecture", accent: "#FF5E7E", icon: "📐",
    bestFor: "Mid-to-senior developers preparing for architect or staff engineer roles",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand what system design is and learn foundational concepts.", [
        p("Basics",    [n("Client-server model"), n("Request / response"), n("Latency vs throughput"), n("Bandwidth")]),
        p("APIs",      [n("REST APIs"), n("HTTP methods"), n("Status codes"), n("API versioning")]),
        p("Storage",   [n("Relational DB basics"), n("NoSQL basics"), n("Indexing"), n("ACID properties")]),
        p("Caching",   [n("Why caching"), n("Cache patterns"), n("TTL"), n("Cache invalidation")]),
        p("Milestone", [n("Can explain a basic web system", "milestone")]),
      ]),
      lv("core", "Core Concepts", "Apply load balancing, CDN, messaging, and database scaling.", [
        p("LB",        [n("L4 vs L7"), n("Round robin"), n("Sticky sessions"), n("Health checks")]),
        p("CDN",       [n("CDN purpose"), n("Edge caching"), n("Cache-Control"), n("Push vs pull CDN")]),
        p("Queues",    [n("Message queues"), n("Kafka basics"), n("RabbitMQ basics", "optional"), n("Async decoupling")]),
        p("DB Scale",  [n("Read replicas"), n("Connection pooling"), n("Partitioning"), n("Time-series DB", "optional")]),
        p("Milestone", [n("Design a URL Shortener", "milestone")]),
      ]),
      lv("scalable", "Scalable Systems", "Design large-scale distributed systems with consistency trade-offs.", [
        p("CAP",       [n("Consistency"), n("Availability"), n("Partition tolerance"), n("BASE vs ACID")]),
        p("Sharding",  [n("Horizontal sharding"), n("Consistent hashing"), n("Shard key choice"), n("Resharding")]),
        p("Rate Limit",[n("Token bucket"), n("Leaky bucket"), n("Fixed window"), n("Sliding window")]),
        p("Cache",     [n("Redis clustering"), n("Cache eviction"), n("Cache aside"), n("Write-through")]),
        p("Milestone", [n("Design Twitter Feed", "milestone")]),
      ]),
      lv("patterns", "Architecture Patterns", "Apply microservices, event-driven, and CQRS patterns.", [
        p("Microsvcs", [n("Service decomposition"), n("API gateway"), n("Service registry"), n("Circuit breaker")]),
        p("Events",    [n("Event sourcing"), n("CQRS"), n("Saga pattern"), n("Outbox pattern")]),
        p("Data",      [n("Fan-out"), n("Fan-in"), n("Change data capture"), n("Data lake basics", "optional")]),
        p("Observ",    [n("Logs"), n("Metrics"), n("Traces"), n("SLI / SLO / SLA")]),
        p("Milestone", [n("Design a Payment System", "milestone")]),
      ]),
      lv("architect", "Senior / Architect", "Lead architecture reviews, estimate systems, and define trade-offs.", [
        p("Estimation",[n("Back-of-envelope calc"), n("Traffic estimation"), n("Storage estimation"), n("Cost estimation")]),
        p("Trade-offs",[n("Consistency vs availability"), n("Latency vs throughput"), n("SQL vs NoSQL"), n("Build vs buy")]),
        p("Review",    [n("Architecture document"), n("RFC / ADR process"), n("Risk assessment"), n("SLA commitments")]),
        p("Incidents", [n("Post-mortem culture"), n("Runbooks"), n("On-call basics"), n("Chaos engineering", "optional")]),
        p("Milestone", [n("Senior Architecture Leadership", "milestone")]),
      ]),
    ],
  };
})();

/* ── AI / LLM ENGINEERING ───────────────────────────────────── */
const aiLlmData = (() => {
  const { n, p, lv } = mkT();
  return {
    slug: "ai-llm-engineering", title: "AI / LLM Engineering Roadmap",
    subtitle: "From AI basics and prompting to RAG pipelines, agents, and production LLM application deployment.",
    category: "AI", accent: "#e879f9", icon: "🤖",
    bestFor: "Developers building AI-powered applications and LLM integrations",
    defaultLevel: "beginner",
    levels: [
      lv("beginner", "Beginner", "Understand how LLMs work and write your first AI-powered feature.", [
        p("AI Basics", [n("What are LLMs"), n("Tokens & context"), n("Temperature / top-p"), n("Model types")]),
        p("Models",    [n("GPT-4o / Claude / Gemini"), n("Open vs closed models"), n("Capabilities & limits"), n("Costs basics")]),
        p("Prompting", [n("User / system / assistant roles"), n("Clear instructions"), n("Output formatting"), n("Iteration")]),
        p("Milestone", [n("First LLM-Powered Feature", "milestone")]),
      ]),
      lv("prompting", "Prompting", "Master prompting techniques that produce reliable, structured outputs.", [
        p("Patterns",  [n("Zero-shot"), n("Few-shot"), n("Chain-of-thought"), n("Role prompting")]),
        p("Structure", [n("Markdown output"), n("JSON mode"), n("Output schemas"), n("Prompt templates")]),
        p("Context",   [n("System prompt design"), n("Context management"), n("Instruction hierarchy"), n("Negative instructions")]),
        p("Eval",      [n("Prompt testing"), n("Eval datasets"), n("Human eval"), n("LLM-as-judge", "optional")]),
        p("Milestone", [n("Reusable Prompt Library", "milestone")]),
      ]),
      lv("api", "API Integration", "Integrate LLM APIs into applications with streaming and function calling.", [
        p("OpenAI",    [n("Chat Completions"), n("Streaming"), n("Function calling"), n("Structured outputs")]),
        p("Claude",    [n("Messages API"), n("Tool use"), n("Extended thinking", "optional"), n("Batching")]),
        p("LangChain", [n("LangChain basics"), n("Chains"), n("Prompt templates"), n("Output parsers")]),
        p("App Integ", [n("API key management"), n("Rate limit handling"), n("Retry logic"), n("Cost tracking")]),
        p("Milestone", [n("LLM-Powered App Feature", "milestone")]),
      ]),
      lv("rag", "RAG / Agents", "Build retrieval-augmented generation pipelines and LLM agents.", [
        p("Embeddings",[n("What are embeddings"), n("Embedding models"), n("Cosine similarity"), n("Chunking strategy")]),
        p("Vector DB", [n("Pinecone / Weaviate / Qdrant"), n("Index setup"), n("Upsert & query"), n("Metadata filtering")]),
        p("RAG",       [n("Retrieval pipeline"), n("Context injection"), n("Re-ranking", "optional"), n("Hybrid search", "optional")]),
        p("Agents",    [n("Tool definitions"), n("Tool calling loop"), n("ReAct pattern"), n("Multi-agent basics", "optional")]),
        p("Milestone", [n("Working RAG Application", "milestone")]),
      ]),
      lv("production", "Production AI Apps", "Deploy, monitor, secure, and govern LLM apps in production.", [
        p("Guardrails",[n("Content moderation"), n("Guardrails AI"), n("Toxicity filters"), n("Nemo Guardrails", "optional")]),
        p("Observ",    [n("LLM observability (Langfuse)"), n("Trace spans"), n("Cost per request"), n("Latency tracking")]),
        p("Cost",      [n("Caching responses"), n("Model routing"), n("Token budgeting"), n("Batch processing")]),
        p("Security",  [n("Prompt injection defense"), n("PII handling"), n("Data retention policy"), n("API key rotation")]),
        p("Deploy",    [n("Containerised AI service"), n("Streaming endpoint"), n("Model version pinning"), n("CDN for assets")]),
        p("Milestone", [n("Production LLM Application", "milestone")]),
      ]),
    ],
  };
})();

/* ── EXPORT ─────────────────────────────────────────────────── */
const technologyRoadmapsData = [
  reactData, nextjsData, coreJavaData, springBootData,
  javascriptData, typescriptData, nodejsData, pythonData,
  aemData, contentfulData, sitecoreData,
  awsData, azureData, dockerData, kubernetesData,
  gitGithubData, systemDesignData, aiLlmData,
];

export default technologyRoadmapsData;
