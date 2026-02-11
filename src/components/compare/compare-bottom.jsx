import Image from "next/image";
import React from "react";

function CompareBottom() {
  return (
    <div className="flex flex-col lg:gap-10 gap-5">
      <div className="flex flex-col md:gap-2">
        <h1 className="heading">Bottom Line</h1>
        <div className="flex flex-col md:gap-5 gap-2 ">
          <div className="flex flex-col gap-2">
            <p>
              Hyring’s ecosystem is built around modular recruiting tools that
              support high-volume and role-based hiring from screening to
              handoff.
            </p>
            <p>
              Micro1’s ecosystem is built around expert sourcing, validation,
              and human data management for enterprise and research programs.
            </p>
          </div>
          <div className=" flex flex-col md:gap-3 gap-2">
            <div className="flex gap-2 items-center p-4 bg-[#EBFAE2] border-2 border-[#B0EA8B] rounded-sm">
              <Image
                src="/asset/bottomLine-imgs/hyringLogo.png"
                alt="hyringLogo"
                className="w-6 aspect-square"
                width={400}
                height={400}
              />
              <p>
                Hyring excels at: Recruiter-driven screening, Assessment
                integrity, and Fast hiring decisions
              </p>
            </div>
            <div className="flex gap-2 items-center p-4 bg-[#CACACA4D] border-2 border-[#CACACA] rounded-sm">
              <Image
                src="/asset/bottomLine-imgs/microLogo.png"
                alt="hyringLogo"
                className="w-6 aspect-square"
                width={400}
                height={400}
              />
              <p>
                Micro1 excels at: Long-term expert programs, data quality
                assurance, and enterprise AI operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareBottom;
