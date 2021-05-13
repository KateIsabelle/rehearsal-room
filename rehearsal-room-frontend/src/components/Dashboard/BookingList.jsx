import { useState } from 'react'

// Custom components
import BookingListItem from './BookingListItem'

export default function BookingList(props) {
  const { bookings, bookingType } = props;
  const [selectedBooking, setSelectedBooking] = useState(0)

  const handleClick = (id) => {
    console.log("handleClick fired")
    id !== selectedBooking ? setSelectedBooking(id) : setSelectedBooking(0)
  }

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType)
    .map(booking => (
      <BookingListItem
        key={booking.id}
        handleClick={handleClick}
        selected={selectedBooking}
        {...booking} />
    ))
  return (
    <div>
      {bookingList}
    </div>
  )
}