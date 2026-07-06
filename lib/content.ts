// RAAGHAV OS — single source of truth.
// Every section of the site and the AI assistant's knowledge base reads from here.

export const identity = {
  name: "RAAGHAV",
  fullName: "Raaghav S.H",
  roles: ["Product Manager", "Systems Thinker", "AI Builder"],
  tagline:
    "Designing products where technology, business and human behaviour intersect.",
  location: "Bangalore, India",
  email: "shraaghav@gmail.com",
  phone: "+91 99406 75689",
  linkedin: "https://linkedin.com/in/raaghavsh",
  github: "https://github.com/shraaghav0428",
  photo: "/raaghav.jpg",
};

export const heroMetrics = [
  { value: "7+", label: "Years Experience" },
  { value: "0→1", label: "Products Built" },
  { value: "₹730 Cr", label: "RFQ Pipeline" },
  { value: "1", label: "Patent Filed" },
  { value: "AI", label: "Builder" },
];

export const journey = [
  {
    era: "2018 – 2020",
    title: "Business Analyst",
    org: "Run Adam Sports · Chennai",
    story:
      "Started in a B2C/B2B2C sports & fitness marketplace (~15,000 registrations). Learned the fundamentals — sprint ceremonies, backlog prioritization, working shoulder-to-shoulder with UX. Discovered that the interesting problems live between business and technology.",
  },
  {
    era: "2021 – 2022",
    title: "Marketplace PM",
    org: "Matex Technologies · Chennai",
    story:
      "PM for a B2B sourcing marketplace SaaS — 80 corporates, 10,000+ vendors, ₹330 Cr+ procurement value, ₹33 Cr+ savings across 11,000 RFQs. Scaled from 1 to 20 corporate clients through product-led growth and a UX redesign; automated 1M+ SKUs via API integrations.",
  },
  {
    era: "2022 – 2026",
    title: "Manufacturing Platform PM",
    org: "Machine Maze · Bangalore",
    story:
      "Led the 0-to-1 build and launch of Precision X — a full-stack B2B platform digitizing the custom manufacturing lifecycle from RFQ to delivery. Scaled the RFQ pipeline 21x from ₹34 Cr to ₹730 Cr, filed an India patent and Global PCT application as named inventor, and led product strategy through investor funding discussions.",
  },
  {
    era: "2025 – Now",
    title: "AI Product Builder",
    org: "Independent · Claude, Gemini, Vercel",
    story:
      "Without writing traditional code, shipped AI-powered products end-to-end — an AI procurement analyst, a daily word game with an AI hint engine, a financial freedom calculator, an AI PDF editor. The tools changed. The craft is the same: understand the user, ship, iterate.",
  },
  {
    era: "Next",
    title: "AI Product Leader",
    org: "The road ahead",
    story:
      "Building toward products where AI agents, workflows and human judgment compound — bringing manufacturing-grade systems thinking to AI-native products.",
  },
];

