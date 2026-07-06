// Synthesized sci-fi sound design v2 — Web Audio only, no files.
// Punchier than v1: layered oscillators, noise textures, and a continuous
// velocity-driven scroll wind instead of one-shot whooshes.

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

// continuous scroll-wind graph
let windGain: GainNode | null = null;
let windFilter: BiquadFilterNode | null = null;
let windTarget = 0;
let windRaf = 0;

function ensure(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function noiseBuffer(c: AudioContext, dur: number) {
  const buffer = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function startWind(c: AudioContext) {
  if (windGain || !master) return;
  // gentle orb drone: three detuned sines through a soft lowpass — no noise hiss
  windFilter = c.createBiquadFilter();
  windFilter.type = "lowpass";
  windFilter.Q.value = 0.6;
  windFilter.frequency.value = 700;
  windGain = c.createGain();
  windGain.gain.value = 0;
  [164.8, 196.0, 246.9].forEach((f, i) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    o.detune.value = i * 3 - 3; // slow beating between voices
    o.connect(windFilter!);
    o.start();
  });
  windFilter.connect(windGain).connect(master);

  const loop = () => {
    if (windGain && windFilter && ctx) {
      const g = windGain.gain.value;
      // ease toward target, decay target
      windGain.gain.value = g + (windTarget - g) * 0.08;
      windFilter.frequency.value = 500 + windTarget * 6000;
      windTarget *= 0.92;
    }
    windRaf = requestAnimationFrame(loop);
  };
  cancelAnimationFrame(windRaf);
  loop();
}

export const sfx = {
  enabled: false,

  /** crisp digital tick — hover */
  tick() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "square";
    o.frequency.setValueAtTime(2400, t);
    o.frequency.exponentialRampToValueAtTime(1600, t + 0.03);
    g.gain.setValueAtTime(0.06, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    o.connect(g).connect(master);
    o.start(t);
    o.stop(t + 0.06);
  },

  /** laser zap — click / select */
  click() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    // pitch-dive laser
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(1400, t);
    o.frequency.exponentialRampToValueAtTime(320, t + 0.11);
    g.gain.setValueAtTime(0.09, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    const f = c.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 2600;
    o.connect(f).connect(g).connect(master);
    o.start(t);
    o.stop(t + 0.15);
    // click transient
    const n = c.createBufferSource();
    n.buffer = noiseBuffer(c, 0.04);
    const ng = c.createGain();
    ng.gain.setValueAtTime(0.05, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
    n.connect(ng).connect(master);
    n.start(t);
  },

  /** feed scroll velocity into the continuous wind (0..1+) */
  scroll(intensity: number) {
    if (!this.enabled) return;
    const c = ensure();
    if (!c) return;
    startWind(c);
    windTarget = Math.max(windTarget, Math.min(intensity * 0.1, 0.085));
  },

  /** warm rising hum — orb open */
  hum() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.14);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
    [196, 294, 392].forEach((f, i) => {
      const o = c.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(f, t);
      o.frequency.exponentialRampToValueAtTime(f * 1.3, t + 0.7);
      o.detune.value = i * 4;
      o.connect(g);
      o.start(t);
      o.stop(t + 0.88);
    });
    g.connect(master);
  },

  /** cinematic power-on — boot complete / sound enabled */
  power() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    // rising sweep
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(1800, t + 0.6);
    const f = c.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(400, t);
    f.frequency.exponentialRampToValueAtTime(4000, t + 0.6);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.08, t + 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
    o.connect(f).connect(g).connect(master);
    o.start(t);
    o.stop(t + 0.8);
    // sparkle at the top
    const s = c.createOscillator();
    const sg = c.createGain();
    s.type = "sine";
    s.frequency.setValueAtTime(2600, t + 0.55);
    s.frequency.exponentialRampToValueAtTime(3400, t + 0.75);
    sg.gain.setValueAtTime(0.0001, t + 0.55);
    sg.gain.exponentialRampToValueAtTime(0.06, t + 0.6);
    sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    s.connect(sg).connect(master);
    s.start(t + 0.55);
    s.stop(t + 0.92);
  },

  /** soft explosion — easter eggs, jarvis mode, big reveals */
  boom() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    // noise blast through falling lowpass
    const n = c.createBufferSource();
    n.buffer = noiseBuffer(c, 0.9);
    const f = c.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(3200, t);
    f.frequency.exponentialRampToValueAtTime(120, t + 0.8);
    const g = c.createGain();
    g.gain.setValueAtTime(0.16, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
    n.connect(f).connect(g).connect(master);
    n.start(t);
    // sub drop
    const o = c.createOscillator();
    const og = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.5);
    og.gain.setValueAtTime(0.14, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    o.connect(og).connect(master);
    o.start(t);
    o.stop(t + 0.62);
  },

  /** rising charge tone — boot handshake; returns a stop() handle */
  chargeStart(duration = 1.1): { stop: (success: boolean) => void } {
    if (!this.enabled) return { stop: () => {} };
    const c = ensure();
    if (!c || !master) return { stop: () => {} };
    const t = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(920, t + duration);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.12);
    o.connect(g).connect(master);
    o.start(t);
    o.stop(t + duration + 0.1);
    return {
      stop: (success: boolean) => {
        const now = c.currentTime;
        g.gain.cancelScheduledValues(now);
        g.gain.setValueAtTime(g.gain.value, now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + (success ? 0.05 : 0.18));
        if (success) this.boom();
      },
    };
  },

  /** short confirmation ping — tab/chip selections */
  ping() {
    if (!this.enabled) return;
    const c = ensure();
    if (!c || !master) return;
    const t = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, t);
    o.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
    g.gain.setValueAtTime(0.07, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g).connect(master);
    o.start(t);
    o.stop(t + 0.2);
  },
};
