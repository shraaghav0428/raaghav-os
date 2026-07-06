"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toolMap } from "@/lib/content";
import { toolIcons } from "@/lib/toolIcons";
import { sfx } from "@/lib/sfx";

// v2 — radial neural map. Core at center, tools on a ring grouped in cluster arcs,
// animated pulses travel the spokes. Hover a node: everything else dims and the
// node's role in the workflow appears below the core.

const W = 900;
const H = 640;
const CX = W / 2;
const CY = H / 2 - 10;
const RING = 218; // node ring radius
const LABEL_R = 316; // cluster label radius

const ROLES: Record<string, string> = {
  "Claude Code": "built this site — my highest-leverage tool",
  Claude: "thinking partner, writing, analysis",
  ChatGPT: "research & brainstorming",
  "Gemini API": "powers my shipped AI features",
  Lovable: "rapid UI prototypes",
  "VS Code": "where everything comes together",
  GitHub: "version control for all my builds",
  Vercel: "deploys everything I ship",
  Figma: "product design & specs",
  Canva: "decks & visual storytelling",
  Gamma: "AI-generated presentations",
  Jira: "sprints & backlog",
  Confluence: "PRDs & documentation",
  Granola: "AI meeting notes",
};

const GAP_DEG = 16; // gap between cluster arcs

type NodePos = {
  tool: string;
  cluster: string;
  x: number;
  y: number;
  angle: number;
};

function buildLayout() {
  const totalTools = toolMap.clusters.reduce((n, c) => n + c.tools.length, 0);
  const usable = 360 - GAP_DEG * toolMap.clusters.length;
  const perTool = usable / totalTools;
  let cursor = -90 - perTool / 2; // start at top

  const nodes: NodePos[] = [];
  const clusterLabels: { name: string; x: number; y: number; angle: number }[] = [];

  for (const c of toolMap.clusters) {
    const arc = perTool * c.tools.length;
    const mid = cursor + perTool / 2 + arc / 2 - perTool / 2;
    clusterLabels.push({
      name: c.name,
      x: CX + Math.cos((mid * Math.PI) / 180) * LABEL_R,
      y: CY + Math.sin((mid * Math.PI) / 180) * LABEL_R,
      angle: mid,
    });
    for (let i = 0; i < c.tools.length; i++) {
      cursor += perTool;
      const a = (cursor * Math.PI) / 180;
      nodes.push({
        tool: c.tools[i],
        cluster: c.name,
        x: CX + Math.cos(a) * RING,
        y: CY + Math.sin(a) * RING,
        angle: cursor,
      });
    }
    cursor += GAP_DEG;
  }
  return { nodes, clusterLabels };
}

function spoke(n: NodePos) {
  // curve from core edge to node, bowing slightly
  const a = (n.angle * Math.PI) / 180;
  const sx = CX + Math.cos(a) * 46;
  const sy = CY + Math.sin(a) * 46;
  const mx = CX + Math.cos(a + 0.09) * (RING * 0.55);
  const my = CY + Math.sin(a + 0.09) * (RING * 0.55);
  return `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${(n.x - Math.cos(a) * 26).toFixed(1)} ${(n.y - Math.sin(a) * 26).toFixed(1)}`;
}

