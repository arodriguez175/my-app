import { createSlice } from "@reduxjs/toolkit";
import { activityStats } from "./mocks";

const date = new Date();

const newLoadedData = {
  activityRecords: [
    {
      activityType: activityStats.activityType, // Get currentCategory
      hours: 0, // number less than 24,
      timestamp: date.toTimeString(), // toDateTimeString(),
    },
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
    saveActivityRecord: (state, action) => {
      // action variable will contain payload
      // inside payload, we'll have the following 3 variables:
      // activityType, timestamp, hours.

      /* What needs to be done:
      1. put activityType, timestamp, hours into one object like so:
      const newActivityRecord = { activityType, timestamp, hours }
      2. "push" the newActivityRecord object into state.activityRecords and save it
      */
      const { activityType, timestamp, hours } = action.payload;
      const newActivityRecord = {
        activityType,
        timestamp,
        hours,
      };
      state.activityRecords.push(newActivityRecord);
    },
  },
});

export const { populateWithMockData, saveActivityRecord } =
  activitySlice.actions;

export default activitySlice.reducer;
