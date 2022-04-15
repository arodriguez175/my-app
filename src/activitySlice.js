import { createSlice } from "@reduxjs/toolkit";
import { activityStats } from "./mocks";

const newLoadedData = {
  activityRecords: [
    /*{
      activityType: {item.activityType}, // Get currentCategory
      hours: 0, // number less than 24,
      timestamp: toDateTimeString(), // toDateTimeString(),
    },*/
  ],
};

/* A "slice" is a collection of Redux reducer logic and actions
  for a single feature in the app */
export const activitySlice = createSlice({
  // The beginning state of the shortener slice
  name: "activity",
  initialState: {
    activityRecords: [],
    activityStats: {},
  },

  /* A reducer takes the state and action of the application 
  and returns the new state. */
  reducers: {
    populateWithMockData: (state, action) => {
      state.activityStats = activityStats;
    },
    newLoadedData: (state, action) => {
      state.activityRecords = newLoadedData;
    },
  },
});

export const { populateWithMockData } = activitySlice.actions;

export default activitySlice.reducer;
