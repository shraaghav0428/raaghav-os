// Official brand marks from simple-icons (MIT), in real brand colors.
// Tools without an available icon fall back to a colored monogram badge.
import {
  siClaudecode,
  siClaude,
  siGithub,
  siVercel,
  siFigma,
  siJira,
  siConfluence,
} from "simple-icons";

export type ToolIcon =
  | { path: string; hex: string }
  | { monogram: string; hex: string };

export const toolIcons: Record<string, ToolIcon> = {
  "Claude Code": { path: siClaudecode.path, hex: `#${siClaudecode.hex}` },
  Claude: { path: siClaude.path, hex: `#${siClaude.hex}` },
  GitHub: { path: siGithub.path, hex: `#${siGithub.hex}` },
  Vercel: { path: siVercel.path, hex: `#${siVercel.hex}` },
  Figma: { path: siFigma.path, hex: `#${siFigma.hex}` },
  Jira: { path: siJira.path, hex: `#${siJira.hex}` },
  Confluence: { path: siConfluence.path, hex: `#${siConfluence.hex}` },
  // no licensed mark available — colored monogram badges in brand colors
  ChatGPT: { monogram: "GPT", hex: "#10A37F" },
  Lovable: { monogram: "Lv", hex: "#FF3E8E" },
  "VS Code": { monogram: "VS", hex: "#007ACC" },
  Canva: { monogram: "Ca", hex: "#00C4CC" },
  Gamma: { monogram: "γ", hex: "#8B5CF6" },
  Granola: { monogram: "Gr", hex: "#F5B942" },
};

// perceived luminance — dark marks (GitHub/Vercel) need a theme-aware fill
export function isDarkHex(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
}
