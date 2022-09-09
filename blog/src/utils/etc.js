/**
  * Compares post dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const comparePostsByDate = (a, b) => {
  if (a.publish_date < b.publish_date) return 1;
  if (a.publish_date > b.publish_date) return -1;
  return 0;
}

// NOTE this next one is unnecessary, just need to make comments and posts share
// the "date" key

/**
  * Compares comment dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
 export const compareCommentsByDate = (a, b) => {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
}
