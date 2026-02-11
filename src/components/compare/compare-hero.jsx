import Image from "next/image";
import React from "react";

function CompapreHero() {
  return (
    <div className="mx-auto  bg-[#102713] w-full ">
      <div className=" flex gap-5 flex-col items-center pt-32">
        <div className="flex gap-2 flex-col items-center ">
          <p className="capitalize text-base text-gray-400">Micro1 VS HyrinG</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center heading text-white">
            Micro1 <span className="mx-2">vs</span> Hyring:
          </h1>
          <h2 className="text-white"> A Detailed Comparison</h2>
          <div className="text-white">
            <p>
              {" "}
              <span className="text-gray-400">Written on:</span> 18 Aug 2025
            </p>
            <p>
              {" "}
              <span className="text-gray-400">Last updated:</span> 21 Aug 2025
            </p>
          </div>
        </div>

        {/* ---- */}
        <div className="flex flex-col text-white md:flex-row mx-auto gap-4 border-t-[1px] border-b-[1px] border-gray-500 p-4 md:p-6">
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
              <p className="text-gray-400 text-sm leading-tight ">Written by</p>
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
              <div className="flex gap-1 ">
                <span className="text-sm leading-none">✅</span>
                <p className="text-gray-400 text-sm leading-tight">
                  Fact Checked by
                </p>
              </div>
              <p className="font-medium leading-tight">Adithyan RK</p>
            </div>
          </div>
        </div>

        {/* ---- */}

        <div className="w-[300px] md:w-[500px] lg:w-[600px] relative">
          <Image
            src="/compare/frame.png"
            width={300}
            height={300}
            alt="Image"
            className="w-full h-auto"
          />
          <div className="absolute -top-3 -right-3 md:-top-12 md:-right-12">
            <Image
              src="/asset/popup.png"
              width={80}
              height={80}
              alt="Popup"
              className="w-6 h-6  md:w-20 md:h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompapreHero;
