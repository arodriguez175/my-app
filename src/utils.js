export function formatToCapitalCase(word) {
  let firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + word.substr(1);
}

export function calculateForDailyView(activityRecords, date) {
  const startDate = new Date(date.getTime());
  const endDate = new Date(date.getTime());

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    const activityDate = new Date(activityRecord.timestamp);

    return activityDate > startDate && activityDate < endDate;
  });

  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

export function calculateActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  const hoursByCategory = [];

  for (const category of activityCategories) {
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

export function calculateForWeeklyView(activityRecords, date) {
  const first = date.getDate() - date.getDay();
  const last = first + 6;

  const firstDay = new Date(date.setDate(first));
  const lastDay = new Date(date.setDate(last));

  firstDay.setHours(0, 0, 0, 0);
  lastDay.setHours(23, 59, 59, 999);

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    const activityDate = new Date(activityRecord.timestamp);

    return activityDate > firstDay && activityDate < lastDay;
  });

  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

export function calculateWeeklyActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  const hoursByCategory = [];
  for (const category of activityCategories) {
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

export function calculateForMonthlyView(activityRecords, date) {
  const first = 1;

  const firstDay = new Date(date.setDate(first));
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  firstDay.setHours(0, 0, 0, 0);
  lastDay.setHours(23, 59, 59, 999);

  const filteredActivityRecords = activityRecords.filter((activityRecord) => {
    const activityDate = new Date(activityRecord.timestamp);

    return activityDate > firstDay && activityDate < lastDay;
  });

  let totalHours = 0;
  for (const record of filteredActivityRecords) {
    totalHours = record.hours + totalHours;
  }
  return totalHours;
}

export function calculateMonthlyActivityStatsByCategory(
  activityRecords,
  activityCategories
) {
  const hoursByCategory = [];

  for (const category of activityCategories) {
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
