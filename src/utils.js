export function formatToCapitalCase(word) {
  // 1. take the first character of a word ("work" -> "w", "play" -> "p", "selfcare" -> "s")
  let firstLetter = word.charAt(0);
  // 2. make this character uppercase (example: "w" -> "W")
  firstLetter = firstLetter.toUpperCase();
  // 3. put your capitalized character as a first character of your word ("work" -> "Work")
  // 4. return the capitalized word
  return firstLetter + word.substr(1);
}
