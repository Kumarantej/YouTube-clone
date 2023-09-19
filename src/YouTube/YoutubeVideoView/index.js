import React, { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import YouTube from "react-youtube";
import { selectTags, ytVideo } from "../MainContainer/data";
import { useLocation } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import Sidebar from "../../components/Sidebar/Sidebar";

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
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-gray-900 h-screen overflow-hidden w-[100%]">
      <div className="">{showSidebar && <Sidebar toggle={toggle} />}</div>

      <Navbar setShowSidebar={toggle} />
      <div className="flex container mx-auto gap-6 h-[94vh] overflow-y-auto mt-6 scrollbar-hide">
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
        <div className="w-1/4 h-14 text-white  ">
          <div className=" flex gap-3 h-[56px] overflow-x-auto  overflow-y-hidden scrollbar-hide ">
            {selectTags.map((tag, index) => {
              const isActive = tag.label === active;
              const itemClass = `bg-gray-600 whitespace-nowrap leading-[172%] text-sm py-[4px] px-3 my-3 h-[32px] rounded-[10px]  hover:bg-gray-700 cursor-pointer ${
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

          <div className="scrollbar-hide">
            {ytVideo.map((video, index) => {
              return (
                <div className="flex gap-2 pt-2 " key={index}>
                  <HoverVideoPlayer
                    className=" w-[168px] cursor-pointer min-h-[94px]"
                    videoSrc="https://youtu.be/E07s5ZYygMg?t=10"
                    pausedOverlay={
                      <>
                        <img
                          src={video.thumbnail}
                          className="rounded-[10px] w-full h-full object-cover"
                          alt={video.title}
                        />
                        <span className="bg-black text-white absolute right-[4px] bottom-[4px] text-xs p[2px] rounded">
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
                    <li className="text-sm">{`${video.description.substring(
                      0,
                      70
                    )}...`}</li>
                    <li className="text-xs">
                      <p className="text-xs text-gray-300 mt-1">
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-300 ">
                        {video.ViewCount} views . {video.date}
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
