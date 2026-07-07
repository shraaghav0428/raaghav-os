"use client";

import { useMemo, useState } from "react";
import { visionMap } from "@/lib/content";
import { sfx } from "@/lib/sfx";

// The Vision Map — the patented Precision X flow, RFQ to Delivery, drawn as a
// serpentine pipeline. Every stage is first-class; a small dot marks live vs
// roadmap. Pulses travel the flow; hover a stage for its one-liner.

const W = 1180;
const NODE_W = 178;
const NODE_H = 62;
const PER_ROW = 5;
const ROW_GAP = 128;
const TOP = 64;
const H = TOP + ROW_GAP * 2 + NODE_H + 96; // 3 rows + readout space

const COLS = [128, 359, 590, 821, 1052]; // node centers

type Stage = (typeof visionMap.stages)[number];
type Pos = { x: number; y: number; stage: Stage };

function layout(): Pos[] {
  return visionMap.stages.map((stage, i) => {
    const row = Math.floor(i / PER_ROW);
    const col = i % PER_ROW;
    const x = row % 2 === 0 ? COLS[col] : COLS[PER_ROW - 1 - col];
    return { x, y: TOP + row * ROW_GAP, stage };
  });
}

// connector path between consecutive nodes (straight within a row, U-turn between rows)
function connect(a: Pos, b: Pos): string {
  if (a.y === b.y) {
    const dir = b.x > a.x ? 1 : -1;
    return `M ${a.x + (NODE_W / 2) * dir} ${a.y} L ${b.x - (NODE_W / 2) * dir} ${b.y}`;
  }
  // row change: curve out from the row end, down, and back into the next row
  const edge = a.x > W / 2 ? a.x + NODE_W / 2 + 34 : a.x - NODE_W / 2 - 34;
  return `M ${a.x + (a.x > W / 2 ? NODE_W / 2 : -NODE_W / 2)} ${a.y} Q ${edge} ${a.y} ${edge} ${(a.y + b.y) / 2} Q ${edge} ${b.y} ${b.x + (b.x > W / 2 ? NODE_W / 2 : -NODE_W / 2)} ${b.y}`;
}

export default function VisionMap() {
  const [hot, setHot] = useState<number | null>(null);
  const nodes = useMemo(layout, []);

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[760px] select-none"
        role="img"
        aria-label="Precision X vision map — RFQ to Delivery"
      >
        <defs>
          <linearGradient id="goalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0070bb" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* legend */}
        <g>
          <circle cx={W - 300} cy={26} r="4" fill="#22c55e" />
          <text x={W - 288} y={30} className="vision-legend">live in production</text>
          <circle cx={W - 150} cy={26} r="4" fill="#a78bfa" />
          <text x={W - 138} y={30} className="vision-legend">on the roadmap</text>
        </g>

        {/* connectors + pulses */}
        {nodes.slice(0, -1).map((n, i) => {
          const d = connect(n, nodes[i + 1]);
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="1.3" />
              <circle r="2.6" fill={i % 2 ? "rgba(167,139,250,0.9)" : "rgba(56,189,248,0.9)"}>
                <animateMotion
                  dur={`${2.2 + (i % 4) * 0.5}s`}
                  begin={`${(i % 6) * 0.35}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            </g>
          );
        })}

        {/* stage nodes */}
        {nodes.map((n, i) => {
          const isHot = hot === i;
          const dim = hot !== null && !isHot;
          const s = n.stage;
          const isGoal = s.status === "goal";
          return (
            <g
              key={s.name}
              opacity={dim ? 0.35 : 1}
              style={{ transition: "opacity 0.3s", cursor: "default" }}
              onMouseEnter={() => {
                setHot(i);
                sfx.tick();
              }}
              onMouseLeave={() => setHot(null)}
            >
              <rect
                x={n.x - NODE_W / 2}
                y={n.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx="14"
                fill={isGoal ? "url(#goalGrad)" : isHot ? "rgba(0,112,187,0.28)" : "rgba(17,24,39,0.5)"}
                stroke={
                  isGoal
                    ? "rgba(34,197,94,0.7)"
                    : isHot
                    ? "rgba(56,189,248,0.65)"
                    : "rgba(148,163,184,0.28)"
                }
                strokeWidth={isGoal ? 1.6 : 1.1}
                style={{ transition: "all 0.3s" }}
              />
              {/* status dot */}
              {!isGoal && (
                <circle
                  cx={n.x - NODE_W / 2 + 16}
                  cy={n.y - NODE_H / 2 + 15}
                  r="3.4"
                  fill={s.status === "live" ? "#22c55e" : "#a78bfa"}
                />
              )}
              <text x={n.x + (isGoal ? 0 : 5)} y={n.y + 4.5} textAnchor="middle" className={`vision-node ${isGoal ? "goal" : ""}`}>
                {s.name}
              </text>
              {/* BOM badge under Price Discovery */}
              {"badge" in s && s.badge && (
                <g>
                  <rect
                    x={n.x - 76}
                    y={n.y + NODE_H / 2 + 7}
                    width={152}
                    height={22}
                    rx="11"
                    fill="rgba(167,139,250,0.12)"
                    stroke="rgba(167,139,250,0.45)"
                    strokeWidth="1"
                  />
                  <text x={n.x} y={n.y + NODE_H / 2 + 22} textAnchor="middle" className="vision-badge">
                    {s.badge}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* hover readout */}
        <text x={W / 2} y={H - 44} textAnchor="middle" className="toolmap-role">
          {hot !== null
            ? `${nodes[hot].stage.name} — ${nodes[hot].stage.note}`
            : "hover a stage"}
        </text>
        {/* unlocks line */}
        <text x={W / 2} y={H - 14} textAnchor="middle" className="vision-unlocks">
          {visionMap.unlocks}
        </text>
      </svg>
    </div>
  );
}
