import React from "react";

const SubScriptionIcon = ({ iconColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
    >
      <path
        d={
          iconColor === "#fff" ||
          iconColor === "#ffffff" ||
          iconColor === "white"
            ? "M18 4H2V3H18V4ZM20 6V18H0V6H20ZM13 12L8 9V15L13 12ZM15 0H5V1H15V0Z"
            : "M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z"
        }
        fill={iconColor ? iconColor : "#FFFFFF"}
      />
    </svg>
  );
};

export default SubScriptionIcon;
