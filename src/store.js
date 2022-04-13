import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./activitySlice";
import { saveState, loadState } from "./localStorage";
import throttle from "lodash.throttle";

const preloadedData = {
  activityRecords: [
    /*{
      activityType: {item.activityType}, // Get currentCategory
      hours: 0, // number less than 24,
      timestamp: toDateTimeString(), // toDateTimeString(),
    },*/
  ],

  // Same from timeSpentData object.
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
