import { Button } from '../Button/Button'

export default function BookingListItem(props) {
  const shortenedUsageDesc = (desc) => {
    if (desc.length > 40) {
      return `${desc.slice(0, 40).trim()}...`
    } else {
      return desc
    }
  }

  const timestampToDate = (timestamp) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleDateString(undefined, options)
  }

  const timestampToTime = (timestamp) => {
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleTimeString()
  }

  const date = timestampToDate(props.start_time)
  const start_time = timestampToTime(props.start_time)
  const end_time = timestampToTime(props.end_time)

  return (
    <div onClick={() => props.handleClick(props.id)}>
    {/* If this component is not the currently-selected component,
        we show a shortened listing with no buttons. */}
    { props.selected !== props.id && <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortenedUsageDesc(props.usage_description)} |
      <strong> Time: </strong>{date} from {start_time} to {end_time}
      </>
    }
    { props.selected === props.id && <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{props.usage_description} |
      <strong> Time: </strong>{date} from {start_time} to {end_time}
      {props.status === "pending" &&
        <>
        <Button label="Confirm"></Button>
        <Button label="Reject"></Button>
        </>
      }
      {props.status === "confirmed" &&
        <Button label="Delete"></Button>
      }
      </>
    }
    </div>
  )
}
