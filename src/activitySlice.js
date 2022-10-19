import { createSlice } from "@reduxjs/toolkit";
import { activityStats } from "./mocks";

const date = new Date();

const newLoadedData = {
  activityRecords: [
    {
      activityType: activityStats.activityType, // Get currentCategory
      hours: 0, // number less than 24,
      timestamp: date.toTimeString(),
    },
  ],
};

/* Redux slice storing my reducer logic and actions for a single feature in the app */
export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activityRecords: [],
    activityStats: {},
  },

  /* Each reducer takes the state and action of the application 
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

      // Take activityType, timestamp, hours from action.payload, and put them into an object
      const { activityType, timestamp, hours } = action.payload;
      const newActivityRecord = {
        activityType,
        timestamp,
        hours,
      };
      // "push" the newActivityRecord object into state.activityRecords and save it
      state.activityRecords.push(newActivityRecord);
    },
  },
});

export const { populateWithMockData, saveActivityRecord } =
  activitySlice.actions;

export default activitySlice.reducer;
