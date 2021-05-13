import { Button } from '../Button/Button'
import useReadableTimes from '../../hooks/useReadableTimes'

export default function BookingListItem(props) {
  const { selected, host } = props
  const [
    date,
    start_time,
    end_time
  ] = useReadableTimes(props.start_time, props.end_time)

  const shortenedUsageDesc = (desc) => {
    if (desc.length > 40) {
      return `${desc.slice(0, 40).trim()}...`
    } else {
      return desc
    }
  }
  const shortDesc = shortenedUsageDesc(props.usage_description)

  return (
    <div onClick={() => props.handleClick(props.id)}>
    {/* If this component is not the currently-selected component,
        we show a shortened listing with no buttons. */}
    { !selected && host &&
      <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortDesc} |
      <strong> Time: </strong>{date} from {start_time} to {end_time}
      </>
    }
    { !selected && !host &&
      <>
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{shortDesc} |
      <strong> Time: </strong>{date} from {start_time} to {end_time}
      </>
    }
    { selected && host &&
      <>
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
    { selected && !host && <>
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{props.usage_description} |
      <strong> Time: </strong>{date} from {start_time} to {end_time}
      <Button label="Cancel"></Button>
      </>
    }
    </div>
  )
}
