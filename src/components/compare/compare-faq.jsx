"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Do I need to purchase the AI Coding Interviewer separately?",
    answer:
      "No. The AI Coding Interviewer is included with the AI Video Interviewer; all plans come with access to it by default. There are no hidden or additional charges.",
  },
  {
    id: 2,
    question: "Can I upgrade or downgrade?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
  },
  {
    id: 3,
    question: "Is interview transcription available?",
    answer:
      "Yes. All interviews are automatically transcribed in real-time. You can access, search, and export transcripts from your dashboard.",
  },
  {
    id: 4,
    question: "Where to use the assessments links?",
    answer:
      "You can share assessment links directly with candidates via email, your ATS, job postings, or any communication channel you prefer.",
  },
  {
    id: 5,
    question: "Conduct multiple assessments simultaneously?",
    answer:
      "Absolutely. There is no limit to the number of concurrent assessments. Multiple candidates can take assessments at the same time without any issues.",
  },
  {
    id: 6,
    question: "Can I share response & reports internally to my team?",
    answer:
      "Yes. You can invite team members and share candidate responses, reports, and evaluations internally through the platform's collaboration features.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="  flex items-center justify-center ">
      <div className="w-full" style={{ maxWidth: 860 }}>
        {/* Title */}
        <h2
          className=" heading font-black text-center mb-8 md:mb-12"
          style={{ color: "#1b2e1b", letterSpacing: "-0.5px", lineHeight: 1.1 }}
        >
          Frequently Asked Questions
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
                  className="w-full flex items-center justify-between cursor-pointer bg-transparent border-0 text-left px-5 py-4 md:px-8 md:py-5"
                >
                  <span
                    className="text-base md:text-lg font-bold pr-4"
                    style={{ color: "#1b2e1b" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-lg md:text-xl font-medium select-none"
                    style={{ backgroundColor: "#c8cec0", color: "#1b2e1b" }}
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
                  <div
                    className="mx-5 md:mx-8"
                    style={{ height: 1, backgroundColor: "#c8cec0" }}
                  />
                  <div className="px-5 pt-4 pb-5 md:px-8 md:pt-5 md:pb-6">
                    <p
                      className="m-0 text-sm md:text-base leading-relaxed"
                      style={{ color: "#3a4a3a" }}
                    >
                      {faq.answer}{" "}
                      <a
                        href="#"
                        className="font-bold no-underline inline-flex items-center gap-0.5"
                        style={{
                          color: "#1b2e1b",
                          textDecoration: "underline",
                          textUnderlineOffset: 2,
                        }}
                      >
                        Read more ↗
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
            href="#"
            className="font-bold text-base md:text-lg inline-block"
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
