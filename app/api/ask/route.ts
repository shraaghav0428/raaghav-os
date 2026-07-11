import { buildKnowledgeBase } from "@/lib/content";

// ---- per-IP rate limiting (in-memory, per serverless instance) ----
// Not bulletproof across instances, but stops casual scripting against the key.
const WINDOW_MIN = 60 * 1000;
const WINDOW_HOUR = 60 * 60 * 1000;
const LIMIT_MIN = 6;
const LIMIT_HOUR = 30;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_HOUR);
  const lastMinute = arr.filter((t) => now - t < WINDOW_MIN).length;
  if (lastMinute >= LIMIT_MIN || arr.length >= LIMIT_HOUR) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  // keep the map from growing unbounded
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.length === 0 || now - v[v.length - 1] > WINDOW_HOUR) hits.delete(k);
    }
  }
  return false;
}

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const SYSTEM_PROMPT = `You are Raaga — Raaghav's AI assist, embedded in Raaghav S H's personal portfolio website (RAAGHAV OS). You are his digital twin: you answer visitors' questions about Raaghav, his work, his product thinking, and his projects. If asked your name, you're Raaga.

Rules:
- Answer ONLY from the knowledge base below. If something isn't covered, say so honestly and suggest reaching out to Raaghav directly at shraaghav@gmail.com.
- Never invent metrics, employers, or claims. Never call Precision X "SaaS". Never claim Raaghav has ML/machine-learning engineering experience — his AI work is AI-native product building and API integration.
- Format: plain conversational text only — no markdown, no asterisks, no headers, no bullet symbols. Short paragraphs separated by blank lines are fine.
- Tone: confident, direct, warm, zero buzzwords. Speak about Raaghav in third person. Keep answers short — 2 to 5 sentences for simple questions, a short structured answer for bigger ones.
- If asked something unrelated to Raaghav or hiring him (politics, coding help, general trivia), politely decline in one sentence and steer back.
- If a visitor sounds like a recruiter or founder, you may end with one short relevant pointer (e.g. a project to look at). Never be pushy.

KNOWLEDGE BASE:
${buildKnowledgeBase()}`;

async function askGemini(
  apiKey: string,
  history: { role: string; parts: { text: string }[] }[],
  question: string
): Promise<string> {
  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [...history, { role: "user", parts: [{ text: question }] }],
      generationConfig: { temperature: 0.6, maxOutputTokens: 500 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  return (
    data?.candidates?.[0]?.content?.parts
      ?.map((p: { text?: string }) => p.text ?? "")
      .join("") ?? ""
  );
}

async function askClaude(
  apiKey: string,
  history: { role: string; parts: { text: string }[] }[],
  question: string
): Promise<string> {
  const messages = [
    ...history.map((h) => ({
      role: h.role === "model" ? "assistant" : "user",
      content: h.parts[0].text,
    })),
    { role: "user", content: question },
  ];
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      temperature: 0.6,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}`);
  const data = await res.json();
  return (
    data?.content?.map((c: { text?: string }) => c.text ?? "").join("") ?? ""
  );
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      {
        answer:
          "You've got great questions — but I need a short breather. Give me a minute, or reach Raaghav directly at shraaghav@gmail.com.",
      },
      { status: 429 }
    );
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (!geminiKey && !anthropicKey) {
    return Response.json(
      { answer: "The assistant isn't configured yet (missing API key). Meanwhile — everything about Raaghav is on this page, or email shraaghav@gmail.com." },
      { status: 200 }
    );
  }

  let body: { question?: string; history?: { role: string; text: string }[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const question = (body.question ?? "").slice(0, 500).trim();
  if (!question) {
    return Response.json({ error: "Empty question" }, { status: 400 });
  }

  const history = (body.history ?? []).slice(-6).map((h) => ({
    role: h.role === "user" ? "user" : "model",
    parts: [{ text: String(h.text).slice(0, 1000) }],
  }));

  try {
    const answer = geminiKey
      ? await askGemini(geminiKey, history, question)
      : await askClaude(anthropicKey!, history, question);

    return Response.json({
      answer:
        answer.trim() ||
        "Hmm, I couldn't produce an answer for that. Try rephrasing, or email shraaghav@gmail.com.",
    });
  } catch {
    return Response.json({
      answer:
        "I'm having trouble reaching my brain right now. Everything about Raaghav is on this page though — or reach him at shraaghav@gmail.com.",
    });
  }
}
