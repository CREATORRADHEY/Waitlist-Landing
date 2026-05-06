import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const options = [
  {
    tag: "DEV",
    emoji: "🛠️",
    label: "I'm a developer / builder",
    sub: "I build products and want validated problem ideas",
  },
  {
    tag: "SEEK",
    emoji: "💡",
    label: "I'm looking for startup ideas",
    sub: "I want to find a real problem worth solving in India",
  },
  {
    tag: "EXP",
    emoji: "👀",
    label: "Just exploring for now",
    sub: "I want to understand what GRIPR is about",
  },
];

export function QualifyPage() {
  const [, navigate] = useLocation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (tag: string) => {
    setSelected(tag);
    localStorage.setItem("gripr_type", tag);
    setTimeout(() => navigate(`/thankyou?type=${tag}`), 400);
  };

  return (
    <div
      style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#FAFAF7", color: "#0A0A0A", minHeight: "100vh" }}
    >
      {/* Nav */}
      <div style={{ borderBottom: "1px solid #E8E5DF", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
          GRIPR
        </span>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem", color: "#6B6B5E", fontSize: "0.85rem", fontFamily: "'Manrope', sans-serif", fontWeight: 500, padding: "0.35rem 0.75rem", borderRadius: "999px", transition: "background 0.15s" }}
          onMouseOver={e => (e.currentTarget.style.background = "#F2EFE9")}
          onMouseOut={e => (e.currentTarget.style.background = "none")}
        >
          ← Back
        </button>
      </div>

      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "1.6rem" }}>✅</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#E85D04", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              You're in
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 2.8rem)", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.05, marginBottom: "0.85rem" }}
          >
            One quick question.
          </h1>
          <p style={{ color: "#6B6B5E", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Helps us personalise your early access experience. No wrong answer.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {options.map((opt, i) => (
              <motion.button
                key={opt.tag}
                onClick={() => handleSelect(opt.tag)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textAlign: "left",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "1rem",
                  border: selected === opt.tag ? "2px solid #E85D04" : "1.5px solid #E8E5DF",
                  backgroundColor: selected === opt.tag ? "#FFF7F3" : "#fff",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.15s",
                  fontFamily: "'Manrope', sans-serif",
                  position: "relative",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: "#E85D04", backgroundColor: "#FFF9F7" }}
                whileTap={{ scale: 0.98 }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{opt.emoji}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.2rem" }}>
                    {opt.label}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#8A8A78" }}>{opt.sub}</div>
                </div>
                {selected === opt.tag && (
                  <motion.div
                    style={{ position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)", width: 20, height: 20, borderRadius: "50%", backgroundColor: "#E85D04", display: "flex", alignItems: "center", justifyContent: "center" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 700 }}>✓</span>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
