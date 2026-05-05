import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Zap,
  MessageSquare,
  Lightbulb,
} from "lucide-react";

/* ─── reusable fade-up wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── lightning-glass card ─── */
function GlassCard({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.55)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
        ...style,
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ boxShadow: "0 16px 56px rgba(232,93,4,0.12), inset 0 1px 0 rgba(255,255,255,0.9)" }}
    >
      {/* shimmer sweep */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
        animate={{ backgroundPosition: ["-200% 0", "400% 0"] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </motion.div>
  );
}

/* ─── animated connector dot for flowchart ─── */
function FlowConnector({ delay }: { delay: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        padding: "0 0.5rem",
      }}
    >
      {/* line */}
      <motion.div
        style={{
          width: 2,
          height: 48,
          background: "linear-gradient(to bottom, #E8E5DF, #E85D04)",
          borderRadius: 999,
        }}
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* travelling dot */}
      <motion.div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "#E85D04",
          boxShadow: "0 0 0 4px rgba(232,93,4,0.2)",
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, delay: delay + 0.55, ease: "backOut" }}
      />
      {/* line */}
      <motion.div
        style={{
          width: 2,
          height: 48,
          background: "linear-gradient(to bottom, #E85D04, #E8E5DF)",
          borderRadius: 999,
        }}
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: delay + 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div
      style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#FAFAF7", color: "#0A0A0A" }}
      className="min-h-screen selection:bg-orange-200"
    >
      {/* ── NAV ── glass */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(250,250,247,0.78)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(232,229,223,0.7)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#0A0A0A",
                fontSize: "1.45rem",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              GRIPR
            </span>
            <motion.span
              style={{
                backgroundColor: "#E85D04",
                color: "#fff",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "2px 7px",
                borderRadius: "999px",
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            >
              BETA
            </motion.span>
          </motion.div>

          <motion.span
            style={{
              color: "#6B6B5E",
              fontSize: "0.82rem",
              fontStyle: "italic",
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            India bolti hai. Builders sunenge.
          </motion.span>

          <motion.button
            onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#0A0A0A",
              color: "#FAFAF7",
              borderRadius: "999px",
              padding: "0.5rem 1.25rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
            }}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24" ref={heroRef}>
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#E85D04",
              display: "inline-block",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontFamily: "'Space Mono', monospace",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#8A8A78",
              textTransform: "uppercase",
            }}
          >
            12,000+ Problems Captured in Beta
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.2rem, 7.5vw, 7.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              color: "#0A0A0A",
              marginBottom: "1.75rem",
              fontWeight: 800,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Stop guessing.<br />
            <em style={{ color: "#E85D04", fontStyle: "italic", fontWeight: 300 }}>Build what Bharat&nbsp;</em><br />
            actually needs.
          </motion.h1>
          <motion.p
            style={{ fontSize: "1.1rem", color: "#4A4A3F", maxWidth: "34rem", lineHeight: 1.75, marginBottom: "2.5rem", fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            India's first anonymous problem-to-product platform — real frustrations from 9 languages, ranked by AI demand every week.
          </motion.p>
        </div>

        <motion.form
          id="waitlist-form"
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              border: "1.5px solid #D4D0C8",
              borderRadius: "999px",
              padding: "0.75rem 1.4rem",
              fontSize: "0.9rem",
              outline: "none",
              backgroundColor: "#fff",
              color: "#0A0A0A",
              minWidth: "260px",
              flex: "1 1 260px",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
            }}
          />
          <motion.button
            type="submit"
            style={{
              backgroundColor: submitted ? "#2D6A4F" : "#E85D04",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "0.75rem 1.8rem",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "background-color 0.2s",
              whiteSpace: "nowrap",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {submitted ? "You're in ✓" : <><span>Get Early Access</span><ArrowRight size={15} /></>}
          </motion.button>
        </motion.form>

        <motion.p
          style={{ fontSize: "0.8rem", color: "#9E9E8E" }}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          340+ builders waitlisted · ₹0 for users · Always free to submit
        </motion.p>

        {/* Stats bar */}
        <motion.div
          style={{
            marginTop: "4.5rem",
            borderTop: "1px solid #E8E5DF",
            borderBottom: "1px solid #E8E5DF",
            padding: "2rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { val: "12,000+", label: "Problems in Beta" },
            { val: "340+", label: "Builders Waitlisted" },
            { val: "9", label: "Indian Languages" },
            { val: "₹0", label: "Cost to Users" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              style={{ textAlign: "center" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.8rem", color: "#0A0A0A", letterSpacing: "-0.04em", fontWeight: 700 }}>
                {s.val}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#8A8A78", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'Space Mono', monospace", marginTop: "0.4rem" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── HOW IT WORKS — flowchart ── */}
      <section style={{ backgroundColor: "#F2EFE9", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <FadeUp>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", color: "#0A0A0A", lineHeight: 1.0, fontWeight: 700 }}>
                From frustration<br />to product signal.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: "#6B6B5E", fontSize: "0.95rem", maxWidth: "22rem", lineHeight: 1.75, fontWeight: 400 }}>
                Three coordinated AI agents process every submission in real time — no opinions, just data.
              </p>
            </FadeUp>
          </div>

          {/* flowchart: horizontal steps with animated connectors */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {[
              {
                step: "01",
                icon: <MessageSquare size={22} color="#E85D04" />,
                title: "India Shares Frustrations",
                body: "Anyone submits anonymously in 30 seconds. Hindi, Hinglish, English — or 6 other regional languages. Zero login. Zero social pressure.",
              },
              {
                step: "02",
                icon: <Zap size={22} color="#E85D04" />,
                title: "AI Ranks by Real Demand",
                body: "Semantic embeddings cluster similar problems regardless of language. Frequency scored, momentum tracked, market size estimated.",
              },
              {
                step: "03",
                icon: <Lightbulb size={22} color="#E85D04" />,
                title: "Builders Get the Signal",
                body: "Every Monday: a curated digest of the top 10 most-demanded unsolved problems in your niche. Anonymous quotes included.",
              },
            ].map((item, i) => (
              <div key={item.step} style={{ display: "flex", alignItems: "center", flex: i < 2 ? "1 1 0" : "1 1 0" }}>
                <GlassCard
                  style={{
                    borderRadius: "1.25rem",
                    padding: "2.5rem 2rem",
                    flex: 1,
                  }}
                >
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#B0AC9E", fontWeight: 400, marginBottom: "1.75rem", letterSpacing: "0.1em" }}>
                    {item.step}
                  </div>
                  <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", color: "#0A0A0A", marginBottom: "0.65rem", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#6B6B5E", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 400 }}>{item.body}</p>
                </GlassCard>
                {i < 2 && <FlowConnector delay={0.3 + i * 0.25} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE PROBLEMS FEED ── */}
      <section style={{ padding: "6rem 0", backgroundColor: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <FadeUp>
              <div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#E85D04", fontWeight: 400, letterSpacing: "0.12em", display: "block", marginBottom: "0.85rem", textTransform: "uppercase" }}>
                  ● Live Feed Preview
                </span>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#0A0A0A", letterSpacing: "-0.04em", lineHeight: 0.98, fontWeight: 700 }}>
                  Real problems.<br />Waiting for solutions.
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <motion.button
                style={{ backgroundColor: "transparent", border: "1.5px solid #D4D0C8", borderRadius: "999px", padding: "0.6rem 1.2rem", fontSize: "0.82rem", color: "#4A4A3F", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 500 }}
                whileHover={{ scale: 1.04, borderColor: "#E85D04", color: "#E85D04" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                View Beta Board <ArrowUpRight size={14} />
              </motion.button>
            </FadeUp>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {[
              { id: "PRB-8921", persona: "Farmer, Maharashtra", problem: "Tomatoes rotting because I can't find a reefer truck for small loads to the city.", demand: "Very High", trend: "+42% this week", tags: ["AgriTech", "Logistics"] },
              { id: "PRB-7743", persona: "Engineering Student, Delhi", problem: "Taking factory client orders but impossible to find a verified, skilled welder nearby.", demand: "High", trend: "+18% this week", tags: ["Gig Economy", "Manufacturing"] },
              { id: "PRB-9012", persona: "Manufacturer, Gujarat", problem: "Losing export deals constantly because customs paperwork requirements keep changing silently.", demand: "Critical", trend: "+65% this week", tags: ["Export", "LegalTech"] },
              { id: "PRB-6534", persona: "Small Business Owner, Bangalore", problem: "No reliable way to verify if a raw material supplier is genuine before paying an advance.", demand: "Very High", trend: "+30% this week", tags: ["B2B", "FinTech"] },
            ].map((item, i) => (
              <GlassCard
                key={item.id}
                style={{
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#B0AC9E", fontWeight: 400, letterSpacing: "0.05em" }}>{item.id}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", fontWeight: 700, color: "#2D6A4F", backgroundColor: "#D8F3DC", padding: "3px 10px", borderRadius: "999px" }}>
                    <TrendingUp size={11} /> {item.trend}
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#9E9E8E", marginBottom: "0.6rem" }}>
                  Reported by: <strong style={{ color: "#4A4A3F" }}>{item.persona}</strong>
                </p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", color: "#0A0A0A", lineHeight: 1.5, marginBottom: "1.25rem", fontWeight: 400, letterSpacing: "-0.01em" }}>
                  "{item.problem}"
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", alignItems: "center" }}>
                  {item.tags.map((t) => (
                    <span key={t} style={{ fontSize: "0.7rem", padding: "3px 9px", border: "1px solid #E8E5DF", borderRadius: "999px", color: "#6B6B5E", backgroundColor: "rgba(245,243,239,0.8)" }}>{t}</span>
                  ))}
                  <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", fontWeight: 700, color: "#C0392B", backgroundColor: "#FEE2E2", padding: "3px 10px", borderRadius: "999px" }}>
                    <AlertTriangle size={10} /> {item.demand}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div style={{ marginBottom: "3.5rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#E85D04", fontWeight: 400, letterSpacing: "0.12em", display: "block", marginBottom: "0.85rem", textTransform: "uppercase" }}>
                Why GRIPR?
              </span>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#FAFAF7", letterSpacing: "-0.04em", lineHeight: 0.98, fontWeight: 700 }}>
                The world builds for the US.<br />We build for Bharat.
              </h2>
            </div>
          </FadeUp>

          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "1px", backgroundColor: "#2A2A2A" }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ backgroundColor: "#0A0A0A", padding: "1.25rem 1.5rem" }}></div>
            {[
              { name: "GRIPR", highlight: true },
              { name: "ProductHunt", highlight: false },
              { name: "Reddit / Twitter", highlight: false },
            ].map((col) => (
              <div key={col.name} style={{ backgroundColor: col.highlight ? "#1A1A1A" : "#0A0A0A", padding: "1.25rem 1.5rem", borderBottom: col.highlight ? "2px solid #E85D04" : "none" }}>
                <span style={{ fontWeight: col.highlight ? 700 : 500, color: col.highlight ? "#E85D04" : "#6B6B5E", fontSize: "0.9rem" }}>{col.name}</span>
              </div>
            ))}

            {[
              { feature: "Core Focus", gripr: "Raw unbuilt demand", ph: "Finished solutions", reddit: "General discussion" },
              { feature: "Language Support", gripr: "Hindi + 8 Regional ✓", ph: "English only", reddit: "Mostly English" },
              { feature: "Signal Quality", gripr: "AI Frequency Ranked", ph: "Upvotes on UI", reddit: "Chronological chaos" },
              { feature: "Geography", gripr: "Bharat-Native", ph: "US-Biased", reddit: "Global (US-heavy)" },
            ].map((row) => (
              <div key={row.feature} style={{ display: "contents" }}>
                <div style={{ backgroundColor: "#0A0A0A", padding: "1.25rem 1.5rem", fontSize: "0.85rem", color: "#6B6B5E", borderBottom: "1px solid #1A1A1A" }}>{row.feature}</div>
                <div style={{ backgroundColor: "#1A1A1A", padding: "1.25rem 1.5rem", fontSize: "0.85rem", color: "#FAFAF7", fontWeight: 600, borderBottom: "1px solid #2A2A2A" }}>{row.gripr}</div>
                <div style={{ backgroundColor: "#0A0A0A", padding: "1.25rem 1.5rem", fontSize: "0.85rem", color: "#4A4A3F", borderBottom: "1px solid #1A1A1A" }}>{row.ph}</div>
                <div style={{ backgroundColor: "#0A0A0A", padding: "1.25rem 1.5rem", fontSize: "0.85rem", color: "#4A4A3F", borderBottom: "1px solid #1A1A1A" }}>{row.reddit}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ backgroundColor: "#FAFAF7", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div style={{ marginBottom: "3.5rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#E85D04", fontWeight: 400, letterSpacing: "0.12em", display: "block", marginBottom: "0.85rem", textTransform: "uppercase" }}>
                Pricing
              </span>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#0A0A0A", letterSpacing: "-0.04em", lineHeight: 0.98, fontWeight: 700 }}>
                Users are free. Forever.<br />Builders pay for the signal.
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", alignItems: "start" }}>
            {/* Builder Basic */}
            <GlassCard style={{ borderRadius: "1.25rem", padding: "2rem" }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B5E", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Builder Basic</h3>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "3rem", color: "#0A0A0A", letterSpacing: "-0.04em", lineHeight: 1, fontWeight: 700 }}>
                ₹499<span style={{ fontSize: "1rem", color: "#9E9E8E", fontFamily: "'Manrope', sans-serif", fontWeight: 400, letterSpacing: 0 }}>/mo</span>
              </div>
              <p style={{ color: "#9E9E8E", fontSize: "0.82rem", margin: "0.75rem 0 1.5rem" }}>Essential signals for indie hackers</p>
              <div style={{ borderTop: "1px solid rgba(232,229,223,0.8)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["Top 10 weekly digest", "1 niche filter", "Access to problem tags"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#4A4A3F" }}>
                    <CheckCircle2 size={14} color="#E85D04" /> {f}
                  </div>
                ))}
              </div>
              <motion.button
                style={{ marginTop: "2rem", width: "100%", padding: "0.7rem", border: "1.5px solid #D4D0C8", borderRadius: "999px", backgroundColor: "transparent", color: "#0A0A0A", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Manrope', sans-serif" }}
                whileHover={{ scale: 1.03, borderColor: "#0A0A0A" }}
                whileTap={{ scale: 0.97 }}
              >
                Join Waitlist
              </motion.button>
            </GlassCard>

            {/* Builder Pro — featured */}
            <motion.div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "1.25rem",
                padding: "2rem",
                background: "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
                border: "1.5px solid #333",
                transform: "translateY(-10px)",
                boxShadow: "0 24px 64px rgba(232,93,4,0.18), 0 8px 32px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: -10 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ boxShadow: "0 32px 80px rgba(232,93,4,0.28), 0 8px 32px rgba(0,0,0,0.3)" }}
            >
              {/* lightning shimmer on dark card */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(105deg, transparent 35%, rgba(232,93,4,0.12) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                animate={{ backgroundPosition: ["-200% 0", "400% 0"] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{ position: "absolute", top: "-2.5rem", left: "50%", transform: "translateX(-50%)", backgroundColor: "#E85D04", color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: "999px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Most Popular
                </span>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E85D04", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Builder Pro</h3>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.8rem", color: "#FAFAF7", letterSpacing: "-0.04em", lineHeight: 1, fontWeight: 700 }}>
                  ₹999<span style={{ fontSize: "1rem", color: "#6B6B5E", fontFamily: "'Manrope', sans-serif", fontWeight: 400, letterSpacing: 0 }}>/mo</span>
                </div>
                <p style={{ color: "#6B6B5E", fontSize: "0.82rem", margin: "0.75rem 0 1.5rem" }}>Deep insights for serious founders</p>
                <div style={{ borderTop: "1px solid #2A2A2A", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {["Real-time alerts", "3 niche filters", "Historical trend data", "Claim a problem to build"].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D4D0C8" }}>
                      <CheckCircle2 size={14} color="#E85D04" /> {f}
                    </div>
                  ))}
                </div>
                <motion.button
                  style={{ marginTop: "2rem", width: "100%", padding: "0.7rem", border: "none", borderRadius: "999px", backgroundColor: "#E85D04", color: "#fff", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Manrope', sans-serif" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Get Early Access
                </motion.button>
              </div>
            </motion.div>

            {/* Founding Member */}
            <GlassCard style={{ borderRadius: "1.25rem", padding: "2rem", position: "relative" as const }}>
              <span style={{ position: "absolute", top: "1.5rem", right: "1.5rem", backgroundColor: "#FEE2E2", color: "#C0392B", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase" }}>
                50 Spots Only
              </span>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B5E", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Founding Member</h3>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.4rem", color: "#0A0A0A", letterSpacing: "-0.04em", lineHeight: 1, fontWeight: 700 }}>
                ₹4,999<span style={{ fontSize: "0.9rem", color: "#9E9E8E", fontFamily: "'Manrope', sans-serif", fontWeight: 400, letterSpacing: 0 }}> one-time</span>
              </div>
              <p style={{ color: "#9E9E8E", fontSize: "0.82rem", margin: "0.75rem 0 1.5rem" }}>Lifetime Pro access for early believers</p>
              <div style={{ borderTop: "1px solid rgba(232,229,223,0.8)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["Lifetime Builder Pro access", "Private founder Discord", "Direct feature requests"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#4A4A3F" }}>
                    <CheckCircle2 size={14} color="#E85D04" /> {f}
                  </div>
                ))}
              </div>
              <motion.button
                style={{ marginTop: "2rem", width: "100%", padding: "0.7rem", border: "1.5px solid #E85D04", borderRadius: "999px", backgroundColor: "transparent", color: "#E85D04", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Manrope', sans-serif" }}
                whileHover={{ scale: 1.03, backgroundColor: "#E85D04", color: "#fff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                Secure a Spot →
              </motion.button>
            </GlassCard>
          </div>

          <FadeUp delay={0.2}>
            <p style={{ textAlign: "center", marginTop: "2rem", color: "#9E9E8E", fontSize: "0.82rem" }}>
              Need API access & custom geo filters?{" "}
              <span style={{ color: "#4A4A3F", fontWeight: 600 }}>Agency / VC plan — ₹4,999/mo.</span>{" "}
              <a href="#waitlist-form" style={{ color: "#E85D04", textDecoration: "none", fontWeight: 600 }}>Contact us →</a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: "#F2EFE9", padding: "7rem 0", borderTop: "1px solid #E8E5DF" }}>
        <div className="max-w-7xl mx-auto px-6" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <FadeUp>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "#0A0A0A", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.25rem", fontWeight: 700 }}>
                Don't write a single line of code until you know they'll buy.
              </h2>
              <p style={{ color: "#6B6B5E", fontSize: "1rem", lineHeight: 1.7, maxWidth: "28rem" }}>
                83% of builders waste 3+ months building something nobody wanted — not because they were bad builders, but because they never had validated demand before Day 1.
              </p>
              <p style={{ marginTop: "1.5rem", fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: "#E85D04", fontStyle: "italic", fontWeight: 300 }}>
                GRIPR changes that. For Bharat.
              </p>
            </div>
          </FadeUp>

          <GlassCard style={{ borderRadius: "1.5rem", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", color: "#0A0A0A", marginBottom: "0.5rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
              Join the Waitlist
            </h3>
            <p style={{ color: "#9E9E8E", fontSize: "0.85rem", marginBottom: "1.5rem" }}>340+ builders already inside. Limited founding spots.</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  border: "1.5px solid #D4D0C8",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  outline: "none",
                  backgroundColor: "rgba(250,250,247,0.8)",
                  color: "#0A0A0A",
                  fontFamily: "'Manrope', sans-serif",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <motion.button
                type="submit"
                style={{
                  backgroundColor: submitted ? "#2D6A4F" : "#0A0A0A",
                  color: "#FAFAF7",
                  border: "none",
                  borderRadius: "0.75rem",
                  padding: "0.85rem",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  fontFamily: "'Manrope', sans-serif",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {submitted ? "You're on the list ✓" : <><span>Get Early Access</span><ArrowRight size={15} /></>}
              </motion.button>
            </form>
            <div style={{ marginTop: "1.25rem", display: "flex", gap: "1rem", fontSize: "0.75rem", color: "#B0AC9E" }}>
              <span>✓ Free for users</span>
              <span>✓ No spam</span>
              <span>✓ Unsubscribe anytime</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0A0A0A", padding: "2.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "'Fraunces', serif", color: "#FAFAF7", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.03em" }}>GRIPR</span>
          <span style={{ color: "#4A4A3F", fontSize: "0.8rem", fontStyle: "italic", fontFamily: "'Fraunces', serif", fontWeight: 300 }}>
            India bolti hai. Builders sunenge.
          </span>
          <span style={{ color: "#2A2A2A", fontSize: "0.75rem" }}>Built in Jaipur, Rajasthan 🇮🇳 · 2025</span>
        </div>
      </footer>
    </div>
  );
}
