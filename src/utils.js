export function formatToCapitalCase(word) {
  // 1. takes the first character of a word ("work" -> "w", "play" -> "p", "selfcare" -> "s")
  let firstLetter = word.charAt(0);
  // 2. makes this character uppercase (example: "w" -> "W")
  firstLetter = firstLetter.toUpperCase();
  // 3. puts capitalized character as a first character of the word ("work" -> "Work")
  // 4. returns the capitalized word
  return firstLetter + word.substr(1);
}
