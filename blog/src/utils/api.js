const API_ADDRESS = "http://localhost:9000";

/**
  * Get all posts
  * @returns {Array} All posts
  */
export const getPosts = async () =>
  await fetch(`${API_ADDRESS}/posts`)
    .then(data => data.json());

/**
* Get post by ID
* @param {Number} id Post ID
* @returns {{}} Post data
*/
export const getPost = async id =>
  await fetch(`${API_ADDRESS}/posts/${id}`)
    .then(data => data.json());

/**
* Get comments on post
* @param {Number} id Post ID
* @returns {Array} Comments for the specific post
*/
export const getCommentsFromPost = async id =>
  await fetch(`${API_ADDRESS}/posts/${id}/comments`)
    .then(data => data.json());

/**
* Get specific comment
* @param {Number} id Comment ID
* @returns {{}} Comment
*/
export const getComment = async id =>
  await fetch(`${API_ADDRESS}/comments/${id}`)
    .then(data => data.json());

/**
* Post comment to a specific post
* @param {Number} id Post ID
* @param {{}} body JSON body
*/
export const postComment = async (id, body) =>
  await fetch(`${API_ADDRESS}/posts/${id}/comments`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  })
    .then(data => data.json());

/**
* Update a comment
* @param {Number} id Comment ID
* @param {{}} body JSON body
*/
export const updateComment = async (id, body) =>
  await fetch(`${API_ADDRESS}/comments/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  });
