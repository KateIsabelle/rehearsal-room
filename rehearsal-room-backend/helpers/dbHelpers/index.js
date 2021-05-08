module.exports = (db) => {
  const userHelpers = require('./userHelpers')(db)

  return {
    ...userHelpers
  };
};