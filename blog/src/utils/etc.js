/**
  * Compares post dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const comparePostsByDate = (a, b) => b.publish_date - a.publish_date;

// NOTE this next one is unnecessary, just need to make comments and posts share
// the "date" key on the API side

/**
  * Compares comment dates (newest to oldest)
  * @param {Date} a Date A
  * @param {Date} b Date B
  * @returns {Number} Number pluggable into Array.sort
  */
export const compareCommentsByDate = (a, b) => b.date - a.date;

/**
 * Constructs a tree-like structure of comment threads
 * Adapted from https://stackoverflow.com/a/57313017 by Enkode, Amadan, Rob @ SO
 * (CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/)
 * @param {Array} rawComments Array of comments as retrieved from the API
 */
export const buildCommentTree = rawComments => {
  const tree = [];
  const lookup = {};

  // Populate lookup table + children key
  rawComments.forEach(o => {
    lookup[o.id] = o;
    lookup[o.id].children = [];
  });

  // Assemble tree
  rawComments.forEach(o => {
    if (o.parent_id === null) return tree.push(o);
    lookup[o.parent_id].children.push(o);
  });

  return tree;
};
