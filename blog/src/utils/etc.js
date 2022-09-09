/**
  * Compares post dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const comparePostsByDate = (a, b) =>
  b.publish_date - a.publish_date;

// NOTE this next one is unnecessary, just need to make comments and posts share
// the "date" key

/**
  * Compares comment dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const compareCommentsByDate = (a, b) =>
  b.date - a.date;

