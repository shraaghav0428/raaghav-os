// RAAGHAV OS — single source of truth.
// Every section of the site and the AI assistant's knowledge base reads from here.
// Copy rules: outcome first, one idea per line, written for founders / product leaders / recruiters.

export const identity = {
  name: "RAAGHAV",
  fullName: "Raaghav S.H",
  roles: ["Product Manager", "Systems Thinker", "AI Builder"],
  tagline:
    "I build products where technology, business and human behaviour intersect.",
  location: "Bangalore, India",
  email: "shraaghav@gmail.com",
  phone: "+91 99406 75689",
  linkedin: "https://linkedin.com/in/raaghavsh",
  github: "https://github.com/shraaghav0428",
  photo: "/raaghav.jpg",
};

export const heroMetrics = [
  { value: "7+", label: "Years in Product" },
  { value: "0→1", label: "Platforms Launched" },
  { value: "₹730 Cr", label: "RFQ Pipeline Built" },
  { value: "1", label: "Patent Filed" },
  { value: "4", label: "AI Products Shipped" },
];

export const journey = [
  {
    era: "2018",
    title: "Business Analyst",
    org: "Run Adam Sports",
    hook: "Learned product fundamentals on a 15,000-user sports marketplace.",
    detail:
      "Sprint ceremonies, backlog ownership, UX collaboration — and the realization that the best problems live between business and technology.",
  },
  {
    era: "2021",
    title: "Product Manager",
    org: "Matex Technologies",
    hook: "Scaled a B2B sourcing marketplace from 1 to 20 corporate clients.",
    detail:
      "₹330 Cr+ procurement value across 11,000 RFQs, ₹33 Cr+ in client savings, 1M+ SKUs automated through API integrations.",
  },
  {
    era: "2022",
    title: "Senior Product Manager",
    org: "Machine Maze",
    hook: "Built Precision X from zero — and scaled its pipeline 21x.",
    detail:
      "First and only PM. Digitized the custom-manufacturing lifecycle end to end, grew RFQ pipeline from ₹34 Cr to ₹730 Cr, filed a patent, and carried the product story into investor funding discussions.",
  },
  {
    era: "2025",
    title: "AI Product Builder",
    org: "Independent",
    hook: "Shipped 4 AI products end-to-end — without a coding background.",
    detail:
      "ProcureIQ, WordClimb, a financial calculator, an AI PDF editor — designed, built and deployed solo with Claude, Gemini and Vercel. Proof that AI-native building is a PM skill now.",
  },
  {
    era: "Next",
    title: "AI Product Leader",
    org: "The next chapter",
    hook: "Bringing systems thinking to products where AI agents do real work.",
    detail:
      "The thesis: platform first, data second, intelligence third, agents last. Most companies skip steps. I don't.",
  },
];

export const frameworks = [
  {
    title: "Discovery",
    icon: "◎",
    summary: "Fall in love with the problem, not the demo.",
    detail:
      "Every Precision X module started by sitting next to the person doing the job. Output: a crisp problem statement with evidence — never a feature list.",
  },
  {
    title: "Root Cause",
    icon: "⌘",
    summary: "Symptoms are loud. Causes are quiet.",
    detail:
      "When RFQ conversion stalled, everyone said 'more leads.' Walking the funnel found the real leak: feasibility turnaround. Fixing it drove the 21x pipeline.",
  },
  {
    title: "Prioritization",
    icon: "≡",
    summary: "Sequencing is strategy made visible.",
    detail:
      "17 planned modules, 7 shipped first. The filter: does it unblock revenue today, and does it create the data tomorrow's AI layer needs?",
  },
  {
    title: "Trade-offs",
    icon: "⇄",
    summary: "Every yes is ten silent nos.",
    detail:
      "I write down what we're NOT doing and why — so the team debates a decision once, not every sprint.",
  },
  {
    title: "Strategy",
    icon: "◆",
    summary: "Platform → Data → Intelligence → Agents.",
    detail:
      "You can't bolt AI onto a business that hasn't digitized its ground truth. Strategy is choosing the order of operations.",
  },
  {
    title: "Metrics",
    icon: "∿",
    summary: "Define success before you build.",
    detail:
      "Every release shipped with metrics agreed upfront and validated after. My KPI dashboard became a key artifact in a VC funding round.",
  },
  {
    title: "Execution",
    icon: "▶",
    summary: "A 0→1 platform is forty 0→0.1s.",
    detail:
      "Small releases, internal dogfooding, relentless iteration. In B2B, every module that works buys permission for the next one.",
  },
  {
    title: "AI Products",
    icon: "✳",
    summary: "Trust beats cleverness.",
    detail:
      "ProcureIQ answers procurement questions exceptionally well — and politely declines everything else. Explainable, defensible, predictable.",
  },
];

