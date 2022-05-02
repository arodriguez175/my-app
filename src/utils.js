export function formatToCapitalCase(word) {
  // 1. takes the first character of a word ("work" -> "w", "play" -> "p", "selfcare" -> "s")
  let firstLetter = word.charAt(0);
  // 2. makes this character uppercase (example: "w" -> "W")
  firstLetter = firstLetter.toUpperCase();
  // 3. puts capitalized character as a first character of the word ("work" -> "Work")
  // 4. returns the capitalized word
  return firstLetter + word.substr(1);
}

// This function calculates all hours for today
export function calculateForDailyView(activityRecords, date) {
  /* 
  1. find out what is the date today
  2. take activityRecords, and find the ones where "timestamp" contains today's date
  3. for records from today, sum up "hours". This will be our total for today
  */

  // Get the start and end of today's date
  const startDate = new Date(date.getTime()); // creating a clone of the supplied date
  const endDate = new Date(date.getTime());

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    // activityRecord.timestamp is a string, we transform it into a Date object
    const activityDate = new Date(activityRecord.timestamp);

    // check whether the timestamp of activityRecord is sometime within today's date
    return activityDate > startDate && activityDate < endDate;
  });

  // debugger;

  // Total hours entered for today
  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours; // TODO: replace with calculated total number of hours for today
}

/* This function separates the activity card data 
in their proper category and calculates previous hours 
from a previous date */
export function calculateActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  /*
    1. Group activityRecords by category:
      - for each activityCategory, find activityRecords that have this category
      and save them
    2. For each category, run calculateForDailyView
    3. Save the results in the following format:
    [
      { category: 'work', currentHours: 5 },
      ...
    ]
  */
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
  // Get the first and last day of the current week
  const first = date.getDate() - date.getDay();
  const last = first + 6;

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
