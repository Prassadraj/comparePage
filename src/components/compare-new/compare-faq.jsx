"use client";

import { useState } from "react";
import { Arrow } from "../../../public/newcompare/asset/arrow";

export default function FAQ({ data: faqData }) {
  const faqs = faqData.faqs;
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="  flex items-center justify-center mx-auto container">
      <div className="w-full" style={{ maxWidth: 860 }}>
        {/* Title */}
        <h2
          className=" heading font-black text-[34px] md:!text-[50px] wordspacing text-center mb-8 md:mb-12"
          style={{ letterSpacing: "-0.5px", lineHeight: 1.1 }}
        >
          {faqData.title}
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl md:rounded-3xl overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #c8cec0",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className={`w-full flex items-center 
                  justify-between cursor-pointer border-0 text-left px-5 py-4 md:px-8 md:py-5
                  ${isOpen ? "bg-[#EDEFEC]" : "bg-transparent"}`}
                >
                  <span className="text-base md:text-lg font-semibold pr-4 grey1 ">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-lg md:text-xl font-medium select-none"
                    style={{ backgroundColor: "#CFD4D0", color: "#1b2e1b" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Divider + Answer (animated) */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pt-4 pb-5 md:px-8 md:pt-5 md:pb-6">
                    <p className="m-0 text-sm md:text-base leading-relaxed grey2">
                      {faq.answer}{" "}
                      <a
                        href={faqData.viewMoreLink}
                        className="font-semibold heading !text-base no-underline inline-flex items-center gap-0.5"
                        style={{
                          color: "#1b2e1b",
                        }}
                      >
                        Read more <span className="-rotate-45"> {Arrow}</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href={faqData.viewMoreLink}
            className="!font-semibold  heading !text-base md:!text-lg inline-block"
            style={{
              color: "#1b2e1b",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
