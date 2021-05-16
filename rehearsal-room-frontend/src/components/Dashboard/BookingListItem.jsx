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

  const prevRentalMsg = props.used_before ?
    `${props.first_name} has rented this Space before.`
    :
    `This is ${props.first_name}'s first rental for this Space.`

  const sectionClassName = `booking-list-item-section ${selected && "selected"}`

  return (
    <div
      className={`booking-list-item ${selected && "selected"}`}
      onClick={() => handlers.select(props.id)}
    >
      <div className="booking-list-item-top">
        { host &&
          <div className={sectionClassName}>
            <h4 className="booking-list-item-section-header">From</h4>
            <p>{props.requester_name}</p>
          </div>
        }
        { !host &&
          <div className={sectionClassName}>
            <h4 className="booking-list-item-section-header">Status</h4>
            <p className={props.status}><strong>{upcase(props.status)}</strong></p>
          </div>
        }
          <div className={sectionClassName}>
            <h4 className="booking-list-item-section-header">Space</h4>
            <p>{props.space_name}</p>
          </div>
        <div className={sectionClassName}>
          <h4 className="booking-list-item-section-header">Usage Description</h4>
          <p>{selected ? props.usage_description : shortDesc}</p>
        </div>
        <div className={sectionClassName}>
          <h4 className="booking-list-item-section-header">Date</h4>
          <p>{date}</p>
          <p>{props.start_time} to {props.end_time}</p>
        </div>
      </div>
      { selected &&
      <div className="booking-list-item-expansion">
        {props.status === "pending" && host &&
          <>
          <p className="booking-list-item-previous-rental">
            <em>{prevRentalMsg}</em>
          </p>
          <Button primary="true" onClick={() => handlers.confirm(props.id)} label="Confirm"></Button>
          <Button danger="true" onClick={() => handlers.reject(props.id)} label="Reject"></Button>
          </>
        }
        {props.status === "confirmed" && host &&
          <Button danger="true" onClick={() => handlers.cancel(props.id)} label="Delete"></Button>
        }
        { !host &&
          <Button
            danger="true"
            onClick={() => handlers.cancel(props.id)}
            label={props.status === "rejected" ? "Delete" : "Cancel" }
          />
        }
      </div>
      }
    </div>
  )
}
