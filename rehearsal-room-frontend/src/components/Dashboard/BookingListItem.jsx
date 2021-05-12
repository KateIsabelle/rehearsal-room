import { Button } from '../Button/Button'

export default function BookingListItem(props) {
  const shortenedUsageDesc = (desc) => {
    if (desc.length > 40) {
      return `${desc.slice(0, 40).trim()}...`
    } else {
      return desc
    }
  }
  return (
    <div onclick={props.onClick}>
    { props.selected !== props.id && <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortenedUsageDesc(props.usage_description)} |
      <strong> Time: </strong>{props.start_time} to {props.end_time}
      </>
    }
    { props.selected === props.id && <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortenedUsageDesc(props.usage_description)} |
      <strong> Time: </strong>{props.start_time} to {props.end_time}
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
