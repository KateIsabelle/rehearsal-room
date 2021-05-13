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
    .filter(booking => booking.status === bookingType || bookingType === "all")
    .map(booking => (
      <BookingListItem
        key={booking.id}
        handleClick={handleClick}
        selected={selectedBooking}
        {...booking} />
    ))
  return (
    <div>
      {bookingList.length > 0 ? bookingList : <strong>{props.emptyMessage}</strong>}
    </div>
  )
}