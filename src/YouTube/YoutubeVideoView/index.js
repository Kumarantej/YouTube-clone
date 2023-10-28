import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { selectTags, ytVideo } from "../MainContainer/data";
import { useLocation } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Sidebar from "../../components/Sidebar/Sidebar";
import Description from "./components/Description";
import Navbar from "../../components/Header/Navbar";
import { getYouTubeVideoAction } from "../actions/youTubeActions";

const YouTubeVideo = () => {
  const [active, setActive] = useState("All");
  const containerRef = useRef();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v");

  const onSelectPlayVideo = (id) => {
    const url = `watch?v=${id}`;
    window.location.href = url;
  };

  const opts = {
    height: "740",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const dispatch = useDispatch();

  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "b";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  }
  const {
    loading,
    videos: { items },
    channelDetails,
  } = useSelector((state) => state.youTubeState);

  useEffect(() => {
    dispatch(getYouTubeVideoAction);
  }, [dispatch]);

  const formatDuration = (duration) => {
    const seconds = moment.duration(duration).asSeconds();
    return moment.utc(seconds * 1000).format("mm:ss");
  };

  const formatData = (data) => {
    const customFromNow = moment(data).fromNow();
    return customFromNow.replace(/a day ago/, "1 day ago");
  };

  return (
    <div className="bg-gray-900 h-screen overflow-hidden w-[100%]">
      {showSidebar && <Sidebar toggle={toggle} containerRef={containerRef} />}
      <Navbar setShowSidebar={toggle} />
      <div className="flex container max-w-[1720px] mx-auto gap-6 h-[91vh] overflow-y-auto mt-6 scrollbar-hide">
        <div className="w-5/6">
          <div className="">
            <YouTube videoId={videoId} opts={opts} className="col-span-2" />
          </div>

          <Description />
        </div>

        <div className="w-1/4 h-14 text-white ">
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
            {items &&
              items.map((youTubeVideo, index) => {
                return (
                  <div
                    className="flex gap-2 pt-2 "
                    key={index}
                    onClick={() => onSelectPlayVideo(youTubeVideo.id)}
                  >
                    <HoverVideoPlayer
                      className=" w-[168px] min-w-[168px] cursor-pointer min-h-[94px] max-h-[94px]"
                      videoSrc={`https://www.youtube.com/watch?v=${youTubeVideo.id}`}
                      pausedOverlay={
                        <>
                          <img
                            src={
                              (youTubeVideo.snippet.thumbnails.standard &&
                                youTubeVideo.snippet.thumbnails.standard.url) ||
                              youTubeVideo.snippet.thumbnails.medium.url
                            }
                            className="rounded-[10px] h-full object-cover w-[100%]"
                            alt={youTubeVideo.snippet.title}
                          />
                          <span className="bg-black text-white absolute right-[4px] bottom-[4px] text-xs p[2px] rounded">
                            {formatDuration(
                              youTubeVideo.contentDetails.duration
                            )}
                          </span>
                        </>
                      }
                    />
                    <ul>
                      <li className="text-sm">{`${youTubeVideo.snippet.description.substring(
                        0,
                        70
                      )}...`}</li>
                      <li className="text-xs">
                        <p className="text-xs text-gray-300 mt-1">
                          {youTubeVideo.snippet.channelTitle}
                        </p>
                        <p className="text-xs text-gray-300 ">
                          {formatNumber(youTubeVideo.statistics.viewCount)}{" "}
                          views {formatData(youTubeVideo.snippet.publishedAt)}
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
