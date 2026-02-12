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

        {/* Desktop header row - hidden on mobile */}
        <div
          className="hidden md:grid mb-4"
          style={{
            gridTemplateColumns: "1fr 2fr 2fr",
            columnGap: "20px",
          }}
        >
          <div />
          {columns.map((col) => (
            <div
              key={col.key}
              className="rounded-xl py-3.5 px-5 text-center font-bold text-xl  md:text-2xl flex items-center justify-center"
              style={{
                background: col.highlight ? "#9CE56D" : "#e2e4de",
                color: "#000",
              }}
            >
              {col.label === "hyring" ? (
                <SnapshotIcons type="logo" />
              ) : (
                col.label
              )}
            </div>
          ))}
        </div>

        {/* Desktop rows - hidden on mobile */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr 2fr 2fr",
            columnGap: "20px",
          }}
        >
          {rows.map((row, i) => (
            <div key={i} className="contents  ">
              <div className={`bg-white pr-4 ${
                  row.label !== "Transparency"
                    ? "rounded-t-xl "
                    : "rounded-b-xl"
                }`}> 
                <div
                  className={`p-6 flex items-start ${
                    row.label !== "Transparency"
                      ? ""
                      : "border-t border-[#0E0F0C2E]"
                  }`}
                  style={{
                 
                    borderBottomColor: "#e5e7eb",
                  }}
                >
                  <span className="font-extrabold heading !text-xl">
                    {row.label}
                  </span>
                </div>
              </div>
              <div
                className={` bg-white p-6 border-b ${
                  row.label !== "Transparency"
                    ? "rounded-t-xl "
                    : "rounded-b-xl"
                }`}
                style={{
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  borderBottomColor: "#e5e7eb",
                }}
              >
                {row.hyring.map((t, j) => (
                  <p
                    key={j}
                    className={`text-sm leading-relaxed ${
                      j < row.hyring.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    {t}
                  </p>
                ))}
              </div>
              <div
                className={`bg-white p-6 border-b  ${
                  row.label !== "Transparency"
                    ? "rounded-t-xl "
                    : "rounded-b-xl"
                }`}
                style={{
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  borderBottomColor: "#e5e7eb",
                }}
              >
                {row.micro1.map((t, j) => (
                  <p
                    key={j}
                    className={`text-sm leading-relaxed ${
                      j < row.micro1.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout - hidden on desktop */}
        <div className="md:hidden flex flex-col gap-2">
          {rows.map((row, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <h3 className="font-extrabold text-lg mb-4 text-center">
                {row.label}
              </h3>

              {/* Hyring badge */}
              <div
                className="rounded-xl  px-4 py-2 text-center flex items-center justify-center font-bold text-base mb-3"
                style={{ background: "#9CE56D" }}
              >
                <SnapshotIcons type="logo" />
              </div>
              {row.hyring.map((t, j) => (
                <p key={j} className="text-sm leading-relaxed mb-3">
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
                <p key={j} className="text-sm leading-relaxed mb-3">
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p
          className="text-xs md:text-sm leading-relaxed mt-6 md:mt-8"
          style={{ color: "#555" }}
        >
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
