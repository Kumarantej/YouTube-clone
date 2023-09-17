import React from "react";

const YouTubeNewsIcon = ({ isActive }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d={
          isActive
            ? "M3 3.03V21h14l4-4V3.03H3zM6 6h12v2H6V6zm7 9v-2h5v2h-5zm0-3v-2h5v2h-5zm-1 6H6v-8h6v8zm4-2h3.99L16 19.99V16z"
            : "M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"
        }
        fill="white"
      />
    </svg>
  );
};

export default YouTubeNewsIcon;
