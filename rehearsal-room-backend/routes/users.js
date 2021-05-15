const express = require('express');
const db = require('../db');
const router = express.Router();
const {
    getPostsByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser, 
    updateUser,
    getBookingsByUser, 
    getHostBookings
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
      getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
    });

    router.post('/login/:email', (req, res) => {

        getUserByEmail(req.params.email)
        .then(user => {
            if(user) {
            Promise.all([
                getBookingsByUser(user.id)
            ])
            .then(([bookings, hostBookings]) => {
                res.json({user: user, bookings: bookings, hostBookings: hostBookings})
            })
            } else {
                res.json({
                    msg: 'Can\'t find email blahblahblah'
                })
            }
        })
        .catch(err => res.json({
            error: err.message
        }))
    });


    router.post('/', (req, res) => {

        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    router.put('/:user_id', (req, res) => {
      const { newData } = req.body
      newData[id] = req.params.user_id
      updateUser(newData)
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json({ error: err.message }));
    })

    return router;
};

// router.post('/login/:email', (req, res) => {

//     getUserByEmail(req.params.email)
//     .then(user => {
//         if(user) {
//         getBookingsByUser(user.id)
//         .then(bookings => res.json({user: user, bookings: bookings})) 
//         } else {
//             res.json({
//                 msg: 'Can\'t find email blahblahblah'
//             })
//         }
//     })
//     .catch(err => res.json({
//         error: err.message
//     }))
// });