export const frameworks = [
  {
    title: "Product Discovery",
    icon: "◎",
    summary: "Fall in love with the problem, not the demo.",
    detail:
      "Every Precision X module started with sitting next to the person doing the job — feasibility engineers, pricing teams, sales. I map the workflow as it actually happens (not as the org chart says it happens), find where time and trust leak, and only then talk solutions. Discovery output is a crisp problem statement with evidence, not a feature list.",
  },
  {
    title: "Root Cause Analysis",
    icon: "⌘",
    summary: "Symptoms are loud. Causes are quiet.",
    detail:
      "When RFQ conversion stalled, the loud answer was 'we need more leads.' The quiet answer, found by walking the funnel stage by stage, was friction inside feasibility turnaround. Fixing workflow bottlenecks — not marketing — took average feasibility TaT to 27 hours and helped scale the pipeline 21x.",
  },
  {
    title: "Prioritization",
    icon: "≡",
    summary: "Sequencing is strategy made visible.",
    detail:
      "Precision X's roadmap had 17 modules; we shipped 7 first. The filter: does this module unblock revenue-critical workflow today, and does it produce the data a future intelligence layer needs? Priority isn't a score in a spreadsheet — it's an argument about what compounds.",
  },
  {
    title: "Trade-offs",
    icon: "⇄",
    summary: "Every yes is ten silent nos.",
    detail:
      "Ship the BOM workflow or harden price discovery? Serve the loudest customer or the largest segment? I make trade-offs explicit — write down what we're NOT doing and why — so the team debates the decision once instead of relitigating it every sprint.",
  },
  {
    title: "Product Strategy",
    icon: "◆",
    summary: "Platform first. Intelligence second. Agents third.",
    detail:
      "Precision X's strategy was layered: digitize workflows (platform), use the resulting data for design & costing intelligence, then introduce AI copilots and agents on top. You can't bolt AI onto a business that hasn't digitized its ground truth. Strategy is choosing the order of operations.",
  },
  {
    title: "Metrics",
    icon: "∿",
    summary: "Define success before you build. Validate after you ship.",
    detail:
      "Every release had metrics defined upfront — feasibility TaT, RFQ-to-quote conversion, vendor allocation rate, adoption depth by team. I built the investor KPI dashboard that became a key artifact in a VC funding round. Metrics inform; users decide.",
  },
  {
    title: "Execution",
    icon: "▶",
    summary: "Execution compounds. Shipping is a habit, not an event.",
    detail:
      "Owned the full lifecycle on every release — discovery, PRD, UX/UI, GTM, success metrics. Iterative releases with real users (dogfooding with internal teams) beat big-bang launches. A 0-to-1 platform is really forty 0-to-0.1s shipped relentlessly.",
  },
  {
    title: "AI Product Thinking",
    icon: "✳",
    summary: "AI should reduce cognitive load, not add novelty.",
    detail:
      "ProcureIQ's rule: answer procurement questions exceptionally well, politely decline everything else. Trust comes from explainability — every recommendation traceable to data, every trade-off named. The bar for AI products isn't 'impressive,' it's 'defensible.'",
  },
];

export const caseStudy = {
  company: "Machine Maze",
  product: "Precision X",
  role: "Senior Product Manager — first and only PM, 0→1",
  problem:
    "Global OEMs sourcing custom manufacturing from India operated on email, spreadsheets and tribal knowledge. Quoting a single RFQ meant days of back-and-forth between sales, feasibility engineers, pricing teams and partner factories — slow, opaque and impossible to scale.",
  vision:
    "Make on-demand manufacturing transparent for global OEMs — a platform layer first, then design & costing intelligence, then AI copilots and agents on top of the digitized data.",
  solution:
    "Precision X — a full-stack B2B platform digitizing the end-to-end custom manufacturing lifecycle: RFQ feasibility, reviews & approvals, department assignments, price discovery, quote comparison, proposal creation and customer purchase orders. Integrated the Autodesk 3D viewer so engineers evaluate STEP files without leaving the platform, and Zoho CRM so sales pushes RFQs straight in.",
  challenges: [
    "Zero playbook — no PM above me, no existing product, a domain (precision manufacturing) I had to learn from machinists up",
    "Users who lived in Excel and trusted nothing digital — adoption had to be earned workflow by workflow",
    "Sequencing 17 planned modules with a small engineering team — only ~30% of the roadmap released, chosen for maximum compounding",
    "Translating shop-floor complexity into narratives investors and the board could act on",
  ],
  outcomes: [
    { value: "₹34 Cr → ₹730 Cr", label: "RFQ pipeline scaled 21x" },
    { value: "27 hrs", label: "Average feasibility turnaround" },
    { value: "1 + PCT", label: "India patent filed (App No. 202541011592) + Global PCT — named inventor" },
    { value: "400", label: "Verified partners onboarded via Partner Hub" },
    { value: "5x", label: "Vendor allocation increase; 250+ factories indexed" },
    { value: "VC round", label: "KPI dashboard & product story used in funding discussions" },
  ],
  lessons: [
    "Adoption is a product feature. If the feasibility engineer doesn't open it daily, nothing else matters.",
    "Digitize the ground truth before promising intelligence — AI layers are only as good as the workflow data beneath them.",
    "In B2B, trust ships in small releases. Every module that worked bought permission for the next one.",
  ],
  patentNote:
    "India patent Application No. 202541011592 with a Global PCT application — covering platform workflow innovation. Led the complete IP documentation and filing as named inventor.",
};

