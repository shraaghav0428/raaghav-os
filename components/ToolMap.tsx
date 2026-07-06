"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toolMap } from "@/lib/content";
import { sfx } from "@/lib/sfx";

// Mind-map constellation of the actual toolchain.
// Pure SVG — curved spokes from a glowing core to 4 cluster hubs, tools as leaf nodes.

const W = 900;
const H = 560;
const CX = W / 2;
const CY = H / 2;

// hub positions (one per cluster)
const HUBS = [
  { x: 205, y: 130 }, // Build with AI
  { x: 700, y: 140 }, // Ship
  { x: 195, y: 435 }, // Design
  { x: 705, y: 430 }, // Run the Process
];

function leafPositions(hub: { x: number; y: number }, count: number, idx: number) {
  // fan leaves outward, away from center
  const away = Math.atan2(hub.y - CY, hub.x - CX);
  const spread = Math.PI / (count > 3 ? 2.4 : 3.2);
  return Array.from({ length: count }, (_, i) => {
    const a = away - spread / 2 + (spread * i) / Math.max(count - 1, 1);
    const r = 92 + (idx % 2) * 6;
    return { x: hub.x + Math.cos(a) * r, y: hub.y + Math.sin(a) * r };
  });
}

function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  // bow the line slightly
  const dx = b.y - a.y;
  const dy = a.x - b.x;
  const norm = Math.hypot(dx, dy) || 1;
  const k = 18;
  return `M ${a.x} ${a.y} Q ${mx + (dx / norm) * k} ${my + (dy / norm) * k} ${b.x} ${b.y}`;
}

export default function ToolMap() {
  const [hot, setHot] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // center the core in view when the map is wider than its container (mobile)
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  const layout = useMemo(
    () =>
      toolMap.clusters.map((c, i) => ({
        ...c,
        hub: HUBS[i],
        leaves: leafPositions(HUBS[i], c.tools.length, i),
      })),
    []
  );

  return (
    <div ref={scrollRef} className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[640px] select-none"
        role="img"
        aria-label="Mind map of Raaghav's toolchain"
      >
        <defs>
          <radialGradient id="coreGrad" cx="35%" cy="32%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="40%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0070bb" />
          </radialGradient>
          <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* spokes center → hubs */}
        {layout.map((c) => (
          <path
            key={c.name}
            d={curve({ x: CX, y: CY }, c.hub)}
            fill="none"
            stroke="rgba(56,189,248,0.28)"
            strokeWidth="1.4"
            strokeDasharray="3 5"
            className="toolmap-line"
          />
        ))}

        {/* clusters */}
        {layout.map((c) => (
          <g key={c.name}>
            {/* hub → leaves */}
            {c.leaves.map((l, i) => (
              <path
                key={c.tools[i]}
                d={curve(c.hub, l)}
                fill="none"
                stroke={
                  hot === c.tools[i]
                    ? "rgba(56,189,248,0.7)"
                    : "rgba(148,163,184,0.22)"
                }
                strokeWidth="1.2"
                style={{ transition: "stroke 0.3s" }}
              />
            ))}

            {/* hub node */}
            <g filter="url(#softGlow)">
              <circle cx={c.hub.x} cy={c.hub.y} r="7" fill="rgba(56,189,248,0.85)" />
            </g>
            <text
              x={c.hub.x}
              y={c.hub.y - 16}
              textAnchor="middle"
              className="toolmap-hublabel"
            >
              {c.name}
            </text>

            {/* leaves */}
            {c.leaves.map((l, i) => {
              const tool = c.tools[i];
              const isHot = hot === tool;
              const isClaudeCode = tool === "Claude Code";
              return (
                <g
                  key={tool}
                  onMouseEnter={() => {
                    setHot(tool);
                    sfx.tick();
                  }}
                  onMouseLeave={() => setHot(null)}
                  style={{ cursor: "default" }}
                >
                  <circle
                    cx={l.x}
                    cy={l.y}
                    r={isHot ? 26 : 22}
                    fill={isHot ? "rgba(0,112,187,0.35)" : "rgba(17,24,39,0.05)"}
                    stroke={
                      isClaudeCode
                        ? "rgba(56,189,248,0.8)"
                        : isHot
                        ? "rgba(56,189,248,0.6)"
                        : "rgba(148,163,184,0.3)"
                    }
                    strokeWidth={isClaudeCode ? 1.8 : 1.1}
                    style={{ transition: "all 0.3s" }}
                    className="toolmap-leaf"
                  />
                  <text
                    x={l.x}
                    y={l.y + 3.5}
                    textAnchor="middle"
                    className={`toolmap-label ${isHot ? "hot" : ""} ${
                      isClaudeCode ? "claude" : ""
                    }`}
                  >
                    {tool.split(" ").length > 1 ? (
                      <>
                        <tspan x={l.x} dy="-4">
                          {tool.split(" ")[0]}
                        </tspan>
                        <tspan x={l.x} dy="11">
                          {tool.split(" ").slice(1).join(" ")}
                        </tspan>
                      </>
                    ) : (
                      tool
                    )}
                  </text>
                </g>
              );
            })}
          </g>
        ))}

        {/* core */}
        <g filter="url(#softGlow)">
          <circle cx={CX} cy={CY} r="34" fill="url(#coreGrad)">
            <animate attributeName="r" values="34;36.5;34" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        <text x={CX} y={CY + 4} textAnchor="middle" className="toolmap-core">
          {toolMap.center}
        </text>
      </svg>
    </div>
  );
}
