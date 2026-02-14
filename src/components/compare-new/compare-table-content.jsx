import React from "react";
import { Tabledata } from "./data";

function CompareTable() {
  const data = Tabledata;
  const mid = Math.ceil(data?.length / 2);
  const left = data?.slice(0, mid);
  const right = data?.slice(mid);

  return (
    <div className="flex flex-col w-full greyBg lg:p-10 p-6 md:p-8 container mx-auto rounded-2xl border border-gray-300">
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-bold text-xl uppercase xl:text-2xl">
          Table of Contents
        </h1>
        <div className="flex flex-col md:flex-row md:gap-8 gap-3">
          {/* Left */}
          <div className="flex flex-col gap-3 w-full md:flex-1">
            {left.map((item, index) => (
              <p
                key={index}
                className="flex gap-2 w-full items-start !text-[16px] md:!text-[18px] grey1 xl:text-xl"
              >
                <span className="w-6 text-right shrink-0">{index + 1}.</span>
                <span className="text-left  !text-[16px] md:!text-[18px] grey1">{item}</span>
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 w-full md:flex-1">
            {right.map((item, index) => (
              <p
                key={index}
                className="flex gap-2 items-start !text-[16px] md:!text-[18px] grey1  xl:text-xl"
              >
                <span className="w-6 text-right shrink-0">
                  {mid + index + 1}.
                </span>
                <span className="text-left  !text-[16px] md:!text-[18px] grey1">{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareTable;
