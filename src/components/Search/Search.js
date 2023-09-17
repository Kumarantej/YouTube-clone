import React from "react";
import YouTubeMicIcon from "../../assets/svg/YouTubeMicIcon";
import YouTubeSearchIcon from "../../assets/svg/YouTubeSearchIcon";

const Search = () => {
  return (
    <div className="flex gap-4 w-full justify-center">
      <div className="flex w-full max-w-[642px]">
        <input
          style={{ border: "1px solid #303030" }}
          type="search"
          className="text-white h-10 w-full bg-gray-800 border-2 px-4 py-2 rounded-l-3xl focus:border-blue-900 outline-none"
          placeholder="Search"
        />
        <button className="w-16 bg-gray-700 flex justify-center items-center rounded-r-3xl">
          <YouTubeSearchIcon />
        </button>
      </div>
      <div className="w-10 bg-gray-700 rounded-full flex justify-center items-center cursor-pointe">
        <YouTubeMicIcon />
      </div>
    </div>
  );
};

export default Search;
