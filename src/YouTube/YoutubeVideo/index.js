import React, { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import YouTube from "react-youtube";
import { selectTags, Videos } from "../MainContainer/data";
import { useLocation } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import { categories } from "./data";
import { video } from "./label";

const YouTubeVideo = () => {
  const [active, setActive] = useState("All");

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v");

  const opts = {
    height: "664",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="bg-gray-800 h-screen overflow-hidden w-[100%]">
      <Navbar />
      <div className="flex container max-w-[1720px] mx-auto gap-6 h-[94vh] overflow-y-auto mt-6">
        <div className="w-5/6">
          <div className="h-[50%]">
            <YouTube
              className="col-span-2"
              videoId={videoId}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
        <div className="w-1/4 h-14 text-white">
          <div className=" flex gap-3 h-[56px] overflow-x-auto  overflow-y-hidden ">
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

          <div className="">
            {categories.map((video, index) => {
              return (
                <div className="flex gap-2 pt-2" key={index}>
                  <HoverVideoPlayer
                    className="min-w-[186px] w-[186px] cursor-pointer min-h-[94px]"
                    videoSrc="https://youtu.be/E07s5ZYygMg?t=10"
                    pausedOverlay={
                      <img
                        src={video.thumb}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  />
                  <ul>
                    <li className="text-sm">{video.title}</li>
                    <li className="text-xs">
                      <p className="text-xs text-gray-400 mt-1">
                        {video.subtitle}
                      </p>
                      <p className="text-xs text-gray-400 ">
                        1M views . 3 years ago
                      </p>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
