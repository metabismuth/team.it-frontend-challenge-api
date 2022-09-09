/**
  * Compares post dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const compareByDate = (a, b) => {
  if (a.publish_date < b.publish_date) return 1;
  if (a.publish_date > b.publish_date) return -1;
  return 0;
}