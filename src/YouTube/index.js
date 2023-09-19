import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContainer from "./MainContainer";
const YouTubeApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="bg-gray-900 h-screen overflow-hidden">
      <Navbar setShowSidebar={toggle} />
      <Sidebar showSidebar={showSidebar} />
      <MainContainer showSidebar={showSidebar} />
    </div>
  );
};
export default YouTubeApp;
