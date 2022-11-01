import { createSlice } from "@reduxjs/toolkit";
import { mockActivityRecords } from "./mocks";

/* Redux slice is a peice of a Redux store that contains reducer logic 
and actions for a single feature in the app */
/* Separates different functionalities for my Redux store */
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
      state.activityRecords = mockActivityRecords;
    },

    saveActivityRecord: (state, action) => {
      // action variable will contain payload
      // inside payload, we'll have the following 3 variables:
      // activityType, timestamp, hours.

      /* Extract activityType, timestamp, hours from action.payload, 
      and put them into an object as variables */
      const { activityType, timestamp, hours } = action.payload;

      const newActivityRecord = {
        activityType,
        timestamp,
        hours,
      };
      /* "push" the newActivityRecord object into the end of the 
      activityRecords state array for this Redux slice. */
      state.activityRecords.push(newActivityRecord);
    },
  },
});

export const { populateWithMockData, saveActivityRecord } =
  activitySlice.actions;

export default activitySlice.reducer;
