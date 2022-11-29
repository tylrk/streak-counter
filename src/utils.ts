export function formattedDate(date: Date): string {
  // returns date as 11/27/2022
  // other times it returns 11/27/2022, 12:00:00 AM
  // which is why we call the .split at the end
  return date.toLocaleDateString("en-US");
}
