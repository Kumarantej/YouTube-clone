import React, { useState } from "react";
import { selectTags, ytVideo } from "./data";

import YouTubeVideoList from "../../components/YouTubeVideoList";

const MainContainer = ({
  showSidebar,
  youTubeVideoList,
  isLoading,
  channelDetails,
}) => {
  const [active, setActive] = useState("All");

  return (
    <div
      className={` bg-gray-900 ${
        showSidebar
          ? " pl-[72px] w-calc[100% - 72px]"
          : "pl-[242px] w-calc[100% - 242px]"
      }`}
    >
      <div className="text-white flex gap-3 h-[56px] overflow-x-auto ml-6 overflow-y-hidden scrollbar-hide ">
        {selectTags.map((tag, index) => {
          const isActive = tag.label === active;
          const itemClass = `bg-gray-600 whitespace-nowrap leading-[172%] text-sm py-[4px] px-3 my-3 h-[32px] rounded-[10px] hover:bg-gray-400 cursor-pointer ${
            isActive ? "bg-white text-black hover:bg-white" : ""
          }`;
          return (
            <div
              key={index}
              className={itemClass}
              onClick={() => setActive(tag.label)}
            >
              <span>{tag.label}</span>
            </div>
          );
        })}
      </div>

      <div className="m-6 mr-0 pr-6 h-[84vh] overflow-y-auto grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <YouTubeVideoList
          videoPlayerList={ytVideo}
          youTubeVideoList={youTubeVideoList}
          channelDetails={channelDetails}
        />
      </div>
    </div>
  );
};

export default MainContainer;
