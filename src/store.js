import { configureStore } from "@reduxjs/toolkit";
import activityReducer from './activitySlice';

const preloadedData = {
  activityRecords: [
    /*{
      activityType: {item.activityType}, // Get currentCategory
      hours: 0, // number less than 24,
      timestamp: toDateTimeString(), // toDateTimeString(),
    },*/
  ],

  // Same from timeSpentData object.
  activityStats: {
    daily: [
      {
        activityType: "work",
        currentHours: 5,
        previousHours: 7,
      },
      {
        activityType: "play",
        currentHours: 1,
        previousHours: 2,
      },
      {
        activityType: "study",
        currentHours: 0,
        previousHours: 1,
      },
      {
        activityType: "exercise",
        currentHours: 1,
        previousHours: 1,
      },
      {
        activityType: "social",
        currentHours: 1,
        previousHours: 3,
      },
      {
        activityType: "selfcare",
        currentHours: 0,
        previousHours: 1,
      },
    ],
    weekly: [
      {
        activityType: "work",
        currentHours: 32,
        previousHours: 36,
      },
      {
        activityType: "play",
        currentHours: 10,
        previousHours: 8,
      },
      {
        activityType: "study",
        currentHours: 4,
        previousHours: 7,
      },
      {
        activityType: "exercise",
        currentHours: 4,
        previousHours: 5,
      },
      {
        activityType: "social",
        currentHours: 5,
        previousHours: 10,
      },
      {
        activityType: "selfcare",
        currentHours: 2,
        previousHours: 2,
      },
    ],
    monthly: [
      {
        activityType: "work",
        currentHours: 103,
        previousHours: 128,
      },
      {
        activityType: "play",
        currentHours: 23,
        previousHours: 29,
      },
      {
        activityType: "study",
        currentHours: 13,
        previousHours: 19,
      },
      {
        activityType: "exercise",
        currentHours: 11,
        previousHours: 18,
      },
      {
        activityType: "social",
        currentHours: 21,
        previousHours: 23,
      },
      {
        activityType: "selfcare",
        currentHours: 7,
        previousHours: 11,
      },
    ],
  },
};

console.log('preloadedData', preloadedData);

const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
  preloadedState: {
    activity: preloadedData,
  }
});

export default store;
