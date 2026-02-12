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
      <div className="mx-auto container">
        <h1 className="heading wordspacing text-2xl md:text-4xl font-black wordspacing text-[#1b2e1b] mb-0 md:mb-5">
          {data.title}
        </h1>
        <h1 className="heading wordspacing  !ext-lg md:!text-2xl text-[#1b2e1b]">
          Product Ecosystem
        </h1>
        <p className="text-sm md:text-base text-[#333] leading-[1.6] mb-0 md:mb-7">
          {data.description}
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
          {isMobile && (
            <div
              className="w-full opacity-0 transition-opacity duration-200"
              style={{ opacity: imgFade ? 1 : 0 }}
            >
              <div className="bg-[#e2e4de] rounded-2xl p-3.5">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-xl block"
                />
              </div>
            </div>
          )}

          <div className="w-full md:w-1/2">
            {data.items.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={item.id}
                  onClick={() => handleClick(i)}
                  className="cursor-pointer"
                >
                  <div
                    className={`flex flex-row items-start relative ${
                      !isActive ? "bg-transparent" : "bg-white"
                    }`}
                  >
                    <div
                      className="w-1 flex-shrink-0 mr-3 md:mr-4 self-stretch rounded-sm relative overflow-hidden"
                      style={{
                        backgroundColor: isActive ? "#e0e0dc" : "transparent",
                        minHeight: isMobile ? 50 : 60,
                      }}
                    >
                      {isActive && (
                        <div
                          className="absolute top-0 left-0 w-full star-green rounded-sm"
                          style={{ height: `${progress * 100}%` }}
                        />
                      )}
                    </div>
                    <div className="flex-1 py-2.5 md:py-4.5 text-center md:text-left">
                      <div className="flex gap-2">
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-5 md:w-6 aspect-square"
                          />
                        )}
                        <h3 className="text-base md:text-xl font-medium text-[#1b2e1b] m-0 leading-[1.3]">
                          {item.title}
                        </h3>
                      </div>
                      {isActive && (
                        <p className="text-xs text-left md:text-base text-[#6b7a6b] mt-1 leading-[1.4] animate-[fadeIn_0.3s_ease]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-[#d8d8d4] ml-0 md:ml-5" />
                </div>
              );
            })}
          </div>

          {!isMobile && (
            <div
              className="md:w-1/2 flex-shrink-0
              footer-green object-contain opacity-0 transition-opacity duration-200 rounded-2xl"
              style={{ opacity: imgFade ? 1 : 0 }}
            >
              <div
                className="p-10 bg-cover bg-center bg-no-repeat rounded-[20px]"
                style={{
                  backgroundImage:
                    "url('/asset/productEcosystem-imgs/bgg.png')",
                }}
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-xl block"
                />
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 md:mt-6 text-xs md:text-base text-[#444] leading-[1.6] text-center md:text-left">
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
