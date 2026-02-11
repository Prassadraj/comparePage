"use client";

import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    quote:
      "We cut phone screens by 60% after rolling out structured AI screening. Recruiters could focus on higher-value interviews.",
    category: "Mid-market",
    role: "Tech recruiter",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    tab: "Mid-Market",
  },
  {
    id: 2,
    quote:
      "As a lean team, we needed to move fast without sacrificing candidate quality. AI screening helped us hire 3x faster with half the effort.",
    category: "Lean Startup",
    role: "Head of People",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    tab: "Lean Startup",
  },
  {
    id: 3,
    quote:
      "Our enterprise hiring pipeline was drowning in volume. Structured AI screening gave us consistency and speed at scale.",
    category: "Company Name",
    role: "VP of Talent Acquisition",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    tab: "Company Name",
  },
];

function useWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

export default function ClientTestimonials() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const w = useWidth();
  const isMobile = w < 768;

  const switchTab = (i) => {
    if (i === active) return;
    setFade(false);
    setTimeout(() => {
      setActive(i);
      setFade(true);
    }, 180);
  };

  const t = data[active];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "32px 16px" : "40px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 880 }}>
        {/* Title */}
        <h2 className="heading"
          style={{
            color: "#1b2e1b",
       
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? 20 : 32,
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}
        >
          Client testimonials
        </h2>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#e6e8e1",
            borderRadius: isMobile ? 18 : 24,
            padding: isMobile ? "28px 20px" : "48px 48px",
            marginBottom: isMobile ? 16 : 24,
            opacity: fade ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column-reverse" : "row",
              gap: isMobile ? 24 : 40,
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            {/* Left content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: isMobile ? "auto" : 280,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <div>
                {/* Quote marks */}
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    marginBottom: isMobile ? 16 : 24,
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  <div className="rounded-bl-2xl rounded-br-sm"
                    style={{
                      width: 20,
                      height: 28,
                      backgroundColor: "#c2c4bd",
              
                    }}
                  />
                  <div className="rounded-bl-2xl rounded-br-sm"
                    style={{
                      width: 20,
                      height: 28,
                      backgroundColor: "#c2c4bd",
                
                    }}
                  />
                </div>

                {/* Quote text */}
                <p
                  style={{
                    color: "#1b2e1b",
                    fontSize: isMobile ? 18 : 24,
                    fontWeight: 500,
                    lineHeight: 1.45,
                    margin: 0,
                    letterSpacing: "-0.2px",
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author info */}
              <div style={{ marginTop: isMobile ? 24 : 40 }}>
                <p
                  style={{
                    color: "#1b2e1b",
                    fontWeight: 700,
                    fontSize: isMobile ? 15 : 16,
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  {t.category}
                </p>
                <p
                  style={{
                    color: "#6b7a6b",
                    fontSize: isMobile ? 14 : 15,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>

            {/* Right image */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={t.image}
                alt={t.role}
                style={{
                  width: isMobile ? 160 : 220,
                  height: isMobile ? 200 : 270,
                  objectFit: "cover",
                  borderRadius: isMobile ? 14 : 18,
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e0e0dc",
            marginBottom: 0,
          }}
        />

        {/* Tabs */}
        <div style={{ display: "flex", gap: isMobile ? 12 : 24 }}>
          {data.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.id}
                onClick={() => switchTab(i)}
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  borderTop: `3.5px solid ${isActive ? "#1b2e1b" : "#c8cac2"}`,
                  paddingTop: isMobile ? 12 : 16,
                  paddingBottom: 8,
                  cursor: "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: isMobile ? 13 : 16,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#1b2e1b" : "#8a9488",
                  letterSpacing: "-0.1px",
                  transition: "all 0.25s ease",
                  textAlign: "center",
                }}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
