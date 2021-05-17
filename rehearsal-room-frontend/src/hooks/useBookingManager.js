import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'

export default function useBookingManager(host, userId) {
  const [bookings, setBookings] = useState({
    host: [],
    artist: []
  })
  const [selectedBooking, setSelectedBooking] = useState(0)

  // Handlers for confirming/rejecting/cancelling bookings.
  // Put these on the buttons for individual bookings!
  const confirm = (id) => {
    axios.put(`/api/bookings/${id}`, {status: 'confirmed'})
      .then(refreshBookings)
      .catch(err => console.error(err))
  }
  const reject = (id) => {
    axios.put(`/api/bookings/${id}`, {status: 'rejected'})
    .then(refreshBookings)
    .catch(err => console.error(err))
  }
  const cancel = (id) => {
    axios.delete(`/api/bookings/${id}`)
    .then(refreshBookings)
    .catch(err => console.error(err))
  }

  // Handler for selecting bookings
  const select = (id) => {
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }

  // Refreshes the list of bookings.
  const refreshBookings = () => {
    // Get bookings for spaces this user owns if they are a host
    if (host) {
      axios.get(`/api/bookings/host/${userId}`)
      .then(res => setBookings(prev => ({
        ...prev,
        host: res.data
      })))
      .catch(err => console.error(err))
    }

    // Get booking requests submitted by this user
    axios.get(`/api/bookings/${userId}`)
    .then(res => setBookings(prev => ({
      ...prev,
      artist: res.data
    })))
    .catch(err => console.error(err))
  }

  const memoizedRefresh = useCallback(
    () => {
      console.log("in memo")
      refreshBookings();
    },
    []
  );

  useEffect(() => {
    // Get bookings for spaces this user owns if they are a host
    memoizedRefresh()
  }, [memoizedRefresh])

  return {
    bookings,
    selectedBooking,
    bookingHandlers: {
      confirm,
      reject,
      cancel,
      select
    },
    refreshBookings,
  }
}

