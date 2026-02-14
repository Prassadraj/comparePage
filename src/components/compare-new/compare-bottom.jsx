import Image from "next/image";
import React from "react";

function CompareBottom() {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 mx-auto container">
      <div className="flex flex-col md:gap-2">
        <h1 className="heading wordspacing">Bottom Line</h1>
        <div className="flex flex-col md:gap-5 gap-4 ">
          <div className="flex flex-col gap-4 grey1 text-[16px] md:text-[18px]">
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
          <div className=" flex flex-col md:gap-3 gap-4 grey1 text-[16px] md:text-[18px]">
            <div className="flex gap-2 items-start md:items-center p-2 md:p-4 bg-[#EBFAE2] border border-[#B0EA8B] rounded-sm">
              <Image
                src="/newcompare/asset/bottomLine-imgs/hyringLogo.png"
                alt="hyringLogo"
                className="w-24 md:w-6 sm:w-10  aspect-auto"
                width={400}
                height={400}
              />
              <p>
                Hyring excels at: Recruiter-driven screening, Assessment
                integrity, and Fast hiring decisions
              </p>
            </div>
            <div className="flex gap-2 items-start md:items-center p-2  md:p-4 bg-[#CACACA4D] border border-[#CACACA] rounded-sm">
              <Image
                src="/newcompare/asset/bottomLine-imgs/microLogo.png"
                alt="hyringLogo"
                className="w-24 md:w-6 sm:w-8  aspect-auto"
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
