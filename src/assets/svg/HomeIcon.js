const HomeIcon = ({ iconColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none" // Use the color prop to set the fill dynamically
    >
      <path
        d={
          iconColor === "#fff" ||
          iconColor === "#ffffff" ||
          iconColor === "white"
            ? "M0 7V18H6V12H10V18H16V7L8 0L0 7"
            : "M8 1.33L15 7.45V17H11V11H5V17H1V7.45L8 1.33ZM8 0L0 7V18H6V12H10V18H16V7L8 0Z"
        }
        fill={iconColor ? iconColor : "#fff"} // Use the color prop to set the fill dynamically
      />
    </svg>
  );
};

export default HomeIcon;
