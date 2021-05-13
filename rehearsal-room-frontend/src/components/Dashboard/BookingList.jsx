import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom components
import BookingListItem from './BookingListItem'

export default function BookingList(props) {
  const { bookingType, userId, host } = props;
  const [selectedBooking, setSelectedBooking] = useState(0)

  const handleClick = (id) => {
    console.log("handleClick fired")
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }


  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get(`/api/bookings/${host ? "host/" : ""}${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }, [userId, host])

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType || bookingType === "all")
    .map(booking => (
      <BookingListItem
        key={booking.id}
        host={host}
        handleClick={handleClick}
        selected={selectedBooking === booking.id}
        {...booking} />
    ))

  return (
    <div class="booking-list">
      <h2>{props.title}</h2>
      {bookingList.length > 0 ? bookingList : <strong>{props.emptyMessage}</strong>}
    </div>
  )
}