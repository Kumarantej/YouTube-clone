import React from "react";
import RedLogo from "../../assets/svg/youTubeRedLogo.svg";
import Hamburger from "../../assets/svg/hamburger.svg";
import CreateGroup from "../../assets/svg/createGroup.svg";
import Notification from "../../assets/svg/notification.svg";
import Search from "../Search/Search";
import Virat from "../../assets/images/Virat_Kohli.jpg";
import AvatarImage from "../AvatarImage";

const Navbar = ({ setShowSidebar }) => {
  return (
    <div className=" bg-gray-900 w-full h-14 flex justify-between items-center px-6">
      <div className="w-1/6 flex gap-6 items-center">
        <div
          className="hover:bg-gray-600 w-10 rounded-full h-10 flex items-center justify-center cursor-pointer"
          onClick={() => {
            setShowSidebar();
          }}
        >
          <img src={Hamburger} alt="hamburgerIcon" />
        </div>
        <img src={RedLogo} alt="logo" />
      </div>
      <div className="flex w-1/2 justify-center">
        <Search />
      </div>
      <div className="flex justify-end gap-6 w-1/6">
        <img src={CreateGroup} alt="createGroup" className="cursor-pointer" />
        <img src={Notification} alt="logo" className="cursor-pointer" />
        <AvatarImage image={Virat} alt="avatar" height={6} width={6} isActive />
      </div>
    </div>
  );
};

export default Navbar;
