import Image from "next/image";
import React from "react";
import { circleTick } from "../../../public/asset/arrow";

function CompapreHero() {
  return (
    <div className="mx-auto bg-[#102713] w-full">
      <div className="flex gap-5 flex-col items-center pt-32">
        <div className="flex flex-col items-center">
          <p className="text-base uppercase icon-grey1">Micro1 VS HyrinG</p>

          {/* 2 */}
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center mainheading gap-1">
              <h1 className="text-center text-[#9CE56D]">Micro1</h1>
              <span className="mx-2 text-white">vs</span>
              <h1 className="text-center text-[#9CE56D]">
                Hyring<span className="text-white">:</span>
              </h1>
            </div>
            <div className="-mt-2 md:-mt-4">
              <h2 className="text-white text-center mainheading text-3xl md:text-3xl lg:text-6xl">
                A Detailed Comparison
              </h2>
            </div>
          </div>

          <div className="text-white flex flex-col md:flex-row md:gap-4 items-center justify-evenly mt-3">
            <p className="font-bold">
              <span className="icon-grey1 font-normal">Written on:</span> 18 Aug
              2025
            </p>
            <p className="hidden md:block h-4 w-[1px] bg-[#EDEFEC]"></p>
            <p className="font-bold">
              <span className="icon-grey1 font-normal">Last updated:</span> 21
              Aug 2025
            </p>
          </div>
        </div>

        {/* ---- */}
        <div className="flex flex-col text-white md:flex-row mx-auto gap-4 md:gap-4 border-t-[1px] border-b-[1px] border-[#EDEFEC] p-4">
          {/* Written by */}
          <div className="flex gap-3 items-start">
            <Image
              src="/asset/logo.png"
              width={400}
              height={400}
              alt="Hyring logo"
              className="w-10 h-10 shrink-0"
            />

            <div className="flex flex-col justify-start gap-1">
              <p className="icon-grey1 text-sm leading-tight font-semibold">
                Written by
              </p>
              <p className="font-medium leading-tight">Team Hyring</p>
            </div>
          </div>

          {/* Fact checked by */}
          <div className="flex gap-3 items-start">
            <Image
              src="/asset/main.png"
              width={400}
              height={400}
              alt="Reviewer"
              className="w-10 h-10 rounded-full shrink-0"
            />

            <div className="flex flex-col justify-start gap-1">
              <div className="flex gap-1">
                <span className="text-sm leading-none">{circleTick}</span>
                <p className="icon-grey1 text-sm leading-tight">
                  Fact Checked by
                </p>
              </div>
              <p className="font-semibold leading-tight">Adithyan RK</p>
            </div>
          </div>
        </div>

        {/* ---- */}

        <div className="px-5 w-full">
          <div className="w-full max-w-[834px] relative mx-auto xl:mt-4">
            <Image
              src="/compare/frame.png"
              width={834}
              height={800}
              alt="Image"
              className="w-full h-auto"
            />

            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-10 2xl:-top-8 2xl:-right-12 rotate-6">
              <Image
                src="/asset/popup.png"
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