export default function ToolMap() {
  const [hot, setHot] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  const { nodes, clusterLabels } = useMemo(buildLayout, []);
  const hotNode = nodes.find((n) => n.tool === hot);

  return (
    <div ref={scrollRef} className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[680px] select-none"
        role="img"
        aria-label="Radial map of Raaghav's toolchain"
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

        {/* orbit ring */}
        <circle
          cx={CX}
          cy={CY}
          r={RING}
          fill="none"
          stroke="rgba(56,189,248,0.1)"
          strokeWidth="1"
          strokeDasharray="2 7"
        />

        {/* spokes + traveling pulses */}
        {nodes.map((n, i) => {
          const dim = hot && hot !== n.tool;
          const d = spoke(n);
          return (
            <g key={n.tool} opacity={dim ? 0.16 : 1} style={{ transition: "opacity 0.35s" }}>
              <path
                id={`spoke-${i}`}
                d={d}
                fill="none"
                stroke={hot === n.tool ? "rgba(56,189,248,0.8)" : "rgba(148,163,184,0.22)"}
                strokeWidth="1.1"
                style={{ transition: "stroke 0.3s" }}
              />
              {/* data pulse */}
              <circle r="2.4" fill={i % 2 ? "rgba(167,139,250,0.9)" : "rgba(56,189,248,0.9)"}>
                <animateMotion
                  dur={`${2.6 + (i % 5) * 0.55}s`}
                  begin={`${(i % 7) * 0.4}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            </g>
          );
        })}

        {/* cluster labels */}
        {clusterLabels.map((c) => (
          <text
            key={c.name}
            x={c.x}
            y={c.y}
            textAnchor="middle"
            className="toolmap-hublabel"
            opacity={hot && hotNode?.cluster !== c.name ? 0.25 : 1}
            style={{ transition: "opacity 0.35s" }}
          >
            {c.name}
          </text>
        ))}

        {/* tool nodes — real brand marks (or monogram badges), name below */}
        {nodes.map((n) => {
          const isHot = hot === n.tool;
          const dim = hot && !isHot;
          const isClaudeCode = n.tool === "Claude Code";
          const icon = toolIcons[n.tool];
          const a = (n.angle * Math.PI) / 180;
          // name label sits radially outside the node
          const lx = n.x + Math.cos(a) * 44;
          const ly = n.y + Math.sin(a) * 44;
          return (
            <g
              key={n.tool}
              opacity={dim ? 0.22 : 1}
              style={{ transition: "opacity 0.35s", cursor: "default" }}
              onMouseEnter={() => {
                setHot(n.tool);
                sfx.tick();
              }}
              onMouseLeave={() => setHot(null)}
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={isHot ? 27 : 23}
                fill={isHot ? "rgba(0,112,187,0.4)" : "rgba(17,24,39,0.06)"}
                stroke={
                  isClaudeCode
                    ? "rgba(56,189,248,0.85)"
                    : isHot
                    ? "rgba(56,189,248,0.65)"
                    : "rgba(148,163,184,0.32)"
                }
                strokeWidth={isClaudeCode ? 2 : 1.1}
                style={{ transition: "all 0.3s" }}
              >
                {!hot && (
                  <animate
                    attributeName="r"
                    values="23;24.5;23"
                    dur={`${3 + (n.x % 3)}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              {icon && "path" in icon ? (
                <path
                  d={icon.path}
                  className="toolmap-icon"
                  transform={`translate(${n.x - 10}, ${n.y - 10}) scale(${20 / 24})`}
                />
              ) : (
                <text x={n.x} y={n.y + 5} textAnchor="middle" className="toolmap-monogram">
                  {icon && "monogram" in icon ? icon.monogram : n.tool[0]}
                </text>
              )}
              <text
                x={lx}
                y={ly + 3}
                textAnchor="middle"
                className={`toolmap-label ${isHot ? "hot" : ""} ${isClaudeCode ? "claude" : ""}`}
              >
                {n.tool}
              </text>
            </g>
          );
        })}

        {/* core */}
        <g filter="url(#softGlow)">
          <circle cx={CX} cy={CY} r="38" fill="url(#coreGrad)">
            <animate attributeName="r" values="38;41;38" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        <text x={CX} y={CY + 4} textAnchor="middle" className="toolmap-core">
          {toolMap.center}
        </text>

        {/* role readout */}
        <text x={CX} y={H - 14} textAnchor="middle" className="toolmap-role">
          {hotNode ? `${hotNode.tool} — ${ROLES[hotNode.tool] ?? ""}` : "hover a node"}
        </text>
      </svg>
    </div>
  );
}
