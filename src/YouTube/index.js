import React, { useState, useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContainer from "./MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { getYouTubeVideoAction } from "./actions/youTubeActions";

const YouTubeApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => {
    setShowSidebar(!showSidebar);
  };
  const dispatch = useDispatch();

  const {
    loading,
    videos: { items },
    channelDetails,
  } = useSelector((state) => state.youTubeState);

  useEffect(() => {
    dispatch(getYouTubeVideoAction);
  }, [dispatch]);
  return (
    <div className="bg-gray-900 h-screen overflow-hidden">
      <Navbar setShowSidebar={toggle} />
      <Sidebar showSidebar={showSidebar} />
      <MainContainer
        showSidebar={showSidebar}
        isLoading={loading}
        youTubeVideoList={items}
        channelDetails={channelDetails}
      />
    </div>
  );
};

export default YouTubeApp;