export const caseStudy = {
  company: "Machine Maze",
  product: "Precision X",
  role: "First and only PM · 0→1",
  problem:
    "Global OEMs sourced custom manufacturing over email and spreadsheets. One RFQ took days of back-and-forth across sales, engineering and pricing.",
  vision:
    "Make on-demand manufacturing transparent — digitize the workflow first, then layer costing intelligence and AI on the data.",
  solution:
    "A full-stack B2B platform covering the lifecycle end to end: RFQ feasibility, price discovery, quote comparison, proposals and purchase orders — with 3D CAD viewing and CRM built in.",
  challenges: [
    "No playbook, no PM above me, a domain learned from machinists up",
    "Users who lived in Excel — adoption earned workflow by workflow",
    "Small team, 17 modules planned — shipped the 7 that compound",
    "Translating shop-floor complexity into boardroom narratives",
  ],
  outcomes: [
    { value: "21x", label: "RFQ pipeline — ₹34 Cr to ₹730 Cr" },
    { value: "27 hrs", label: "Avg. feasibility turnaround" },
    { value: "Patent", label: "India + Global PCT filed — named inventor" },
    { value: "400", label: "Verified partners onboarded" },
    { value: "5x", label: "Vendor allocation increase" },
    { value: "VC round", label: "Product story used in funding" },
  ],
  lessons: [
    "Adoption is a product feature.",
    "Digitize the ground truth before promising intelligence.",
    "In B2B, trust ships in small releases.",
  ],
  patentNote:
    "India patent App No. 202541011592 + Global PCT — led the complete IP documentation and filing as named inventor.",
};

export const products = [
  {
    name: "Precision X",
    kind: "B2B Manufacturing Platform",
    status: "Shipped",
    tagline: "The ₹730 Cr platform. Built from zero.",
    detail:
      "Digitized the entire custom-manufacturing lifecycle for global OEMs — RFQ to purchase order. Patent filed. Investor-ready.",
    stack: ["0→1", "B2B Platform", "Patent"],
    link: null,
    github: null,
    size: "large",
  },
  {
    name: "ProcureIQ",
    kind: "AI Procurement Analyst",
    status: "Live",
    tagline: "Ask your supplier data anything. Get evidence back.",
    detail:
      "An AI analyst on top of supplier comparison — natural-language questions, explainable recommendations, zero hallucinated confidence.",
    stack: ["Next.js", "AI", "Vercel"],
    link: "https://procureiq-alpha.vercel.app/",
    github: null,
    size: "large",
  },
  {
    name: "WordClimb",
    kind: "Daily Word Game",
    status: "Live",
    tagline: "Wordle, if it had a boss ladder — with an AI coach.",
    detail:
      "Four escalating levels daily. After two tries, a Gemini-powered assist reads your board and nudges without spoiling.",
    stack: ["React", "Gemini", "Serverless"],
    link: "https://shraaghav0428.github.io/WordClimb/",
    github: "https://github.com/shraaghav0428/WordClimb",
    size: "small",
  },
  {
    name: "Financial Freedom",
    kind: "Wealth Modeler",
    status: "Live",
    tagline: "Compounding, made visible.",
    detail:
      "Multi-currency SIP and goal modeling with interactive charts. I use it for my own investing.",
    stack: ["Web App", "Chart.js"],
    link: null,
    github: "https://github.com/shraaghav0428/RaaghavFinancialFreedom",
    size: "small",
  },
  {
    name: "AI PDF Editor",
    kind: "Browser AI Tool",
    status: "Prototype",
    tagline: "Select. Replace. Done.",
    detail:
      "Region-level PDF editing powered by Gemini — no desktop software, runs in the browser.",
    stack: ["Gemini", "Vercel"],
    link: null,
    github: null,
    size: "small",
  },
  {
    name: "RAAGHAV OS",
    kind: "This Website",
    status: "You're in it",
    tagline: "My best case study is the one you're inside.",
    detail:
      "An AI-powered portfolio with a live assistant grounded in my real work — designed and built with Claude Code.",
    stack: ["Next.js", "Claude Code", "LLM"],
    link: null,
    github: null,
    size: "small",
  },
];

export const aiLab = [
  { name: "Claude Code", status: "daily driver" },
  { name: "AI Agents", status: "building" },
  { name: "MCP", status: "learning" },
  { name: "Gemini API", status: "in production" },
  { name: "RAG", status: "applied — this site" },
  { name: "Prompt Engineering", status: "practicing" },
  { name: "Vercel", status: "in production" },
  { name: "Cursor / VS Code", status: "daily" },
];

export const aiLabNote =
  "Not a skills list — a live workshop. Everything here runs in a shipped product or an active experiment.";