export const products = [
  {
    name: "Precision X",
    kind: "B2B Manufacturing Platform",
    status: "Shipped · Machine Maze",
    problem: "Custom manufacturing lifecycle ran on email and spreadsheets.",
    users: "Global OEMs, feasibility engineers, pricing teams, partner factories",
    solution:
      "Full-stack platform digitizing RFQ → feasibility → pricing → proposal → purchase order, with 3D CAD viewing and CRM integration.",
    outcome: "₹730 Cr RFQ pipeline · patent filed · investor-ready platform story",
    stack: ["B2B Platform", "Autodesk APIs", "Zoho CRM", "0→1"],
    link: null,
    github: null,
  },
  {
    name: "ProcureIQ",
    kind: "AI Procurement Analyst",
    status: "Live prototype",
    problem:
      "After quotations arrive, buyers still manually interpret pricing, delivery risk and trade-offs before every award decision.",
    users: "Procurement managers and leadership",
    solution:
      "An AI analyst that sits on top of supplier comparison — ask in natural language, get evidence-backed, explainable recommendations. Answers procurement questions exceptionally well; politely declines everything else.",
    outcome: "Decision-support AI with full traceability — built solo, no code background",
    stack: ["Next.js", "Gemini API", "Vercel", "PDF/Excel export"],
    link: "https://procureiq-alpha.vercel.app/",
    github: null,
  },
  {
    name: "WordClimb",
    kind: "Daily Word Game + AI Hints",
    status: "Live",
    problem: "Wordle ends in one round. Players want progression.",
    users: "Daily puzzle players worldwide — same words, same UTC day",
    solution:
      "Four escalating levels (4→7 letters). After 2 attempts, an AI Assist powered by Gemini reads your guesses and colour feedback and nudges without spoiling.",
    outcome: "Shipped end-to-end: game design, React build, serverless AI backend",
    stack: ["React 18", "Gemini 2.0 Flash", "Vercel serverless", "GitHub Pages"],
    link: "https://shraaghav0428.github.io/WordClimb/",
    github: "https://github.com/shraaghav0428/WordClimb",
  },
  {
    name: "Financial Freedom Calculator",
    kind: "Personal Finance Modeler",
    status: "Live",
    problem: "Compound interest and SIP planning are abstract until you can see them.",
    users: "Anyone planning long-term wealth",
    solution:
      "Multi-currency compound interest modeler with SIP/goal tracking and interactive visualizations.",
    outcome: "A tool I actually use for my own investing decisions",
    stack: ["Web app", "Chart.js", "GitHub"],
    link: null,
    github: "https://github.com/shraaghav0428/RaaghavFinancialFreedom",
  },
  {
    name: "AI PDF Editor",
    kind: "Browser AI Tool",
    status: "Prototype",
    problem: "Replacing a logo or region in a PDF usually needs desktop software.",
    users: "Anyone editing brand assets in documents",
    solution:
      "Upload a PDF, select regions, replace or erase — Gemini-powered edits triggered on user actions, in the browser.",
    outcome: "Proof that focused AI beats general-purpose tools for narrow jobs",
    stack: ["Gemini API", "Vercel"],
    link: null,
    github: null,
  },
  {
    name: "RAAGHAV OS",
    kind: "This website",
    status: "You are here",
    problem: "Portfolios get scanned in 2 minutes and forgotten.",
    users: "Founders, product leaders, hiring managers — you",
    solution:
      "An immersive personal operating system with a live AI assistant trained on my work, built with Claude Code.",
    outcome: "My best product case study is the one you're inside right now",
    stack: ["Next.js", "Claude Code", "Gemini API", "Vercel"],
    link: null,
    github: null,
  },
];

