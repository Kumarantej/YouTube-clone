import React, { useState } from "react";
import "./scroll.css";
import { selectTags, ytVideo } from "./data";
import HoverVideoPlayer from "react-hover-video-player";
import User from "../../assets/images/Virat_Kohli.jpg";
import { Link } from "react-router-dom";

const MainContainer = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="pl-[242px] w-calc[100% - 242px]">
      <div className="text-white flex gap-3 h-[56px] overflow-x-auto ml-6 overflow-y-hidden ">
        {selectTags.map((tag, index) => {
          const isActive = tag.label === active;
          const itemClass = `bg-gray-600 whitespace-nowrap leading-[172%] text-sm py-[4px] px-3 my-3 h-[32px] rounded-[10px]  hover:bg-gray-700 cursor-pointer ${
            isActive ? "bg-gray-100 text-black hover:bg-white" : ""
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
        {ytVideo.map((video, index) => {
          return (
            <Link to={`watch?v=${video.id}`}>
              <div
                className="card flex flex-col gap-2 cursor-pointer"
                key={index}
              >
                <HoverVideoPlayer
                  className="rounded-[12px] w-[100%] "
                  videoSrc={video.id}
                  pausedOverlay={
                    <>
                      <img
                        src={video.thumbnail}
                        className="rounded-[10px] w-full h-full object-cover"
                        alt={video.title}
                      />
                      <span className="bg-black text-white absolute right-2 bottom-2 text-xs px-1 py-1 rounded">
                        {video.durations}
                      </span>
                    </>
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />

                <ul>
                  <li className="flex py-4 first:pt-0 last:pb-0">
                    <img
                      className="min-h-[36px] min-w-[36px] w-9 h-9 rounded-full"
                      src={User}
                      alt=""
                    />
                    <div className="ml-3 overflow-hidden">
                      <p className="text-sm font-medium text-white font-bold mb-2">
                        Lorem ipsum dolor sit amet, consecte adipiscing elit.
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        James Gouse
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        15K Views .1 week ago
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainContainer;
