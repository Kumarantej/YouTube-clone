// import axios from "axios";
// import {
//   getYouTubeVideos,
//   getYouTubeVideosSuccess,
//   getYouTubeVideosFail,
//   getYouTubeChannelsSuccess,
// } from "../Slices/youTubeSlice";

// const API_KEY = "AIzaSyCngUiHFC-khbq0g4hiNddBgsRibC96GPw";
// const API_URL = "https://www.googleapis.com/youtube/v3/videos";
// const CHANNEL_API_URL = "https://www.googleapis.com/youtube/v3/channels";

// export const getYouTubeVideoAction = async (dispatch) => {
//   try {
//     dispatch(getYouTubeVideos());

//     const response = await axios.get(API_URL, {
//       params: {
//         part: "snippet,contentDetails,statistics,topicDetails,status,recordingDetails,player",
//         maxResults: 2,
//         key: API_KEY,
//         chart: "mostPopular",
//         regionCode: "IN",
//         pageToken: "CCgQAA",
//       },
//     });

//     const channelIds = await response.data.items.map(
//       (item) => item.snippet.channelId
//     );

//     async function fetchChannelDetails(channelIds, dispatch) {
//       try {
//         const response = await axios.get(CHANNEL_API_URL, {
//           params: {
//             part: "snippet",
//             key: API_KEY,
//             id: channelIds.join(","), // Use join to concatenate multiple channel ids
//           },
//         });
//         dispatch(getYouTubeChannelsSuccess(response));
//       } catch (error) {
//         console.error("Error fetching channel details:", error.message);
//         // Optional: rethrow the error if necessary
//         throw error;
//       }
//     }
//     fetchChannelDetails();

//     dispatch(getYouTubeVideosSuccess(response));
//   } catch (error) {
//     dispatch(getYouTubeVideosFail(error));
//   }
// };

import axios from "axios";
import {
  getYouTubeVideos,
  getYouTubeVideosSuccess,
  getYouTubeVideosFail,
  getYouTubeChannelsSuccess,
} from "../Slices/youTubeSlice";

const API_KEY = "AIzaSyCngUiHFC-khbq0g4hiNddBgsRibC96GPw";
const API_URL = "https://www.googleapis.com/youtube/v3/videos";
const CHANNEL_API_URL = "https://www.googleapis.com/youtube/v3/channels";

export const getYouTubeVideoAction = async (dispatch) => {
  try {
    dispatch(getYouTubeVideos());

    const response = await axios.get(API_URL, {
      params: {
        part: "snippet,contentDetails,statistics,topicDetails,status,recordingDetails,player",
        maxResults: 100,
        key: API_KEY,
        chart: "mostPopular",
        regionCode: "IN",
        pageToken: "CCgQAA",
      },
    });

    const channelIds = response.data.items.map(
      (item) => item.snippet.channelId
    );

    // Changed the function to be outside the main action and accept channelIds and dispatch as parameters
    const fetchChannelDetails = async (channelIds, dispatch) => {
      try {
        const channelResponse = await axios.get(CHANNEL_API_URL, {
          params: {
            part: "snippet",
            key: API_KEY,
            id: channelIds.join(","),
          },
        });
        dispatch(getYouTubeChannelsSuccess(channelResponse));
      } catch (error) {
        console.error("Error fetching channel details:", error.message);
        throw error;
      }
    };

    await fetchChannelDetails(channelIds, dispatch); // Wait for channel details before dispatching success

    dispatch(getYouTubeVideosSuccess(response));
  } catch (error) {
    dispatch(getYouTubeVideosFail(error));
  }
};
