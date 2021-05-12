import BookingListItem from './BookingListItem'

export default function BookingList(props) {
  const { bookings, bookingType } = props;

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType)
    .map(booking => (
      <BookingListItem {...booking} />
    ))
  return (
    <ul>
      {bookingList}
    </ul>
  )
}