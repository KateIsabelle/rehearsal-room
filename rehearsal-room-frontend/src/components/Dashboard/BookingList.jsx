import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom components
import BookingListItem from './BookingListItem'

// Custom hooks
import useBookingManager from '../../hooks/useBookingManager'

export default function BookingList(props) {
  const { bookingType, userId, host } = props;
  const {
    bookings,
    selectedBooking,
    bookingHandlers,
    refreshBookings
  } = useBookingManager(host, userId);

  useEffect(() => {
    refreshBookings();
  }, [refreshBookings])

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType || bookingType === "all")
    .map(booking => (
      <BookingListItem
        key={booking.id}
        host={host}
        handlers={bookingHandlers}
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