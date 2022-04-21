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

  // Get todays date
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  // date from timestamp
  date.toTimeString();

  // Total hours entered for today

  return 0; // TODO: replace with calculated total number of hours for today
}
