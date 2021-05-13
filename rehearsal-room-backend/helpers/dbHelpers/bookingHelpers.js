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

  const getHostBookings = (userId) => {
    const queryString = `
    SELECT
      bookings.*,
      users.id AS requester_id,
      CONCAT(users.first_name, ' ', users.last_name) AS requester_name
      spaces.title AS space_name,
    FROM bookings
    JOIN users ON bookings.user_id = users.id
    JOIN spaces ON bookings.space_id = spaces.id
    WHERE bookings.space_id = ANY
    ( SELECT id FROM spaces
      WHERE user_id = $1 )
    `
    const queryParams = [userId]

    return db.query(queryString, queryParams)
    .then(result => result.rows)
    // .catch(err => err)
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
    getHostBookings,
    addBooking
  };
}