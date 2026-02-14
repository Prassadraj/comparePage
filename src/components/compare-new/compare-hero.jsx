import Image from "next/image";
import React from "react";
import { circleTick } from "../../../public/newcompare/asset/arrow";

function CompapreHero({ data }) {
  const { meta, authors, frameImage } = data;

  return (
    <div className="mx-auto bg-[#102713] w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/newcompare/asset/dots.png"
          width={900}
          height={900}
          alt="Popup"
          className="w-full h-full object-cover -translate-x-8"
        />
      </div>
      <div className="flex gap-5 flex-col items-center pt-32">
        <div className="flex flex-col items-center">
          <p className="text-base uppercase icon-grey1">{meta.label}</p>

          {/* 2 */}
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center mainheading gap-1">
              <h1 className="text-center text-[#9CE56D]">{meta.titleLeft}</h1>
              <span className="mx-2 text-white">vs</span>
              <h1 className="text-center text-[#9CE56D]">
                {meta.titleRight}
                <span className="text-white">:</span>
              </h1>
            </div>
            <div className="-mt-2 md:-mt-4">
              <h2 className="text-white text-center mainheading text-3xl md:text-3xl lg:text-6xl">
                {meta.subtitle}
              </h2>
            </div>
          </div>

          <div className="text-white flex flex-col md:flex-row md:gap-4 items-center justify-evenly mt-3">
            <p className="font-bold">
              <span className="icon-grey1 font-normal">Written on:</span>{" "}
              {meta.writtenOn}
            </p>
            <p className="hidden md:block h-4 w-[1px] bg-[#EDEFEC]"></p>
            <p className="font-bold">
              <span className="icon-grey1 font-normal">Last updated:</span>{" "}
              {meta.lastUpdated}
            </p>
          </div>
        </div>

        {/* ---- */}
        <div className="flex flex-col text-white md:flex-row mx-auto gap-4 md:gap-4 border-t-[1px] border-b-[1px] border-[#EDEFEC] p-4">
          {/* Written by */}
          <div className="flex gap-3 items-start">
            <Image
              src={authors.writtenBy.image}
              width={400}
              height={400}
              alt="Hyring logo"
              className="w-10 h-10 shrink-0"
            />

            <div className="flex flex-col justify-start gap-1">
              <p className="icon-grey1 text-sm leading-tight font-semibold">
                {authors.writtenBy.role}
              </p>
              <p className="font-medium leading-tight">
                {authors.writtenBy.name}
              </p>
            </div>
          </div>

          {/* Fact checked by */}
          <div className="flex gap-3 items-start">
            <Image
              src={authors.factCheckedBy.image}
              width={400}
              height={400}
              alt="Reviewer"
              className="w-10 h-10 rounded-full shrink-0"
            />

            <div className="flex flex-col justify-start gap-1">
              <div className="flex gap-1">
                <span className="text-sm leading-none">{circleTick}</span>
                <p className="icon-grey1 text-sm leading-tight">
                  {authors.factCheckedBy.role}
                </p>
              </div>
              <p className="font-semibold leading-tight">
                {authors.factCheckedBy.name}
              </p>
            </div>
          </div>
        </div>

        {/* ---- */}

        <div className="px-5 md:px-12 w-full">
          <div className="w-full max-w-[834px] relative mx-auto xl:mt-4">
            <Image
              src={frameImage}
              width={834}
              height={800}
              alt="Image"
              className="w-full h-auto"
            />

            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-10 2xl:-top-8 2xl:-right-12 rotate-6">
              <Image
                src="/newcompare/asset/popup.png"
                width={85}
                height={53}
                alt="Popup"
                className="w-8 h-auto md:w-16 2xl:w-[85px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompapreHero;