export const aiLab = [
  {
    name: "Claude Code",
    status: "Daily driver",
    note: "Agentic building — this entire site, resume automation, job-search workflows. My highest-leverage tool.",
  },
  {
    name: "AI Agents & MCP",
    status: "Learning deeply",
    note: "Model Context Protocol, tool-calling patterns, multi-agent orchestration — studying how agents become products.",
  },
  {
    name: "Gemini API",
    status: "In production",
    note: "Powers WordClimb hints, ProcureIQ analysis and the AI PDF Editor via Vercel serverless functions.",
  },
  {
    name: "RAG Systems",
    status: "Applied",
    note: "The assistant on this site answers from a structured knowledge base of my actual work — grounded, not generic.",
  },
  {
    name: "Prompt & Context Engineering",
    status: "Practicing",
    note: "Designing system prompts that make AI predictable — ProcureIQ's 'decline everything off-topic' rule was a product decision.",
  },
  {
    name: "AI Product Strategy",
    status: "Core thesis",
    note: "Platform → data → intelligence → agents. Sequencing AI into businesses that haven't digitized yet.",
  },
];

export const playbook = [
  {
    topic: "Discovery",
    card: "Sit with the user doing the job. Map the workflow as it happens, not as the org chart claims. Evidence before opinions.",
  },
  {
    topic: "Roadmapping",
    card: "A roadmap is a story about compounding — each release should make the next one cheaper or smarter.",
  },
  {
    topic: "Prioritization",
    card: "Ask two questions: does it unblock revenue-critical workflow now, and does it produce data the future needs?",
  },
  {
    topic: "AI",
    card: "Narrow scope + explainability beats broad cleverness. An AI that knows when to decline earns trust faster than one that always answers.",
  },
  {
    topic: "Stakeholders",
    card: "Translate, don't transmit. The board needs a narrative, engineering needs constraints, users need to feel heard. Same truth, three languages.",
  },
  {
    topic: "Metrics",
    card: "Define success before you build; validate after you ship. Data informs, users decide.",
  },
  {
    topic: "Execution",
    card: "Ship in small releases that earn trust. Dogfood internally. A 0-to-1 platform is forty 0-to-0.1s.",
  },
  {
    topic: "Product Sense",
    card: "Good products reduce cognitive load. Every screen should answer: what should I do next, and why should I trust it?",
  },
  {
    topic: "Decision Making",
    card: "Write down what you're NOT doing and why. Prototype before debating. Reversible decisions fast, irreversible ones slow.",
  },
];

export const principles = [
  "Solve problems. Not features.",
  "Customers over opinions.",
  "Prototype before debating.",
  "Simple beats clever.",
  "Execution compounds.",
  "Data informs. Users decide.",
];

export const beyond = [
  {
    name: "Chess",
    icon: "♞",
    why: "I enjoy solving problems with incomplete information — every position is a prioritization exercise.",
  },
  {
    name: "Investments",
    icon: "📈",
    why: "I think in decades, not quarters. Compounding is the only strategy I've never had to pivot.",
  },
  {
    name: "Gym",
    icon: "🏋",
    why: "Consistency compounds. 7 AM, five days a week — the discipline transfers to everything else.",
  },
  {
    name: "Music",
    icon: "♪",
    why: "Pattern and structure underneath what feels effortless — the same thing good products do.",
  },
  {
    name: "Travel",
    icon: "✈",
    why: "New contexts break assumptions. The fastest way to learn how differently people solve the same problem.",
  },
  {
    name: "Family",
    icon: "☀",
    why: "Monthly trips to Chennai to see my parents. Non-negotiable — some roadmap items never get deprioritized.",
  },
];

