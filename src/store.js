import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./activitySlice";
import { saveState, loadState } from "./localStorage";
import throttle from "lodash.throttle";

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
