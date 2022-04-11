import { createSlice } from "@reduxjs/toolkit";

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
  },
});


// export const {  } = activitySlice.actions;

export default activitySlice.reducer;
