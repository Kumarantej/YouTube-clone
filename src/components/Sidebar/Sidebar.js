import React, { useState } from "react";
import YouTubeHomeIcon from "../../assets/svg/YouTubeHomeIcon";
import YouTubeShortIcon from "../../assets/svg/YouTubeShortIcon";
import YouTubeSubScriptionIcon from "../../assets/svg/YouTubeSubScriptionIcon";
import YouTubeLibraryIcon from "../../assets/svg/YouTubeLibraryIcon";
import YouTubeHistoryIcon from "../../assets/svg/YouTubeHistoryIcon";
import YouTubeWatchLaterIcon from "../../assets/svg/YouTubeWatchLaterIcon";
import YouTubeLikeIcon from "../../assets/svg/YouTubeLikeIcon";
import YouTubeTrendingIcon from "../../assets/svg/YouTubeTrendingIcon";
import YouTubeShoppingIcon from "../../assets/svg/YouTubeShoppingIcon";
import YouTubeMusicIcon from "../../assets/svg/YouTubeMusicIcon";
import YouTubeMovieIcon from "../../assets/svg/YouTubeMovieIcon";
import YouTubeLiveIcon from "../../assets/svg/YouTubeLiveIcon";
import YouTubeGameIcon from "../../assets/svg/YouTubeGameIcon";
import YouTubeNewsIcon from "../../assets/svg/YouTubeNewsIcon";
import YouTubeSportsIcon from "../../assets/svg/YouTubeSportsIcon";
import YouTubeLearningIcon from "../../assets/svg/YouTubeLearningIcon";
import YouTubeFashionIcon from "../../assets/svg/YouTubeFashionIcon";
import YouTubePremiumIcon from "../../assets/svg/YouTubePremiumIcon";
import YouTubeMusicRedIcon from "../../assets/svg/YouTubeMusicRedIcon";
import YouTubeKidsIcon from "../../assets/svg/YouTubeKidsIcon";
import YouTubeSettingIcon from "../../assets/svg/YouTubeSettingIcon";
import YouTubeReportHistoryIcon from "../../assets/svg/YouTubeReportHistoryIcon";
import YouTubeHelpIcon from "../../assets/svg/YouTubeHelpIcon";
import YouTubeSendFeedBackIcon from "../../assets/svg/YouTubeSendFeedBackIcon";
import RedLogo from "../../assets/svg/youTubeRedLogo.svg";
import Hamburger from "../../assets/svg/hamburger.svg";

