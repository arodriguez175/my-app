export function formatToCapitalCase(word) {
  // 1. takes the first character of a word ("work" -> "w", "play" -> "p", "selfcare" -> "s")
  let firstLetter = word.charAt(0);
  // 2. makes this character uppercase (example: "w" -> "W")
  firstLetter = firstLetter.toUpperCase();
  // 3. puts capitalized character as a first character of the word ("work" -> "Work")
  // 4. returns the capitalized word
  return firstLetter + word.substr(1);
}

export function calculateForDailyView(activityRecords) {
  /* 
  1. find out what is the date today
  2. take activityRecords, and find the ones where "timestamp" contains today's date
  3. for records from today, sum up "hours". This will be our total for today
  */

  // Get the start and end of today's date
  const startDate = new Date(); // April 27, 2022 8:09 PM
  const endDate = new Date();
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
