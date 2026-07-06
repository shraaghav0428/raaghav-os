// Official brand marks from simple-icons (MIT). Tools without an available
// icon fall back to a monogram badge rendered by ToolMap.
import {
  siClaudecode,
  siClaude,
  siGooglegemini,
  siGithub,
  siVercel,
  siFigma,
  siJira,
  siConfluence,
} from "simple-icons";

export const toolIcons: Record<string, { path: string } | { monogram: string }> = {
  "Claude Code": { path: siClaudecode.path },
  Claude: { path: siClaude.path },
  "Gemini API": { path: siGooglegemini.path },
  GitHub: { path: siGithub.path },
  Vercel: { path: siVercel.path },
  Figma: { path: siFigma.path },
  Jira: { path: siJira.path },
  Confluence: { path: siConfluence.path },
  ChatGPT: { monogram: "GPT" },
  Lovable: { monogram: "Lv" },
  "VS Code": { monogram: "VS" },
  Canva: { monogram: "Ca" },
  Gamma: { monogram: "γ" },
  Granola: { monogram: "Gr" },
};
