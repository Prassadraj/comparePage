import React from "react";
import Image from "next/image";
function FeatureComparison({ data }) {
  //   const data = featureComparisonData;
  const { title, intro, section, winner } = data;

  return (
    <div className=" mx-auto   ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A18] mb-3 heading">
          {title}
        </h2>
        {intro && <p className="text-gray-700 max-w-4xl">{intro}</p>}
      </div>

      {/* Section */}
      <h3 className="text-xl font-semibold text-[#0E2A18] mb-8">
        {section.heading}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        {/* Text */}
        <div className="flex flex-col gap-10">
          <SideBlock data={section.left} />
          <SideBlock data={section.right} />
        </div>

        {/* Decorative panel */}
        <div className="hidden lg:block rounded-2xl bg-gradient-to-r from-green-50 via-green-200 to-green-50 h-full min-h-[280px]">
          <Image
            src="/compare/feature.png"
            width={500}
            alt="features"
            height={600}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Winner */}
      <div className="relative bg-[#EBFAE2] border border-green-300 rounded-xl p-6">
        <span className="absolute  rounded-r-4xl -top-4 left-6 bg-white border border-green-300 px-4 
        py-1 rounded-md text-sm font-bold flex items-center gap-2">
          🏆 {winner.title}
        </span>
        <p className="text-green-900 font-medium">
          {winner.text} <span className="font-bold">{winner.highlight}</span>
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
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${data.logoBg}`}
        >
          {data.logo}
        </div>
        <h4 className="text-lg font-semibold">{data.name}</h4>
      </div>

      <p className="text-gray-700 leading-relaxed ml-11">{data.description}</p>
    </div>
  );
}