const Sidebar = ({ showSidebar, toggle }) => {
  const [active, setActive] = useState("Home");

  const youTubeTopSection = [
    {
      defaultIcon: <YouTubeHomeIcon />,
      activeIcon: <YouTubeHomeIcon isActive />,
      label: "Home",
    },
    {
      defaultIcon: <YouTubeShortIcon />,
      activeIcon: <YouTubeShortIcon isActive />,
      label: "Shorts",
    },
    {
      defaultIcon: <YouTubeSubScriptionIcon />,
      activeIcon: <YouTubeSubScriptionIcon isActive />,
      label: "Subscriptions",
    },
  ];

  const youTubeTopSectionSecond = [
    {
      defaultIcon: <YouTubeLibraryIcon />,
      activeIcon: <YouTubeLibraryIcon isActive />,
      label: "Library",
    },
    {
      defaultIcon: <YouTubeHistoryIcon />,
      activeIcon: <YouTubeHistoryIcon isActive />,
      label: "History",
    },
    {
      defaultIcon: <YouTubeWatchLaterIcon />,
      activeIcon: <YouTubeWatchLaterIcon isActive />,
      label: "Watch Later",
    },
    {
      defaultIcon: <YouTubeLikeIcon />,
      activeIcon: <YouTubeLikeIcon isActive />,
      label: "Liked Videos",
    },
  ];

  const youTubeExploreSection = [
    {
      defaultIcon: <YouTubeTrendingIcon />,
      activeIcon: <YouTubeTrendingIcon isActive />,
      label: "Trending",
    },
    {
      defaultIcon: <YouTubeShoppingIcon />,
      activeIcon: <YouTubeShoppingIcon isActive />,
      label: "Shopping",
    },
    {
      defaultIcon: <YouTubeMusicIcon />,
      activeIcon: <YouTubeMusicIcon isActive />,
      label: "Music",
    },
    {
      defaultIcon: <YouTubeMovieIcon />,
      activeIcon: <YouTubeMovieIcon isActive />,
      label: "Movies",
    },
    {
      defaultIcon: <YouTubeLiveIcon />,
      activeIcon: <YouTubeLiveIcon isActive />,
      label: "Live",
    },
    {
      defaultIcon: <YouTubeGameIcon />,
      activeIcon: <YouTubeGameIcon isActive />,
      label: "Gaming",
    },
    {
      defaultIcon: <YouTubeNewsIcon />,
      activeIcon: <YouTubeNewsIcon isActive />,
      label: "News",
    },
    {
      defaultIcon: <YouTubeSportsIcon />,
      activeIcon: <YouTubeSportsIcon isActive />,
      label: "Sports",
    },
    {
      defaultIcon: <YouTubeLearningIcon />,
      activeIcon: <YouTubeLearningIcon isActive />,
      label: "Learning",
    },
    {
      defaultIcon: <YouTubeFashionIcon />,
      activeIcon: <YouTubeFashionIcon isActive />,
      label: "Fashion & Beauty",
    },
  ];

  const moreFromYouTube = [
    {
      defaultIcon: <YouTubePremiumIcon />,
      label: "YouTube Premium",
    },
    {
      defaultIcon: <YouTubeMusicRedIcon />,
      label: "YouTube Music",
    },
    {
      defaultIcon: <YouTubeKidsIcon />,
      label: "YouTube Kids",
    },
  ];

  const YouTubeBottomSection = [
    {
      defaultIcon: <YouTubeSettingIcon />,
      activeIcon: <YouTubeSettingIcon isActive />,
      label: "Setting",
    },
    {
      defaultIcon: <YouTubeReportHistoryIcon />,
      activeIcon: <YouTubeReportHistoryIcon isActive />,
      label: "Report History",
    },
    {
      defaultIcon: <YouTubeHelpIcon />,
      activeIcon: <YouTubeHelpIcon isActive />,
      label: "Help",
    },
    {
      defaultIcon: <YouTubeSendFeedBackIcon />,
      activeIcon: <YouTubeSendFeedBackIcon isActive />,
      label: "Send feedback",
    },
  ];

  const footerSectionTop = [
    {
      label: "About",
      link: "#",
    },
    {
      label: "Press",
      link: "#",
    },
    {
      label: "Copyright",
      link: "#",
    },
    {
      label: "Contact us",
      link: "#",
    },
    {
      label: "Creators",
      link: "#",
    },
    {
      label: "Advertise",
      link: "#",
    },
    {
      label: "Developers",
      link: "#",
    },
  ];

  const footerSectionBottom = [
    {
      label: "Terms",
      link: "#",
    },
    {
      label: "Privacy Policy & Safety",
      link: "#",
    },
    {
      label: "How YouTube works",
      link: "#",
    },
    {
      label: "Test new features",
      link: "#",
    },
  ];

  const miniSidebarIcons = [
    {
      defaultIcon: <YouTubeHomeIcon />,
      activeIcon: <YouTubeHomeIcon isActive />,
      label: "Home",
    },
    {
      defaultIcon: <YouTubeShortIcon />,
      activeIcon: <YouTubeShortIcon isActive />,
      label: "Shorts",
    },
    {
      defaultIcon: <YouTubeSubScriptionIcon />,
      activeIcon: <YouTubeSubScriptionIcon isActive />,
      label: "Subscriptions",
    },
    {
      defaultIcon: <YouTubeLibraryIcon />,
      activeIcon: <YouTubeLibraryIcon isActive />,
      label: "Library",
    },
  ];

  function youTubeIconSidebarTop(youTubeSidebarContent, label) {
    return (
      <>
        <div className="m-2">
          {label && (
            <h6 className="text-md text-white pl-3 p-[4px]"> {label}</h6>
          )}

          {youTubeSidebarContent.map((ytTop, index) => {
            const isActive = ytTop.label === active;
            const itemClass = `text-sm leading-[174%] text-white flex gap-8 p-2 pl-3 rounded-[10px] cursor-pointer hover:bg-gray-700 ${
              isActive ? " bg-gray-600 hover:bg-gray-700" : ""
            }`;
            return (
              <div
                onClick={() => setActive(ytTop.label)}
                key={index}
                className={itemClass}
              >
                {isActive ? ytTop.activeIcon : ytTop.defaultIcon}
                <span> {ytTop.label}</span>
              </div>
            );
          })}
        </div>
        <div className="border-b border-gray-700 border-solid"></div>
      </>
    );
  }

  function youTubeIconSidebarBottom(footerSectionContent) {
    return (
      <ul className="px-3 flex flex-wrap text-[13px] pt-[12px]">
        {footerSectionContent.map((footer, index) => {
          return (
            <>
              <a href={footer.link} key={index}>
                <li className="mr-2">{footer.label}</li>
              </a>
            </>
          );
        })}
      </ul>
    );
  }

  function miniSidebar(miniSidebarIcons) {
    return (
      <ul className="px-1 flex flex-wrap text-[13px] pt-[12px]">
        {miniSidebarIcons.map((ytTop, index) => {
          const isActive = ytTop.label === active;
          const itemClass = `text-sm w-[74px] text-white flex flex-col column py-2 items-center rounded-[10px] cursor-pointer hover:bg-gray-600 ${
            isActive ? " bg-gray-600 hover:bg-gray-500" : ""
          }`;
          return (
            <div
              onClick={() => setActive(ytTop.label)}
              key={index}
              className={itemClass}
            >
              {isActive ? ytTop.activeIcon : ytTop.defaultIcon}

              <span className="text-[10px]"> {ytTop.label}</span>
            </div>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      {showSidebar ? (
        <div className="w-[72px] bg-gray-900 h-[94vh] custom-scrollbar hover:overflow-y-auto fixed">
          {miniSidebar(miniSidebarIcons)}
        </div>
      ) : (
        <>
          <div className="w-60 bg-gray-900 h-[94vh] custom-scrollbar hover:overflow-y-auto fixed">
            {toggle && (
              <div className="w-full flex gap-6 items-center my-2 pl-2">
                <div
                  className="hover:bg-gray-600 rounded-full h-10  w-10 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    toggle();
                  }}
                >
                  <img src={Hamburger} alt="hamburgerIcon" />
                </div>
                <img src={RedLogo} alt="logo" />
              </div>
            )}

            {youTubeIconSidebarTop(youTubeTopSection)}
            {youTubeIconSidebarTop(youTubeTopSectionSecond)}
            {youTubeIconSidebarTop(youTubeExploreSection, "Explore")}
            {youTubeIconSidebarTop(moreFromYouTube, "More from YouTube")}
            {youTubeIconSidebarTop(YouTubeBottomSection)}
            <div className="p-2 text-gray-300">
              {youTubeIconSidebarBottom(footerSectionTop)}
              {youTubeIconSidebarBottom(footerSectionBottom)}
            </div>
            <div className="text-xs mx-6 my-4 text-gray-300">
              © 2023 Google LLC
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
