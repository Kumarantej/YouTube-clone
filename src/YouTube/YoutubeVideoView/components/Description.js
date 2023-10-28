import React from "react";

import Virat from "../../../assets/images/Virat_Kohli.jpg";
import YouTubeLikeIcon from "../../../assets/svg/YouTubeLikeIcon";

export default function Description() {
  return (
    <div className="text-white pt-5">
      <h4 className="text-lg">
        Blind Woodturner: Turning passion into fine art
      </h4>
      <div className="py-5 text-gray-300 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full min-w-[40px] min-h-[40px] h-[40px] w-[40px] border-non cursor-pointer"
            src={Virat}
            alt="altImage"
          />
          <div className="">
            <p className="text-white">Tamil Talkies</p>
            <p className="text-xs">1.65M subscribers</p>
          </div>
          <div className="pl-5">
            <span className="border-solid border-2  tracking-wide border-slate-500 rounded-full bg-primary px-[16px] py-[8px] text-white text-xs cursor-pointer">
              join
            </span>
            <span className="border-solid border-2 bg-white tracking-wide border-white rounded-full bg-primary px-[16px] py-[8px] text-gray-700 text-xs cursor-pointer">
              Subscribe
            </span>
          </div>
        </div>

        <div>
          <div className="flex">
            <div className="border-solid border-white rounded-full px-[12px] py-[4px] bg-gray-600 pb-[2px] h-9 ">
              <YouTubeLikeIcon />
            </div>
            <div className="border-solid border-white rounded-full px-[12px] py-[4px] bg-gray-600 transform rotate-180 h-9">
              <YouTubeLikeIcon className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
