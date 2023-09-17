const YouTubeHomeIcon = ({ isActive }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none" // Use the color prop to set the fill dynamically
    >
      <path
        d={
          isActive
            ? "M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
            : "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
        }
        fill="white" // Use the color prop to set the fill dynamically
      />
    </svg>
  );
};

export default YouTubeHomeIcon;
