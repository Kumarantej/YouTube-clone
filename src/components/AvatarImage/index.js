import React from "react";

const AvatarImage = ({ image, alt, height, width, isActive }) => {
  return (
    <div className="relative">
      <img
        className={`rounded-full w-6 h-6 border-non cursor-pointer`}
        src={image}
        alt={alt}
      />
      {isActive && (
        <span className="top-0 left-4 absolute  w-2 h-2 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      )}
    </div>
  );
};

export default AvatarImage;
