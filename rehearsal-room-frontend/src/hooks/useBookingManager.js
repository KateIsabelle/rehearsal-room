import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useBookingManager(host, userId) {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(0)


  // Handlers for confirming/rejecting/cancelling bookings
  const confirm = (id) => {
    console.log("confirmed!", id)
    axios.put(`/api/bookings/${id}`, {status: 'confirmed'})
    .catch(err => console.log(err))
  }
  const reject = (id) => {
    console.log("rejected!", id)
    axios.put(`/api/bookings/${id}`, {status: 'rejected'})
    .catch(err => console.log(err))
  }
  const cancel = (id) => {
    console.log("cancelled!", id)
    axios.delete(`/api/bookings/${id}`)
      .then(res => refreshBookings())
      .catch(err => console.log(err))
  }

  // Handler for selecting bookings
  const select = (id) => {
    console.log("handleClick fired")
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }

  const refreshBookings = () => {
    console.log("IN REFRESH")
    axios.get(`/api/bookings/${host ? "host/" : ""}${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get(`/api/bookings/${host ? "host/" : ""}${userId}`)
    .then(res => setBookings(res.data))
    .catch(err => console.log(err))
  }, [host, userId])

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

