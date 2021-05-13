import { Button } from '../Button/Button'
import useReadableTimes from '../../hooks/useReadableTimes'
import upcase from '../../helpers/upcase'
import axios from 'axios'

export default function BookingListItem(props) {
  const { selected, host, handlers } = props
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
    <div
      className={"booking-list-item " + props.status}
      onClick={() => handlers.select(props.id)}
    >
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
      <strong> Time: </strong>{date} from {start_time} to {end_time} |
      <strong> Status: </strong>{upcase(props.status)}
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
        <Button onClick={() => handlers.confirm(props.id)} label="Confirm"></Button>
        <Button onClick={() => handlers.reject(props.id)} label="Reject"></Button>
        </>
      }
      {props.status === "confirmed" &&
        <Button onClick={() => handlers.cancel(props.id)} label="Cancel"></Button>
      }
      </>
    }
    { selected && !host && <>
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{props.usage_description} |
      <strong> Time: </strong>{date} from {start_time} to {end_time} |
      <strong> Status: </strong>{upcase(props.status)}
      <Button
        onClick={() => handlers.cancel(props.id)}
        label={props.status === "rejected" ? "Delete" : "Cancel" }
      ></Button>
      </>
    }
    </div>
  )
}
