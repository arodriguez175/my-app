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

/* The saveState function is called inside the store.subscribe listener so it's called 
everytime the store state changes. Throttle is being used so the saveState function
does not get called more times than 1000 milliseconds, or 1 second. */
store.subscribe(
  throttle(() => {
    saveState(store.getState()); // passing current state tree to saveState function
  }, 1000)
);

export default store;
