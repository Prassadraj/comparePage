import Image from "next/image";

export default function HyringFooter() {
  const quickLinks = [
    "Manifesto",
    "Recruitment Service",
    "Data Labelling",
    "Pricing",
    "Live Chat",
    "Help Desk",
    "Blog",
  ];
  const aiAgents = [
    "AI Interviewer",
    "AI Phone Screener",
    "AI Resume Screener",
  ];
  const useCases1 = [
    "Education",
    "Technology",
    "Retail",
    "BFSI",
    "Manufacturing",
    "Semiconductors & Hardwares",
    "Healthcare",
    "EV & Automative",
  ];
  const useCases2 = [
    "Hospitality",
    "Aerospace & Defence",
    "Recruitment Agency",
    "PwC",
    "Deloitte",
    "EY",
    "KPMG",
  ];
  const compare = [
    "Hyring vs Babblebots",
    "Hyring vs Micro1",
    "Hyring vs Mindely",
    "Hyring vs Apriora",
    "Hyring vs Sapia",
    "Hyring vs Upscreen",
    "Hyring vs Fairgo",
    "Hyring vs Evalgator",
    "Hyring vs Incruiter",
    "Hyring vs Interviewer",
    "Hyring vs Talently",
  ];

  const Link = ({ children }) => (
    <a
      href="#"
      className="text-stone-400 text-sm no-underline hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );

  const Heading = ({ children }) => (
    <h4
      className="!text-xs heading md:!text-base font-bold uppercase mb-5 !text-white"
      style={{ letterSpacing: "2.5px" }}
    >
      {children}
    </h4>
  );

  return (
    <footer
      className="w-full font-sans p-0 m-0"
      style={{ backgroundColor: "#263226" }}
    >
      {/* ── Top: Logo + Badges ── */}
      <div className="px-6 md:px-16 pt-10 mx-auto">
        <div
          className="flex items-center gap-4 pb-6 border-b-[.5px]"
          style={{ borderColor: "white" }}
        >
          <span
            className="text-2xl md:text-3xl flex font-black tracking-widest"
            style={{ color: "#56B73E" }}
          >
            <Image
              src="/newcompare/asset/footer-imgs/hyring.png"
              alt="hyring"
              width={400}
              height={400}
              className="w-32 aspect-auto"
            />
            <sup className="text-xs align-super">®</sup>
          </span>
          <div
            className="w-px self-stretch mx-1"
            style={{ backgroundColor: "#5a6a5a" }}
          />
          <div className="flex gap-2">
            <div className="w-12 h-10 rounded-full flex items-center justify-center ">
              <Image
                src="/newcompare/asset/footer-imgs/soc.png"
                alt="hyring"
                width={400}
                height={400}
                className="w-full aspect-auto"
              />
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center ">
              <Image
                src="/newcompare/asset/footer-imgs/iso.png"
                alt="hyring"
                width={400}
                height={400}
                className="w-full aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Links Grid (Desktop) ── */}
      <div className="px-6 md:px-16 pt-10 pb-10 mx-auto">
        <div
          className="hidden md:flex gap-6 "
          style={{ justifyContent: "space-between" }}
        >
          {/* Quick Links */}
          <div className="flex flex-col">
            <Heading>Quick Links</Heading>
            <div className="flex flex-col gap-3">
              {quickLinks.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>

          {/* AI Agents */}
          <div className="flex flex-col">
            <Heading>AI Agents</Heading>
            <div className="flex flex-col gap-3">
              {aiAgents.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>

          {/* Use Cases — two sub-columns */}
          <div className="flex flex-col">
            <Heading>Use Cases</Heading>
            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                {useCases1.map((l, i) => (
                  <Link key={i}>{l}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {useCases2.map((l, i) => (
                  <Link key={i}>{l}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Compare */}
          <div className="flex flex-col">
            <Heading>Compare</Heading>
            <div className="flex flex-col gap-3">
              {compare.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Links Grid (Mobile) ── */}
        <div className="grid grid-cols-2 gap-8 md:hidden ">
          <div>
            <Heading>Quick Links</Heading>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <Heading>AI Agents</Heading>
            <div className="flex flex-col gap-2.5">
              {aiAgents.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <Heading>Use Cases</Heading>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[...useCases1, ...useCases2].map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <Heading>Compare</Heading>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {compare.map((l, i) => (
                <Link key={i}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="px-6 md:px-16  mx-auto">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-5 border-t-[.5px]"
          style={{ borderColor: "white" }}
        >
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm"
            style={{ color: "#7a8a7a" }}
          >
            <span
              className="font-bold text-xs px-2 py-0.5 rounded border bg-white text-black"
              style={{ borderColor: "#7a8a7a" }}
            >
              11ElevenLabs<span className="font-light">Grants</span>
            </span>
            <span style={{ color: "#4e5e4e" }}>|</span>
            <a
              href="#"
              className="no-underline hover:text-white transition-colors duration-200"
              style={{ color: "#7a8a7a" }}
            >
              Privacy Policy
            </a>
            <span style={{ color: "#4e5e4e" }}>|</span>
            <a
              href="#"
              className="no-underline hover:text-white transition-colors duration-200"
              style={{ color: "#7a8a7a" }}
            >
              Terms & Conditions
            </a>
          </div>
          <div
            className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-sm"
            style={{ color: "#7a8a7a" }}
          >
            <span>© Hyring, Inc</span>
            <span style={{ color: "#4e5e4e" }}>|</span>
            <span>2261 Market Street STE 10764, San Francisco, CA 94114</span>
          </div>
        </div>
      </div>

      {/* ── Big HYRING outline text ── */}
      <div className="px-6 md:px-16 pb-6 pt-4 mx-auto">
        <div
          className="rounded-2xl overflow-hidden flex items-center justify-center "
          style={{ padding: "32px 16px" }}
        >
          <Image
            src="/newcompare/asset/footer-imgs/hyring1.svg"
            width={600}
            height={600}
            className="w-[500px] md:w-[800px]"
            alt="footer"
          />
        </div>
      </div>
    </footer>
  );
}
