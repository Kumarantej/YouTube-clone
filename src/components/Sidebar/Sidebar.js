import React, { useState } from "react";
import HomeIcon from "../../assets/svg/HomeIcon";
import ExploreIcon from "../../assets/svg/ExploreIcon";
import SubScriptionIcon from "../../assets/svg/SubScriptionIcon";
const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const YouTubeTopSection = [
    {
      defaultIcon: <HomeIcon />,
      activeIcon: <HomeIcon iconColor="#fff" />,
      label: "Home",
    },
    {
      defaultIcon: <ExploreIcon />,
      activeIcon: <ExploreIcon iconColor="#fff" />,
      label: "Explore",
    },
    {
      defaultIcon: <SubScriptionIcon />,
      activeIcon: <SubScriptionIcon iconColor="#fff" />,
      label: "Subscriptions",
    },
  ];

  return (
    <div className="w-[228px]">
      <div className="p-3">
        {YouTubeTopSection.map((ytTop, index) => {
          const isActive = ytTop.label === active;
          const itemClass = `text-sm text-white flex gap-8 p-2.5 pl-3 rounded-[10px] cursor-pointer hover:bg-gray-700 ${
            isActive ? "bg-gray-700" : ""
          }`;
          return (
            <div
              onClick={() => setActive(ytTop.label)}
              key={index}
              className={itemClass}
            >
              {isActive ? ytTop.activeIcon : ytTop.defaultIcon}
              {ytTop.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
