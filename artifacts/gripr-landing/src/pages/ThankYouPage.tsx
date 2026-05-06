import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearch } from "wouter";

const messages: Record<string, { heading: string; body: string }> = {
  DEV: {
    heading: "A builder who builds for real needs.",
    body: "We'll reach out directly when your early access is ready. Expect a problem report sample in your first message — not a sales pitch.",
  },
  SEEK: {
    heading: "The right place to start.",
    body: "We'll match you with India's highest-demand unsolved problems and reach out personally. No spam, just signal.",
  },
  EXP: {
    heading: "You'll understand why soon.",
    body: "We'll send you a real sample — one week's worth of ranked, anonymised demand from across India. Decide then.",
  },
};

const shareText = encodeURIComponent(
  "I just joined GRIPR — India's problem-to-product platform for builders. Stop guessing, start building what India actually needs. 🇮🇳 gripr.in"
);

export function ThankYouPage() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const type = params.get("type") ?? localStorage.getItem("gripr_type") ?? "DEV";
  const msg = messages[type] ?? messages["DEV"];

  const [nextMonday, setNextMonday] = useState("");

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const daysUntilMonday = day === 1 ? 7 : (8 - day) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() + daysUntilMonday);
    monday.setHours(9, 0, 0, 0);
    setNextMonday(
      monday.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })
    );
  }, []);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#FAFAF7", color: "#0A0A0A", minHeight: "100vh" }}>
      {/* Nav */}
      <div style={{ borderBottom: "1px solid #E8E5DF", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
          GRIPR
        </span>
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#6B6B5E", fontSize: "0.85rem", fontFamily: "'Manrope', sans-serif", fontWeight: 500, padding: "0.35rem 0.75rem", borderRadius: "999px", textDecoration: "none", transition: "background 0.15s" }}
          onMouseOver={e => (e.currentTarget.style.background = "#F2EFE9")}
          onMouseOut={e => (e.currentTarget.style.background = "none")}
        >
          ← Back to home
        </a>
      </div>

      <div style={{ maxWidth: "580px", margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
        {/* Big tick */}
        <motion.div
          style={{
            width: 72, height: 72, borderRadius: "50%",
            backgroundColor: "#E85D04", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "2rem",
          }}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
        >
          <span style={{ color: "#fff", fontSize: "2rem", lineHeight: 1 }}>✓</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#E85D04", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "0.85rem" }}>
            Application received
          </span>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 2.8rem)", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.25rem" }}>
            {msg.heading}
          </h1>

          <p style={{ color: "#4A4A3F", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            {msg.body}
          </p>

          {/* What happens next */}
          <div style={{ backgroundColor: "#F2EFE9", borderRadius: "1rem", padding: "1.5rem", marginBottom: "2rem", border: "1px solid #E8E5DF" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A8A78", marginBottom: "1rem" }}>
              What happens next
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { step: "01", text: "We review every application manually — usually within 48 hours." },
                { step: "02", text: "If it's a fit, we'll reach out personally — not a marketing email." },
                { step: "03", text: `First problem digest goes out ${nextMonday || "next Monday"}, 9AM IST.` },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#E85D04", flexShrink: 0, marginTop: "3px" }}>{s.step}</span>
                  <span style={{ fontSize: "0.875rem", color: "#4A4A3F", lineHeight: 1.6 }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusivity reminder */}
          <div style={{ borderLeft: "3px solid #E85D04", paddingLeft: "1rem", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", color: "#0A0A0A", fontStyle: "italic", fontWeight: 400, lineHeight: 1.6 }}>
              "We're not looking for everyone. We're looking for the builders who will actually use this."
            </p>
            <p style={{ fontSize: "0.75rem", color: "#8A8A78", marginTop: "0.5rem" }}>— Divyansh Dusad, Founder, Jaipur</p>
          </div>

          {/* WhatsApp sample report hook */}
          <motion.a
            href="https://wa.me/919XXXXXXXXX?text=Hey%2C%20I%20just%20joined%20GRIPR%20%E2%80%94%20can%20I%20get%20a%20sample%20problem%20report%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "0.85rem",
              backgroundColor: "#F0FFF4", border: "1.5px solid #86EFAC",
              borderRadius: "1rem", padding: "1.1rem 1.5rem",
              textDecoration: "none", marginBottom: "2rem",
            }}
            whileHover={{ scale: 1.02, borderColor: "#25D366" }}
            whileTap={{ scale: 0.98 }}
          >
            <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>💬</span>
            <div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#166534", marginBottom: "0.2rem", fontFamily: "'Manrope', sans-serif" }}>
                Get a sample problem report on WhatsApp
              </div>
              <div style={{ fontSize: "0.75rem", color: "#4ADE80" }}>
                See exactly what you'll receive every Monday →
              </div>
            </div>
          </motion.a>

          {/* Share */}
          <p style={{ fontSize: "0.875rem", color: "#6B6B5E", marginBottom: "1rem", fontWeight: 500 }}>
            Know a builder who should see this?
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <motion.a
              href={`https://wa.me/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#25D366", color: "#fff",
                borderRadius: "999px", padding: "0.6rem 1.25rem",
                fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                fontFamily: "'Manrope', sans-serif",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Share on WhatsApp
            </motion.a>
            <motion.a
              href={`https://twitter.com/intent/tweet?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#0A0A0A", color: "#fff",
                borderRadius: "999px", padding: "0.6rem 1.25rem",
                fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                fontFamily: "'Manrope', sans-serif",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Share on X
            </motion.a>
          </div>
        </motion.div>
      </div>

      <footer style={{ borderTop: "1px solid #E8E5DF", padding: "2rem 1.5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "'Fraunces', serif", color: "#9E9E8E", fontSize: "0.8rem", fontStyle: "italic" }}>
          India bolti hai. Builders sunenge.
        </span>
        <span style={{ color: "#D4D0C8", margin: "0 0.75rem" }}>·</span>
        <span style={{ color: "#9E9E8E", fontSize: "0.75rem" }}>Built in Jaipur, Rajasthan 🇮🇳</span>
      </footer>
    </div>
  );
}
