const express = require('express');
const router = express.Router();

module.exports = ({
  getBookings,
  getBookingsByUser,
  getHostBookings,
  addBooking
}) => {
  // GET bookings
  router.get('/', (req, res) => {
    getBookings()
      .then(bookings => res.json(bookings))
      .catch(err => res.json({error: err.message}));
  });

  // GET bookings for a specific user
  router.get('/:user_id', (req, res) => {
    const user_id = req.params.user_id
    getBookingsByUser(user_id)
      .then(bookings => res.json(bookings))
      .catch(err => res.json({error: err.message}));
  });

  // GET bookings for spaces owned by a specific host
  router.get('/host/:host_id', (req, res) => {
    const host_id = req.params.host_id
    getHostBookings(host_id)
      .then(bookings => res.json(bookings))
      .catch(err => res.json({error: err.message}))
  })

  // POST a new booking in the db
  router.post('/', (req, res) => {
    const { bookingData } = req.body
    addBooking(bookingData)
      .then(booking => res.json(booking))
      .catch(err => res.json({error: err.message}));
  })

  return router;
}