export const playbook = [
  { topic: "Discovery", card: "Sit with the user doing the job. Evidence before opinions." },
  { topic: "Roadmap", card: "Each release should make the next one cheaper or smarter." },
  { topic: "Priority", card: "Unblock revenue now. Create data for later." },
  { topic: "AI", card: "An AI that knows when to decline earns trust faster than one that always answers." },
  { topic: "Stakeholders", card: "Same truth, three languages — board, engineering, users." },
  { topic: "Metrics", card: "Data informs. Users decide." },
  { topic: "Execution", card: "Dogfood internally. Ship small. Compound." },
  { topic: "Product Sense", card: "Every screen should answer: what next, and why trust it?" },
  { topic: "Decisions", card: "Reversible calls fast. Irreversible calls slow." },
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
  { name: "Chess", icon: "♞", why: "Deciding well with incomplete information." },
  { name: "Investing", icon: "◔", why: "I think in decades, not quarters." },
  { name: "Gym", icon: "▲", why: "Consistency compounds. 7 AM, five days a week." },
  { name: "Music", icon: "♪", why: "Structure underneath what feels effortless." },
  { name: "Travel", icon: "✈", why: "New contexts break old assumptions." },
  { name: "Family", icon: "☀", why: "Chennai, every month. Never deprioritized." },
];

export const recommendations = [
  // PLACEHOLDER — replace with real LinkedIn recommendations before shipping.
  {
    quote: "[Placeholder — LinkedIn recommendation to be added]",
    name: "Coming soon",
    title: "LinkedIn recommendations",
    placeholder: true,
  },
];

export const education = [
  { degree: "MBA", school: "University of Sheffield, UK" },
  { degree: "PGDM — Marketing Mgmt", school: "LIBA, India" },
  { degree: "BSc. Visual Communication", school: "SRM University, India" },
];

export const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Google Agile Project Management",
  "Pendo Product-Led Growth",
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "Journey" },
  { id: "experience", label: "Case Study" },
  { id: "products", label: "Products" },
  { id: "ailab", label: "AI Lab" },
  { id: "thinking", label: "Thinking" },
  { id: "beyond", label: "Beyond" },
  { id: "contact", label: "Contact" },
];

// ---------- AI assistant knowledge base ----------

export function buildKnowledgeBase(): string {
  return `
# WHO IS RAAGHAV
${identity.fullName} — Senior Product Manager based in ${identity.location}. 7+ years across B2B SaaS, manufacturing tech and marketplace products, mostly in high-growth startup environments. He has never written traditional code, yet ships AI-powered products end-to-end using Claude, Gemini, VS Code, GitHub and Vercel. Contact: ${identity.email} · LinkedIn: ${identity.linkedin} · GitHub: ${identity.github}

# CAREER JOURNEY
${journey.map((j) => `- ${j.era} · ${j.title} @ ${j.org}: ${j.hook} ${j.detail}`).join("\n")}

# PRECISION X / MACHINE MAZE (flagship case study)
Problem: ${caseStudy.problem}
Vision: ${caseStudy.vision}
Solution: ${caseStudy.solution}
Challenges: ${caseStudy.challenges.join(" | ")}
Outcomes: ${caseStudy.outcomes.map((o) => `${o.value} — ${o.label}`).join(" | ")}
Lessons: ${caseStudy.lessons.join(" | ")}
Patent: ${caseStudy.patentNote}
Modules shipped: RFQ Feasibility, Reviews & approvals, Department assignments, Price Discovery, Quote comparison, Proposal Creation, Customer Purchase Orders. Roadmap pending: BOM workflows, partner POs, live production tracking, scheduling, quality, inventory, logistics, invoicing, analytics. Only ~30% of roadmap released. Also built margin reconciliation: Customer PO → Vendor PO → Vendor Invoice → Machine Maze Invoice chain surfacing part-level and PO-level margin in real time. Additional facts: scaled RFQ pipeline 21x maintaining 27-hour average feasibility turnaround; integrated Autodesk 3D viewer for STEP files and Zoho CRM for RFQ push; built Partner Hub (supplier onboarding with GST verification, 400 verified partners); investor KPI dashboard was a key artifact in a VC funding round.
IMPORTANT ACCURACY RULES: Precision X is a B2B platform used by Machine Maze and its customers/partners — never call it "SaaS". Raaghav's AI work is API integration and AI-native product building — never claim ML/machine-learning engineering experience.

# HOW HE THINKS (frameworks)
${frameworks.map((f) => `- ${f.title}: ${f.summary} ${f.detail}`).join("\n")}

# PRODUCTS BUILT
${products.map((p) => `- ${p.name} (${p.kind}, ${p.status}): ${p.tagline} ${p.detail}${p.link ? ` Live: ${p.link}` : ""}`).join("\n")}

# AI LAB (current learning)
${aiLab.map((a) => `- ${a.name}: ${a.status}`).join("\n")}

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
