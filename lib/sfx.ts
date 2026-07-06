// Synthesized sci-fi sound design — Web Audio only, no files.
// Everything is deliberately quiet: ambience, not a game.

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

function ensure(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export const sfx = {
  enabled: false,

  /** soft high tick — hover */
  tick() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(1900, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1400, c.currentTime + 0.05);
    g.gain.setValueAtTime(0.025, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.06);
    o.connect(g).connect(master);
    o.start();
    o.stop(c.currentTime + 0.07);
  },

  /** rising chirp — click / select */
  click() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(520, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(980, c.currentTime + 0.09);
    g.gain.setValueAtTime(0.05, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.12);
    o.connect(g).connect(master);
    o.start();
    o.stop(c.currentTime + 0.13);
  },

  /** filtered noise sweep — scroll (TRON light-trail feel) */
  whoosh(intensity = 1) {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const dur = 0.35;
    const buffer = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 1.2;
    filter.frequency.setValueAtTime(240, c.currentTime);
    filter.frequency.exponentialRampToValueAtTime(900, c.currentTime + dur * 0.7);
    const g = c.createGain();
    const peak = Math.min(0.02 * intensity, 0.035);
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(peak, c.currentTime + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    src.connect(filter).connect(g).connect(master);
    src.start();
    src.stop(c.currentTime + dur);
  },

  /** warm dual-tone hum — orb open */
  hum() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.04, c.currentTime + 0.12);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.7);
    [220, 331].forEach((f) => {
      const o = c.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(f, c.currentTime);
      o.frequency.exponentialRampToValueAtTime(f * 1.25, c.currentTime + 0.55);
      o.connect(g);
      o.start();
      o.stop(c.currentTime + 0.72);
    });
    g.connect(master);
  },

  /** startup sweep — enabling sound */
  power() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(160, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.45);
    g.gain.setValueAtTime(0.035, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.5);
    o.connect(g).connect(master);
    o.start();
    o.stop(c.currentTime + 0.52);
  },
};
