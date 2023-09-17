import React from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContainer from "./MainContainer";
const YouTubeApp = () => {
  return (
    <div className="bg-gray-800 h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <MainContainer />
    </div>
  );
};
export default YouTubeApp;
