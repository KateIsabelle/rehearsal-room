export default function BookingListItem(props) {
  const shortenedUsageDesc = (desc) => {
    if (desc.length > 40) {
      return `${desc.slice(0, 40).trim()}...`
    } else {
      return desc
    }
  }
  return (
    <li>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortenedUsageDesc(props.usage_description)} |
      <strong> Time: </strong>{props.start_time} to {props.end_time}
    </li>
  )
}
