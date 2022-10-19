export function formatToCapitalCase(word) {
  /* Takes the first character of a word, makes it upper case, 
  puts capitalized character as a first character of the word, 
  and returns the upper case word */
  let firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + word.substr(1);
}

// This function calculates all hours for today
export function calculateForDailyView(activityRecords, date) {
  // Get the start and end of today's date
  const startDate = new Date(date.getTime()); // creating a clone of the supplied date
  const endDate = new Date(date.getTime());

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    // activityRecord.timestamp is a string, so transform it into a Date object
    const activityDate = new Date(activityRecord.timestamp);

    // Check whether the timestamp of activityRecord is sometime within today's date
    return activityDate > startDate && activityDate < endDate;
  });

  // Total hours entered for today
  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

/* This function separates the activity card data 
in their proper category and calculates previous hours 
from a previous date */
export function calculateActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  // Holds my activity card hours separated by category
  const hoursByCategory = []; // { "work": [...], "play": [...], "social": []}

  // For each category, run calculateForDailyView function
  for (const category of activityCategories) {
    // cycle 1: category = 'work'
    const activities = activityRecords.filter(
      (record) => record.activityType === category
    );
    const today = new Date();
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - 1);
    const yesterday = new Date(tempDate.toDateString());

    const todayHours = calculateForDailyView(activities, today);
    const previousHours = calculateForDailyView(activities, yesterday);

    /* Pushes an object with the activity type, current hours, and previous hours 
    into hoursByCategory array */
    hoursByCategory.push({
      activityType: category,
      currentHours: todayHours,
      previousHours,
    });
  }

  return hoursByCategory;
}

/* Weekly */
export function calculateForWeeklyView(activityRecords, date) {
  // // First day is the day of the month - the day of the week
  const first = date.getDate() - date.getDay();
  const last = first + 6; // last day is the first day + 6

  const firstDay = new Date(date.setDate(first));
  const lastDay = new Date(date.setDate(last));

  firstDay.setHours(0, 0, 0, 0);
  lastDay.setHours(23, 59, 59, 999); // End of week

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    // activityRecord.timestamp is a string, we transform it into a Date object
    const activityDate = new Date(activityRecord.timestamp);

    // check whether the timestamp of activityRecord is sometime within today's date
    return activityDate > firstDay && activityDate < lastDay;
  });

  // Total hours entered for this week
  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

// Sort Weekly data by category and calculate previous hours
export function calculateWeeklyActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  // Holds my activity card hours separated by category
  const hoursByCategory = []; // { "work": [...], "play": [...], "social": []}

  // For each category, run calculateForWeeklyView function
  for (const category of activityCategories) {
    // cycle 1: category = 'work'
    const activities = activityRecords.filter(
      (record) => record.activityType === category
    );
    const today = new Date();
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - 7);
    const lastWeek = new Date(tempDate.toDateString());

    const thisWeekHours = calculateForWeeklyView(activities, today);
    const previousWeekHours = calculateForWeeklyView(activities, lastWeek);
    hoursByCategory.push({
      activityType: category,
      currentHours: thisWeekHours,
      previousHours: previousWeekHours,
    });
  }

  return hoursByCategory;
}

/* Monthly */
export function calculateForMonthlyView(activityRecords, date) {
  // Get the first and last day of the current week
  const first = 1;
  // const last = new

  const firstDay = new Date(date.setDate(first));
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  firstDay.setHours(0, 0, 0, 0);
  lastDay.setHours(23, 59, 59, 999); // End of week

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    // activityRecord.timestamp is a string, we transform it into a Date object
    const activityDate = new Date(activityRecord.timestamp);

    // check whether the timestamp of activityRecord is sometime within today's date
    return activityDate > firstDay && activityDate < lastDay;
  });

  // Total hours entered for this week
  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

// Sort Monthly data by category and calculate previous hours
export function calculateMonthlyActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  // Holds my activity card hours separated by category
  const hoursByCategory = []; // { "work": [...], "play": [...], "social": []}

  // For each category, run calculateForWeeklyView function
  for (const category of activityCategories) {
    // cycle 1: category = 'work'
    const activities = activityRecords.filter(
      (record) => record.activityType === category
    );
    const today = new Date();
    const tempDate = new Date();
    tempDate.setMonth(tempDate.getMonth() - 1);
    const lastMonth = new Date(tempDate.toDateString());

    const thisMonthHours = calculateForMonthlyView(activities, today);
    const previousMonthHours = calculateForMonthlyView(activities, lastMonth);
    hoursByCategory.push({
      activityType: category,
      currentHours: thisMonthHours,
      previousHours: previousMonthHours,
    });
  }

  return hoursByCategory;
}
