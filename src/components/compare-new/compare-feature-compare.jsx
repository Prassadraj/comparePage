import React from "react";
import Image from "next/image";
function FeatureComparison({ data }) {
  //   const data = featureComparisonData;
  const { title, intro, section, winner } = data;

  return (
    <div className="  mx-auto container ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl wordspacing md:text-3xl font-semibold text-[#0E2A18] mb-3 heading">
          {title}
        </h2>
        {intro && <p className="grey1 text-[16px] md:text-[18px]">{intro}</p>}
      </div>

      {/* Section */}
      <h3 className="text-xl heading  !ext-lg md:!text-2xl font-semibold text-[#0E2A18] mb-3">
        {section.heading}
      </h3>
      <div className=" md:hidden items-center justify-center rounded-2xl  h-full mb-5">
        <Image
          src="/newcompare/compare/feature.png"
          width={500}
          alt="features"
          height={600}
          className="object-contain "
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center mb-10">
        {/* Text */}
        <div className="flex flex-col gap-10">
          <SideBlock data={section.left} />
          <SideBlock data={section.right} />
        </div>

        {/* Decorative panel */}
        <div className="hidden lg:flex items-center justify-center rounded-2xl  h-full min-h-[280px]">
          <Image
            src="/newcompare/compare/feature.png"
            width={500}
            alt="features"
            height={600}
            className="object-contain max-w-[700px]"
          />
        </div>
      </div>

      {/* Winner */}
      <div className="relative bg-[#EBFAE2] border border-green-300 rounded-xl p-6">
        <span
          className="absolute  rounded-r-4xl -top-4 left-6 bg-white border border-green-300 px-2 
        py-1 rounded-md text-sm font-bold flex items-center gap-1"
        >
          <Image src="/newcompare/asset/win.svg" width={300} height={300} alt={winner.title}
            className="w-5 aspect-auto" />{winner.title}
        </span>
        <p className="grey1 font-normal  text-[18px] md:text-[20px]">
          {winner.text} <span className="font-semibold">{winner.highlight}</span>
        </p>
      </div>
    </div>
  );
}

export default FeatureComparison;
function SideBlock({ data }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Image
          src={
            data.logo == "H"
              ? "/newcompare/asset/logo.png"
              : "/newcompare/asset/bottomLine-imgs/microLogo.png"
          }
          width={400}
          height={400}
          alt="Hyring logo"
          className="md:w-10 md:h-10 h-8 w-8 shrink-0"
        />
        <h4 className="text-lg font-semibold">{data.name}</h4>
      </div>

      <p className="grey1 text-[16px] md:text-[18px] leading-relaxed md:ml-11">{data.description}</p>
    </div>
  );
}
