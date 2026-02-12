"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Arrow } from "../../../public/asset/arrow";

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

  const handlePrev = () => {
    const prev = active === 0 ? data.length - 1 : active - 1;
    switchTab(prev);
  };

  const handleNext = () => {
    const next = (active + 1) % data.length;
    switchTab(next);
  };

  const t = data[active];

  return (
    <div className="flex items-center justify-center mx-auto container ">
      <div className="w-full max-w-[880px]">
        <h2 className="heading wordspacing text-2xl md:text-4xl font-black text-[#1b2e1b] text-center mb-5 md:mb-8 tracking-tight leading-tight">
          Client testimonials
        </h2>

        <div
          className="bg-[#e6e8e1] rounded-2xl md:rounded-3xl p-7 md:p-12 mb-4 md:mb-6 transition-opacity duration-200"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="flex-1 flex flex-col justify-between md:min-h-[280px] text-left">
              <div>
                <div className="flex gap-1 mb-4 md:mb-6">
                  <div className="w-5 h-9  bg-[#6A745D] rounded-bl-2xl rounded-br-sm" />
                  <div className="w-5  h-9  bg-[#6A745D] rounded-bl-2xl rounded-br-sm" />
                </div>

                <p className="grey1 font-normal text-lg md:text-2xl font-medium leading-snug tracking-tight m-0">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 md:mt-10">
                <p className="grey1 font-medium text-base md:text-lg m-0 mb-1">
                  {t.category}
                </p>
                <p className="grey3 text-sm md:text-base m-0 font-normal">
                  {t.role}
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <Image
                src={t.image}
                alt={t.role}
                width={400}
                height={500}
                className="w-full md:w-56 h-full md:max-h-[270px] object-cover rounded-2xl md:rounded-lg"
              />
            </div>
          </div>
        </div>

        {isMobile ? (
          <>
            <div className="relative flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rotate-180 bg-white rounded-full border border-[#e0e0dc] flex items-center justify-center flex-shrink-0"
              >
                {Arrow}
              </button>

              <div className="flex-1 h-px bg-[#e0e0dc] relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#1b2e1b] transition-all duration-200"
                  style={{ width: `${((active + 1) / data.length) * 100}%` }}
                />
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white rotate-180 rounded-full border border-[#e0e0dc] flex items-center justify-center flex-shrink-0"
              >
                <div className="rotate-180">{Arrow}</div>
              </button>
            </div>

            <div className="text-center text-xl font-semibold text-[#1b2e1b]">
              {t.tab}
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-px bg-[#e0e0dc] mb-0" />

            <div className="flex gap-6">
              {data.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.id}
                    onClick={() => switchTab(i)}
                    className="flex-1 bg-transparent border-none pt-4 pb-2 cursor-pointer text-base font-semibold text-center transition-all duration-200"
                    style={{
                      borderTop: `3.5px solid ${
                        isActive ? "#1b2e1b" : "#c8cac2"
                      }`,
                      color: isActive ? "#1b2e1b" : "#8a9488",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {item.tab}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
