import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RAAGHAV S H — Senior Product Manager · AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card: dark OS backdrop, orb, name, receipts.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#050816",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 10%, rgba(0,112,187,0.35), transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(167,139,250,0.18), transparent 70%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* orb */}
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at 32% 30%, #bae6fd 0%, #38bdf8 34%, #0070bb 72%, #063a5e 100%)",
            boxShadow: "0 0 60px 12px rgba(56,189,248,0.55)",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#f8fafc",
            display: "flex",
          }}
        >
          RAAGHAV S H
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 30,
            color: "#94a3b8",
            display: "flex",
          }}
        >
          Senior Product Manager · Systems Thinker · AI Builder
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 18,
          }}
        >
          {["₹730 Cr pipeline", "21x growth", "Patent filed", "AI-native"].map((m) => (
            <div
              key={m}
              style={{
                display: "flex",
                padding: "12px 26px",
                borderRadius: 9999,
                border: "1px solid rgba(56,189,248,0.35)",
                background: "rgba(17,24,39,0.6)",
                color: "#7dd3fc",
                fontSize: 24,
              }}
            >
              {m}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 34,
            fontSize: 22,
            color: "#475569",
            display: "flex",
          }}
        >
          raaghav-os.vercel.app — enter the OS
        </div>
      </div>
    ),
    size
  );
}
