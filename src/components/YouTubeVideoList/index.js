import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import User from "../../assets/images/Virat_Kohli.jpg";

const YouTubeVideoList = ({ videoPlayerList }) => {
  return videoPlayerList.map((video, index) => {
    return (
      <Link to={`watch?v=${video.id}`}>
        <div className="card flex flex-col gap-2 cursor-pointer" key={index}>
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
                alt="UserImage"
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-white mb-2">
                  {`${video.description.substring(0, 70)}...`}
                </p>
                <p className="text-xs text-gray-300">{video.title}</p>
                <p className="text-xs text-gray-300">
                  {video.ViewCount} views . {video.date}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Link>
    );
  });
};

export default YouTubeVideoList;
