import React from "react";

function BriefIcon({ type = "check" }) {
  const isCheck = type === "check";

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z"
        stroke={isCheck ? "#097C38" : "#6C6C6C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {isCheck ? (
        <path
          d="M6.78125 10.4997L9.2575 12.9759L14.2188 8.02344"
          stroke="#097C38"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <path
            d="M8.02344 12.9759L12.9759 8.02344"
            stroke="#6C6C6C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9759 12.9759L8.02344 8.02344"
            stroke="#6C6C6C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default BriefIcon;
