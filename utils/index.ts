// Make function to remove last letter from string and make first letter uppercase (e.g. "challenges" -> "Challenge")

export const adjustType = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1, -1)
}