export const recommendations = [
  // PLACEHOLDER — replace with real LinkedIn recommendations before shipping.
  {
    quote:
      "[Placeholder — LinkedIn recommendation to be added]",
    name: "Coming soon",
    title: "LinkedIn recommendations",
    placeholder: true,
  },
];

export const education = [
  { degree: "MBA", school: "University of Sheffield, UK" },
  { degree: "PGDM — Marketing Management", school: "LIBA, India" },
  { degree: "BSc. Visual Communication", school: "SRM University, India" },
];

export const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Google Agile Project Management",
  "Pendo Product-Led Growth",
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "ailab", label: "AI Lab" },
  { id: "thinking", label: "Thinking" },
  { id: "beyond", label: "Beyond Work" },
  { id: "contact", label: "Contact" },
];

// ---------- AI assistant knowledge base ----------

export function buildKnowledgeBase(): string {
  return `
# WHO IS RAAGHAV
${identity.fullName} — Senior Product Manager based in ${identity.location}. 7+ years across B2B SaaS, manufacturing tech and marketplace products, mostly in high-growth startup environments. He has never written traditional code, yet ships AI-powered products end-to-end using Claude, Gemini, VS Code, GitHub and Vercel. Contact: ${identity.email} · LinkedIn: ${identity.linkedin} · GitHub: ${identity.github}

# CAREER JOURNEY
${journey.map((j) => `- ${j.era} · ${j.title} @ ${j.org}: ${j.story}`).join("\n")}

# PRECISION X / MACHINE MAZE (flagship case study)
Problem: ${caseStudy.problem}
Vision: ${caseStudy.vision}
Solution: ${caseStudy.solution}
Challenges: ${caseStudy.challenges.join(" | ")}
Outcomes: ${caseStudy.outcomes.map((o) => `${o.value} — ${o.label}`).join(" | ")}
Lessons: ${caseStudy.lessons.join(" | ")}
Patent: ${caseStudy.patentNote}
Modules shipped: RFQ Feasibility, Reviews & approvals, Department assignments, Price Discovery, Quote comparison, Proposal Creation, Customer Purchase Orders. Roadmap pending: BOM workflows, partner POs, live production tracking, scheduling, quality, inventory, logistics, invoicing, analytics. Only ~30% of roadmap released. Also built margin reconciliation: Customer PO → Vendor PO → Vendor Invoice → Machine Maze Invoice chain surfacing part-level and PO-level margin in real time.
IMPORTANT ACCURACY RULES: Precision X is a B2B platform used by Machine Maze and its customers/partners — never call it "SaaS". Raaghav's AI work is API integration and AI-native product building — never claim ML/machine-learning engineering experience.

# HOW HE THINKS (frameworks)
${frameworks.map((f) => `- ${f.title}: ${f.summary} ${f.detail}`).join("\n")}

# PRODUCTS BUILT
${products.map((p) => `- ${p.name} (${p.kind}, ${p.status}): Problem: ${p.problem} Solution: ${p.solution} Outcome: ${p.outcome}${p.link ? ` Live: ${p.link}` : ""}`).join("\n")}

# AI LAB (current learning)
${aiLab.map((a) => `- ${a.name} [${a.status}]: ${a.note}`).join("\n")}

# PRODUCT PLAYBOOK
${playbook.map((p) => `- ${p.topic}: ${p.card}`).join("\n")}

# PRINCIPLES
${principles.join(" · ")}

# BEYOND WORK
${beyond.map((b) => `- ${b.name}: ${b.why}`).join("\n")}

# EDUCATION & CERTIFICATIONS
${education.map((e) => `${e.degree}, ${e.school}`).join(" · ")}. Certifications: ${certifications.join(", ")}.

# WHY HIRE HIM
He builds 0→1 under ambiguity (first and only PM on Precision X), thinks in systems (platform → data → intelligence → agents), earns adoption in skeptical environments, communicates from shop floor to boardroom (investor decks, funding discussions), and is genuinely AI-native — he builds real AI products himself, not just writes strategies about them.
`.trim();
}
