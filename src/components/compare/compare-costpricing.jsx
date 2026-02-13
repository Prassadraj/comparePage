import React from "react";
import SnapshotIcons from "./compare-snapshot/snapshot-icons";

export default function CostPricingStructure({ data }) {
  const { title, columns, rows, footer } = data;
  const footerParts = footer.split("Hyring Subscription Plans");

  return (
    <section className=" grey1">
      <div className="mx-auto  container">
        {/* Heading */}
        <h2 className="text-2xl heading md:text-4xl max-w-xs md:max-w-full font-black mb-6 md:mb-8 ">
          {title}
        </h2>
        {/* Desktop grid - hidden on mobile */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "2fr 2fr 2fr",
            columnGap: "20px",
          }}
        >
          {/* Header row */}
          <div className="mb-5" />
          <div
            className="rounded-xl py-3.5 px-5 text-center font-bold text-xl md:text-2xl flex items-center justify-center mb-5"
            style={{
              background: "#9CE56D",
              color: "#000",
            }}
          >
            <svg
              className="h-8 md:h-10"
              style={{ width: "auto", maxWidth: "100%" }}
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
          <div
            className="rounded-xl py-3.5 px-5 text-center font-bold text-xl md:text-2xl flex items-center justify-center mb-5"
            style={{
              background: "#e2e4de",
              color: "#000",
            }}
          >
            Micro1
          </div>

          {/* Row 1 */}
          <div className="bg-white pr-4 rounded-t-xl">
            <div className="p-6 flex items-start">
              <span className="font-extrabold heading !text-xl">
                Pricing model
              </span>
            </div>
          </div>
          <div
            className="bg-white p-6 border-b rounded-t-xl"
            style={{
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              borderBottomColor: "#e5e7eb",
            }}
          >
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed mb-4">
              Hyring uses a usage-based pricing model aligned to interview
              volume, making costs predictable and scalable for teams running
              high-volume or diverse (in terms of jobs) hiring campaigns.
            </p>
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed">
              This approach allows organizations to pay based on screening
              activity (number of interviews, credits used, volume of candidates
              screened) rather than seat count (fixed price per recruiter per
              month whether hiring happens or not) and is customizable to a
              greater degree.
            </p>
          </div>
          <div
            className="bg-white p-6 border-b rounded-t-xl"
            style={{
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              borderBottomColor: "#e5e7eb",
            }}
          >
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed">
              Micro1 follows an enterprise pricing model designed around
              platform deployments and AI recruiter agents, with costs typically
              structured around scope, scale, and integration complexity rather
              than per-interview usage.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-white pr-4 rounded-b-xl">
            <div
              className="p-6 flex items-start border-t border-[#0E0F0C2E]"
              style={{
                borderBottomColor: "#e5e7eb",
              }}
            >
              <span className="font-extrabold heading !text-xl">
                Transparency
              </span>
            </div>
          </div>
          <div
            className="bg-white p-6 border-b rounded-b-xl"
            style={{
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              borderBottomColor: "#e5e7eb",
            }}
          >
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed">
              Pricing can translate directly to cost per interview (starting
              around $1–$5+ per interview for larger volumes). This enables
              recruiters and finance teams to estimate cost per hire based on
              interview volume and hiring funnel design.
            </p>
          </div>
          <div
            className="bg-white p-6 border-b rounded-b-xl"
            style={{
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              borderBottomColor: "#e5e7eb",
            }}
          >
            <p className="grey1 text-[16px] md:text-[18px] leading-relaxed">
              Micro1's pricing is often customized and bundled, without explicit
              per-interview or cost-per-hire figures published. This can make
              budgeting less transparent for recruiting teams compared to
              usage-based models.
            </p>
          </div>
        </div>

        {/* Mobile layout - hidden on desktop */}
        <div className="md:hidden flex flex-col gap-2">
          {rows.map((row, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <h3 className="font-semibold heading !text-[20px] mb-4 text-left">
                {row.label}
              </h3>

              {/* Hyring badge */}
              <div
                className="rounded-xl  px-4 py-2 text-center flex items-center justify-center font-bold text-base mb-3"
                style={{ background: "#9CE56D" }}
              >
                <svg
                  height="42"
                  className="w-full max-w-28"
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
              {row.hyring.map((t, j) => (
                <p
                  key={j}
                  className="grey1 text-[16px] md:text-[18px]leading-relaxed mb-3"
                >
                  {t}
                </p>
              ))}

              {/* Micro1 badge */}
              <div
                className="rounded-xl py-4 px-4 grey1 text-center font-bold text-xl   mt-5 mb-3"
                style={{ background: "#e2e4de" }}
              >
                Micro1
              </div>
              {row.micro1.map((t, j) => (
                <p
                  key={j}
                  className="tgrey1 text-[16px] md:text-[18px]leading-relaxed mb-3"
                >
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="grey1 text-[16px] md:text-[18px] leading-relaxed mt-6 md:mt-8">
          {footerParts[0]}
          <a href="#" className="text-blue-500 underline">
            Hyring Subscription Plans
          </a>
          {footerParts[1]}
        </p>
      </div>
    </section>
  );
}
