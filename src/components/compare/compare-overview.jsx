import React from "react";

function CompareOverview({ data }) {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 container mx-auto">
      <div className="flex flex-col md:gap-2">
        <h1 className="flex items-center text-3xl font-semibold heading">
          {data.section1.title}
        </h1>
        <div className="flex flex-col gap-2 md:gap-5 text-[16px] md:text-[18px] grey1">
          {data.section1.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="heading wordspacing">
          {data.section2.title}
        </h1>
        <div className="flex flex-col gap-2 md:gap-4 text-[16px] md:text-[18px] grey1">
          {data.section2.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompareOverview;
