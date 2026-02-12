import { Check } from "lucide-react";
import { featureComparisonDataGlance } from "./data";
import SnapshotIcons from "./compare-snapshot/snapshot-icons";

export default function CompareGlance() {
  const { title, companies, features, auditedAt } = featureComparisonDataGlance;

  const renderValue = (value) => {
    if (value === true) {
      return (
        <div className="flex justify-center ">
          <SnapshotIcons type="tick" />
        </div>
      );
    }
    return (
      <p className="text-center text-[14px] md:text-[18px] grey1">
        {value}
      </p>
    );
  };

  return (
    <section className="bg-gray-100 mx-auto container">
      <div className=" ">
        <h2 className="heading mb-4 md:mb-6 wordspacing">{title}</h2>

        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div
            className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-300 
            px-3 py-2 md:p-8 gap-2
            text-[11px] md:text-base font-semibold items-center"
          >
            <div className="md:text-2xl text-base font-semibold">Feature / Capability</div>

            <div className="flex justify-center">
              {" "}
              <svg
                height="42"
                className="w-20 md:w-72"
                viewBox="0 0 149 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7131 32H38.6168V9.23677H43.7131V20.1767H43.9849C44.5285 17.2888 46.533 14.6388 50.8818 14.6388C55.4684 14.6388 57.7107 17.6286 57.7107 21.5697V32H52.6145V23.0986C52.6145 20.2447 51.3914 19.2254 48.1978 19.2254C44.7663 19.2254 43.7131 20.6184 43.7131 23.4723V32ZM63.2043 37.7757H60.4184V33.1551H64.5973C65.8544 33.1551 66.398 32.8154 66.7377 32.0679L58.4139 14.9785H64.1896L67.791 22.7588L69.2179 26.7679H69.5577L70.9167 22.7248L74.1443 14.9785H79.8181L71.3923 33.2231C69.7615 36.7905 67.4852 37.7757 63.2043 37.7757ZM85.8009 32H80.7046V14.9785H85.4271V19.4972H85.7329C86.2086 16.7452 88.0092 14.6388 91.4407 14.6388C95.2459 14.6388 96.8088 17.2549 96.8088 20.5844V23.4043H91.7125V21.6376C91.7125 19.769 90.9651 18.9536 88.8926 18.9536C86.6163 18.9536 85.8009 20.0068 85.8009 22.1473V32ZM103.411 13.2458H98.3145V9.23677H103.411V13.2458ZM103.411 32H98.3145V14.9785H103.411V32ZM110.835 32H105.739V14.9785H110.461V20.2107H110.767C111.209 17.3568 113.247 14.6388 117.698 14.6388C122.352 14.6388 124.561 17.6286 124.561 21.3998V32H119.464V23.0986C119.464 20.3806 118.343 19.2254 115.218 19.2254C111.99 19.2254 110.835 20.5165 110.835 23.4043V32ZM134.274 30.2673C129.211 30.2673 126.289 27.2435 126.289 22.453C126.289 17.6965 129.381 14.6388 134.477 14.6388C137.943 14.6388 140.423 16.1337 140.967 19.0895H141.238V14.9785H145.995V29.5198C145.995 35.4654 142.394 38.1155 136.312 38.1155C130.808 38.1155 127.343 35.6693 127.343 31.3885H132.439C132.439 33.291 133.186 33.8686 136.652 33.8686C139.913 33.8686 140.899 33.1891 140.899 29.8596V26.0204H140.627C140.083 28.5346 138.079 30.2673 134.274 30.2673ZM131.42 22.453C131.42 24.9672 132.847 25.8845 136.04 25.8845C139.302 25.8845 140.899 24.9672 140.899 22.6229V22.2492C140.899 19.9389 139.268 19.0555 136.108 19.0555C132.847 19.0555 131.42 19.9389 131.42 22.453Z"
                  fill="#102713"
                />
                <path
                  d="M9.39648 5.51562C10.295 5.51562 11.0234 6.24264 11.0234 7.13965V18.3672C11.6212 16.1629 12.9459 13.1195 15.8838 10.46C17.8643 8.74317 19.98 7.56624 22.3984 6.79785L26.2432 5.57617C26.9323 5.35755 27.6475 5.84656 27.6475 6.54102V15.3086C27.6473 15.7489 27.3506 16.1375 26.916 16.2725L21.5342 17.9639C24.921 18.6303 27.6475 21.5943 27.6475 25.3809V33.5371C27.6475 34.4534 26.9031 35.1963 25.9854 35.1963H18.2832C17.3654 35.1963 16.6211 34.4534 16.6211 33.5371V22.3691C16.0222 24.5728 14.6978 27.6124 11.7637 30.2686C9.78327 31.9852 7.66736 33.1613 5.24902 33.9297L1.40039 35.1514C0.711396 35.373 0.0001435 34.8818 0 34.1875V25.4199C0 24.9795 0.2967 24.5901 0.731445 24.4551L6.14258 22.7539C2.74294 22.0993 0 19.129 0 15.3311V7.13965C0 6.24274 0.727638 5.51578 1.62598 5.51562H9.39648Z"
                  fill="#102713"
                />
              </svg>
            </div>
            <div className="text-center font-semibold text-base md:text-2xl ">Micro1</div>
          </div>

          {/* Rows */}
          {features.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-[2fr_1fr_1fr] 
                px-3 py-2 md:px-6 md:py-4 
                border-b border-gray-200 last:border-b-0"
            >
              <p className="font-medium text-[14px] md:text-[18px] grey1 leading-snug">
                {feature.name}
              </p>

              {companies.map((c) => (
                <div key={c.key}>{renderValue(feature[c.key])}</div>
              ))}
            </div>
          ))}
        </div>

        <p className="text-[14px] grey3 mt-3">{auditedAt}</p>
      </div>
    </section>
  );
}
