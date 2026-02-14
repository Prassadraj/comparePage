import Image from "next/image";
import React from "react";
import SnapshotIcons from "./compare-snapshot/snapshot-icons";

function CompareConclusionCard({ data, accent }) {
  return (
    <div className="relative border-2 border-[#9C9E9C] border-dashed rounded-2xl p-6 md:p-8">
      {/* Logo */}
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full 
        flex items-center justify-center text-white text-3xl font-bold ${data.logoBg}`}
      >
        <Image
          src={
            data.logo == "H"
              ? "/newcompare/asset/logo.png"
              : "/newcompare/asset/bottomLine-imgs/microLogo.png"
          }
          width={400}
          alt="logo"
          height={500}
          className="w-16 aspect-square"
        />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {data.sections.map((section, index) => (
          <div key={index}>
            <div className="flex items-start gap-3 mb-2">
              {accent === "green" ? (
                <SnapshotIcons type="tick" />
              ) : (
                <SnapshotIcons type="wrong" />
              )}
              <h4 className="font-semibold grey1 text-[18px] md:text-[20px]">{section.title}</h4>
            </div>
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed ml-9">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareConclusionCard;
