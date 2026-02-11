"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const DURATION = 5000;

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

export default function Micro1Review({ data }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imgFade, setImgFade] = useState(true);
  const rafRef = useRef(null);
  const startRef = useRef(Date.now());
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const w = useWidth();
  const isMobile = w < 768;

  const goTo = useCallback((i) => {
    setImgFade(false);
    pausedRef.current = true;
    setTimeout(() => {
      activeRef.current = i;
      setActive(i);
      setProgress(0);
      startRef.current = Date.now();
      pausedRef.current = false;
      setImgFade(true);
    }, 150);
  }, []);

  const goNext = useCallback(() => {
    const next = (activeRef.current + 1) % data.items.length;
    goTo(next);
  }, [goTo]);

  useEffect(() => {
    startRef.current = Date.now();
    const tick = () => {
      if (!pausedRef.current) {
        const elapsed = Date.now() - startRef.current;
        const p = Math.min(elapsed / DURATION, 1);
        setProgress(p);
        if (p >= 1) {
          goNext();
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [goNext]);

  const handleClick = (i) => {
    if (i === activeRef.current) return;
    goTo(i);
  };

  const currentItem = data.items[active];

  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <h1
          className="heading"
          style={{
            fontSize: isMobile ? 24 : 36,
            fontWeight: 900,
            color: "#1b2e1b",
            margin: "0 0 20px",
          }}
        >
          {data.title}
        </h1>
        <h1
          className="heading"
          style={{
            fontSize: isMobile ? 18 : 24,

            color: "#1b2e1b",
          }}
        >
          Product Ecosystem
        </h1>
        <p
          style={{
            fontSize: isMobile ? 13 : 16,
            color: "#333",
            lineHeight: 1.6,
            margin: "0 0 28px",
          }}
        >
          {data.description}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 24 : 48,
            alignItems: "flex-start",
          }}
        >
          {/* Image - first on mobile */}
          {isMobile && (
            <div
              style={{
                width: "100%",
                opacity: imgFade ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e2e4de",
                  borderRadius: 16,
                  padding: 14,
                }}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </div>
            </div>
          )}

          {/* Menu items */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {data.items.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={item.id}
                  onClick={() => handleClick(i)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`${!isActive ? "bg-transparent" : "bg-white"}`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        flexShrink: 0,
                        marginRight: isMobile ? 12 : 16,
                        alignSelf: "stretch",
                        backgroundColor: isActive ? "#e0e0dc" : "transparent",
                        borderRadius: 2,
                        position: "relative",
                        overflow: "hidden",
                        minHeight: isMobile ? 50 : 60,
                      }}
                    >
                      {isActive && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${progress * 100}%`,
                            backgroundColor: "#56B73E",
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        padding: isMobile ? "10px 0" : "18px 0",
                        textAlign: isMobile ? "center" : "left",
                      }}
                    >
                      <div className="flex gap-2">
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-3 md:w-6 aspect-square"
                          />
                        )}

                        <h3
                          style={{
                            fontSize: isMobile ? 15 : 20,
                            fontWeight: 700,
                            color: "#1b2e1b",
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {isActive && (
                        <p
                          style={{
                            fontSize: isMobile ? 12 : 15,
                            color: "#6b7a6b",
                            margin: "4px 0 0",
                            lineHeight: 1.4,
                            animation: "fadeIn 0.3s ease",
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "#d8d8d4",
                      marginLeft: isMobile ? 0 : 20,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Image - right on desktop */}
          {!isMobile && (
            <div
              style={{
                flexShrink: 0,
                width: 620,
                opacity: imgFade ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <div
                className="p-10"
                style={{
                  backgroundImage:
                    "url('/asset/productEcosystem-imgs/bgg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 20,
                }}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <p
          className="mt-4 md:mt-6"
          style={{
            fontSize: isMobile ? 12 : 15,
            color: "#444",
            lineHeight: 1.6,

            textAlign: isMobile ? "center" : "left",
          }}
        >
          {data.shortdescription}
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
