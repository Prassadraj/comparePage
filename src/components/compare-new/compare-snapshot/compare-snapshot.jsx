"use client";
import React from "react";
import { comparisonData } from "../data";
import SnapshotIcons from "./snapshot-icons";
import Image from "next/image";
import Link from "next/link";

const TickIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path
      d="M2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55666 20.4433 2.33333 14 2.33333C7.55666 2.33333 2.33331 7.55666 2.33331 14Z"
      fill="#097C38"
    />
    <path
      d="M9.10001 14.0233L11.96 16.8833L18.8133 10.03"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path
      d="M2.33331 14C2.33331 20.4434 7.55664 25.6667 14 25.6667C20.4433 25.6667 25.6667 20.4434 25.6667 14C25.6667 7.55664 20.4433 2.33331 14 2.33331C7.55664 2.33331 2.33331 7.55664 2.33331 14Z"
      fill="#CC1919"
    />
    <path
      d="M10.1108 17.8892L17.8892 10.1108M10.1108 10.1108L17.8892 17.8892"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function getLabelIcon(icon) {
  const iconMap = {
    trustpilot: "/newcompare/asset/compareSnapshot-imgs/star.svg",
    capterra: "/newcompare/asset/compareSnapshot-imgs/arrow.svg",
    g2: "/newcompare/asset/compareSnapshot-imgs/g22.svg",
  };

  const src = iconMap[icon];

  if (!src) return null;

  return (
    <>
      {src !== "/newcompare/asset/compareSnapshot-imgs/g22.svg" ? (
        <Image
          src={src}
          alt={icon}
          width={40}
          height={40}
          className="w-3 md:w-4 aspect-square"
        />
      ) : (
        <div className="p-1 bg-[red] rounded-full flex justify-center items-center">
          <Image
            src={src}
            alt={icon}
            width={40}
            height={40}
            className="w-2 md:w-4 aspect-square"
          />
        </div>
      )}
    </>
  );
}

function renderValue(value, type, isHyring, rowLabel) {
  if (type === "boolean") {
    return value ? <TickIcon /> : <CrossIcon />;
  }
  if (type === "link") {
    return (
      <a
        className="text-xs md:text-base"
        href={"https://" + value}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0E0F0C",
          textDecoration: "underline",
        }}
      >
        {value}
      </a>
    );
  }
  if (
    isHyring &&
    typeof value === "string" &&
    value.includes("/5") &&
    ["Trustpilot Score", "Capterra – Ease of Use", "G2 Rating"].includes(
      rowLabel
    )
  ) {
    return (
      <div style={{ alignItems: "center" }}>
        <a href="#" className="flex gap-1">
          <span>{value}</span>
          <SnapshotIcons type="link" />
        </a>
      </div>
    );
  }

  return (
    <span
      style={{
        color: "#0E0F0C",
        textAlign: "center",
        fontSize: "inherit",
      }}
    >
      {value?.includes("per interview") ? (
        <>
          <strong>{value.split(" ")[0]}</strong>{" "}
          {value.split(" ").slice(1).join(" ")}
        </>
      ) : (
        value
      )}
    </span>
  );
}

export default function CompareSnapshot() {
  const { title, rows } = comparisonData;

  const rowH = 48;
  const headerH = 100;

  return (
    <div
      className="container mx-auto"
      style={{
        padding: "24px 0",
        width: "100%",
      }}
    >
      <h2
        className="heading md:mb-16 mb-10"

      >
        {title}
      </h2>

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {/* LABELS */}
          <div style={{ borderRadius: "12px 0 0 12px" }}>
            <div style={{ height: headerH }} />
            <div className="pri5 rounded-xl">
              <div className="pl-5 rounded-l-xl">
                {rows.map((row, i) => (
                  <div
                    className="py-8 md:py-9 px-2 text-[14px] md:text-[18px]"
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      height: rowH,
                      background: "#EBFAE2",
                      borderBottom:
                        i < rows.length - 1
                          ? "1px solid rgba(0,0,0,0.08)"
                          : "none",
                      borderRadius:
                        i === 0
                          ? "12px 0 0 0"
                          : i === rows.length - 1
                            ? "0 0 0 12px"
                            : "0",
                    }}
                  >
                    {row.icon && getLabelIcon(row.icon)}
                    <span
                      className="font-bold text-xs md:text-base"
                      style={{
                        lineHeight: 1.3,
                        color: "#0E0F0C",
                      }}
                    >
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HYRING */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -4,
                background: "rgba(86,183,62,0.15)",
                filter: "blur(10px)",
                borderRadius: 16,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "#fff",
                border: "1px solid #56B73E",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: headerH,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
                className="px-3"
              >
                <SnapshotIcons type={"logo"} />
              </div>
              {rows.map((row, i) => (
                <div
                  className="py-8 md:py-9 px-2 text-[14px] md:text-[18px]"
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: rowH,

                    borderBottom:
                      i < rows.length - 1
                        ? "1px solid rgba(0,0,0,0.08)"
                        : "none",
                  }}
                >
                  {renderValue(row.hyring, row.type, true, row.label)}
                </div>
              ))}
            </div>
          </div>

          {/* MICRO1 */}
          <div
            style={{
              borderLeft: "none",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: headerH,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="md:text-[32px] text-base font-bold md:pr-5 pr-2">
                Micro1
              </span>
            </div>
            <div className="md:pr-5 pr-2 bg-white rounded-r-xl">
              {rows.map((row, i) => (
                <div
                  className="py-8 md:py-9 px-2 text-[14px] md:text-[18px]"
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: rowH,

                    background: "#fff",
                    borderBottom:
                      i < rows.length - 1
                        ? "1px solid rgba(0,0,0,0.08)"
                        : "none",
                    borderRadius:
                      i === 0
                        ? "0 12px 0 0"
                        : i === rows.length - 1
                          ? "0 0 12px 0"
                          : "0",
                  }}
                >
                  {renderValue(row.micro1, row.type, false)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] grey3" style={{ marginTop: 16 }}>
        Ratings change over time. Review live pages for the latest updates.
      </p>
    </div>
  );
}
