import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  channelDetails: [],
};

const YouTubeSlice = createSlice({
  name: "getYouTubeVideos",
  initialState,
  reducers: {
    getYouTubeVideos(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getYouTubeVideosSuccess(state, action) {
      return {
        ...state,
        loading: false,
        videos: action.payload.data,
      };
    },
    getYouTubeVideosFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    getYouTubeChannelsSuccess(state, action) {
      return {
        ...state,
        channelDetails: action.payload.data,
      };
    },
  },
});

const { actions, reducer } = YouTubeSlice;

export const {
  getYouTubeVideos,
  getYouTubeVideosSuccess,
  getYouTubeVideosFail,
  getYouTubeChannelsSuccess,
} = actions;

export default reducer;
