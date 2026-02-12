import React from "react";
import CompareConclusionCard from "./compare-conclusion-card";

function CompareConclusion({data}) {

  return (
    <div className=" mx-auto container">
      {/* Header */}
      <div className="mb-14 lg:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2A18] mb-3 heading">
          {data?.title}
        </h2>
        <p className="text-gray-700 max-w-3xl">{data.subtitle}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-6 mb-10">
        {/* Left */}
        <CompareConclusionCard data={data.left} accent="green" />

        {/* Right */}
        <CompareConclusionCard data={data.right} accent="gray" />
      </div>

      {/* Disclaimer */}
      <p className="text-sm text-gray-500">{data.disclaimer}</p>
    </div>
  );
}

export default CompareConclusion;
