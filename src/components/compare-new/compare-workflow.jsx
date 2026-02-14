"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const Card = ({ step, delay = 0, innerRef }) => (
  <div
    ref={innerRef}
    className="flex items-center bg-white rounded-xl border border-black/5"
    style={{
      padding: "14px 16px",
      gap: 14,
      animation: `fadeUp .5s ease ${delay}s both`,
    }}
  >
    <div
      className="flex items-center justify-center rounded-xl shrink-0 linear"
      style={{
        width: 50,
        height: 50,
      }}
    >
      {step.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold md:text-[18px] text-[16px]">
        {step.title}
      </div>
      <div
        className="text-[14px] grey2"
        style={{ lineHeight: 1.45, marginTop: 1 }}
      >
        {step.desc}
      </div>
    </div>
  </div>
);

const Dots = ({ d = 0 }) => (
  <div
    className="flex flex-col items-center justify-center"
    style={{ height: 30, gap: 3, animation: `fadeIn .3s ease ${d}s both` }}
  >
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{ width: 2, height: 5, background: "#9B9B9B", borderRadius: 1 }}
      />
    ))}
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        border: "1.5px solid #9B9B9B",
        background: "#F5F5F0",
      }}
    />
  </div>
);

export default function HiringWorkflow({
  workflowSteps = [],
  title,
  description,
}) {
  const totalSteps = workflowSteps.length;
  const leftCount = Math.ceil(totalSteps / 2);
  const LS = workflowSteps.slice(0, leftCount);
  const RS = workflowSteps.slice(leftCount);

  const conRef = useRef(null);
  const leftRef = useRef(null);
  const rBoxRef = useRef(null);
  const lastLeftRef = useRef(null);
  const firstRightRef = useRef(null);
  const [svg, setSvg] = useState(null);

  const calc = useCallback(() => {
    if (RS.length === 0) {
      setSvg(null);
      return;
    }

    const con = conRef.current,
      lc = leftRef.current,
      rb = rBoxRef.current,
      ll = lastLeftRef.current,
      fr = firstRightRef.current;
    if (!con || !lc || !rb || !ll || !fr) return;

    const cr = con.getBoundingClientRect();
    const p = (el) => {
      const b = el.getBoundingClientRect();
      return {
        t: b.top - cr.top,
        b: b.bottom - cr.top,
        l: b.left - cr.left,
        r: b.right - cr.left,
        cx: (b.left + b.right) / 2 - cr.left,
      };
    };

    const lastLeft = p(ll);
    const firstRight = p(fr);
    const left = p(lc);
    const rbox = p(rb);

    const midX = left.r + (rbox.l - left.r) / 2;
    const r = 14;
    const startY = lastLeft.b + 3;
    const endY = firstRight.t - 3;
    const rightX = firstRight.cx;
    const botY = startY + 28;
    const topY = rbox.t - 24;

    const d = [
      `M ${lastLeft.cx} ${startY}`,
      `L ${lastLeft.cx} ${botY - r}`,
      `Q ${lastLeft.cx} ${botY} ${lastLeft.cx + r} ${botY}`,
      `L ${midX - r} ${botY}`,
      `Q ${midX} ${botY} ${midX} ${botY - r}`,
      `L ${midX} ${topY + r}`,
      `Q ${midX} ${topY} ${midX + r} ${topY}`,
      `L ${rightX - r} ${topY}`,
      `Q ${rightX} ${topY} ${rightX} ${topY + r}`,
      `L ${rightX} ${endY}`,
    ].join(" ");

    const dot = { x: rightX, y: endY };
    setSvg({ d, dot, w: cr.width + 20, h: cr.height });
  }, [RS.length]);

  useEffect(() => {
    calc();
    const t = [setTimeout(calc, 250), setTimeout(calc, 700)];
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("resize", calc);
      t.forEach(clearTimeout);
    };
  }, [calc]);

  if (!workflowSteps.length) return null;

  return (
    <div className="mx-auto container">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes draw { from { stroke-dashoffset:3000 } to { stroke-dashoffset:0 } }
        @keyframes pop { 0%{ transform:scale(0);opacity:0 } 60%{ transform:scale(1.2);opacity:1 } 100%{ transform:scale(1);opacity:1 } }
        .line { stroke-dasharray:6 5; stroke-dashoffset:3000; animation:draw 2.4s ease .8s forwards }
      `}</style>

      {(title || description) && (
        <div
          className="mb-5 px-1"
          style={{ animation: "fadeUp .5s ease both" }}
        >
          {title && <h2 className="heading wordspacing !text-2xl">{title}</h2>}
          {description && (
            <p className="text-[16px] md:text-[18px] grey1" style={{}}>
              {description}
            </p>
          )}
        </div>
      )}

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div
          ref={conRef}
          className="bg-[#F0F0EA] rounded-[20px] relative"
          style={{ padding: "36px 24px 56px" }}
        >
          {svg && RS.length > 0 && (
            <svg
              className="absolute top-0 left-0 pointer-events-none"
              style={{
                width: svg.w,
                height: svg.h,
                zIndex: 1,
                overflow: "visible",
              }}
            >
              <path
                className="line"
                d={svg.d}
                stroke="#9B9B9B"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx={svg.dot.x}
                cy={svg.dot.y}
                r="4.5"
                fill="#F0F0EA"
                stroke="#9B9B9B"
                strokeWidth="1.5"
                style={{
                  transformOrigin: `${svg.dot.x}px ${svg.dot.y}px`,
                  opacity: 0,
                  animation: `pop .4s ease 2.2s forwards`,
                }}
              />
            </svg>
          )}
          <div
            className={`grid ${
              RS.length > 0 ? "grid-cols-2" : "grid-cols-1"
            } relative md:p-10`}
            style={{ gap: RS.length > 0 ? "0 48px" : 0, zIndex: 2 }}
          >
            <div ref={leftRef}>
              {LS.map((s, i) => (
                <div key={i}>
                  <Card
                    step={s}
                    delay={0.1 + i * 0.12}
                    innerRef={i === LS.length - 1 ? lastLeftRef : undefined}
                  />
                  {i < LS.length - 1 && <Dots d={0.15 + i * 0.12} />}
                </div>
              ))}
            </div>
            {RS.length > 0 && (
              <div
                ref={rBoxRef}
                className="rounded-2xl"
                style={{
                  animation: "fadeIn .6s ease .5s both",
                }}
              >
                {RS.map((s, i) => (
                  <div key={i}>
                    <Card
                      step={s}
                      delay={0.5 + i * 0.12}
                      innerRef={i === 0 ? firstRightRef : undefined}
                    />
                    {i < RS.length - 1 && <Dots d={0.55 + i * 0.12} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <div
          className="bg-[#F0F0EA] rounded-[20px]"
          style={{ padding: "24px 14px 32px" }}
        >
          {workflowSteps.map((s, i) => (
            <div key={i}>
              <Card step={s} delay={0.05 + i * 0.08} />
              {i < workflowSteps.length - 1 && <Dots d={0.1 + i * 0.08} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
