import { useState } from 'react'

// Custom components
import BookingListItem from './BookingListItem'

export default function BookingList(props) {
  const { bookings, bookingType, userType, host } = props;
  const [selectedBooking, setSelectedBooking] = useState(0)

  const handleClick = (id) => {
    console.log("handleClick fired")
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType || bookingType === "all")
    .map(booking => (
      <BookingListItem
        key={booking.id}
        host={host}
        userType={userType}
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