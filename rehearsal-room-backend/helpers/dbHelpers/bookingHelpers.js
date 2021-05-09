module.exports = (db) => {
  const getBookings = () => {
    const query = {
      text: 'SELECT * FROM bookings',
    }
    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  }

  const getBookingsByUser = (userID) => {
    const queryString = `
      SELECT *
      FROM bookings
      WHERE user_id = $1
    `
    const queryParams = [userID]

    return db.query(queryString, queryParams)
      .then(result => result.rows)
      .catch(err => err);
  }

  const addBooking = (bookingData) => {
    // TODO: Test that addBooking actually works the way I think it should.
    return db.insert('bookings', bookingData)
      .then(result => result.rows)
      .catch(err => err);
  }

  return {
    getBookings,
    getBookingsByUser,
    addBooking
  };
}