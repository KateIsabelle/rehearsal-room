module.exports = (db) => {
  const userHelpers = require('./userHelpers')(db)
  const spaceHelpers = require('./spaceHelpers')(db)

  return {
    ...userHelpers,
    ...spaceHelpers
  };
};