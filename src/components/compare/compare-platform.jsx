"use client";

import Image from "next/image";
import React, { useState } from "react";

function ComparePlatform({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full footer-green">
      <div className="flex flex-col justify-cente mx-auto container  
      items-center gap-6 md:gap-10 py-8 md:py-12">
        <h1 className="heading text-center text-2xl md:text-4xl">
          Compare with other platforms
        </h1>

        {/* Mobile View */}
        <div className="md:hidden relative w-full px-5">
          <div className="relative">
            <Image
              src={data[currentIndex].img}
              width={400}
              height={400}
              className="w-full h-auto"
              alt="platform"
            />
            <button
              onClick={handlePrev}
              className="absolute -left-4 border top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.56202 4.6875L2.76561 9.4839L7.56202 14.2803"
                  stroke="#102713"
                  strokeWidth="1.20658"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1987 9.48438H2.89998"
                  stroke="#102713"
                  strokeWidth="1.20658"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 border rotate-360 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M7.56202 4.6875L2.76561 9.4839L7.56202 14.2803"
                  stroke="#102713"
                  strokeWidth="1.20658"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1987 9.48438H2.89998"
                  stroke="#102713"
                  strokeWidth="1.20658"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row gap-10 w-full px-10 justify-center items-center">
          {data.map((val, i) => (
            <Image
              key={i}
              src={val.img}
              width={400}
              height={400}
              className="w-1/3 h-auto"
              alt="platform"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComparePlatform;
