import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import youTubeReducer from "./YouTube/Slices/youTubeSlice"; // Import your user reducer
// Import other reducers as needed

const reducers = combineReducers({
  youTubeState: youTubeReducer,
  // Add other reducers here
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
