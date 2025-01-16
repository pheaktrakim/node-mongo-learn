const blacklist = new Set();

/**
 * Adds a token to the blacklist.
 * @param {string} token - The JWT token to blacklist.
 */
exports.add = (token) => {
  blacklist.add(token);
};

/**
 * Checks if a token is blacklisted.
 * @param {string} token - The JWT token to check.
 * @returns {boolean} - True if the token is blacklisted, false otherwise.
 */
exports.has = (token) => {
  return blacklist.has(token);
};
