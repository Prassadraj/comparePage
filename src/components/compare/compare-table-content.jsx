import React from "react";
import { Tabledata } from "./data";

function CompareTable() {
  const data = Tabledata;
  const mid = Math.ceil(data?.length / 2);
  const left = data?.slice(0, mid);
  const right = data?.slice(mid);

  return (
    <div
      className="flex flex-col w-full greyBg lg:p-10 p-4 rounded-2xl
        "
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl uppercase">Table of Contents</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left */}
          <div className="flex flex-col gap-3 flex-1">
            {left.map((item, index) => (
              <p key={index} className="flex gap-2 items-start">
                <span className="w-6 text-right shrink-0">
                  {index + 1}.
                </span>
                <span className="text-left">{item}</span>
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 flex-1">
            {right.map((item, index) => (
              <p key={index} className="flex gap-2 items-start">
                <span className=" w-6 text-right shrink-0">
                  {mid + index + 1}.
                </span>
                <span className="text-left">{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareTable;
