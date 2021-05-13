import axios from 'axios'
import { useState } from 'react'

export default function useBookingManager(host, userId) {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(0)

  const confirm = (id) => {
    console.log("confirmed!", id)
  }
  const reject = (id) => {
    console.log("rejected!", id)
  }
  const cancel = (id) => {
    console.log("cancelled!", id)
  }
  const select = (id) => {
    console.log("handleClick fired")
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }

  const refreshBookings = () => {
    axios.get(`/api/bookings/${host ? "host/" : ""}${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }

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

