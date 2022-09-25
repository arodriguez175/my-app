import { createSlice } from "@reduxjs/toolkit";
import { activityStats } from "./mocks";

const date = new Date();

const newLoadedData = {
  activityRecords: [
    {
      activityType: activityStats.activityType,
      hours: 0,
      timestamp: date.toTimeString(),
    },
  ],
};

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activityRecords: [],
    activityStats: {},
  },

  reducers: {
    populateWithMockData: (state, action) => {
      state.activityStats = activityStats;
    },
    newLoadedData: (state, action) => {
      state.activityRecords = newLoadedData;
    },
    saveActivityRecord: (state, action) => {
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
