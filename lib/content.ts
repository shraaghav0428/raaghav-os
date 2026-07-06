// RAAGHAV OS — single source of truth.
// Every section of the site and the AI assistant's knowledge base reads from here.
// Copy rules: outcome first, one idea per line, written for founders / product leaders / recruiters.

export const identity = {
  name: "RAAGHAV",
  fullName: "Raaghav S.H",
  roles: ["Product Manager", "Systems Thinker", "AI Builder"],
  tagline:
    "I build products where technology, business and human behaviour intersect.",
  taglines: [
    "I build products where technology, business and human behaviour intersect.",
    "0→1 platforms. ₹730 Cr pipelines. AI products shipped solo.",
  ],
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
    era: "Age 10",
    title: "The First Build",
    org: "Living room floor",
    hook: "Race circuits from toy train tracks — to make Hot Wheels go faster.",
    detail:
      "Long before PRDs, I was engineering roller coasters out of train tracks and household objects, iterating until the cars flew. The tools changed. The obsession with building things that work didn't.",
  },
  {
    era: "2018",
    title: "Business Analyst",
    org: "Run Adam Sports",
    hook: "Learned the product craft on a live marketplace — scaled to 15,000 registrations.",
    detail:
      "A sports & fitness networking marketplace was my training ground: backlog prioritization, sprint ceremonies, working with UX/UI teams to build the platform's interface. Fundamentals earned on real users, not theory.",
  },
  {
    era: "2021",
    title: "Product Manager",
    org: "Matex Technologies",
    hook: "My introduction to procurement — ₹330 Cr GMV, ₹30 Cr+ saved for customers.",
    detail:
      "PM for a B2B marketplace connecting 80 corporate clients with 10,000+ vendors — storefronts, RFQs, the works. Also owned a Reverse Auction SaaS and grew it from 2 to 30 clients. Together: ₹330 Cr in GMV and over ₹30 Cr in documented savings.",
  },
  {
    era: "2022",
    title: "Senior Product Manager",
    org: "Machine Maze",
    hook: "Owned the 0→1 build of a complete manufacturing ecosystem — pipeline scaled 21x.",
    detail:
      "Built Precision X end to end — connecting every department and touchpoint in custom manufacturing. Led discovery, ideation, roadmap and launch as the first and only PM. Filed an India patent for the workflow, scaled the RFQ pipeline 21x from ₹34 Cr to ₹730 Cr, and carried the product story into investor funding discussions.",
  },
  {
    era: "2025",
    title: "AI Product Builder",
    org: "Independent",
    hook: "AI is my daily workflow — 4 products designed, built and shipped solo.",
    detail:
      "Professional or personal, I build with AI every day: Gemini and Claude APIs for intelligence, GitHub for commits, Vercel for deploys. ProcureIQ, WordClimb, a financial freedom calculator, an AI PDF editor — end to end, without a traditional coding background.",
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

// Each framework is backed by a real story (from actual interviews) — summary is the belief,
// story is the receipt.
export const frameworks = [
  {
    title: "Discovery",
    icon: "◎",
    summary: "Fall in love with the problem, not the demo.",
    story:
      "When I joined Machine Maze, RFQs lived in spreadsheets, email and WhatsApp. I spent weeks embedded with Sourcing, Production, KAMs and Quality before designing anything. That ground-level map became the workflow that scaled the pipeline 21x — with every decision on every RFQ logged and visible to leadership.",
  },
  {
    title: "Root Cause",
    icon: "⌘",
    summary: "Symptoms are loud. Causes are quiet.",
    story:
      "RFQ-to-quote was running at 4 weeks and customers were walking. The reported problem was 'sourcing is slow.' The real cause — found by sitting with the team — was supplier data too thin to match RFQs against. I redesigned vendor onboarding to capture capabilities, machinery and certifications, added supplier scoring — and turnaround fell from 4 weeks to 3 days.",
  },
  {
    title: "Prioritization",
    icon: "≡",
    summary: "Build on facts, not one loud data point.",
    story:
      "A customer wanted assembly-level production tracking — a layered, ambiguous build. Before committing, I went to the factory floors and found even suppliers couldn't track it systematically. Sample size: one project. I made the case to keep the team on the 90% the product served well. Leadership bought in — and that one project never recurred.",
  },
  {
    title: "Trade-offs",
    icon: "⇄",
    summary: "Disagree, commit, then protect your team inside the decision.",
    story:
      "My CEO wanted the entire dev team in a customer demo during the final week of a critical sprint. I pushed back, lost, and then made the decision work: capped it at 2 hours, no overtime, team briefed on why it mattered. The customer — a Six Sigma Black Belt — signed within a week. The sprint still shipped on time.",
  },
  {
    title: "Strategy",
    icon: "◆",
    summary: "Platform → Data → Intelligence → Agents.",
    story:
      "AI agents only work when the data and workflow structure beneath them are solid. At Machine Maze the roadmap was always platform first, intelligence second, AI third — the boring structural work that makes the AI promise credible. Companies that skip steps ship demos, not products.",
  },
  {
    title: "Metrics",
    icon: "∿",
    summary: "Define success before you build.",
    story:
      "Every module shipped with its metric agreed upfront — feasibility TaT per RFQ, fastest-approver, tracked weekly. That made impact provable, not anecdotal: 27-hour average turnaround held even as volume scaled 21x. The same discipline built the investor KPI dashboard that helped secure a VC round.",
  },
  {
    title: "AI Products",
    icon: "✳",
    summary: "Human-in-the-loop isn't a constraint. It's the design.",
    story:
      "Before any reviewer touched an RFQ, the system surfaced a feasibility signal — complexity, revenue potential, manufacturability. Humans kept the final call, but worked from a recommendation, not a blank slate. Intelligent RFQ-to-supplier matchmaking did the same on the other side. That architecture held 27-hour TaT at 21x volume.",
  },
  {
    title: "Failure",
    icon: "⌀",
    summary: "Validate the input before you commit the build.",
    story:
      "I built an Autodesk 3D viewer integration — and adoption stayed flat. The data showed why: most customers never sent STEP files in the first place; they live in 2D drawings. The feature worked beautifully where data existed, but I'd validated the assumption after building. It's now a standing check: confirm the input shows up at volume, first.",
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
    { value: "4 wks → 3 days", label: "RFQ-to-quote turnaround" },
    { value: "Patent", label: "IN 202541011592 + Global PCT — named inventor" },
    { value: "27 hrs", label: "Avg. feasibility turnaround at 21x volume" },
    { value: "400", label: "GST-verified partners via Partner Hub" },
    { value: "VC round", label: "KPI dashboard & product story used in funding" },
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
    stack: ["JavaScript", "Chart.js", "GitHub Pages"],
    link: "https://shraaghav0428.github.io/RaaghavFinancialFreedom/",
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
    stack: ["Next.js 16", "Tailwind v4", "Claude Code", "LLM API", "Web Audio", "Vercel"],
    link: null,
    github: "https://github.com/shraaghav0428/raaghav-os",
    size: "small",
  },
];

// What each AI capability is actually doing right now — receipts, not skills.
export const aiLab = [
  { name: "Claude Code", status: "daily driver", note: "built this entire site" },
  { name: "AI Agents", status: "building", note: "agentic workflows in progress" },
  { name: "MCP", status: "exploring", note: "how agents talk to tools" },
  { name: "Gemini API", status: "live", note: "in 3 shipped products" },
  { name: "Claude API", status: "live", note: "powers this site's assistant" },
  { name: "RAG", status: "live", note: "grounds the assistant in my work" },
  { name: "GitHub + Vercel", status: "ships everything", note: "every project, every deploy" },
  { name: "VS Code", status: "workspace", note: "where the building happens" },
];

// Tool constellation (mind map) — grouped the way Raaghav actually works.
export const toolMap = {
  center: "RAAGHAV",
  clusters: [
    {
      name: "Build with AI",
      tools: ["Claude Code", "Claude", "ChatGPT", "Gemini API", "Lovable"],
    },
    {
      name: "Ship",
      tools: ["VS Code", "GitHub", "Vercel"],
    },
    {
      name: "Design",
      tools: ["Figma", "Canva", "Gamma"],
    },
    {
      name: "Run the Process",
      tools: ["Jira", "Confluence", "Granola"],
    },
  ],
};

export const aiLabNote =
  "Not a skills list — a live workshop. Every card says what it's doing right now.";

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

# HOW HE THINKS (frameworks — each backed by a real story from his career)
${frameworks.map((f) => `- ${f.title}: ${f.summary} Story: ${f.story}`).join("\n")}

# MORE REAL STORIES (for behavioral-style questions)
- Scaling Matex 1→20 clients: product worked but growth stalled at 1 customer. Fixed UX friction, then realized procurement teams were the wrong buyer (existing vendor relationships, misaligned incentives) — went straight to CEOs/business heads with a savings-and-governance pitch, used the parent company's network for warm intros. Result: 20 corporate clients, ₹330 Cr GMV, ₹33 Cr documented savings across 11,000 RFQs. Lesson: the end user and the economic buyer aren't always the same person.
- Vendor rating bias at Matex: a supplier-scoring product (20+ APIs over GST/PAN) failed for one customer — 70% of their suppliers were sole proprietorships with little public data. Diagnosed it personally, gave the customer two months free while fixing, and changed validation to test across supplier types before claiming coverage. Lesson: audit for systematic under-scoring before customers find it for you.
- Financial reconciliation at Machine Maze: linked Customer PO → Vendor PO → Vendor Invoice → company invoice, surfacing part-level and PO-level margin in real time — leadership got live profitability tracking and audit-ready transparency across the export business.
- Childhood: at age 10 he built race circuits from toy train tracks and household items to make Hot Wheels cars go faster — the origin of his builder instinct.

# PRODUCTS BUILT
${products.map((p) => `- ${p.name} (${p.kind}, ${p.status}): ${p.tagline} ${p.detail}${p.link ? ` Live: ${p.link}` : ""}`).join("\n")}

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
