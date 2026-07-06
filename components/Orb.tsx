"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { sfx } from "@/lib/sfx";

const IDLE_HINTS = [
  "Ask me about Precision X",
  "Want to know how Raaghav thinks?",
  "Explore the Product Playbook",
  "See the AI projects",
  "Why hire Raaghav?",
];

const SUGGESTED = [
  "Who is Raaghav?",
  "Tell me about Precision X",
  "What products has he built?",
  "Explain his product thinking",
  "What is he learning right now?",
  "Why should I hire him?",
];

type Msg = { role: "user" | "model"; text: string };

export default function Orb({ onSecretUnlock }: { onSecretUnlock: () => void }) {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const clicksRef = useRef<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // idle hints
  useEffect(() => {
    if (open) return;
    let i = 0;
    const show = () => {
      setHint(IDLE_HINTS[i % IDLE_HINTS.length]);
      i++;
      setTimeout(() => setHint(null), 4200);
    };
    const first = setTimeout(show, 6000);
    const interval = setInterval(show, 14000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  const ask = useCallback(
    async (q: string) => {
      const question = q.trim();
      if (!question || loading) return;
      setInput("");
      setMsgs((m) => [...m, { role: "user", text: question }]);
      setLoading(true);
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question,
            history: msgs.map((m) => ({ role: m.role, text: m.text })),
          }),
        });
        const data = await res.json();
        setMsgs((m) => [...m, { role: "model", text: data.answer ?? "…" }]);
      } catch {
        setMsgs((m) => [
          ...m,
          { role: "model", text: "Connection hiccup — try again in a moment." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, msgs]
  );

  const handleOrbClick = () => {
    // 5 rapid clicks = hidden learning journey
    const now = Date.now();
    clicksRef.current = [...clicksRef.current.filter((t) => now - t < 2500), now];
    if (clicksRef.current.length >= 5) {
      clicksRef.current = [];
      onSecretUnlock();
      return;
    }
    setOpen((o) => {
      if (!o) sfx.hum();
      return !o;
    });
    setHint(null);
  };

  return (
    <>
      {/* floating orb */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
        {hint && !open && (
          <button
            onClick={() => {
              setOpen(true);
              setHint(null);
            }}
            className="glass-strong rounded-full px-4 py-2 text-[13px] text-slate-200 fade-in max-w-[220px] text-left hover:border-accent/50 transition-colors"
          >
            {hint}
          </button>
        )}
        <button
          onClick={handleOrbClick}
          aria-label="Open AI assistant"
          className="relative w-14 h-14 rounded-full orb-core cursor-pointer transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full border border-accent/40 orb-ring" />
        </button>
      </div>

      {/* side panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full sm:w-[420px] glass-strong sm:border-l border-slate-700/40 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Ask Raaghav's AI"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700/40">
          <div className="w-8 h-8 rounded-full orb-core shrink-0" />
          <div className="flex-1">
            <div className="font-[family-name:var(--font-heading)] font-semibold text-sm">
              RAAGHAV OS · Assistant
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] text-success">
              ● online — grounded in Raaghav&apos;s real work
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-ink text-lg px-2"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {msgs.length === 0 && (
            <div className="fade-in">
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                I&apos;m Raaghav&apos;s digital twin — ask me anything about his experience,
                products, or how he thinks.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="glass rounded-xl px-4 py-2.5 text-[13px] text-left text-slate-200 hover:border-accent/50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {msgs.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "ml-auto bg-primary/30 text-ink"
                  : "glass text-slate-200 chat-answer"
              }`}
            >
              {m.text}
            </div>
          ))}

          {loading && (
            <div className="glass rounded-2xl px-4 py-3 w-16 flex gap-1.5 items-center">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="p-4 border-t border-slate-700/40 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Raaghav…"
            className="flex-1 bg-white/5 border border-slate-700/60 rounded-full px-4 py-2.5 text-sm outline-none focus:border-accent/60 placeholder:text-slate-500"
            maxLength={500}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-full bg-primary/90 hover:bg-primary disabled:opacity-40 px-5 text-sm font-medium transition-colors"
          >
            ↑
          </button>
        </form>
      </div>
    </>
  );
}
