import React from "react";
import BriefIcon from "./brief-icons";

function BriefOne({ data }) {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 mx-auto container">
      <div className="flex flex-col md:gap-2">
        <h1 className="heading !text-2xl ">{data.title}</h1>
        <div className="flex flex-col gap-2">
          <p>{data.description}</p>
        </div>
      </div>

      {/* ====  */}

      {/* Pros / Cons */}
      <div className="flex flex-col  bg-white p-4 md:p-8 rounded-2xl gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Pros */}
          <div className="bg-[#097C3814] rounded-2xl p-3 md:p-6 relative">
            <span
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#097C38] text-white px-6 
            py-1   rounded-full text-sm md:text-xl font-semibold"
            >
              PROS
            </span>

            <ul className="flex flex-col gap-4 mt-6">
              {data.pros.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <BriefIcon type="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-[#CACACA4D] rounded-2xl p-3 md:p-6  relative">
            <span
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6C6C6C] text-white px-6 
            py-1 rounded-full text-sm md:text-xl font-semibold"
            >
              CONS
            </span>

            <ul className="flex flex-col gap-4 mt-6">
              {data.cons.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <BriefIcon type="cross" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Takeaway */}
        <div className="bg-[#FFEFDB] rounded-2xl py-4 px-6">
          <h3 className="font-semibold text-[#BE7C2D] mb-2 md:text-xl">
            TAKEAWAY
          </h3>
          <p className="text-gray-800 leading-relaxed">{data.takeaway}</p>
        </div>
      </div>
    </div>
  );
}

export default BriefOne;
