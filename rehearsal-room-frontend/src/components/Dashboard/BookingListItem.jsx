import { Button } from '../Button/Button'
import useFormattedDate from '../../hooks/useFormattedDate'
import upcase from '../../helpers/upcase'
import axios from 'axios'

export default function BookingListItem(props) {
  const { selected, host, handlers } = props
  // Custom hook, probably made obsolete by schema changes
  const [ date ] = useFormattedDate(props.date)

  const shortenedUsageDesc = (desc) => {
    if (desc.length > 40) {
      return `${desc.slice(0, 40).trim()}...`
    } else {
      return desc
    }
  }
  const shortDesc = shortenedUsageDesc(props.usage_description)

  const unselectedBooking = (
    <>
      { host &&
        <div className="booking-list-item-section">
          <h4 className="booking-list-item-section-header">From</h4>
          <p></p>
        </div>
      }
      { !host &&
        <div className="booking-list-item-section">
          <h4 className="booking-list-item-section-header">Status</h4>
          <p><strong>{upcase(props.status)}</strong></p>
        </div>
      }
        <div className="booking-list-item-section">
          <h4 className="booking-list-item-section-header">Space</h4>
          <p>{props.space_name}</p>
        </div>
      <div className="booking-list-item-section">
        <h4 className="booking-list-item-section-header">Usage Description</h4>
        <p>{shortDesc}</p>
      </div>
      <div className="booking-list-item-section">
        <h4 className="booking-list-item-section-header">Date</h4>
        <p>{date}</p>
        <p>{props.start_time} to {props.end_time}</p>
      </div>
    </>
  )

  return (
    <div
      className={"booking-list-item " + props.status}
      onClick={() => handlers.select(props.id)}
    >
    { !selected &&
      unselectedBooking
    }
    {/* If this component is not the currently-selected component,
        we show a shortened listing with no buttons. */}
    { selected && host &&
      <>
      <strong> From: </strong>{props.requester_name} |
      <strong> Space: </strong>{props.space_name} |
      <strong> Description: </strong>{props.usage_description} |
      <strong> Time: </strong>{date} from {props.start_time} to {props.end_time}
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
      <strong> Time: </strong>{date} from {props.start_time} to {props.end_time} |
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
