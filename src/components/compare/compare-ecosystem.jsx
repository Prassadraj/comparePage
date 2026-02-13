import React from "react";

function CompareEco({ data }) {
  return (
    <div className="flex flex-col lg:gap-10 gap-5 container mx-auto">
      <div className="flex flex-col md:gap-2">
        <h1 className="heading wordspacing ">{data.title}</h1>
        <div className="flex flex-col gap-2 text-base md:text-[18px]">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CompareEco;
