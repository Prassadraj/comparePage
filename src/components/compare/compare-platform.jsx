import Image from "next/image";
import React from "react";

function ComparePlatform() {
  const data = [
    { img: "/asset/otherPlatform-imgs/frame1.svg" },
    { img: "/asset/otherPlatform-imgs/frame2.svg" },
    { img: "/asset/otherPlatform-imgs/frame3.svg" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto px-4 py-8 md:py-12">
      <h1 className="heading text-center">Compare with other platforms</h1>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl justify-center items-center">
        {data.map((val, i) => (
          <Image
            key={i}
            src={val.img}
            width={400}
            height={400}
            className="w-full h-full"
            alt="platform"
          />
        ))}
      </div>
    </div>
  );
}

export default ComparePlatform;
