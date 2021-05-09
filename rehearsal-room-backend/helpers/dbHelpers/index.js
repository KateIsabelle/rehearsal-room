module.exports = (db) => {
  const userHelpers = require('./userHelpers')(db)
  const spaceHelpers = require('./spaceHelpers')(db)
  const bookingHelpers = require('./bookingHelpers')(db)

  return {
    ...userHelpers,
    ...spaceHelpers,
    ...bookingHelpers
  };
};