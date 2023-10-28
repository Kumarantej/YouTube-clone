import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import User from "../../assets/images/Virat_Kohli.jpg";
import moment from "moment";

const YouTubeVideoList = ({ youTubeVideoList, channelDetails }) => {
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

  const formatDuration = (duration) => {
    const seconds = moment.duration(duration).asSeconds();
    return moment.utc(seconds * 1000).format("mm:ss");
  };

  const formatData = (data) => {
    const customFromNow = moment(data).fromNow();
    return customFromNow.replace(/a day ago/, "1 day ago");
  };

  return (
    youTubeVideoList &&
    youTubeVideoList.map((youTubeVideo, index) => {
      return (
        <Link to={`watch?v=${youTubeVideo.id}`} key={index}>
          <div className="card flex flex-col gap-2 cursor-pointer">
            <HoverVideoPlayer
              className="rounded-[12px] w-[100%] "
              videoSrc={`https://www.youtube.com/watch?v=${youTubeVideo.id}`}
              pausedOverlay={
                <>
                  <img
                    src={
                      (youTubeVideo.snippet.thumbnails.standard &&
                        youTubeVideo.snippet.thumbnails.standard.url) ||
                      youTubeVideo.snippet.thumbnails.medium.url
                    }
                    className="rounded-[10px] w-full h-full object-cover"
                    alt={youTubeVideo.snippet.title}
                  />
                  <span className="bg-black text-white absolute right-2 bottom-2 text-xs px-1 py-1 rounded">
                    {formatDuration(youTubeVideo.contentDetails.duration)}
                  </span>
                </>
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
                    {`${youTubeVideo.snippet.description.substring(0, 70)}...`}
                  </p>
                  <p className="text-xs text-gray-300">
                    {youTubeVideo.snippet.title}
                  </p>
                  <p className="text-xs text-gray-300">
                    {formatNumber(youTubeVideo.statistics.viewCount)} views{" "}
                    {formatData(youTubeVideo.snippet.publishedAt)}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      );
    })
  );
};

export default YouTubeVideoList;
