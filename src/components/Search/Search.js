import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[640px] flex">
        <input
          style={{ border: "1px solid #303030" }}
          type="search"
          className="text-white h-10 w-full bg-gray-800 border-2 px-4 py-2 rounded-l-3xl focus:border-blue-900 outline-none"
          placeholder="Search"
        />
        <button className="w-16 bg-gray-700 flex justify-center items-center rounded-r-3xl">
          <FaSearch fill="#fff" />
        </button>
      </div>
      <div className="w-10 bg-gray-700 rounded-full flex justify-center items-center">
        <FaSearch fill="#fff" />
      </div>
    </div>
  );
};

export default Search;
